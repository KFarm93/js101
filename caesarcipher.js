function cipher(string) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var splitString = string.split("");
  function indexGrab(i) {
    splitString.findIndex(i);
  }
  var listIndex = splitString.forEach(indexGrab);
  console.log(listIndex);
  }




cipher('Test');
