export function sayHello(name) {
  console.info(`Hello ${name}`);
}

export function sayGoodBye(name) {
  console.info(`Good Bye ${name}`);
}

export const name = "Eko";

// kita gunakan export supaya JS nya bisa di import ke file html yg pake module
// disini say.js untuk file with-module.html
