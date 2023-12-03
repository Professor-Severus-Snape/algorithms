"use strict";

/**
 * Вычисление факториала числа методом рекурсии.
 * @param {number} number число, факториал которого требуется вычислить
 * @returns {number|string} Факториал числа или строку с подсказкой.
 */
function factorial(number) {
  if (number < 0) {
    return "Number must be positive";
  }

  // (условие выхода из рекурсии) ? базовый случай : рекурсивный случай
  return (number == 0 || number == 1) ? 1 : number * factorial(number - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(3)); // 3! = 1*2*3 = 6
console.log(factorial(6)); // 6! = 1*2*3*4*5*6 = 720
console.log(factorial(7)); // 7! = 1*2*3*4*5*6*7 = 5040
console.log(factorial(170)); // 170! = 7.257415615307994e+306
console.log(factorial(171)); // 171! = Infinity
console.log(factorial(-1)); // "Number must be positive"
