function sumNumbers(array) {
  var howManyNumbers = array.length;
  var count = 1;
  var sum = 0;
  while (count <= howManyNumbers) {
    sum = sum + array[count - 1];
    count++;
  }
  return sum;
}

console.log(sumNumbers([1, 4, 8]));
