function cardClick(target) {
  const selectedItems = document.getElementById("selected");
  //   console.log(target.parentNode.childNodes[1]);

  const itemName = target.querySelector(".card-title").innerText;

  const li = document.createElement("li");
  li.innerText = itemName;
  console.log(li);
  selectedItems.appendChild(li);
}

// const itemName =
//     target.parentNode.childNodes[1].childNodes[3].firstChild.nextSibling
//       .nextSibling.nextSibling.innerText;
