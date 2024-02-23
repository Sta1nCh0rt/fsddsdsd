//? task 1
function sumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}
let numbersArray = [1, 2, 3, 4, 5];
console.log(sumArr(numbersArray))


//? task 2
let car = {
    marka: 'Toyota',
    model: 'Camry',
    year: 2019,
}
console.log(car);


//? task 3
function even(num) {
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(even(6));


//? task 4
function music(arrStr) {
    for (let i = 0; i < arrStr.length; i++) {
        console.log(`I love ${arrStr[i]} music`);
    }
}
const musicGenres = ["Rock", "Pop", "Hip Hop", "Jazz", "Classical", "Electronic", "R&B", "Country", "Reggae", "Metal"];
music(musicGenres);


//? task 5
function calc(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2
    }
    else if (operator == '-') {
        return num1 - num2
    } else if (operator == '*') {
        return num1 * num2
    } else if (operator == '/') {
        return num1 / num2
    }

}
console.log(calc(5, 2, '+'));

// ? task 
function onlyEven(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);

            newArr.push(array[i])

        }
    } return newArr
}
let hi = [2, 4, 6, 9, 8, 10, 11, 12, 13, 14, 16]
console.log(onlyEven(hi))


//? task 6
let person = {
    lastName: 'Smith',
    age: 25,
    mail: 'smith@gmail.com'
}
function showPersonInfo(obj) {
    for (let key in obj) {
        console.log(`The ${key} is ${obj[key]}`);
    }
}
showPersonInfo(person)

//? task 7
function thisFunctionDoSomethingThatIDoNotKnow(n) {
    for (let i = 0; i < 11; i++) {
        console.log(n * i);
    }
    return n
}
thisFunctionDoSomethingThatIDoNotKnow(5)

//? task 8 
let products = [{
    itemName: 'Bread',
    price: 10,
    quanity: 50
}, {
    itemName: 'Apple',
    price: 20,
    quanity: 30
},
{
    itemName: 'Chicken',
    price: 50,
    quanity: 10
}, {
    itemName: 'Milk',
    price: 15,
    quanity: 20
}, {
    itemName: 'Cucumber',
    price: 40,
    quanity: 15
}
]
function findMostExpensiveProduct(products) {
    let mostExpensiveProduct = products[0];
    for (let i = 0; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
  
    return mostExpensiveProduct;
  }
  
  function direction(products) {
    const mostExpensiveProduct = findMostExpensiveProduct(products);
    console.log(`Наиболее дорогой товар: ${mostExpensiveProduct.itemName} - ${mostExpensiveProduct.price}`);
  }
  
  direction(products);
  