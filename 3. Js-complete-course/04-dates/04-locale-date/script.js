/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  var day = d.getDay();
  var hour = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var sec = d.getSeconds();

  console.log(
    "year" +
      " " +
      "month" +
      " " +
      "date" +
      " " +
      "day" +
      " " +
      "hour" +
      " " +
      "min" +
      " " +
      "sec" +
      "\n" +
      year +
      " " +
      month +
      " " +
      date +
      " " +
      day +
      " " +
      hour +
      " " +
      min +
      " " +
      sec
  );

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var weekDay = "";
  var fullMonth = "";

  weekDay = days[day];
  fullMonth = months[month];
  console.log(weekDay + " " + fullMonth);

  document.getElementById(
    "target"
  ).innerHTML = `${weekDay} ${date} ${fullMonth} ${year} ; ${hour}Hr ${min}`;
})();
