const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementsByClassName('login-btn');
const usernameErr = document.getElementById('usernameErr');
const passwordErr = document.getElementById('passwordErr');
const userForm = document.getElementById('userForm');

const userData = {
    username: "mayukhdevan   ",
    password: "Mayukh@123"
}

const usernameValidation = () => {
    if (username.value.length === 0) {
        usernameErr.textContent = '*Required';
    }
    else {
        usernameErr.textContent = "";
    }
};

const passwordValidation = () => {
    const errorPara = document.createElement('p');
    if (password.value.length === 0) {
        passwordErr.textContent = '*Requried';
    }
    else {
        passwordErr.textContent = "";
    }
};

username.addEventListener('blur', usernameValidation);
password.addEventListener('blur', passwordValidation);

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (username.value.length === 0) {
        usernameValidation();
        return
    }
    else if (password.value.length === 0) {
        passwordValidation();
        return
    }
    else if (username.value.toLowerCase().trim() !== userData?.username.toLocaleLowerCase().trim()) {
        console.log("Incorrect username!")
        return
    }
    else if (password.value.toLocaleLowerCase().trim() !== userData?.password.toLocaleLowerCase().trim()) {
        console.log("Incorrect password!")
        return
    }
    console.log("Success!!!")
});

console.log(window)