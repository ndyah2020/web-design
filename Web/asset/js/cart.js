
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
    const cartCurrentIndex = currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)
    currentLogin.cartItems.splice(cartCurrentIndex, 1)
    saveItemInToLocalStorage('currentLogin', currentLogin)

    updateUserData()
    render()
}

const up = (idProduct) => {
    const cartCurrentIndex = currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)

    if (cartCurrentIndex !== -1) {
        currentLogin.cartItems[cartCurrentIndex].quantity++;
    }
    saveItemInToLocalStorage('currentLogin', currentLogin);
    updateUserData();
    render();
}

const down = (idProduct) => {
    const cartCurrentIndex = currentLogin.cartItems.findIndex((idCart) => idProduct === idCart.id)
    if (currentLogin.cartItems[cartCurrentIndex].quantity <= 1) {
        deleteProductInCart(idProduct)
    } else {
        if (cartCurrentIndex !== -1) {
            currentLogin.cartItems[cartCurrentIndex].quantity--
        }
        saveItemInToLocalStorage('currentLogin', currentLogin);
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
    price.textContent = sumPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    priceShip.textContent = shipTotal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    let totalPriceFull = sumPrice + shipTotal;
    totalPrice.textContent = totalPriceFull.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

const checkOut = () => {
    const checkOutBtn = document.querySelector('.action-checkout')
    checkOutBtn.onclick = function () {
        updateListOrdersAndAddress(currentLogin)
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

function updateListOrdersAndAddress(data) {
    let flag = 0;

    const provinceSelect = document.getElementById('provinces');
    const districtSelect = document.getElementById('districts');
    const wardSelect = document.getElementById('wards');

    const selectedProvince = provinceSelect.options[provinceSelect.selectedIndex];
    const selectedDistrict = districtSelect.options[districtSelect.selectedIndex];
    const selectedWard = wardSelect.options[wardSelect.selectedIndex];

    const provinceFullName = selectedProvince.getAttribute('data-full-name');
    const districtFullName = selectedDistrict.getAttribute('data-full-name');
    const wardFullName = selectedWard.getAttribute('data-full-name');

    const streetName = document.getElementById('streetName').value
    let newAddress
    if (provinceFullName && districtFullName && wardFullName) {
        flag = 1;
        newAddress = {
            id: `AD-${provinceSelect.value}-${districtSelect.value}-${wardFullName}`,
            nameAddress: `${streetName}, ${provinceFullName}, ${districtFullName}, ${streetName}`
        }
        if (currentLogin.address.find((address) => address.id === newAddress.id)) {
            alert('địa chỉ đã tồn tại')
            return
        }
        currentLogin.address.push(newAddress)
        saveItemInToLocalStorage('listOrders', listOrders)
        updateUserData()
    }

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
        address: flag === 1 ? newAddress.nameAddress : addressSeleted()
    };
    
    if(!listOrdersObject.address){
        alert('Vui lòng chọn địa chỉ giao hàng')
        return
    }
    listOrders.push(listOrdersObject);
    saveItemInToLocalStorage('listOrders', listOrders);
    afterUpdate();
    flag = 0
};

const afterUpdate = () => {
    alert("Thank you!")
    currentLogin.cartItems = [];
    saveItemInToLocalStorage('currentLogin', currentLogin)
    updateUserData()
    window.location = "./index.html"
}

const getAddressUser = () => {
    const btnSeleted = document.getElementById('haveAddress')
    const addressUser = currentLogin.address
    if (btnSeleted && addressUser) {
        addressUser.map((address) => {
            btnSeleted.innerHTML += `<option data-full-name='${address.nameAddress}'  value='${address.id}'>${address.nameAddress}</option>`
        })
    }
}
const addressSeleted = () => {
    const addressSelete = document.getElementById('haveAddress');
    const selectedProvince = addressSelete.options[addressSelete.selectedIndex];

    const selectNewAddress = document.querySelector('.new-address');
   
    if (addressSelete.value) {
        selectNewAddress.classList.add('hidden');
        console.log(selectedProvince.getAttribute('data-full-name'));
        return selectedProvince.getAttribute('data-full-name');
    } else {
        selectNewAddress.classList.remove('hidden');
    }
};


const fetchProvinces = async () => {
    try {
        const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
        const data = await response.json();
        let provinces = data.data;
        console.log(provinces)
        provinces.map(value => {
            document.getElementById('provinces').innerHTML += `<option data-full-name='${value.full_name}' value='${value.id}'>${value.full_name}</option>`;
        });
    } catch (error) {
        console.error('Không thể lấy dữ liệu:', error);
    }
}

const fetchDistricts = async (provincesID) => {
    try {
        const response = await fetch(`https://esgoo.net/api-tinhthanh/2/${provincesID}.htm`);
        const data = await response.json();

        let districts = data.data;
        document.getElementById('districts').innerHTML = `<option value=''>-- Chọn quận/huyện --</option>`;
        districts.map(value => {
            document.getElementById('districts').innerHTML += `<option data-full-name='${value.full_name}'  value='${value.id}'>${value.full_name}</option>`;
        });

    } catch (error) {
        console.error('Không thể lấy dữ liệu:', error);
    }
}

const fetchWards = async (districtsID) => {
    try {
        const response = await fetch(`https://esgoo.net/api-tinhthanh/3/${districtsID}.htm`);
        const data = await response.json();
        console.log(data)
        let wards = data.data;
        document.getElementById('wards').innerHTML = `<option value=''>-- Chọn xã/phường --</option>`;
        wards.map(value => {
            document.getElementById('wards').innerHTML += `<option data-full-name='${value.full_name}'  value='${value.id}'>${value.full_name}</option>`;
        });

    } catch (error) {
        console.error('Không thể lấy dữ liệu:', error);
    }
}

const getProvinces = (event) => {
    fetchDistricts(event.target.value);
    document.getElementById('wards').innerHTML = `<option value=''>-- Chọn xã --</option>`;
}

function getDistricts(event) {
    fetchWards(event.target.value);
}

document.addEventListener('DOMContentLoaded', () => {
    render()
    checkOut()
    fetchProvinces()
    getAddressUser()
})

