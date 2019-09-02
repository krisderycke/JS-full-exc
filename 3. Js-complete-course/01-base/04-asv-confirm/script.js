/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
window.addEventListener("load", prompty);
function prompty() {
  let age = prompt("whats your age again?");
  let gender = prompt("are you male or female?");
  let city = prompt("what city do you live in?");

  let answer = confirm(
    `You are ${age} old, you are ${gender} and you live in ${city} \n is that correct?`
  );
  if (answer == false) {
    prompty();
  }
}
