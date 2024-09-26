// Step 1: Remove the <main> element with id 'main' from the DOM
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove(); // This will ensure the <main> element is removed
}

// Step 2: Create a new h1 element and assign it to the newHeader variable
const newHeader = document.createElement("h1");

// Step 3: Set the id of newHeader to 'victory'
newHeader.id = "victory";

// Step 4: Set the text content of newHeader to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Step 5: Append newHeader to the body or any other appropriate element
document.body.append(newHeader);

// Additional steps if you want to create a <div> and an unordered list
const element = document.createElement("div");
document.body.append(element);

// Create an unordered list and populate it with list items
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the unordered list to the div
element.append(ul);

// Remove the second list item from the unordered list
const secondChild = ul.querySelector("li:nth-child(2)");
if (secondChild) {
  ul.removeChild(secondChild); // Remove the second <li>
}

// Step 6: Remove the entire unordered list if needed
ul.remove(); // This removes the <ul> completely
