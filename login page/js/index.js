// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInput();
// })


// function checkInput() {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
//     if (usernameValue === '') {
//         setErrorFor(username, 'Username cannot be blank')
//     } else {
//         setSuccessFor(username)
//     }

//     if (emailValue === '') {
//         setErrorFor(email, 'Email cannot be blank')
//     } else {
//         setSuccessFor(email)
//     }

//     if (passwordValue === '') {
//         setErrorFor(password, 'Password cannot be blank')
//     } else if (passwordValue !== password2Value)
//         setErrorFor(password, 'Passwords does not match')
//     else {
//         setSuccessFor(password)
//     }


//     if (password2Value === '') {
//         setErrorFor(password2, 'Password2 cannot be blank')
//     } else {
//         setSuccessFor(password2)
//     }
// }

// function setErrorFor(input, massage) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');

//     small.innerHTML = massage;

//     formControl.className = 'form-control error'
// }


// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }







// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close_btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
//     social_panel_container.classList.toggle('visible');
// })




let bir = {
    jamshid: "Jamshid",
    shahboz: "Shahboz"
}
let ikki = {
    age: 16,
    age2: 20
}
let chiq = Object.assign.bir(ikki)
console.log(chiq);