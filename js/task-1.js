const listItems = document.querySelectorAll(".options-list");
listItems.forEach((list) => {
  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = item.textContent;
    item.textContent = "";
    item.appendChild(inputElement);
  });
});

const itemsList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach((list) => {
  const categoryName = list.querySelector("h2").textContent;
  const elementsCount = list.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
