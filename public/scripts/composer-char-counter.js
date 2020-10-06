$(document).ready(function () {
  $('#tweet-text').on("input",function (evt) {
    const charsLeft = 140-$(this).val().length;
    const counter = $(this).parent().find(".counter");
    counter.text(charsLeft);
    if (charsLeft < 0) {
      counter.css("color","tomato");
    } else {
      counter.css("color","#545149");
    }
  });
});