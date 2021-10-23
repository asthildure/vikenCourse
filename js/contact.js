const elForm = document.getElementById('contact-form')
const elFormResult = document.getElementById('form-result')

const formValues = {} // Javascript Object
let formErrors = [] // Empty Array

elForm.addEventListener('submit', function (event) {
  event.preventDefault()

  formErrors = []
  updateFormResult()

  const formData = new FormData(elForm)

  for (const [name, value] of formData) {
    if (!value) {
      // Adding a new item to the Array
      formErrors.push(name + ' is a required field')
    } else {
      formValues[name] = value
    }
  }

  if (formErrors.length) {
    // Check if there are errors
    formErrors = formErrors.map((error) => `<p class="mb-0">${error}</p>`)

    const resultHTML = `
            <h4>Error</h4>
            ${formErrors.join('')}    
        `
    updateFormResult('alert alert-danger', resultHTML)
  } else {
    const resultHTML = `
            <h4>Success</h4>
            <p>Your message has been sent! Thank you</p>
        `
    updateFormResult('alert alert-success', resultHTML)
  }
})

function updateFormResult(className = '', innerHTML = '') {
  elFormResult.className = className
  elFormResult.innerHTML = innerHTML
}
