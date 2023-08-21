const cards = document.querySelectorAll(".product");
const cart = document.querySelector(".cart__products");
const indexCollection = [];

cards.forEach((card) => {
  const addBtn = card.querySelector(".product__add");
  const increaseBtn = card.querySelector(".product__quantity-control_inc");
  const decreaseBtn = card.querySelector(".product__quantity-control_dec");
  const qty = card.querySelector(".product__quantity-value");
  let qtyValue = +qty.textContent;
  const picture = card.querySelector(".product__image");

  increaseBtn.addEventListener("click", () => {
    qtyValue += 1;
    qty.textContent = qtyValue;
    console.log(qty);
  });

  decreaseBtn.addEventListener("click", () => {
    if (qtyValue > 1) {
      qtyValue -= 1;
      qty.textContent = qtyValue;
    } else {
      return;
    }
  });

  addBtn.addEventListener("click", () => {
    const productId = card.getAttribute("data-id");

    if (!indexCollection.includes(+productId)) {
      const product = document.createElement("div");
      product.className = "cart__product";
      product.dataset.id = card.getAttribute("data-id");
      indexCollection.push(+product.getAttribute("data-id"));
      console.log(indexCollection);

      const productImg = document.createElement("img");
      productImg.className = "cart__product-image";
      productImg.src = picture.src;
      const productCount = document.createElement("div");
      productCount.className = "cart__product-count";
      productCount.textContent = qty.textContent;

      product.appendChild(productImg);
      product.appendChild(productCount);
      cart.appendChild(product);

      qtyValue = 1;
      qty.textContent = qtyValue;
    } else {
      const сartItem = cart.querySelector(
        `.cart__product[data-id="${productId}"]`
      );
      const existingProductCount = сartItem.querySelector(
        ".cart__product-count"
      );
      console.log(qtyValue);
      const newCount = +existingProductCount.textContent + qtyValue;
      existingProductCount.textContent = newCount;

      qtyValue = 1;
      qty.textContent = qtyValue;
    }
  });
});
