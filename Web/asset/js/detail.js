
//Lấy danh sách sản phẩm từ localStore
var indexModel = 0;

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

const selectConfig = (product) => {
    const buttonConfig = document.querySelectorAll('.btn-config')
    const productPrice = document.querySelector('.product-price')


    buttonConfig.forEach(function(button, index) {
        button.addEventListener('click', function(event){

            buttonConfig.forEach(btn => btn.classList.remove('active'))
            button.classList.add('active')

            productPrice.textContent = product.model[index].price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;

            event.stopPropagation()
            console.log(this.textContent)
            console.log(product.model[index].price)
        })
    })

}

document.addEventListener('DOMContentLoaded', () => {
    showProductDetail()
})