"use strict"

const sortedArr = [1, 3, 5, 7, 9];

/**
 * Бинарный поиск индекса элемента в отсортированном по возрастанию массиве.
 * @param {array} arr отсортированный по возрастанию массив
 * @param {number} item элемент, индекс которого требуется найти
 * @returns {number} Индекс найденного элемента или -1, если элемент в массиве не найден.
 */
function binarySearch(arr, item) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    let avgIndex = Math.floor((minIndex + maxIndex) / 2);
    let guess = arr[avgIndex];

    if (guess === item) {
      return avgIndex;
    } else if (guess > item) {
      maxIndex = avgIndex - 1;
    } else {
      minIndex = avgIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch(sortedArr, 1)); // 0
console.log(binarySearch(sortedArr, 7)); // 3
console.log(binarySearch(sortedArr, -1)); // -1
