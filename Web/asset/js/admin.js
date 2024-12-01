
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
        if (order.check === 0) {
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
        if (order.check === 1) {
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
        if (order.check === 2) {
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
                <td>${status(listOrders[orderid-1].check)}</td>
            `;
        orderManagementTbody.appendChild(orderTr);
    });
}

function status(check) {
    let ans = "????";
    switch (check) {
        case 0:
            ans = "Đang chờ...";
            break;
        case 1:
            ans = "Đã xác nhận!";
            break;
        case 2:
            ans = "Đã hủy";
            break;
        default:
            break;
    }
    return ans;
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
    const selectElement = document.getElementById('cars');
    selectElement.addEventListener('change', () => {
        const selectedValue = selectElement.value;
        selectedValue == 1 ? renderUser(listUsersClient) : renderUser(listUsersAdmin)
    });
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
                <td>${user.isAdmin ? user.password: '*************'}</td>
                <td style="display: flex">
                    <button class="delete-btn product delete-user" data-user='${JSON.stringify(user)}' onclick=${user.status ? "updateUserStatus(this,false)" : "updateUserStatus(this,true)"}>
                        ${user.status ? 'Khóa' : 'Mở Khóa'}
                    </button> 

                    ${user.isAdmin ? `<button class="delete-btn product delete-user" data-user='${JSON.stringify(user)}' onclick='openEditUser(this)'>
                    Edit
                    </button>` : ''}
                </td>
        `;
        userManagementTbody.appendChild(userTr);
    });
}

const updateUserStatus = (button, newStatus) => {
    const user = JSON.parse(button.getAttribute("data-user"));
    const actionMessage = newStatus ?
        "Bạn có chắc muốn mở khóa tài khoản này" :
        "Bạn có chắc muốn khóa tài khoản này";

    const shouldBlock = window.confirm(actionMessage);
    if (!shouldBlock) {
        return;
    }
    user.status = newStatus;
    if (user.isAdmin) {
        if (user.email === currentLoginAdmin.email) {
            alert('Không thể khóa tài khoản hiện đang đăng nhập');
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
        const childDiv = allDiv[i].querySelector('.form-input');
        if (childDiv) {
            childDiv.style.border = 'none';
        }
    }
    for (let j = 0; j < allFormError.length; j++) {
        allFormError[j].innerText = "";
    }
}
function rmvAnimateUser() {
    if (checkEdit == 1) {
        clearFormUser();
        document.getElementById('emailUser').disabled = false
    }
    addEditUserBackgroundForm.classList.remove("animate");
    addEditUserForm.classList.remove("animate");
    var allDiv = document.querySelectorAll(".div");
    var allFormError = document.querySelectorAll(".form-error");


    for (let i = 0; i < allDiv.length; i++) {
        const childDiv = allDiv[i].querySelector('.form-input');
        if (childDiv) {
            childDiv.style.border = 'none';
        }
    }
    for (let j = 0; j < allFormError.length; j++) {
        allFormError[j].innerText = "";
    }
    checkEdit == 0
}

function clearForm() {
    document.getElementById("nameProduct").value = "";
    document.getElementById("linkImage").value = "";
    document.getElementById("price").value = "";
    document.getElementById("type").value = "";
    document.getElementById("cpu").value = "";
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
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.style.display = 'none';
    btnCloseForm.addEventListener("click", rmvAnimate);
}
function openAddFormUser() {
    checkEdit = 0
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
    if (productImg) {
        const reader = new FileReader(); 
        reader.readAsDataURL(productImg);

        reader.onload = function (e) {
            const imageUrl = e.target.result;

            const product = {
                id: productId,
                name: productName,
                brand: productBrand,
                type: productType,
                img: imageUrl,
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
            renderProducts(listProducts);
            rmvAnimate();
        }
    } 
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
    }, 2500);

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
            listOrders[i].check = 1;
            updateListOrderstoLocalStorage();
            renderOrderManagement();
            return;
            // if (listOrders[i].order[0].check === 0) {
            //     listOrders[i].order.forEach((item) => {
            //         item.check = 1;
            //     });
            // } else {
            //     return;
            // }
        }
    }
    alert("Đã xác nhận!");
}

function rejectOrder(orderid) {
    for (var i = 0; i < listOrders.length; i++) {
        if (listOrders[i].id === orderid) {
            listOrders[i].check = 2;
            updateListOrderstoLocalStorage();
            renderOrderManagement();
            return;
            // if (listOrders[i].order[0].check === 0) {
            //     listOrders[i].order.forEach((item) => {
            //         item.check = 2;
            //     });
            // } else {
            //     return;
            // }
        }
    }
    alert("Đã hủy");
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
    const imagePreview = document.getElementById('imagePreview')
    imagePreview.style.display = 'block';

    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId) {
            const product = listProducts[i];
            productName.value = product.name;
            productCpu.value = product.model[0].cpu;
            productPrice.value = product.model[0].price;
            productBrand.value = product.brand;
            productType.value = product.type;
            imagePreview.src = product.img ? product.img : '';
        }
    }
    addAnimate();
    btnCloseForm.addEventListener("click", rmvAnimate);
}

