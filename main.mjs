// Import functions and classes from both modules
import { Profile, Cart, convertToFahrenheit, sumAll, splitArray } from './basicOperations.mjs';
import { repeatString, Circle, delayedHello, filterEvens } from './advancedOperations.mjs';

// Example usage
const profile = new Profile("Thapa Gokul", 20, "zengoku751333@gmail.com");
profile.showProfile();

const cart = new Cart();
cart.addProduct("Product A", 20);
cart.addProduct("Product B", 30);
console.log("Total Cart Price: $" + cart.getTotalPrice());

const fahrenheitValue = convertToFahrenheit(30);
console.log("30 Celsius is equal to " + fahrenheitValue + " Fahrenheit");

const sum = sumAll(1, 2, 3, 4, 5);
console.log("Sum of numbers: " + sum);

const array = [1, 2, 3, 4, 5];
const { first, second, rest } = splitArray(array);
console.log("First:", first, "Second:", second, "Rest:", rest);

const repeatedString = repeatString("Hello", 3);
console.log("Repeated String:", repeatedString);

const circle = new Circle(5);
console.log(circle.describe());

const delayedGreeting = async () => {
  const greeting = await delayedHello();
  console.log(greeting);
};
delayedGreeting();

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterEvens(numbers);
console.log("Even numbers:", evens);