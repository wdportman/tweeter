/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Function to make user-submitted content safe -- protect from cross-site scripting:
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

 const createTweetElement = function(tweet) {
  const userSubmittedContent = escape(tweet.content.text);
  const tweetHTML =
    `<article class="tweet">
        <header>
          <div class="picAndName">
            <img src=${tweet.user.avatars}>
            <span class="name">${tweet.user.name}</span>
          </div>
          <span class="username">${tweet.user.handle}</span>
        </header>
        <p class="tweetBody">${userSubmittedContent}</p>
        <footer>
          <div class="content">
            <span class="timestamp">${moment(tweet.created_at).fromNow()}</span>
            <div class="icons">
              <i class="fas fa-flag" class="icon"></i>
              <i class="fas fa-retweet"class="icon"></i>
              <i class="fas fa-heart"class="icon"></i>
            </div>
          </div>
        </footer>
      </article>`;
  return tweetHTML;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

const loadOriginalTweets = function() {
  $.getJSON("/tweets")
    .then((tweets => {
      renderTweets(tweets);
    }))
}

const loadNewTweet = function() {
  $.getJSON("/tweets")
    .then((tweets => {
      const newTweet = createTweetElement(tweets[tweets.length-1]);
      $('#tweets-container').prepend(newTweet);
    }))
}


$(() => { //this is shorthand for "$(document).ready(function () {"; it means the function won't be invoked until the page is loaded

  const $form = $('form');

  $form.on('submit', function (event) {
    event.preventDefault();
    $("p.error").hide();
    let input = $form.find("#tweet-input-text").val();
    if (input.length > 140) {
      $("p.error").text("Please enter a shorter tweet!");
      $("p.error").slideDown(0);
    } else if (!input) {
      $("p.error").text("Please enter a tweet!");
      $("p.error").slideDown(0);
    } else {
      const data = $form.serialize();
      $.post("/tweets", data)
        .then(() => {
          loadNewTweet();
          $form.find("#tweet-input-text").val(""); //reset textarea after submission
          $form.parent().find(".counter").text(140); //reset character count to 140 after submission
        });
    }
  });
})

loadOriginalTweets();