$(document).ready(function () {
  $('#tweet-text').on("input",function (evt) {
    const textArea = this;
    const charsLeft = 140-textArea.value.length;
    const counter = $(".counter");
    counter.text(charsLeft);
    if (charsLeft < 0) {
      counter.css("color","tomato");
    } else {
      counter.css("color","#545149");
    }
  });
});