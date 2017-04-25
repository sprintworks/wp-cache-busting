
import 'babel-polyfill'

function add(a, b, ...more) {
  return a + b + more.reduce((i, j) => i + j, 0);
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4)); // 10