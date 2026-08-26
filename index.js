const emailInput = document.querySelector('form input')
const contactUsBtn = document.querySelector('#contact-us-btn')
const errorMessage = document.querySelector('#error-message')
const emailContainer = document.querySelector('form div')
const errorIcon = document.querySelector('#error-icon')
contactUsBtn.addEventListener('click', function (event) {
    console.log(emailInput.validity.valid)
    if (!emailInput.validity.valid) {
        event.preventDefault()
        errorMessage.hidden = false
        errorIcon.hidden = false
        emailContainer.classList.add('error')
        emailInput.classList.add('error-input')
        emailInput.addEventListener('input', function () {
            if (emailInput.validity.valid) {
                errorMessage.hidden = true
                errorIcon.hidden = true
                emailContainer.classList.remove('error')
                emailInput.classList.remove('error-input')
            }
            else {
                errorMessage.hidden = false
                errorIcon.hidden = false
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
    btn.addEventListener('click', function () {
        ftBtns.forEach(bt => {
            bt.classList.remove('orange')
            this.classList.add('orange')
        })
        ftDivs.forEach((ft, ftindex) => {
            index === ftindex ? ft.hidden = false : ft.hidden = true
            btn
            console.log(index, ftindex)
        })
    })
})

const menuBtn = document.querySelector('#mobile-menu')
const menuBtnPath = document.querySelector('#mobile-menu path')
const mobileMenu = document.querySelector('.nav-right')
const logoCircle = document.querySelector('#logo circle')
const logoInnerIcon = document.querySelector('#logo path:nth-child(2)')
const logoText = document.querySelector('#logo path:nth-child(1)')
const mobileMenuSocialIcons = document.querySelector('#nav-right-icons')
menuBtn.addEventListener('click', function () {
    logoCircle.classList.toggle('white')
    logoText.classList.toggle('white')
    logoInnerIcon.classList.toggle('black')
    menuBtnPath.classList.toggle('white')
    mobileMenuSocialIcons.hidden = !mobileMenuSocialIcons.hidden
    mobileMenu.hidden = !mobileMenu.hidden
})