function factors(number) {
  var factorsOfNumber = [];
  for (var i = number; i > 0; i--) {
    if (number % i === 0) {
      factorsOfNumber.push(i);
    }
}
console.log(factorsOfNumber);
}

factors(144);
