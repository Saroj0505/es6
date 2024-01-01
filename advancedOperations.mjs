// Exercise 6
export function repeatString(str, n) {
    let repeatedString = "";
    for (let i = 0; i < n; i++) {
      repeatedString += str;
    }
    return repeatedString;
  }
  
  // Exercise 7
 export class Shape {
    describe() {
      return "This is a Shape.";
    }
  }
  
  export class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    describe() {
      return `This is a Circle with radius ${this.radius} and area ${Math.PI * this.radius ** 2}.`;
    }
  }
  
 class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    describe() {
      return `This is a Square with side ${this.side} and area ${this.side ** 2}.`;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    describe() {
      return `This is a Triangle with base ${this.base}, height ${this.height}, and area ${(this.base * this.height) / 2}.`;
    }
  }
  
  // Exercise 8
  export function delayedHello() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello');
      }, 2000);
    });
  }
  
  // Exercise 9
 export function filterEvens(numbers) {
    const evens = [];
    for (const num of numbers) {
      if (num % 2 === 0) {
        evens.push(num);
      }
    }
    return evens;
  }
  