// Name: Anjy Alassaf
// File: main.js
// Date: March 20,2026
// Description: Dynamic image gallery functionality


// VARIABLES
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


// ARRAY OF OBJECTS
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];
 

//const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
const baseURL = "./images/"

// LOOP STARTING AT 1

 for (let i = 0; i < images.length; i++) {
 const newImage = document.createElement("img");

 
  newImage.src = baseURL + images[i].filename;
  newImage.alt = images[i]["alt"];
 
 
  // make focusable
  
  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);

  // click event
  newImage.addEventListener("click", updateDisplayedImage);

   // keyboard (extra but strong)
  newImage.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// FUNCTION
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// BUTTON LOGIC (IMPORTANT PART)
btn.addEventListener("click", () => {
   const btnClass = btn.getAttribute("class");
   
  if (btnClass == "dark") {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
     btn.setAttribute("class", "light");
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.setAttribute("class", "dark");
 }
});
