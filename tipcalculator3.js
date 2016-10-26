function splitAmount(bill, serviceLvl, splitBetween) {
  if (serviceLvl == 'good') {
    return (bill * 0.2 + Number(bill)) / Number(splitBetween) + '$';
  }
  else if (serviceLvl == 'fair') {
    return bill * 0.15 + Number(bill) / Number(splitBetween) + '$';
  }
  else if (serviceLvl == 'bad') {
    return bill * 0.1 + Number(bill) / Number(splitBetween) + '$';
  }
}

console.log(splitAmount('100.00', 'good', '3'));
