/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let img = document.querySelector("img");
  console.log(img);
  let original = document.querySelector("img").getAttribute("src");
  let wink = document.querySelector("img").getAttribute("data-hover");

  // Hover effect on image
  img.addEventListener("mouseover", function(hover) {
    img.src = wink;
  });
  // Hover out, for original pic,
  img.addEventListener("mouseout", event => {
    img.src = original;
  });
})();
