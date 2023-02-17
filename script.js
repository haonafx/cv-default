contactInfo = document.querySelector(`.contact-info`)
contactInfo.classList.add('d-none')
inputInfo = document.querySelector(`.input-info`)

const warning = document.querySelector(`.warning`)
const email = document.querySelector(`.email`)
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const submit = document.querySelector(`.submit`)
submit.addEventListener(`click`, function () {
  if (!regex.test(email.value)) {
    warning.textContent = `Please input valid Email`
    warning.classList.remove(`text-light`)
    warning.classList.add(`text-warning`)
    setTimeout(() => {
      warning.classList.remove(`text-warning`)
      warning.classList.add(`text-light`)
      warning.textContent = `Hãy nhập email để xác nhận`
    }, 1000)
  } else {
    contactInfo.classList.remove(`d-none`)
    inputInfo.classList.add(`d-none`)
  }
})

// Education view-more view-less
const bodies = document.querySelectorAll(`.body`)
const view = document.querySelectorAll(`.view-more`)
bodies.forEach((body) => {
    body.classList.add(`d-none`)
    body.parentElement.addEventListener(`mouseover`, function() {
      body.nextElementSibling.classList.remove('d-none')
    })
    body.parentElement.addEventListener(`mouseout`, function() {
      body.nextElementSibling.classList.add('d-none')
    })
    body.parentElement.addEventListener(`click`, function() {
      if (body.classList.contains('d-none')) {
        body.classList.remove('d-none')
        body.nextElementSibling.textContent = "VIEW LESS"
      } else {
        body.classList.add('d-none')
        body.nextElementSibling.textContent = "VIEW MORE"
      }
    })
})




