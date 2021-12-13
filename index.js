const Benchmark = require("benchmark");
const { linearSearch, binarySearch } = require("./code/search");

//create my arr
const array = [];
for (let i = 1; i <= 1000000; i++) {
  // populate the array with the numbers 1 to 1,000,000
  array.push(i);
}

//find last number, 1000000
//const target = array[array.length - 1];
//find first num
const target = array[0];

const suite = new Benchmark.Suite();
suite
  .add("linear search test", function () {
    linearSearch(array, target);
  })
  .add("binary search", function () {
    binarySearch(array, target, 0, array.length - 1);
  })

  .on("complete", function () {
    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();
