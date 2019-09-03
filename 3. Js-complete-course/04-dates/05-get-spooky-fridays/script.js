/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  document.getElementById("run").addEventListener("click", function() {
    let year = document.getElementById("year").value;
    //console.log(year)

    let d = new Date();

    let months = [
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

    let specialMonths = [];
    d.setFullYear(year, 0, 13);
    // check whether 13th of each month is friday
    for (let i = 0; i <= months.length; i++) {
      d.setMonth(i);
      if (d.getDay() === 5) {
        specialMonths.push(months[i]);
      }
    }
    // display months which have a Friday 13th
    console.log(specialMonths);
    alert(specialMonths);
  });

  // your code here
})();
