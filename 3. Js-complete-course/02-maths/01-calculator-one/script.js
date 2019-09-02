/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let opOne = document.getElementById("op-one");
  let opTwo = document.getElementById("op-two");

  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", function() {
    // perform an addition
    let sum = parseInt(opOne.value) + parseInt(opTwo.value);
    alert(`the sum is= ${sum}`);
  });
  document.getElementById("substraction").addEventListener("click", function() {
    // perform an substraction
    let sub = parseInt(opOne.value) - parseInt(opTwo.value);
    alert(`the substraction is ${sub}`);
  });

  document
    .getElementById("multiplication")
    .addEventListener("click", function() {
      // perform an multiplication

      let multi = parseInt(opOne.value) * parseInt(opTwo.value);
      alert(`multiplication is ${multi}`);
    });

  document.getElementById("division").addEventListener("click", function() {
    // perform an division
    let divi = parseInt(opOne.value) / parseInt(opTwo.value);
    alert(`division is ${divi}`);
  });
})();
