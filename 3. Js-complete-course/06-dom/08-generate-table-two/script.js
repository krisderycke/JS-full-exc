/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
(function() {
  let target = document.getElementById("target");
  let newTable = document.createElement("table");

  for (var i = 1; i <= 10; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 1; j <= 10; j++) {
      var cell = document.createElement("td");
      // Je voert hier al uw vermenigvuldiging uit, door gewoon de cellen met elkaar te vermenigvuldigen
      var cellText = document.createTextNode(" " + i * j);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    newTable.appendChild(row);
    target.appendChild(newTable);
  }

  target.appendChild(newTable);
})();
