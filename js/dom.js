let total = 0;

function cardClick(target) {
  const selectedItems = document.getElementById("selected");
  //   console.log(target.parentNode.childNodes[1]);

  const itemName = target.querySelector(".card-title").innerText;

  const li = document.createElement("li");
  li.innerText = itemName;

  selectedItems.appendChild(li);

  // const totalPrice = document.getElementById("total");
  // console.log(totalPrice);
  const priceSpan = target.querySelector(".card-actions span").innerText;

  total = parseFloat(total) + parseFloat(priceSpan);
  document.getElementById("total").innerText = total;

  document.getElementById("applyBtn").addEventListener("click", function () {
    const couponField = document.getElementById("couponId").value;
    // console.log(couponField);

    if (couponField === "SELL200") {
      discount = total * 0.2;
      totalPrice = total - discount;
      console.log(totalPrice);
    } else {
      console.log(20);
    }
  });
}

// const itemName =
//     target.parentNode.childNodes[1].childNodes[3].firstChild.nextSibling
//       .nextSibling.nextSibling.innerText;
