/**
 * Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица.
 *
 * @param {number} n
 *
 */
function multiplicationTable(n) {
   let headerStr = "";
   for (let i = 0; i <= n; i++) {
      if (!i) headerStr += `\t`;
      else headerStr += `${i}\t`;
   }
   console.log(headerStr)

   for (let i = 1; i <= n; i++) {
      let str = "";
      for (let j = 0; j <= n; j++) {
         if (!(i * j)) str += `${i}\t`;
         else str += `${i * j}\t`;
      }
      console.log(str);
   }
}
multiplicationTable(5);