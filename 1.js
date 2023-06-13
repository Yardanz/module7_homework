// Написать, функцию, которая принимает в качестве аргумента объект и выводит 
// в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
  str1: 'str',
  str2: '1',
  2: 2,
  obj1: {
    obj2: 'obj2'
  }
}

function ownProp(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key, obj[key])
  }
}
ownProp(obj)