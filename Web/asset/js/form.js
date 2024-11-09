
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
];

if (!localStorage.getItem("DataUsers")) {
    localStorage.setItem("DataUsers", JSON.stringify(DataUsers));
}
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
document.addEventListener('DOMContentLoaded', () => {
    showForm();
    showLoginAndRegister();
})
