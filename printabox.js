function printBox(x, y) {
  var stars = '';
  var row = '*';
  var space = ' ';
  count1 = 1;
  count2 = 1;

  // Top
  while (count1 <= x) {
    stars = stars + '*';
    count1++;
  }
  console.log(stars);

  // Body
  while (count2 < x - 1) {
    row = row + space;
    count2++;
  }

  // Cap *
  if (count2 == x - 1) {
    row = row + '*';
  }

  for (count3 = 1; count3 <= (y - 1); count3++) {
    console.log(row);
  }

  // Bottom
  console.log(stars);

}

printBox(5, 5);
