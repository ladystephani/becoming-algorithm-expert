const linearSearch = (arr, targetNum) => {
  // if in array, return the index you found it at
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNum) {
      return i; //and leave the whole function
    }
  }

  //if not in array, return -1
  return -1;
};
//linearSearch([1,2,3], 2)
//switched some lines to console.log to test the case
//or could
console.log(linearSearch([1, 2, 3], 4)); //>> -1

const binarySearch = (arr, targetNum, left, right) => {
  //left, right and middle are index each element is at
  let middle = Math.floor((left + right) / 2);

  // if left and right are not passed in, can use the following
  // let left = 0;
  // let right = nums.length - 1;

  if (left > right) {
    return -1;
  }
  // got lucky already found it
  else if (targetNum === arr[middle]) {
    return middle;
  }
  // in the left side, then continue the search only in the left
  else if (targetNum < arr[middle]) {
    return binarySearch(arr, targetNum, left, middle - 1);
  }
  // same for right side
  else {
    return binarySearch(arr, targetNum, middle + 1, right);
  }
};

//binarySearch([1, 2, 3, 4, 5, 6, 7], 4, 0, 6);
module.exports = { linearSearch, binarySearch };
