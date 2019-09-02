/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  console.log(hours, mins);
  let input = document.getElementById("target");

  if (hours <= 17 && mins <= 30) {
    input.innerHTML = "Helleeeuw";
  } else {
    input.innerHTML = "good evining";
  }
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
})();
