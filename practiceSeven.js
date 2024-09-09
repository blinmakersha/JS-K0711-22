// Напишите асинхронную функцию, которая делает запрос к публичному API и выводит данные в консоль.
// В случае ошибки запроса функция должна вывести сообщение об ошибке.

async function task_7() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error.message);
  }
}

task_7();
