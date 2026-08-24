const emailInput = document.querySelector('form input')
const contactUsBtn = document.querySelector('#contact-us-btn')
const errorMessage = document.querySelector('#error-message')
const emailContainer = document.querySelector('form div')
contactUsBtn.addEventListener('click', function (event) {
    console.log(emailInput.validity.valid)
    if (!emailInput.validity.valid) {
        event.preventDefault()
        errorMessage.hidden = false
        emailContainer.classList.add('error')
        emailInput.classList.add('error-input')
        emailInput.addEventListener('input', function () {
            if (emailInput.validity.valid) {
                errorMessage.hidden = true
                emailContainer.classList.remove('error')
                emailInput.classList.remove('error-input')
            }
            else {
                errorMessage.hidden = false
                emailContainer.classList.add('error')
                emailInput.classList.add('error-input')
            }
        })
    }
})

const ftBtns = document.querySelectorAll('.feature-btns button')
const ftDivs = document.querySelectorAll('.sect2 .feature')
console.log(ftBtns, ftDivs)
ftBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        ftDivs.forEach((ft, ftindex) => {
            index === ftindex? ft.hidden = false: ft.hidden = true
            console.log(index, ftindex)
        })
    })
})

