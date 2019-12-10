document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitButton = document.querySelector('form')
  submitButton.addEventListener('submit', submitTask)  
});

let liTotal = 0
let buttonTotal = 0

function addTask(description) {
  let liEl = document.createElement('li')
  let button = document.createElement('button')
  let ulEl = document.querySelector('ul#tasks')
  
  liEl.innerText = description
  button.id = uniqueButtonId(button)
  button.addEventListener('click', removeTask)

  ulEl.appendChild(liEl)
  liEl.id = uniqueId(liEl)
  liEl.appendChild(button)
}

function submitTask(event) {
  event.preventDefault()
  let descriptionEl = document.querySelector('#new-task-description').value
  addTask(descriptionEl)
  event.target.reset()
}

function uniqueId(liEl) {
  liTotal += 1
  liEl.id = liTotal
  return "li-" + liEl.id
}

function uniqueButtonId(buttonEl) {
  buttonTotal += 1
  buttonEl.id = buttonTotal
  return "btn-" + buttonEl.id
}

function removeTask(event) {
  event.preventDefault()
  event.target.parentElement.remove()
}
