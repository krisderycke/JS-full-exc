/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let btn = document.getElementById("run");
  btn.addEventListener("click", click);

  function click() {
    // get the birth date of the visitor
    let birthDay = document.getElementById("dob-day").value;
    let birthMonth = document.getElementById("dob-month").value;
    let birthYear = document.getElementById("dob-year").value;

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    console.log(day, month, year);

    let age = year - birthYear;
    console.log(age, age - 1);
    if (month < birthMonth) {
      alert(`You are ${age - 1} years old!`);
    } else {
      alert("You are " + age + " years old!");
    }
  }
  // your code here
})();
