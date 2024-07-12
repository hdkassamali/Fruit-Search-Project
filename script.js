// Query selectors for input and suggestins list
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to search fruits based on input value
function search(str) {
  return (results = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(str)
  ));
}

// Event handler for input keyup event
function searchHandler(e) {
  const inputVal = e.target.value.toLowerCase();
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

// Function to show suggestions drop-down
function showSuggestions(results, inputVal) {
  clearSuggestions();

  results.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = highlightMatch(item, inputVal);
    li.addEventListener("mouseover", highlightSuggestion);
    li.addEventListener("mouseout", removeHighlight);
    li.addEventListener("click", useSuggestion);
    suggestions.appendChild(li);
  });
}

// Function to highlight matching part of suggestion
function highlightMatch(item, inputVal) {
  const index = item.toLowerCase().indexOf(inputVal);
  if (index !== -1) {
    return (
      item.slice(0, index) +
      "<strong>" +
      item.slice(index, index + inputVal.length) +
      "</strong>" +
      item.slice(index + inputVal.length)
    );
  }
  return item;
}

// Function to clear existing suggestions
function clearSuggestions() {
  suggestions.innerHTML = "";
}

// Function to use selected suggestion
function useSuggestion(e) {
  input.value = e.target.textContent;
  clearSuggestions();
}

// Function to highlight suggestion on mouseover
function highlightSuggestion(e) {
  e.target.closest("li").style.backgroundColor = "#cc8400";
}

// Function to remove highlight from suggestion on mouseout
function removeHighlight(e) {
  e.target.closest("li").style.backgroundColor = "";
}

// Event listener for input keyup
input.addEventListener("keyup", searchHandler);
