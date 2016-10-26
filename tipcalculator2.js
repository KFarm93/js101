function totalAmount(bill, serviceLvl) {
  if (serviceLvl == 'good') {
    return bill * 0.2 + Number(bill) + '$';
  }
  else if (serviceLvl == 'fair') {
    return bill * 0.15 + Number(bill) + '$';
  }
  else if (serviceLvl == 'bad') {
    return bill * 0.1 + Number(bill) + '$';
  }
}

console.log(totalAmount('100.00', 'good'));
