// Создайте функцию, которая генерирует случайный цвет в формате HEX (например, "#A3E12F").
// Объясните, как работает генерация HEX-кода

function task_8() {
  const hexDigits = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(task_8());

// HEX - база из 16 значений. Для генерации HEX-кода используется циклический перебор всех возможных значений.
