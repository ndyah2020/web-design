var DataUsersAdmin = localStorage.getItem('DataUsersAdmin') ? JSON.parse(localStorage.getItem('DataUsersAdmin')) : [
    {
        id:         1,
        isAdmin:    1,
        name: "",
        email:      'admin@gmail.com',
        password:   '123123',
        status :   true,
    },
];

const CheckLoginFormAdmin = new Validator({
    form: '#form-admin',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#email1','Vui lòng nhập email để đăng nhập'),
        Validator.isEmail('#email1','Vui lòng nhập vào là email'),
    
        Validator.isRequired('#password1','Vui lòng nhập password'),
    ],
    onSubmit: (data) => {
        const dataUser = {
            id: data.id,
            isAdmin:    1,
            name: data.name,
            email: data.email1,
            password:  data.password,
        }
        checkLoginAdmin(dataUser)
    }
});


const saveItemInToLocalStorage = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data));


const getItemFromLocalStorage = (listItem) => {
    const item = JSON.parse(localStorage.getItem(listItem));
    if (!item) {
        return null;
    }
    return item;
}

var currentLoginAdmin = getItemFromLocalStorage('currentLoginAdmin');

saveItemInToLocalStorage('DataUsersAdmin', DataUsersAdmin)

const checkLoginAdmin = (dataFromInputLogin) => {
    const getDataUser = getItemFromLocalStorage('DataUsersAdmin');
    currentLoginAdmin = getDataUser.find((data) => dataFromInputLogin.email === data.email && dataFromInputLogin.password === data.password);
    if (currentLoginAdmin) {
        if(!currentLoginAdmin.status){
            document.querySelector('.loginError').innerText = "Tài khoản đã bị vô hiệu hóa";
            return;
        }
        alert('Đăng nhập thành công');
        saveItemInToLocalStorage('currentLoginAdmin', currentLoginAdmin);
        window.location = "./admin.html"
    } else {
        document.querySelector('.loginError').innerText = "Mật khẩu không chính xác";
    }
};

const hiddenFormLoginAdmin = () => {
    const pageAdmin = document.querySelector('.main-admin')
    const formLoginAmin = document.querySelector('.loginBackgroundAmin')
    if(currentLoginAdmin){
        pageAdmin.classList.remove('hidden')
        formLoginAmin.classList.add('hidden')
    }else{
        pageAdmin.classList.add('hidden')
        formLoginAmin.classList.remove('hidden')
    }
}

const logOutAdmin = () => {
    saveItemInToLocalStorage('currentLoginAdmin', null)
    window.location = "./admin.html"
}



document.addEventListener('DOMContentLoaded', () => {
    hiddenFormLoginAdmin()
})
