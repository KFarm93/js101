function printSquare(x, y) {
  var stars = '';
  for (count = 1; count <= x; count++) {
    stars = stars + '*';
  }
  for (count = 1; count <= y; count++) {
    console.log(stars);
  }
  }

printSquare(5, 5);
