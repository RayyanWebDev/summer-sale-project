let total = 0;

function cardClick(target) {
  const selectedItems = document.getElementById("selected");

  const itemName = target.querySelector(".card-title").innerText;

  const li = document.createElement("li");
  li.innerText = itemName;

  selectedItems.appendChild(li);

  const priceSpent = target.querySelector(".card-actions span").innerText;

  total = parseFloat(total) + parseFloat(priceSpent);
  document.getElementById("total").innerText = total;

  if (total > 0) {
    const purchaseBtn = document.getElementById("makePurchase");
    purchaseBtn.removeAttribute("disabled");
  }
  if (total >= 200) {
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");
  }

  document.getElementById("applyBtn").addEventListener("click", function () {
    const couponField = document.getElementById("couponId").value;

    if (couponField === "SELL200") {
      discount = total * 0.2;
      totalPrice = total - discount;

      document.getElementById("discount").innerText = discount;
      document.getElementById("totalPrice").innerText = totalPrice;
    } else {
      console.log("Please! Put a Valid CODE");
    }
  });
}
