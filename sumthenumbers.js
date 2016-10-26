function sumNumbers(array) {
  var howManyNumbers = array.length;
  var count = 1;
  var sum = 0;
  while (count <= howManyNumbers) {
    sum = sum + array[count - 1];
    count++;
  }
  console.log(sum);
}

sumNumbers([1, 4, 8]);
