// Написать функцию, которая создает пустой объект, но без прототипа.

function noPrototype() {
    return Object.create(null)
  }
  
  console.log(noPrototype())