// Mini-Max Sum

function miniMaxSum(arr) {
  let minimumValue = arr[0];
  let maximumValue = arr[0];
  let minimumSum = arr[0];
  let maximumSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximumValue) {
      maximumValue = arr[i];
    }
    if (arr[i] < minimumValue) {
      minimumValue = arr[i];
    }
    minimumSum += arr[i];
    maximumSum += arr[i];
  }

  minimumSum -= maximumValue;
  maximumSum -= minimumValue;

  console.log(minimumSum, maximumSum);
}

miniMaxSum([1, 3, 5, 7, 9]);

// ----------------Bouns----------------
// + Count total of array
function CountTotalOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log("Tổng của array:", sum);
}
CountTotalOfArray([1, 2, 3, 4]);

// + Find min in array
function FindMinInArray(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Min của array:", min);
}
FindMinInArray([5, 2, 8, 2, 6]);

// + Find max in array
function FindMaxInArray(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Max của array:", max);
}
FindMaxInArray([5, 2, 8, 1, 6]);

// + Find even elements in array
function FindEvenElementsInArray(arr) {
  let evenArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }

  console.log("Số chẵn trong array:", evenArray);
}
FindEvenElementsInArray([0, 5, 2, 8, 1, 6]);

// + Find odd elements in array
function FindOddElementsInArray(arr) {
  let oddArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddArray.push(arr[i]);
    }
  }

  console.log("Số lẻ trong array:", oddArray);
}
FindOddElementsInArray([5, 2, 8, 1, 6]);
