var thing = "";
for(i = 1; i < 8; i++) {
  console.log(thing += "#");
}

for(i = 1; i <= 100; i++) {
  if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if(i % 3 == 0) {
    console.log("Fizz");
  }
  else if(i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

var size = 8;
var line = "";
for(i = 0; i < size; i++) {
  for(j = 0; j < size; j++) {
    if((i + j) % 2 == 0) {
      line += ' ';
    } else {
      line += "#";
    }
  }
  line += "\n";
}
console.log(line);
