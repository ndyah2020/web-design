
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