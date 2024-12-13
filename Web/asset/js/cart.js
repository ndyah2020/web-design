

const render = () => {
    const productListContainer = document.querySelector(".main-left__product");
    productListContainer.innerHTML = "";
  
    currentLogin.cartItems.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product"); 

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
                    <div class="price">Đơn giá: ${product.price}</div>
                    <div class="price">Tổng giá: ${product.price * product.quantity}</div>
                    <div class="cpu">CPU: ${product.cpu}</div>
                </div>
                
                <div class="info-product__action">
                    <div class="amount-aciton">
                        <button class="up-and-down btn-down" onclick = "down('${product.id}')">
                            -
                        </button>
                        <div class="amount" id="amount-${product.id}">${product.quantity}</div>
                        <button class="up-and-down btn-up" onclick = "up('${product.id}')">
                            +
                        </button>
                    </div>
                    <div class="delete-action" onclick = "deleteProductInCart('${product.id}')">
                        <img
                            src="./asset/images/Delete.svg"
                            alt="Delete"/>
                        <div class="title">Delete</div>
                    </div>
                </div>
            </div>
        `;
        productListContainer.appendChild(productDiv);
    });
    renderPrice()
}
const UserIndex = () => DataUsers.findIndex(user => user.id === currentLogin.id);

const updateUserData = () => {
    const userIndex = UserIndex();

    if (userIndex !== -1) {
        DataUsers[userIndex] = currentLogin;
        saveItemInToLocalStorage('DataUsers', DataUsers);
    }
};

const deleteProductInCart = (idProduct) => {
    const cartCurrentIndex =  currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)
    currentLogin.cartItems.splice(cartCurrentIndex,1)
    saveItemInToLocalStorage('currentLogin',currentLogin)

    updateUserData()
    render()
}

const up = (idProduct) => {
     const cartCurrentIndex =  currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)
    
     if(cartCurrentIndex !== -1){
        currentLogin.cartItems[cartCurrentIndex].quantity++;
     }
     saveItemInToLocalStorage('currentLogin',currentLogin);
     updateUserData();
     render();
}

const down = (idProduct) => {
    const cartCurrentIndex =  currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)
    if(currentLogin.cartItems[cartCurrentIndex].quantity <= 1)
    {
        deleteProductInCart(idProduct)
    }else{
        if(cartCurrentIndex !== -1){
            currentLogin.cartItems[cartCurrentIndex].quantity--
        }
         saveItemInToLocalStorage('currentLogin',currentLogin);
         updateUserData();
         render();
    }
   
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

const checkOut = () =>{
    const checkOutBtn = document.querySelector('.action-checkout')
    checkOutBtn.onclick = function(){
        updateListOrders(currentLogin)
    }
}

let listOrders = getItemFromLocalStorage('listOrders') || [];

const setId = () => {
    let maxId = 0;
    listOrders.forEach(order => {
        if (order.id > maxId) maxId = order.id;
    });
    return maxId + 1; 
};

const updateListOrders = (data) => {
    const listOrdersObject = {
        id: setId(), 
        userId: data.id,
        email: data.email,
        nameCustomer: data.name,
        order: data.cartItems,
        check: 0,
        time: new Date().toLocaleString("en-US", {
            timeZone: "Asia/Ho_Chi_Minh",
        }),
    };

    listOrders.push(listOrdersObject); 

    saveItemInToLocalStorage('listOrders', listOrders);
    afterUpdate();
};

const afterUpdate = () => {
    alert("Thank you!")
    currentLogin.cartItems = [];
    saveItemInToLocalStorage('currentLogin',currentLogin)
    updateUserData()
    window.location = "./index.html"
}


document.addEventListener('DOMContentLoaded', () => {
    render()
    checkOut()
})

