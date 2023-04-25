function filterEven(numbers){
    return numbers.filter(function (number){
      return number % 2 === 0 && number >= 0;
    });
  }

let numbers = [-1,-2,-3,4,-5,6]
let evenNumbers = filterEven(numbers)
console.log(evenNumbers)