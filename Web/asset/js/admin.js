
let listProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem('listProducts'))
    : [];

// Lấy danh sách người dùng từ localStorage
let listUsersClient = localStorage.getItem("DataUsers")
    ? JSON.parse(localStorage.getItem("DataUsers"))
    : [];
let listUsersAdmin = localStorage.getItem("DataUsersAdmin")
    ? JSON.parse(localStorage.getItem("DataUsersAdmin"))
    : [];
// Lấy danh sách đơn hàng từ localStorage
let listOrders = localStorage.getItem("listOrders")
    ? JSON.parse(localStorage.getItem("listOrders"))
    : [];

renderAdmin();

// Xử lý ẩn hiện
function renderAdmin() {
    renderProductManagement();
    document.querySelector(".productManagement").onclick = function () {
        renderProductManagement();
    };
    document.querySelector(".orderManagement").onclick = function () {
        renderOrderManagement();
    };
    document.querySelector(".userManagement").onclick = function () {
        renderUserManagement();
    };
    document.querySelector(".orderStartictis").onclick = function () {
        renderOrderStartictis();
    };
    document.querySelector(".logout").onclick = function () {
        logOutAdmin();
    };
}

function renderProductManagement() {
    document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Product Management</h1>
    `;
    document.querySelector(".contain-add-product-search").innerHTML = `
        <div class="add-product-search">
            <button class="add-btn" onclick="openAddForm()">Add Product</button>
            <div class="search">
                <input type="text" placeholder="Search for..." class="search-field" />
                <svg xmlns="" height="1em" viewBox="0 0 512 512" class="icon-delete hidden >
                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" ></path>
                </svg>
                <button class="btn-search">
                    <img src="./asset/images/header-search.svg" alt="" class="search-icon"/>
                </button>
            </div>
        </div>
        <div class="contain-product"></div>
    `;
    if (listProducts) {
        renderProducts(listProducts); // Hiển thị danh sách sản phẩm
    } else {
        document.querySelector(".contain-product").innerHTML = `<p>No products available.</p>`;
    }
    // handleProductManagement(); /// chưa làm
}

function renderProducts(arr) {
    const productListContainer = document.querySelector(".contain-product");
    productListContainer.innerHTML = "";

    arr.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        let formattedPrice = product.model[0].price.toLocaleString("vi-VN") + " đ"

        productDiv.innerHTML = `
            <img src="${product.img}" alt="" class="img-product" />
            <h2 class="name">${product.name}</h2>
            <span class="price">${formattedPrice}</span>
            <div class="group-btn">
                <button class="edit-btn" onclick="openEditForm(${product.id})">   
                    Edit
                </button>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            </div>
      `;
        productListContainer.appendChild(productDiv);
    });
}

function renderOrderManagement() {
    document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Management</h1>
    `;
    document.querySelector(".contain-add-product-search").innerHTML = `
        <div class="orderManagementHeader">
            <button class="add-btn" onclick="renderWaitOrder(listOrders)">
                Các đơn hàng chưa xác nhận
            </button>
            <button class="add-btn" onclick="renderAcceptedOrder(listOrders)">
                Các đơn hàng đã xác nhận
            </button>
            <button class="add-btn" onclick="renderRejectedOrder(listOrders)">
                Các đơn hàng bị hủy
            </button>
        </div>
        <div class="orderManagementBody"></div>
    `;
    renderWaitOrder(listOrders);
}

function renderTotalPriceAdmin(arrOfOrderInListOrder) {
    let sumQuantity = 0;
    let sumPrice = 0;
    let shipTotal = 0;
    arrOfOrderInListOrder.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
        shipTotal += 10000 * item.quantity;
    })
    let totalPriceFull = sumPrice + shipTotal;
    var formattedPrice = totalPriceFull.toLocaleString("vi-VN") + " đ";
    return formattedPrice;
}

