// Name: Anjy Alassaf
// File: main.js
// Date: March 18,2026
// Description: Generates random silly stories with customization



// 1. VARIABLES
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// 2. ARRAYS
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// RANDOM FUNCTION
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 3. STORY FUNCTION
function returnRandomStoryString() {
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Create the base story string
  let storyText = `It was 94 Fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
  return storyText;
}

  // 4. EVENT LISTENER
  generateBtn.addEventListener("click", result);


  // 5. MAIN FUNCTION
  function result() {
  let newStory = returnRandomStoryString();

   // Custom name
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  // UK Conversions
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade";

    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 Fahrenheit", temperature);
  }

  // Output
  story.textContent = newStory;
  story.style.visibility = "visible";
}