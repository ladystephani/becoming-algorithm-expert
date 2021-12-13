function twoNumberSum(array, targetSum) {
  for (i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (j = 0; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum && i !== j) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
//module.exports = twoNumberSum;
