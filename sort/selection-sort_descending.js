"use strict"

const unsortedArr = [5, 3, 4, 1, 2];

/**
 * Поиск индекса наибольшего элемента в массиве.
 * @param {array} arr неотсортированный массив
 * @returns {number} Индекс наибольшего элемента в массиве.
 */
function findBiggestIndex(arr) {
  let biggestElement = arr[0];
  let biggestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestElement) {
      biggestElement = arr[i];
      biggestIndex = i;
    }
  }

  return biggestIndex;
}

/**
 * Сортировка выбором. Медленный алгоритм. Сложность - O(n&#0178;).
 * @param {array} arr неотсортированный массив
 * @returns {array} Отсортированный по убыванию массив.
 */
function selectionSort(arr) {
  let sortedArr = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    let biggestIndex = findBiggestIndex(arr);
    sortedArr.push(arr.splice(biggestIndex, 1)[0]);
  }

  return sortedArr;
}

console.log(selectionSort(unsortedArr)); // [5, 4, 3, 2, 1]
