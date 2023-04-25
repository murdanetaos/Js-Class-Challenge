function filterEven(x){
    return numbers.filter(function (numbers){
      return  numbers % 2 == 0
});

}

let numbers = [1,2,3,4,5,6]
let evenNumbers = filterEven(numbers)
console.log(evenNumbers)