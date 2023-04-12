const inputs = document.querySelectorAll('input')
const error = document.querySelectorAll('.error')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const btn = document.querySelector('button')
const err = document.getElementById('err')

// const failed = btn.disabled

btn.addEventListener('click', () => {
    inputs.forEach((input) => {
        if(input.value === ''){
            error.forEach((errr) => {
                errr.innerText = "Can't be blank!"
            })
        }
    })
})

confirmPassword.addEventListener('input', () => {
    if(password.value === confirmPassword.value){
        err.innerText = ''
    } else {
        err.innerText = 'Password do not match'

    }
})