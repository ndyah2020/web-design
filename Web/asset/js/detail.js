
//Lấy danh sách sản phẩm từ localStore

const getListProduct = () => {

    const listProducts = JSON.parse(localStorage.getItem('listProducts'))
    if (!listProducts) {
        console.log("Không tìm thấy `listProducts` trong `localStorage`");
    }
    return listProducts;
}

//lấy thông tin sản phẩm từ id 
const getIdtoParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'))
}
// Hiển thị chi tiết sản phẩm 
const showProductDetail = () => {
    const idProduct = getIdtoParams()
    const productImg = document.querySelector('.product-image')
    const productName = document.querySelector('.name-laptop')
    const productRating = document.querySelector('.product-rating')
    const producConfig = document.querySelector('.select-config')
    const productPrice = document.querySelector('.product-price')
    const descriptionName = document.querySelector('.descriptionName')
    const descriptionCpu = document.querySelector('.descriptionCpu')
    const product = getListProduct().find(product => idProduct === product.id);

    productImg.src = product.img
    productName.textContent = product.name
    productRating.textContent = `( ${product.rate} )`

    product.model.map(config => {
        producConfig.innerHTML += `<button class="btn-config">${config.cpu}</button>`
        
    })
    productPrice.textContent = product.model[0].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    descriptionName.textContent = product.name
    descriptionCpu.textContent = `Với bộ xử lý ${product.model[0].cpu} mới nhất`
    selectConfig(product)
}


let configOfTheSelectedProduct = null

const selectConfig = (product) => {
    const buttonConfig = document.querySelectorAll('.btn-config')
    const productPrice = document.querySelector('.product-price')


    buttonConfig.forEach(function(button, index) {
        button.addEventListener('click', function(event){

            buttonConfig.forEach(btn => btn.classList.remove('active'))
            button.classList.add('active')

            productPrice.textContent = product.model[index].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;

            event.stopPropagation()

            configOfTheSelectedProduct = {
                id:`LapTop-${product.id}-${product.model[index].cpu}`,
                name: product.name,
                price: product.model[index].price,
                cpu : product.model[index].cpu,
                image: product.image,
                type: product.type,
                quantity: 1,
                check: 0,
                time: new Date().toLocaleString("en-US", {
                    timeZone: "Asia/Ho_Chi_Minh",
                }),
            }
        })
    })
}


const addCard = () => {
    const btnAddCard = document.querySelector('.btn-add');
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

    if (btnAddCard) {
        btnAddCard.addEventListener('click', () => {
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
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    showProductDetail()
    addCard()
})