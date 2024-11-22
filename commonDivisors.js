/**
 * Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе.
 *
 * @param {array} arr
 *
 * @example
 *   [42, 12, 18] =>  [2, 3, 6]
 */
function commonDivisors(arr) {
   const min = Math.min(...arr);
   const divisors = [];
   for (let i = 2; i <= min; i++) {
      let flag = true;
      for (let j = 0; j < arr.length; j++) {
         if (arr[j] % i != 0) {
            flag = false;
            break;
         }
      }
      if (flag) divisors.push(i)
   }

   return divisors;
}