const openEditUser = (button) => {
    checkEdit = 1;
    const user = JSON.parse(button.getAttribute("data-user"));
    const userEmail = document.getElementById('emailUser')
    const userName = document.getElementById('name-user')
    const userPassword = document.getElementById('password-user')
    const userComfirm = document.getElementById('password_confirmation')
    const idUser = document.getElementById('idUser')

    idUser.value = user.id
    userEmail.value = user?.email || 'N/A';
    userEmail.disabled = true;

    userName.value = user?.name || 'N/A';
    userPassword.value = user.password;
    userComfirm.value = user.password;

    addAnimateUser();

    const btnCloseFormUser = document.querySelector('.closeImgUser'); // Thêm phần này để đảm bảo btnCloseFormUser được tìm thấy
    if (btnCloseFormUser) {
        btnCloseFormUser.addEventListener("click", rmvAnimateUser);
    }
}


function editProduct(data) {
    const productId = parseInt(document.getElementById("idProduct").value);
    const productImg = data.linkImage

    const productToEdit = listProducts.find(
        (product) => product.id === productId
    );
    console.log(productToEdit)
    const reader = new FileReader();

    reader.readAsDataURL(productImg)
    reader.onload = function(e){
        const imgaeUrl = e.target.result;
        if (productToEdit) {
            productToEdit.name = data.nameProduct;
            productToEdit.model[0].price = data.price;
            productToEdit.model[0].cpu = data.cpu;
            productToEdit.typen = data.type;
            productToEdit.img = imgaeUrl;

            localStorage.setItem("listProducts", JSON.stringify(listProducts));
            renderProducts(listProducts);
            rmvAnimate();
        } else {
            console.log("Product not found for editing with ID " + productId);
        }
    }   
}

const editUser = (data) => {
    const userEmail = document.getElementById('emailUser')
    const userName = document.getElementById('name-user')
    const userPassword = document.getElementById('password-user')
    const idUser = document.getElementById('idUser')


    userName.value = data.nameUser
    userPassword.value = data.passwordUser

    const editUserIndex = listUsersAdmin.findIndex((user) => user.email === userEmail.value)
    if (editUserIndex !== -1) {
        listUsersAdmin[editUserIndex] = {
            id: parseInt(idUser.value),
            email: userEmail.value,
            isAdmin: 1,
            name: userName.value,
            password: userPassword.value,
            status: true,
        };

        localStorage.setItem("DataUsersAdmin", JSON.stringify(listUsersAdmin));
        renderUserManagement();
        rmvAnimateUser();
    } else {
        console.log("Không tìm thấy người dùng để chỉnh sửa.");
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
            clearForm();
            addProduct(data);
        } else {
            editProduct(data);
        }
    },
});

function setIdUser() {
    let max = listUsersAdmin[0].id;
    for (let i = 1; i < listUsersAdmin.length; i++) {
        if (listUsersAdmin[i].id > max) max = listUsersAdmin[i].id;
    }
    return max + 1;
}

const addUserValidator = new Validator({
    form: "#add-user",
    formGroupSelector: ".form-group",
    errorSelector: ".form-error",
    rules: [
        Validator.isRequired("#emailUser", "Vui lòng nhập thông tin email"),
        Validator.isEmail("#emailUser", "Vui lòng nhập đúng email"),

        Validator.isRequired("#name-user", "Tên không được bỏ trống"),
        Validator.noSpecialCharactersOrNumbers('#name-user', 'Tên không hợp lệ'),

        Validator.isRequired('#password-user', 'Vui lòng nhập password'),
        Validator.isPassword('#password-user', 6),

        Validator.isRequired('#password_confirmation', 'Vui lòng xác nhận password'),
        Validator.isComfimer(
            '#password_confirmation',
            () => document.querySelector('#add-user #password-user').value,
            'Mật khẩu không trùng khớp'
        ),
    ],

    onSubmit: function (data) {
        if (checkEdit === 0) {
            const newUser = {
                id: setIdUser(),
                isAdmin: 1,
                name: data.nameUser,
                email: data.emailUser,
                password: data.passwordUser,
                status: true,
            }
            checkNewUser(newUser)
        } else {

            editUser(data)
        }
    },
});


const clearFormUser = () => {
    document.getElementById("emailUser").value = "";
    document.getElementById("name-user").value = "";
    document.getElementById("password-user").value = "";
    document.getElementById("password_confirmation").value = "";
}

const checkNewUser = (newUser) => {
    const userEmail = listUsersAdmin.find((user) => user.email === newUser.email)

    if (userEmail) {
        clearError(".form-group", "form-input")
        alert('Email này đã tồn tại')

        return;
    }
    listUsersAdmin.push(newUser)
    localStorage.setItem("DataUsersAdmin", JSON.stringify(listUsersAdmin));
    clearFormUser()
    rmvAnimateUser()
    renderUserManagement();
}