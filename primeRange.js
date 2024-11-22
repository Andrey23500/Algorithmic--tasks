/**
 * Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
 *
 * @param {number} min
 * @param {number} max
 *
 * @example
 *   11, 20 => [11, 13 , 17, 19]
 */
function isPrime(n) {
   if (n <= 1) return false;
   for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
   }
   return true;
}

function primeRange(min, max) {
   let primeNum = [];
   for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
         primeNum.push(i);
      }
   }
   return primeNum;
}
