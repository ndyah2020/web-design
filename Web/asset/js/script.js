
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
    const  selectedForm = document.querySelectorAll('.tab-pane')
    selectedItem.forEach((selected, index) => {
        selected.addEventListener('click', () => {

            selectedItem.forEach((item) => item.classList.remove('active'))

            selected.classList.add('active')
            
            selectedForm.forEach( (form) => form.classList.remove('active'))
            selectedForm[index].classList.add('active');
        })
    }) 
}
document.addEventListener('DOMContentLoaded', () => {
    showForm()
})