function renderWaitOrder(arr) {
    const orderManagementBody = document.querySelector(".orderManagementBody");
    orderManagementBody.innerHTML = "";
    arr.forEach((order) => {
        if (order.order[0].check === 0) {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("historyOrder");
            orderDiv.setAttribute("id", order.id);
            orderDiv.innerHTML = `
            <div class="helloUser-Order">
                <div class="sub-hello">
                    <p>User: ${order.email}</p>
                    <p>Total: ${renderTotalPriceAdmin(order.order)}</p>
                </div>
                <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
            </div>
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quatity</th>    
                            <th>Price</th>
                            <th>Order time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class="tableHistory"></tbody>
                </table>
            </div>
            <div class="handleAcceptOrder">
                <div>
                    <button class="adminAcceptOrder" onclick ="acceptOrder(${order.id})">Xác nhận</button>
                </div>
                <div>
                    <button class="adminRejectOrder" onclick ="rejectOrder(${order.id})">Hủy</button>
                </div>
            </div>
        `;
            orderManagementBody.appendChild(orderDiv);
            renderOrderItem(order.order, order.id);
        }
    });
}
function renderAcceptedOrder(arr) {
    const orderManagementBody = document.querySelector(".orderManagementBody")
    orderManagementBody.innerHTML = "";
    arr.forEach((order) => {
        if (order.order[0].check === 1) {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("historyOrder");
            var orderid = order.id;
            orderDiv.setAttribute("id", orderid);
            orderDiv.innerHTML = `
            <div class="helloUser-Order">
                <div class="sub-hello">
                    <p>User: ${order.email}</p>
                    <p class="total">Total: ${renderTotalPriceAdmin(order.order)}</p>
                </div>
                <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
            </div>
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quatity</th>    
                            <th>Price</th>
                            <th>Order time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class = "tableHistory"></tbody>
                </table>
            </div>
      `;
            orderManagementBody.appendChild(orderDiv);
            renderOrderItem(order.order, orderid);
        }
    });
}
function renderRejectedOrder(arr) {
    const orderManagementBody = document.querySelector(".orderManagementBody")
    orderManagementBody.innerHTML = "";
    arr.forEach((order) => {
        if (order.order[0].check === 2) {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("historyOrder");
            var orderid = order.id;
            orderDiv.setAttribute("id", orderid);
            orderDiv.innerHTML = `
            <div class="helloUser-Order">
                <div class="sub-hello">
                    <p>User: ${order.email}</p>
                    <p class="total">Total: ${renderTotalPriceAdmin(order.order)}</p>
                </div>
                <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
            </div>
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quatity</th>    
                            <th>Price</th>
                            <th>Order time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class = "tableHistory">
                        
                    </tbody>
                </table>
            </div>
        `;
            orderManagementBody.appendChild(orderDiv);
            renderOrderItem(order.order, orderid);
        }
    });
}

function renderTotalShipAdmin(arrOfOrderInListOrder) {
    let sumQuantity = 0;
    let sumPrice = 0;
    let shipTotal = 0;
    arrOfOrderInListOrder.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
        shipTotal += 5 * item.quantity;
    })
    return shipTotal;
}

function renderOrderItem(arr, orderid) {
    const orderManagementTbody = document
        .getElementById(orderid)
        .querySelector(".tableHistory");
    var variableNeed = ".fee_shipping" + orderid
    document.querySelector(variableNeed).textContent = "Fee shipping: $" + renderTotalShipAdmin(arr);
    let number = 0;
    arr.forEach((item) => {
        number++;
        const orderTr = document.createElement("tr");
        orderTr.innerHTML = `
                <td>${number}</td>
                <td><img class="img-history" src="${item.img}" alt=""></td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toLocaleString("vi-VN") + "đ"}</td>
                <td>${item.time}</td>
                <td>${status(item.check)}</td>
            `;
        orderManagementTbody.appendChild(orderTr);
    });
}

function status(check) {
    if (check == 0) {
        return "Đang chờ...";
    } else {
        if (check == 1) {
            return "Đã xác nhận!";
        } else {
            return "Đã hủy";
        }
    }
}

