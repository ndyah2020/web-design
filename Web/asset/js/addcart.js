

const addCart = () => {
    const btnAddCart = document.querySelector('.btn-add');
    const loginModal = document.querySelector('.loginBackground');
    const showLogin = () => loginModal.classList.add('open');
    
    const addToCart = (productConfig) => {
        const productIndex = currentLogin.cartItems.findIndex(item => item.id === productConfig.id);

        productIndex === -1
            ?currentLogin.cartItems.push(productConfig)

            :currentLogin.cartItems[productIndex].quantity++;

        saveItemInToLocalStorage('currentLogin',currentLogin)
    };

    const updateUserData = () => {
        console.log(currentLogin)
        const userIndex = DataUsers.findIndex(user => user.id === currentLogin.id);

        if (userIndex !== -1) {
            DataUsers[userIndex] = currentLogin;
            saveItemInToLocalStorage('DataUsers', DataUsers);
        }
    };

    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {
            if (currentLogin.isAdmin){
                alert('Tài khoản này không thể thêm sản phẩm')
                return;
            }
            if (!currentLogin) {
                alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
                showLogin();
                return;
            }

            if (!configOfTheSelectedProduct) {
                alert('Vui lòng chọn cấu hình sản phẩm');
            } else {
                addToCart(configOfTheSelectedProduct);
                updateUserData();
                renderCartUI();
            }
        });
    }
};
// HIển thị hình anh thêm Cart
const renderCartUI = () => {
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    if (!currentLogin) {
        return;
    }
    const userIndex = DataUsers.findIndex((user) => user.id === currentLogin.id);

    if (DataUsers[userIndex].cartItems.length > 0) {
        renderImageCart(DataUsers[userIndex].cartItems);
        renderNumberCart(DataUsers[userIndex].cartItems);
    } else {
        noProduct.classList.remove("hidden");
        haveProduct.classList.add("hidden");
    }
}
// ============ render UI Cart về hình ảnh ============
const renderImageCart = (cartItems) => {
    const cartItemsList = document.querySelector(".row-2");
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    const listPreview = document.querySelector(".list-preview");
    cartItemsList.innerHTML = "";

    let itemCount = 1;

    cartItems.forEach((item) => {
        if (itemCount <= 3 && item.check == 0) {
            const cartItem = document.createElement("div");
            cartItem.className = "block-each-preview";
            cartItem.innerHTML = `
                <img src="${item.img}" alt="" class="img-preview">
                <h2 class="title">Tên Sản Phẩm: ${item.name}</h2>
                  <span class="cpu">CPU: ${item.cpu}</span><br>
                <span class="price">Giá: ${(item.price * item.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span><br>
                <span class="quantity">Số Lượng:  ${item.quantity}</span>
            `;
            cartItemsList.appendChild(cartItem);
            itemCount++;
            noProduct.classList.add("hidden");
            haveProduct.classList.remove("hidden");
            listPreview.style.width = "500px";
            listPreview.style.top = "67px";
            listPreview.style.left = "-372px";
        }
    });
}

// ============ render UI Cart về số liệu =============
const renderNumberCart = (cartItems) => {
    const cartQuantity = document.querySelector(".you-have"); // Số lượng sản phẩm trong giỏ hàng
    const cartTotal = document.querySelector("#price-total"); // Tổng giá trị cuối cùng
    const subtotal = document.querySelector(".price-subtotal"); // Tổng giá trị trước khi tính phí vận chuyển
    const shipping = document.querySelector(".price-shipping"); // Phí vận chuyển
    const feeTotal = document.querySelector(".price-buy-cart"); // Tổng giá trị cuối cùng trong giỏ hàng

    let totalQuantity = 0; // Tổng số lượng tất cả sản phẩm
    let totalPrice = 0; // Tổng giá tiền tất cả sản phẩm
    let shippingPrice = 50000; // Giá vận chuyển cho mỗi sản phẩm

    cartItems.forEach((item) => {
        if (item.check == 0) {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        }
    });
    cartQuantity.textContent = `You have ${totalQuantity} item`;
    subtotal.textContent = `${totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
    shipping.textContent = `${(shippingPrice * totalQuantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
    cartTotal.textContent = `${(
        totalPrice +
        shippingPrice * totalQuantity
    ).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
    feeTotal.textContent = cartTotal.textContent;
}