function printBanner(text) {
  textLength = text.length;
  count = 1;
  stars = '';
  while (count <= Number(textLength) + 4) {
    stars = stars + '*';
    count++;
  }

  console.log(stars);
  console.log('* ' + text + ' *');
  console.log(stars);
}

printBanner('Welcome to DigitalCrafts!');