function renderUserManagement() {
    document.querySelector(".div-title").innerHTML = `
            <h1 class="title">User Management</h1>
    `;
    document.querySelector(".contain-add-product-search").innerHTML = `
            <button class="add-btn-user" onclick="openAddFormUser()">Add User</button>

            <div class="select-view-users">
                <label for="cars">Chọn loại tài khoản cần xem</label>
                <select name="cars" id="cars">
                    <option value="0">Admin</option>
                    <option value="1">Client</option>
                </select>
            </div>

            <table class="userTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
    `;
    renderUser(listUsersAdmin)
}
// Lấy thông tin login //
function renderUser(arr) {
    const userManagementTbody = document.querySelector(".userTable tbody");
    userManagementTbody.innerHTML = "";

    arr.forEach((user) => {
        const userTr = document.createElement("tr");
        userTr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.status ? 'Hoạt động' : 'Đã Khóa'}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td style="display: flex">
                    <button class="delete-btn product delete-user" data-user='${JSON.stringify(user)}' onclick=${user.status ? "updateUserStatus(this,false)" : "updateUserStatus(this,true)"}>
                        ${user.status ? 'Khóa' : 'Mở Khóa'}
                    </button> 
                    <button class="delete-btn product delete-user" data-user='${JSON.stringify(user)}' onclick='EditUser(this)'>
                        Edit
                    </button> 
                </td>
        `;
        userManagementTbody.appendChild(userTr);
    });
}

const updateUserStatus = (button, newStatus) => {
    const user = JSON.parse(button.getAttribute("data-user"));

    user.status = newStatus;
    if (user.isAdmin) {
        if (user.email === currentLoginAdmin.email) {
            alert('Không thể khóa tài khoản hiện đang đăng nhập')
            return;
        }
        const index = listUsersAdmin.findIndex((adminUser) => adminUser.id === user.id);
        listUsersAdmin[index] = user;
        localStorage.setItem("DataUsersAdmin", JSON.stringify(listUsersAdmin));
        renderUser(listUsersAdmin);
    } else {
        const index = listUsersClient.findIndex((clientUser) => clientUser.id === user.id);
        listUsersClient[index] = user;
        localStorage.setItem("DataUsers", JSON.stringify(listUsersClient));
        renderUser(listUsersClient);
    }
};

const EditUser = (button) => {
    const user = JSON.parse(button.getAttribute("data-user"));
    console.log("Editing user:", user);
};


function renderOrderStartictis() {
    document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Statistics</h1>
    `;
    document.querySelector(".contain-add-product-search").innerHTML = `
        <div class="head">
            <div class="form-input-startics">
                <form>
                    <div>
                        <div class="start-date-div">
                            <label for="start-date">From Date:</label>
                            <input type="date" id="start-date" name="start-date" />
                        </div>

                        <div class="end-date-div">
                            <label for="end-date">To Date:</label>
                            <input type="date" id="end-date" name="end-date" />
                        </div>

                        <div class="form-item">
                            <label for="type">Type</label>
                            <select name="type" id="type">
                                <option value="">---</option>
                                <option value="sweater">sweater</option>
                                <option value="pants">pants</option>
                                <option value="shoe">shoe</option>
                            </select>
                        </div>
                    </div>
                    <button type = "button" class="btn-submit" onclick = "handleOrderStartictis()">Submit</button>
                </form>
                <button class="btn-sale" onclick = "handleTopSale()">Top Sales</button>
                <button class="btn-customer" onclick = "handleTopCustomer()">Top Customers</button>
            </div>
        </div>
        <div class="body-table"></div>
    `;
}

function renderTableBody() {
    const tableBody = document.querySelector(".body-table");
    tableBody.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Email</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quatity</th>    
                <th>Price</th>
                <th>Order time</th>
            </tr>
        </thead>
        <tbody class="body-order-startictis"></tbody>
    </table>`;
}

function renderTopSales() {
    const tableBody = document.querySelector(".body-table");
    tableBody.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Image</th>
                <th>Name</th>
                <th>Total quantity</th>    
                <th>Price</th>
                <th>Total price</th>
            </tr>
        </thead>
        <tbody class = "body-order-startictis"></tbody>
    </table>`;
}

// Xử lý ẩn hiện:
function addAnimate() {
    addEditProductBackgroundForm.classList.add("animate");
    addEditProductForm.classList.add("animate");
}

const addAnimateUser = () => {
    addEditUserBackgroundForm.classList.add("animate");
    addEditUserForm.classList.add("animate");
}

function rmvAnimate() {
    if (checkEdit == 1) clearForm();
    addEditProductBackgroundForm.classList.remove("animate");
    addEditProductForm.classList.remove("animate");
    var allDiv = document.querySelectorAll(".div");
    var allFormError = document.querySelectorAll(".form-error");

    for (let i = 0; i < allDiv.length; i++) {
        Object.assign(allDiv[i].style, {
            "border-color": "#b3b3b3",
        });
    }
    for (let j = 0; j < allFormError.length; j++) {
        allFormError[j].innerText = "";
    }
}
function rmvAnimateUser() {
    if (checkEdit == 1) clearForm();
    addEditUserBackgroundForm.classList.remove("animate");
    addEditUserForm.classList.remove("animate");
    var allDiv = document.querySelectorAll(".div");
    var allFormError = document.querySelectorAll(".form-error");

    for (let i = 0; i < allDiv.length; i++) {
        Object.assign(allDiv[i].style, {
            "border-color": "#b3b3b3",
        });
    }
    for (let j = 0; j < allFormError.length; j++) {
        allFormError[j].innerText = "";
    }
}

function clearForm() {
    document.getElementById("nameProduct").value = "";
    document.getElementById("price").value = "";
    document.getElementById("type").value = "";
    document.getElementById("linkImage").value = "";
}

let checkEdit = 0;
const btnCloseForm = document.querySelector(".closeImg");
const btnAddProduct = document.querySelector(".add-btn");

const btnCloseFormUser = document.querySelector(".closeImgUser");

const addEditProductBackgroundForm = document.querySelector(".add-edit-product-background-form");
const addEditUserBackgroundForm = document.querySelector(".add-edit-user-background-form")

addEditProductBackgroundForm.addEventListener("click", rmvAnimate);
addEditUserBackgroundForm.addEventListener("click", rmvAnimateUser);

const addEditProductForm = document.querySelector(".add-edit-product-form");
addEditProductForm.onclick = function (event) {
    // Ngăn chặn sự kiện khi ấn vào form mà bị mất
    event.stopPropagation();
};
const addEditUserForm = document.querySelector(".add-edit-user-form");
addEditUserForm.onclick = function (event) {
    event.stopPropagation();
};

// quan ly san pham
function setId() {
    let max = listProducts[0].id;
    for (let i = 1; i < listProducts.length; i++) {
        if (listProducts[i].id > max) max = listProducts[i].id;
    }
    return max + 1;
}

function openAddForm() {
    addAnimate();
    btnCloseForm.addEventListener("click", rmvAnimate);
}
function openAddFormUser() {
    addAnimateUser();
    btnCloseFormUser.addEventListener("click", rmvAnimateUser);
}

function addProduct(data) {
    const productId = setId();
    const productName = data.nameProduct;
    const productCpu = data.cpu;
    const productPrice = parseFloat(data.price);
    const productBrand = data.brand;
    const productType = data.type;
    const productImg = data.linkImage;
    console.log(productImg);
    const product = {
        id: productId,
        name: productName,
        brand: productBrand,
        type: productType,
        image: productImg,
        star: 5.0,
        model: [
            {
                cpu: productCpu,
                price: productPrice,
            }
        ]
    };
    listProducts.unshift(product);
    clearForm();
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    console.log(listProducts);
    renderProducts(listProducts);
    rmvAnimate();
}

function addSuccessForm() {
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");
    let timer1, timer2;

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 2500); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 2800);

    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");

        setTimeout(() => {
            progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
    });
}

