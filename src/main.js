let stylenode = document.createElement('link');
stylenode.rel = "stylesheet";
stylenode.type = "text/css";
stylenode.href = "./darkmode.css";

document.head.appendChild(stylenode);

// --- Replacing images  with Latex ---
let images = document.getElementsByTagName('img');
let to_remove = [];

for (img of images){
  if (img.alt[0] != "{") continue;  // skip images which are not mathematical formulae

  img.insertAdjacentHTML("afterend", "<span>\\(" + img.alt + "\\)</span>"); 
  to_remove.push(img);
}
for (elem of to_remove) elem.remove();

// Typesetting is automatically handled by tex-chtml.js (MathJax)
// ---/---