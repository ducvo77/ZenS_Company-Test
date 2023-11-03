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
