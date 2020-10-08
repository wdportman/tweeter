/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  const tweetHTML =
    `<article class="tweet">
        <header>
          <div class="picAndName">
            <img src=${tweet.user.avatars}>
            <span class="name">${tweet.user.name}</span>
          </div>
          <span class="username">${tweet.user.handle}</span>
        </header>
        <p class="tweetBody">${tweet.content.text}</p>
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

const loadTweets = function() {
  $.getJSON("/tweets")
    .then((tweets => {
      renderTweets(tweets);
    }))
}


$(() => { //this is shorthand for "$(document).ready(function () {"; it means the function won't be invoked until the page is loaded

  loadTweets();

  const $form = $('form');
  $form.on('submit', function (event) {
    event.preventDefault();
    let input = $form.find("#tweet-input-text").val();
    if (input.length > 140) {
      alert("Please enter a shorter tweet!");
    } else if (!input) {
      alert("Please enter a tweet!");
    } else {
      const data = $form.serialize();
      $.post("/tweets", data);
      loadTweets();
    }
  });
})