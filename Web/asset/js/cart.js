
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
            <div class="price">Giá: ${product.price}</div><br>
            <div class="cpu">CPU: ${product.cpu}</div>
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
const renderPrice = () => {
    const totalQuantity = document.querySelector(".total-quantity");
    const price = document.querySelector(".price-checkout");
    const priceShip = document.querySelector(".price-ship");
    const totalPrice = document.querySelector(".total-price-full");

    let sumQuantity = 0;
    let sumPrice = 0;
    let shipTotal = 0;
    currentLogin.cartItems.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
        shipTotal += 50000 * item.quantity;
    })
    totalQuantity.textContent = sumQuantity;
    price.textContent = sumPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    priceShip.textContent = shipTotal.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    let totalPriceFull = sumPrice + shipTotal;
    totalPrice.textContent = totalPriceFull.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

document.addEventListener('DOMContentLoaded', () => {
    render()
    renderPrice()
})