// xử lý trạng thái order
function acceptOrder(orderid) {
    for (var i = 0; i < listOrders.length; i++) {
        if (listOrders[i].id === orderid) {
            if (listOrders[i].order[0].check === 0) {
                listOrders[i].order.forEach((item) => {
                    item.check = 1;
                });
            } else {
                return;
            }
        }
    }
    updateListOrderstoLocalStorage();
    alert("Đã xác nhận!");
    renderOrderManagement();
}

function rejectOrder(orderid) {
    for (var i = 0; i < listOrders.length; i++) {
        if (listOrders[i].id === orderid) {
            if (listOrders[i].order[0].check === 0) {
                listOrders[i].order.forEach((item) => {
                    item.check = 2;
                });
            } else {
                return;
            }
        }
    }
    updateListOrderstoLocalStorage();
    alert("Đã hủy");
    renderOrderManagement();
}

function updateListOrderstoLocalStorage() {
    let order = JSON.stringify(listOrders);
    localStorage.setItem("listOrders", order);
}

function openEditForm(productId) {
    document.getElementById("idProduct").value = productId;
    checkEdit = 1;
    const productName = document.getElementById("nameProduct");
    const productCpu = document.getElementById("cpu");
    const productPrice = document.getElementById("price");
    const productBrand = document.getElementById("brand");
    const productType = document.getElementById("type");

    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId) {
            const product = listProducts[i];
            productName.value = product.name;
            productCpu.value = product.model[0].cpu;
            productPrice.value = product.model[0].price;
            productBrand.value = product.brand;
            productType.value = product.type;
            // productImg.value = product.image;
        }
    }
    addAnimate();
    btnCloseForm.addEventListener("click", rmvAnimate);
}

