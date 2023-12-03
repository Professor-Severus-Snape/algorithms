"use strict"

const unsortedArr = [5, 3, 4, 1, 2];

/**
 * Поиск индекса наименьшего элемента в массиве.
 * @param {array} arr неотсортированный массив
 * @returns {number} Индекс наименьшего элемента в массиве.
 */
function findSmallestIndex(arr) {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Сортировка выбором. Медленный алгоритм. Сложность - O(n&#0178;).
 * @param {array} arr неотсортированный массив
 * @returns {array} Отсортированный по возрастанию массив.
 */
function selectionSort(arr) {
  let sortedArr = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    let smallestIndex = findSmallestIndex(arr);
    sortedArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArr;
}

console.log(selectionSort(unsortedArr)); // [1,2,3,4,5]
