/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let d = new Date();
  let hours = d.getHours();

  console.log(hours);

  input = document.getElementById("target");
  if (hours < 18) {
    input.innerHTML = "Hello";
  } else {
    input.innerHTML = "goodEvening";
  }
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
})();
