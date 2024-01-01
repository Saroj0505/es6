// Exercise 1
export class Profile {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    showProfile() {
      console.log("Name: " + this.name + ", Age: " + this.age + ", Email: " + this.email);
    }
  }
  
  // Exercise 2
  export class Cart {
    constructor() {
      this.products = [];
    }
  
    addProduct(name, price) {
      this.products.push({ name: name, price: price });
    }
  
    removeProduct(name) {
      this.products = this.products.filter(product => product.name !== name);
    }
  
    getTotalPrice() {
      let total = 0;
      for (const product of this.products) {
        total += product.price;
      }
      return total;
    }
  }
  
  // Exercise 3
  export function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Exercise 4
 export function sumAll(...numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum;
  }
  
  // Exercise 5
  export function splitArray(arr) {
    const first = arr[0];
    const second = arr[1];
    const rest = arr.slice(2);
    return { first, second, rest };
  }
  