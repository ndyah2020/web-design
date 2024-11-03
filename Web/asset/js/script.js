// khởi tạo list sản phẩm
let listProducts = 
    localStorage.getItem("listProducts") ? JSON.parse(localStorage.getItem("listProducts")) 
    : [
        {
            id: 1,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 2,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 3,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 4,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 5,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 6,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 7,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 8,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 9,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 10,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 11,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 12,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 13,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 14,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 15,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 16,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 17,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
        {
            id: 18,
            name: "Acer nitro 5",
            price: 49000000,
            img: "./asset/images/Product_Gaming/Acer/group_509_7__1.webp",
            rate: 5.0,
            brand: "Acer",
            type: "Gaming",
            cpu: [

            ]
        },
    ]

// lọc sản phẩm theo hãng
let acerProducts = [],
    asusProducts = [],
    lenovoProducts = [],
    msiProducts = [],
    dellProducts = [];

function fillProducts() {
    listProducts.forEach(function(product) {
        if (product.brand === "Acer") {
            acerProducts.push(product);
        }
        else if (product.brand === "Asus") {
            asusProducts.push(product);
        }
        else if (product.brand === "Lenovo") {
            lenovoProducts.push(product);
        }
        else if (product.brand === "MSI") {
            msiProducts.push(product);
        }
        else if (product.brand === "Dell") {
            dellProducts.push(product);
        }
    })
}

fillProducts();

// phân trang
var currentPage = 1,
    perPage = 8,
    totalPage = 0;

function renderProduct(products) {
    var productList = document.querySelector(".list-show-product");
    if (productList) {
        productList.innerHTML = "";

        products.forEach(function(product) {
            var productSection = document.createElement("div");
            productSection.classList.add("cart");
            var formattedPrice = product.price.toLocaleString("vi-VN") + "đ";

            productSection.innerHTML = `
                <div class="wrap-img-cart">
                    <img src="${product.img}" alt="${product.name}" class="img-cart" 
                    onclick="window.location = './details.html?id=${product.id}'"/>
                </div>
                <h3 class="title">${product.name}</h3>
                <span class="brand">${product.brand}</span>
                <span class="type">${product.type}</span>
                <div class="row">
                    <span class="price">${formattedPrice}</span>
                    <div class="row-price-star">
                        <img src="./asset/images/main-star.svg" alt="" class="star" />
                        <span class="star-num">${product.rate}</span>
                    </div>
                    <button class="add-to-cart-button" onclick = "addToCar(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;

            productList.appendChild(productSection);
        })
    }
}

let perProduct = [];
function getProduct(arr) {
    perProduct = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderProduct(perProduct);
}

getProduct(listProducts);
function renderPageNumber(arr, perPage) {
    totalPage = Math.ceil(arr.length / perPage); 

    document.querySelector(".pagination-ul").innerHTML = "";
    document.querySelector(".pagination-ul").innerHTML += `
        <a href="#recommend">
            <li class="move-btn" onclick="prevPage()"><</li>
        </a>
    `;

    for (let i = 1; i <= totalPage; i++) {
        document.querySelector(".pagination-ul").innerHTML += `
            <a href="#recommend">
                <li class="list-index li${i}" onclick="activePageIndex(event, ${i})">${i}</li>
            </a>
        `;
    }

    document.querySelector(".pagination-ul").innerHTML += `
        <a href="#recommend">
            <li class="move-btn" onclick="nextPage()">></li>
        </a>
    `;

    if (totalPage > 1) {
        document.querySelector(".li1").classList.add("active");
    } else if (totalPage <= 1) {
        document.querySelector(".li1").style.display = "none";
    }
}

let currentProductList = listProducts;
function activePageIndex(event, num) {
    let listPageIndex = document.querySelectorAll(".list-index");
    for (l of listPageIndex) {
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentPage = num;

    getProduct(currentProductList);
}

function prevPage() {
    let listPageIndex = document.querySelectorAll(".list-index");
    if (currentPage > 1) {
        for (l of listPageIndex) {
            l.classList.remove("active");
        }
        currentPage = currentPage - 1;
        console.log(currentPage);
        listPageIndex[currentPage-1].classList.add("active");
        getProduct(currentProductList);
    }
}

function nextPage() {
    let listPageIndex = document.querySelectorAll(".list-index");
    if (currentPage < totalPage) {
        for (l of listPageIndex) {
            l.classList.remove("active");
        }
        currentPage = currentPage + 1;
        console.log(currentPage);
        listPageIndex[currentPage-1].classList.add("active");
        getProduct(currentProductList);
    }
}

renderPageNumber(listProducts, perPage);

// Login behavior
function showLogin() {
    loginModal.classList.add('open');
}

function hideLogin() {
    loginModal.classList.remove('open');
}

var iconLogin = document.querySelector('.icon-user');
var loginModal = document.querySelector('.loginBackground');
var loginBlockModal = document.querySelector('.loginBlock');
var closeBtn = document.querySelector('.closeLoginBlock img');

iconLogin.addEventListener('click', showLogin);
closeBtn.addEventListener('click', hideLogin);

loginModal.addEventListener('click', hideLogin);
loginBlockModal.addEventListener('click', function(event) {
    event.stopPropagation();
})


// hiển thị form login và đăng ký khi chọn

const showForm = () => {
    const selectedItem = document.querySelectorAll('.tab-item');
    const  selectedForm = document.querySelectorAll('.tab-pane');

    selectedItem.forEach((selected, index) => {
        selected.addEventListener('click', function(){
            selectedItem.forEach((item) => item.classList.remove('active'));
            selectedForm.forEach( (form) => form.classList.remove('active'));

            selected.classList.add('active')
            selectedForm[index].classList.add('active');
        })
    }) 
}

// Hiển thị và đóng about
const showAndCloseAbout = () => {
    const btnOpenAbout = document.getElementById('aboutLink')
    const btnCloseAbout = document.querySelector('.btn-close-about')
    const showAbout = document.querySelector('.popup').classList

    btnOpenAbout.addEventListener('click', function(){
        showAbout.add('active')
    })

    btnCloseAbout.addEventListener('click', function(){
        showAbout.remove('active')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    showForm();
    showAndCloseAbout();
})
//_________________________Chuyển động banner_______________________//
// Khai báo phần tử
const slides = document.querySelectorAll(".slide"); // Chứa tất cả phần tử của class slide
const btnLeft = document.querySelector(".btn-left"); // Nút điều hướng
const btnRight = document.querySelector(".btn-right"); // Nút điều hướng
const dotContainer = document.querySelector(".dots"); // Chứa nút để chỉ thị và điều khiển slide

let curSlide = 0; // Biến vị trí hiện tại của slide đầu tiên

const goToSlide = function (slide) { // Dịch chuyển silde
    slides.forEach( // Lặp qua các slide 
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) // Slide hiện tại sẽ có vị trí 0%, slide tiếp theo là 100%, và slide trước đó là -100%
    );
};

const nextSlide = function () { // Chuyển sang slide tiếp theo
    if (curSlide === slides.length - 1) { // Kiểm tra xem slide ở vị trí cuối cùng
        curSlide = 0; // Đặt vị trí 0
    } else {
        curSlide++; // Nếu không tăng 1
    }
    goToSlide(curSlide); // Cập nhật vị trí hiện tại
    activateDot(curSlide); // Cập nhật dot của slide hiện tại.
};
const prevSlide = function () { // Quay lại slide trước đó hoạt động ngược lại với nextSlide
    if (curSlide == 0) {
        curSlide = slides.length - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
// Nhấn quay lại slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// Nhấn mũi tên của bàn phím để chuyển qua lại slide
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});
// Dot
const createDots = function () { //Tạo các dot tương ứng với số lượng slide
    slides.forEach(function (_, i) { // Lặp qua slide và tạo dot
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>` // Gán giá trị để xác định vị trí tương ứng
        );
    });
};
const activateDot = function (slide) { // Đánh dấu dot tương ứng với slide đang hiển thị
    document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active")); // Lặp qua các dot và loại bỏ class

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`) //Dot tương ứng với giá trị slide thêm vào class
        .classList.add("dots__dot--active");
}; 
const init = function () { //Khởi tạo và thiết lập trình chiếu
    goToSlide(0); //Đặt slide đầu tiên (slide 0) ở vị trí trung tâm
    createDots();
    activateDot(0);
};
init();
dotContainer.addEventListener("click", function (e) { //Cho phép người dùng nhấn vào dot để chuyển đến slide tương ứng.
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
});
const startAutoSilde = function() {
    setInterval(nextSlide, 2000);
};
startAutoSilde();

//__________________________Back to top________________________//
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        // Hiển thị nút khi người dùng cuộn xuống 30px
        document.querySelector(".backToTop").style.display = "block";
    } else {
        // Ẩn nút khi người dùng ở đầu trang
        document.querySelector(".backToTop").style.display = "none";
    }
}

// Xử lý quay trở lên top
document.querySelector(".backToTop").onclick = function () {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome, Safari, Edge
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox,IE
}

//____________________Ẩn hiện filter_____________________//
let isFormVisible = false;
const btnForm = document.querySelector(".filter-toggle");
btnForm.addEventListener("click", function () {
    if (isFormVisible == false) {
        btnForm.classList.add("active")
        isFormVisible = true;
    } else {
        btnForm.classList.remove("active");
        isFormVisible = false;
    }
});

// var maincolor = document.querySelector('.main');

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// setInterval(() => {
//     iconLogin.style.backgroundColor = getRandomColor();
//     maincolor.style.backgroundColor = getRandomColor();
// }, 100);