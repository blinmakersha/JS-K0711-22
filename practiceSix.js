// Напишите функцию, которая принимает число и возвращает true, если оно простое, и false, если нет.
// Число считается простым, если оно больше 1 и делится только на 1 и само на себя.

function task_6(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(task_6(5));
