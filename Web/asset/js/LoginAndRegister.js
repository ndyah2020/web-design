let DataUsers = localStorage.getItem('DataUsers') ? JSON.parse(localStorage.getItem('DataUsers')) : [
    {
        id:         1,
        isAdmin:    1,
        name: "",
        email:      'admin123@gmail.com',
        password:   'admin123',
        cartItems: [
        ],
    },
    {
        id:         2,
        isAdmin:    0,
        name: "",
        email:      'client@gmail.com',
        password:   '123123',
        cartItems: [
        ],
    },
];

//Hiển thị login khi ấn vào icon
const showLoginAndRegister = () => {
    const iconLogin = document.querySelector('.icon-user');
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
    onSubmit: (dataFromClinet) => {
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
  

const saveItemInToLocalStorage = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data));


const getItemFromLocalStorage = (listData) => {
    const dataUser = JSON.parse(localStorage.getItem(listData));
    if (!dataUser) {
        return null;
    }
    return dataUser;
}
var currentLogin = getItemFromLocalStorage('currentLogin');

saveItemInToLocalStorage('DataUsers', DataUsers)


const checkLogin = (dataFromInputLogin) => {
    const getDataUser = getItemFromLocalStorage('DataUsers');
    currentLogin = getDataUser.find((data) => dataFromInputLogin.email === data.email && dataFromInputLogin.password === data.password);
    
    if (currentLogin) {
        saveItemInToLocalStorage('currentLogin', currentLogin);
        isRegister ?  alert('Đăng ký thành thành công') : alert('Đăng nhập thành công');

        if (currentLogin.isAdmin) {
            window.location = "./admin.html";
        }else{
            window.location.pathname.endsWith("details.html")
                ?window.location.reload()
                :window.location = "./index.html"   
        }
        
    } else {
        document.querySelector('.loginError').innerText = "Mật khẩu không chính xác";
    }
};

const logoutUser = () => {
    const iconUser = document.querySelector('.iconUser');
    iconUser.innerHTML = `<img src="./asset/images/header-user.svg" alt="" class="icon-user" />`
    saveItemInToLocalStorage('currentLogin', null)
    window.location = "./index.html"
}

const setIcon = () => {
    const iconUser = document.querySelector('.iconUser');
    if (currentLogin) {
        iconUser.innerHTML = `<img src="./asset/images/admin-logout-icon.svg" alt="" class="icon-logout" onclick="logoutUser()"/>`;
    }
};

const checkAdmin = () => {
    if (window.location.pathname.endsWith("admin.html")) {
        if (!currentLogin || currentLogin.isAdmin !== 1) {
            window.location.href = "./*";
        }
    }   
}
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
        cartItems: [
        ],
    }
    isRegister = true
    DataUsers.push(user)
    saveItemInToLocalStorage('DataUsers', DataUsers)
    checkLogin(user)
}

const App = () => {
    showForm();
    showLoginAndRegister();
    setIcon();
    checkAdmin();
}

document.addEventListener('DOMContentLoaded', () => App())