function tipAmount(bill, serviceLvl) {
  if (serviceLvl == 'good') {
    return bill * 0.2 + '$';
  }
  else if (serviceLvl == 'fair') {
    return bill * 0.15 + '$';
  }
  else if (serviceLvl == 'bad') {
    return bill * 0.1 + '$';
  }
}

console.log(tipAmount('10.00', 'bad'));
