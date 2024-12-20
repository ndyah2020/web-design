var DataUsers = localStorage.getItem('DataUsers') ? JSON.parse(localStorage.getItem('DataUsers')) : [
    {
        id:         1,
        isAdmin:    0,
        name: 'Khách Hàng',
        email:      'client@gmail.com',
        password:   '123123',
        status:    true,
        address: [],
        cartItems: [
        ],
    },
    {
        id: 2,
        isAdmin: 0,
        name: 'Nguyễn Duy Anh',
        email: 'nguyenduyanhh2020@gmail.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 3,
        isAdmin: 0,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 4,
        isAdmin: 0,
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 5,
        isAdmin: 0,
        name: 'Michael Jones',
        email: 'michael.jones@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 6,
        isAdmin: 0,
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 7,
        isAdmin: 0,
        name: 'Steven Wilson',
        email: 'steven.wilson@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 8,
        isAdmin: 0,
        name: 'Susan Davis',
        email: 'susan.davis@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 9,
        isAdmin: 0,
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 10,
        isAdmin: 0,
        name: 'Linda Martin',
        email: 'linda.martin@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
    {
        id: 11,
        isAdmin: 0,
        name: 'Emily White',
        email: 'emily.white@example.com',
        password: '123123',
        status: true,
        address: [],
        cartItems: [],
    },
];
//Hiển thị login khi ấn vào icon
const showLoginAndRegister = () => {
    const iconLogin = document.querySelector('.login-icon');
    const loginModal = document.querySelector('.loginBackground');
    const inconLoginStart = document.querySelector('.btn-start');
    const loginBlockModal = document.querySelector('.loginBlock');
    const closeBtn = document.querySelector('.closeLoginBlock img');
    
    if (iconLogin && loginModal && loginBlockModal && closeBtn) {
        const showLogin = () => loginModal.classList.add('open');
        const hideLogin = () => loginModal.classList.remove('open');

        iconLogin.addEventListener('click', showLogin);
        if(inconLoginStart)
            inconLoginStart.addEventListener('click', showLogin);

        closeBtn.addEventListener('click', hideLogin);

        loginModal.addEventListener('click', hideLogin);
        loginBlockModal.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
};

// hiển thị form login và đăng ký khi chọn
const showForm = () => {
    const selectedItem = document.querySelectorAll('.tab-item');
    const  selectedForm = document.querySelectorAll('.tab-pane');
    if(selectedItem && selectedForm)
    {
        selectedItem.forEach((selected, index) => {
            selected.addEventListener('click', function(){
                selectedItem.forEach((item) => item.classList.remove('active'));
                selectedForm.forEach((form) => form.classList.remove('active'));
    
                selected.classList.add('active')
                selectedForm[index].classList.add('active');
            })
        }) 
    }
}


const saveItemInToLocalStorage = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data));


const getItemFromLocalStorage = (listItem) => {
    const item = JSON.parse(localStorage.getItem(listItem));
    if (!item) {
        return null;
    }
    return item;
}

var currentLogin = getItemFromLocalStorage('currentLogin');
saveItemInToLocalStorage('DataUsers', DataUsers)

//Kiểm tra input đăng ký
const CheckRegisterForm = new Validator({
    form: '#form-2',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#name','Vui lòng nhập thông tin tên tài khoản'),

        Validator.isRequired('#email2','Vui lòng nhập thông tin email'),
        Validator.isEmail('#email2','Vui lòng nhập vào là email'),

        Validator.isRequired('#password2','Vui lòng nhập password'),
        Validator.isPassword('#password2', 6),
        
        Validator.isRequired('#password_confirmation','Vui lòng xác nhận password'),
        Validator.isComfimer(
            '#password_confirmation', 
            () => document.querySelector('#form-2 #password2').value, 
            'Mật khẩu không trùng khớp'
        ),
    ],
    onSubmit: (dataFromClinet) =>{
        const getDataUser = getItemFromLocalStorage('DataUsers');

        const isMail = getDataUser.find((data) => dataFromClinet.email2 === data.email)

        if(isMail){
            document.querySelector('.loginError').innerText = "Email này đã được sử dụng";
        }else{
            registerUserFromClinet(dataFromClinet)
        }
    }
});
//Kiểm tra input đăng nhập

const CheckLoginForm = new Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#email1','Vui lòng nhập email để đăng nhập'),
        Validator.isEmail('#email1','Vui lòng nhập vào là email'),
    
        Validator.isRequired('#password1','Vui lòng nhập password'),
    ],
    onSubmit: (data) => {
        const dataUser = {
            id: data.id,
            isAdmin:    0,
            name: data.name,
            email: data.email1,
            password:  data.password,
            cartItems: [
            ],
        }
        checkLogin(dataUser)
    }
});



const checkLogin = (dataFromInputLogin) => {
    const getDataUser = getItemFromLocalStorage('DataUsers');
    currentLogin = getDataUser.find((data) => dataFromInputLogin.email === data.email && dataFromInputLogin.password === data.password);
    if (currentLogin) {

        if(!currentLogin.status){
            document.querySelector('.loginError').innerText = "Tài khoản đã bị vô hiệu hóa";
            return;
        }

        saveItemInToLocalStorage('currentLogin', currentLogin);
        isRegister ?  alert('Đăng ký thành thành công') : alert('Đăng nhập thành công');

        window.location.pathname.endsWith("details.html")
                ?window.location.reload()
                :window.location = "./index.html"   
    } else {
        document.querySelector('.loginError').innerText = "Mật khẩu không chính xác";
    }
};

const logoutUser = () => {
    const iconUser = document.querySelector('.login-btn');
    iconUser.innerHTML = `<p class="login-icon">Login</p>`
    saveItemInToLocalStorage('currentLogin', null)
    window.location = "./index.html"
}

const setIcon = () => {

    const iconUser = document.querySelector('.login-btn');
    
    if (currentLogin && iconUser) {
        const userName = currentLogin.name;
        iconUser.innerHTML = `
            <img src="./asset/images/header-user.svg" alt="" class="icon-user" "/> ${userName}
            <div class="user-menu">
                <ul >
                    <li class="menu-history">Lịch sử mua hàng</li>
                    <li class="user-menu-item" onclick={logoutUser()}>Đăng xuất</li>
                </ul>
            </div>
            `;
    }
};

//đăng ký tài khoản 
var isRegister = false

function setIdUser() {
    let max = DataUsers[0].id;
    for (let i = 1; i < DataUsers.length; i++) {
        if (DataUsers[i].id > max) max = DataUsers[i].id;
    }
    return max + 1;
}


const registerUserFromClinet = (dataFromClinet) => {
    const user = {
        id: setIdUser(),
        isAdmin:    0,
        name: dataFromClinet.name,
        email: dataFromClinet.email2,
        password:  dataFromClinet.password,
        status : true,
        cartItems: [
        ],
    }
    isRegister = true
    DataUsers.push(user)
    console.log(currentLogin)
    saveItemInToLocalStorage('DataUsers', DataUsers)
    checkLogin(user)
}

const App = () => {
    showForm();
    showLoginAndRegister();
    setIcon();
}

document.addEventListener('DOMContentLoaded', () => App())