function editProduct() {
    const productId = parseInt(document.getElementById("idProduct").value);
    const productName = document.getElementById("nameProduct").value;
    const productPrice = parseFloat(document.getElementById("price").value);
    const productType = document.getElementById("type").value;
    const productImg = document.getElementById("linkImage").value;
    const productToEdit = listProducts.find(
        (product) => product.id === productId
    );
    if (productToEdit) {
        productToEdit.name = productName;
        productToEdit.price = productPrice;
        productToEdit.nature.type = productType;
        productToEdit.image = productImg;
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        renderProducts(listProducts);
        rmvAnimate();
    } else {
        console.log("Product not found for editing with ID " + productId);
    }
}

function deleteProduct(productId) {
    const shouldDelete = window.confirm(
        "Are you sure you want to delete this product"
    );
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId && shouldDelete) {
            console.log("da xoa  " + listProducts[i].id);
            console.log(listProducts);
            listProducts.splice(i, 1);

        }
    }
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    renderProducts(listProducts);
}

// validate form


const runValidatorForm = new Validator({
    form: "#add-form",
    formGroupSelector: ".form-group",
    errorSelector: ".form-error",
    rules: [
        Validator.isRequired("#nameProduct", "Vui lòng nhập tên sản phẩm"),
        Validator.isRequired("#cpu", "Vui lòng nhập tên CPU"),
        Validator.isRequired("#price", "Vui lòng nhập đơn giá"),
        Validator.isRequired("#brand", "Vui lòng chọn hãng sản phẩm"),
        Validator.isRequired("#type", "Vui lòng chọn loại sản phẩm"),
        Validator.isRequired("#linkImage", "Vui lòng chọn link hình ảnh"),
    ],
    onSubmit: function (data) {
        if (checkEdit === 0) {
            addSuccessForm();
            console.log(data);
            clearForm();
            addProduct(data);
        } else {
            editProduct();
        }
    },
});
const addUserValidator = new Validator({
    form: "#add-user",
    formGroupSelector: ".form-group",
    errorSelector: ".form-error",
    rules: [
        Validator.isRequired("#nameProduct", "Vui lòng nhập tên sản phẩm"),
        Validator.isRequired("#cpu", "Vui lòng nhập tên CPU"),
        Validator.isRequired("#price", "Vui lòng nhập đơn giá"),
        Validator.isRequired("#brand", "Vui lòng chọn hãng sản phẩm"),
        Validator.isRequired("#type", "Vui lòng chọn loại sản phẩm"),
        Validator.isRequired("#linkImage", "Vui lòng chọn link hình ảnh"),
    ],
    onSubmit: function (data) {
        if (checkEdit === 0) {
            addSuccessForm();
            console.log(data);
            clearForm();
            addProduct(data);
        } else {
            editProduct();
        }
    },
});
