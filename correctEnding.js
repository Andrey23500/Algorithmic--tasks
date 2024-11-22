/**
 * Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа.
 *
 * @param {number} n
 *
 * @example
 *   25 => "25 компьютеров"
 *   41 => "41 компьютер"
 *   1048 => "1048 компьютеров"
 */
function correctEnding(n) {
   const forms = ['', 'а', 'ов'];
   const comp = "компьютер";
   let correctStr = "";

   if (n % 10 == 1 && n % 100 != 11) correctStr = comp + forms[0];
   else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      correctStr = comp + forms[1];
   }
   else correctStr = comp + forms[2];

   return n + " " + correctStr;
}
