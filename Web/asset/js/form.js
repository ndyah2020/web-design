
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
    const showLogin = () => loginModal.classList.add('open');
    const hideLogin = () => loginModal.classList.remove('open');
    
    
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
}

// hiển thị form login và đăng ký khi chọn
const showForm = () => {
    const selectedItem = document.querySelectorAll('.tab-item');
    const  selectedForm = document.querySelectorAll('.tab-pane');

    selectedItem.forEach((selected, index) => {
        selected.addEventListener('click', function(){
            selectedItem.forEach((item) => item.classList.remove('active'));
            selectedForm.forEach((form) => form.classList.remove('active'));

            selected.classList.add('active')
            selectedForm[index].classList.add('active');
        })
    }) 
}

const checkInputs = () => {
    
    function Validator(options) {

        const validate = (inputElement, rule) => {

            const errorElement = inputElement.parentElement.parentElement.querySelector(options.errorSelector);
            const errorMessage = rule.test(inputElement.value);

            if (errorMessage) {

                errorElement.innerText = errorMessage;
                inputElement.classList.add('errorInput');
            } else {

                errorElement.innerText = '';
                inputElement.classList.remove('errorInput');
            }
        
            inputElement.addEventListener('input', () => {
                
                errorElement.innerText = '';
                inputElement.classList.remove('errorInput');    
            });
        };

        const formElement = document.querySelector(options.form)
        if(formElement){
    
            options.rules.forEach((rule) => {

                const inputEmlement = formElement.querySelector(rule.selector)
                
                if(inputEmlement){
                    inputEmlement.addEventListener('blur', () => 
                        validate(inputEmlement,rule)
                    ) 
                }
    
            })
        }
    }
    
    //Kiểm tra có nhập vào dữ liệu không
    Validator.isRequired = (selector, message) => ({
        selector: selector,
        test: (value) => value.trim() ? undefined : message || "Vui lòng nhập trường này"
    })

    //Kiểm tra định dạng email
    Validator.isEmail = (selector, message) => ({
        selector: selector,
        test: (value) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || "Trường này phải là email"
        }
    })
    //Kiểm tra password phải trên 6 ký tự
    Validator.isPassword = (selector, min, message) => ({
        selector: selector,
        test: (value) => value.length >= min ? undefined : message || `Password phải ${min} trở lên`
    })
    //Kiểm tra password Comfime phải giống với password
    Validator.isComfimer = (selector, getComfirmValue, message) => ({
        selector: selector,
        test: (value) => value === getComfirmValue() ? undefined : message || 'Giá trị nhập vào không trùng khớp'
    })

    //Kiểm tra input đăng ký
    Validator({
        form: '#form-2',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#name'),
            Validator.isEmail('#email2'),
            Validator.isPassword('#password2', 6),
            Validator.isComfimer(
                '#password_confirmation', 
                () => document.querySelector('#form-2 #password2').value, 
                'Mật khẩu không trùng khớp'
            )
        ]
    })
    //Kiểm tra input đăng nhập
    Validator({
        form: '#form-1',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email1'),
            Validator.isPassword('#password1'),
        ]
    })
}


document.addEventListener('DOMContentLoaded', () => {
    showForm();
    showLoginAndRegister();
    checkInputs();
})
