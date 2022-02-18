// функц зарлаад max нэр өгөөд- 2 утга авна . - тооны ихийг нь буцаана

let number1 = parseInt(prompt("number1"));
let number2 = parseInt(prompt("number2"));

function maximum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maximum(number1, number2));
