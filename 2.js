// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
// переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
    str1: 'str',
    str2: '1',
    2: 2,
    obj1: {
      obj2: 'obj2'
    }
  }
  
  function checkProp(prop, obj) {
    if(prop in obj){
      return true
    }else{
      return false
    }
  }
  
  console.log(checkProp('str1', obj))
  console.log(checkProp('str3', obj))