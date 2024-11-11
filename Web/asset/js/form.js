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
const CheckRegister = new Validator({
    form: '#form-2',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#name'),

        Validator.isRequired('#email2'),
        Validator.isEmail('#email2'),

        Validator.isRequired('#password2'),
        Validator.isPassword('#password2', 6),
        
        Validator.isRequired('#password_confirmation'),
        Validator.isComfimer(
            '#password_confirmation', 
            () => document.querySelector('#form-2 #password2').value, 
            'Mật khẩu không trùng khớp'
        ),
    ],
    onSubmit: (data) => {
        console.log(data)
    }
});
//Kiểm tra input đăng nhập

const CheckLogin = new Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#email1'),
        Validator.isEmail('#email1'),
    
        Validator.isRequired('#password1'),
        Validator.isPassword('#password1', 6),
    ],
    onSubmit: (data) => {
        checkLogin(data)
    }
});
  

const saveUserInToLocalStorage = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data));



const getUserFromLocalStorage = (listData) => {
    const dataUser = JSON.parse(localStorage.getItem(listData));
    if (!dataUser) {
        return null;
    }
    return dataUser;
}
var currentLogin = getUserFromLocalStorage('currentLogin');

saveUserInToLocalStorage('DataUsers', DataUsers)



const checkLogin = (dataFromInputLogin) =>{
    // currentLogin = null; 
    const getDataUser = getUserFromLocalStorage('DataUsers');

    if(getDataUser){
        getDataUser.forEach((data) => {
            if(dataFromInputLogin.email1 === data.email && dataFromInputLogin.password === data.password){
                currentLogin = data
            }
            if(currentLogin){
                saveUserInToLocalStorage('currentLogin', currentLogin)
                return;
            }
        });
        if(!currentLogin)
           document.querySelector('.loginError').innerHTML = `Tài khoản hoặc mật khẩu không chính xác!`
        else{
            alert('Đăng nhập thành công')
            currentLogin.isAdmin ? window.location = "./admin.html" : window.location = "./index.html"
        }
    }
}

const logoutUser = () => {
    const iconUser = document.querySelector('.iconUser');
    iconUser.innerHTML = `<img src="./asset/images/header-user.svg" alt="" class="icon-user" />`
    saveUserInToLocalStorage('currentLogin', null)
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

const App = () => {
    showForm();
    showLoginAndRegister();
    setIcon();
    checkAdmin();
}

document.addEventListener('DOMContentLoaded', () => App())
