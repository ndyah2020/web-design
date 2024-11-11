
const render = () => {
    const productListContainer = document.querySelector(".main-left__product");
    productListContainer.innerHTML = "";
  
    currentLogin.cartItems.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product"); // Add the "product" class

        productDiv.innerHTML = `
        <img
        class="image"
        src="${product.img}"
        alt=""
    />
    <div class="info-product">
        <div class="info-product__title">
            <h3 class="heading">
                ${product.name}
            </h3>
            <div class="price">$${product.price}</div>
        </div>
        <div class="info-product__action">
            <div class="amount-aciton">
                <button class="up-and-down btn-down" onclick = "down(${product.id})">
                    -
                </button>
                <div class="amount" id="amount-${product.id}">${product.quantity}</div>
                <button class="up-and-down btn-up" onclick = "up(${product.id})">
                    +
                </button>
            </div>
            <div class="delete-action" onclick="deleteProduct(${product.id})">
                    <img
                        src="./asset/img/Delete.svg"
                        alt="Delete"/>
                <div class="title">Delete</div>
            </div>
        </div>
    </div>
        `;

        productListContainer.appendChild(productDiv);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    render()
})

