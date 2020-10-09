# Tweeter Project

## Summary
Tweeter is a simple, single-page Twitter "clone" to practice front-end development: specifically HTML, CSS, jQuery, & AJAX.

## Functionality:
- Post and auto-refresh "tweets" upon submission without reloading the page, using Ajax
- Live updating of character count as tweet is written, using jQuery
- Error messages for invalid tweet submissions, using jQuery
- Dynamic styling using CSS, including media-query for screen size responsiveness & on-hover effects

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser 1.15.x or above
- Chance 1.0.x or above
- Font Awesome 4.7.x or above
- Moment 2.29.1 or above

## Screenshots

The app:
!["The app"](https://github.com/wdportman/tweeter/blob/master/docs/App.png)

Characters get counted in real-time as the user types a tweet:
!["Character counter"](https://github.com/wdportman/tweeter/blob/master/docs/Character%20counter.png)

Tweets get added to the feed as they are submitted, without a page refresh...thanks to Ajax!
!["Update tweet feed"](https://github.com/wdportman/tweeter/blob/master/docs/Refresh.png)

When you hover over a tweet, it displays some additional information and different styling:
!["On hover"](https://github.com/wdportman/tweeter/blob/master/docs/On%20hover.png)

Want to submit a tweet with >140 characters? No chance!
![">140 characters error"](https://github.com/wdportman/tweeter/blob/master/docs/Error.png)

Ditto for submitting an empty tweet:
!["Empty tweet error"](https://github.com/wdportman/tweeter/blob/master/docs/Error2.png)

Here is the mobile-friendly version of the app:
!["Mobile-friendly"](https://github.com/wdportman/tweeter/blob/master/docs/Mobile-friendly.png)