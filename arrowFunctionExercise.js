function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

function doubleES2015(arr) {
    return arr.map(val => val * 2)
  }

console.log(double([2,4,5]));
console.log(doubleES2015([2,4,5]));

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

function squareAndFindEvensES2015(numbers){
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0)
    return evens;
}

console.log(squareAndFindEvens([1,2,3,4]));
console.log(squareAndFindEvensES2015([1,2,3,4]));