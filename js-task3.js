//jshint esversion:6

const output = [];

function yugioh (num){
  for (i=1; i<=num; i++){
    if (i%2 === 0 && i%3 === 0 && i%5 === 0){
      output.push("yu-gi-oh");
    }
    else if (i%2 === 0 && i%5 === 0) {
      output.push("yu-oh");
    }
    else if (i%3 === 0 && i%5 === 0) {
      output.push("gi-oh");
    }
    else if (i%2 === 0 && i%3 ===0) {
      output.push("yu-gi");
    }
    else if (i%2 ===0) {
      output.push("yu");
    }
    else if (i%3 === 0) {
      output.push("gi");
    }
    else if (i%5 === 0) {
      output.push("oh");
    }
    else{
      output.push(i);
    }
  }
  console.log(output);
}

yugioh(100);

yugioh(35);
