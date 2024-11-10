
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
    const loginBlockModal = document.querySelector('.loginBlock');
    const closeBtn = document.querySelector('.closeLoginBlock img');
    
    if (iconLogin && loginModal && loginBlockModal && closeBtn) {
        const showLogin = () => loginModal.classList.add('open');
        const hideLogin = () => loginModal.classList.remove('open');

        iconLogin.addEventListener('click', showLogin);
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

const checkInputs = () => {
    const selectorRules = new Map();
    
    function Validator(options) {

        const validate = (inputElement, rule) => {

            const errorElement = inputElement.parentElement.parentElement.querySelector(options.errorSelector);

            const rules = selectorRules.get(rule.selector) || [];
            let errorMessage;
    
            for (const test of rules) {
                errorMessage = test(inputElement.value);
                if (errorMessage) break;
            }
            
            if (errorMessage) {

                errorElement.innerText = errorMessage;
                inputElement.style.border = '1px solid red'; 
            } else {

                errorElement.innerText = '';
                inputElement.style.border = ''; 
            }
        
            inputElement.addEventListener('input', () => {
                
                errorElement.innerText = '';
                inputElement.style.border = ''; 
            });
        };

        const formElement = document.querySelector(options.form)
        if(formElement){
    
            options.rules.forEach((rule) => {
                if(!selectorRules.has(rule.selector)){
                    selectorRules.set(rule.selector, [])
                }
                selectorRules.get(rule.selector).push(rule.test)

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
        test: (value) => value.length >= min ? undefined : message || `Password phải ${min} chữ số trở lên`
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

            Validator.isRequired('#email2'),
            Validator.isEmail('#email2'),

            Validator.isRequired('#password2'),
            Validator.isPassword('#password2', 6),
            
            Validator.isRequired('#password_confirmation'),
            Validator.isComfimer(
                '#password_confirmation', 
                () => document.querySelector('#form-2 #password2').value, 
                'Mật khẩu không trùng khớp'
            )
        ]
    })
    // Kiểm tra input đăng nhập
    Validator({
        form: '#form-1',
        errorSelector: '.form-message',
        rules: [
            Validator.isRequired('#email1'),
            Validator.isEmail('#email1'),

            Validator.isRequired('#password1'),
            Validator.isPassword('#password1', 6),
        ]
    })
    //form thêm sản phẩm của admin
    Validator({
        form: '#add-form',
        errorSelector: '.form-error',
        rules: [
            Validator.isRequired('#nameProduct'),
            Validator.isRequired('#price'),
        ]
    })
}


document.addEventListener('DOMContentLoaded', () => {
    showForm();
    showLoginAndRegister();
    checkInputs();
})
