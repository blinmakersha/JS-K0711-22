// Напишите функцию, которая принимает строку и возвращает эту строку, написанную в обратном порядке. Например: "JavaScript" → "tpircSavaJ"

function task_1(letter) {
  return letter.split("").reverse().join("");
}

console.log(task_1("JavaScript"));
