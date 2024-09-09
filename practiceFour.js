// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа. Например: [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function task_4(list) {
  cleanList = [];
  for (let item = 1; item <= list.length; item++) {
    if (list[item] % 2 == 0) {
      cleanList.push(list[item]);
    }
  }

  return cleanList;
}

console.log(task_4([1, 2, 3, 4, 5, 6]));
