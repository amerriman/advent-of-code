//-------------------------------//
//                               //
// --- Day 1: Not Quite Lisp --- //
//                               //
//-------------------------------//

// Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

// Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Here's an easy puzzle to warm you up.

// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:

// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// To what floor do the instructions take Santa?

var directions = '()()(()()()(()()((()((()))((()((((()()((((()))()((((())(((((((()(((((((((()(((())(()()(()((()()(()(())(()((((()((()()()((((())((((((()(()(((()())(()((((()))())(())(()(()()))))))))((((((((((((()())()())())(())))(((()()()((((()(((()(()(()()(()(()()(()(((((((())(())(())())))((()())()((((()()((()))(((()()()())))(())))((((())(((()())(())(()))(()((((()())))())((()(())(((()((((()((()(())())))((()))()()(()(()))))((((((((()())((((()()((((()(()())(((((()(()())()))())(((()))()(()(()(()((((()(())(()))(((((()()(()()()(()(((())())(((()()(()()))(((()()(((())())(()(())())()()(())()()()((()(((()(())((()()((())()))((()()))((()()())((((()(()()(()(((()))()(()))))((()(((()()()))(()(((())()(()((()())(()(()()(()())(())()(((()(()())()((((()((()))))())()))((()()()()(())()())()()()((((()))))(()(((()()(((((((())()))()((((()((())()(()())(())()))(()(()())(((((((())))(((()))())))))()))())((())(()()((())()())()))))()((()()())(())((())((((()())())()()()(((()))())))()()))())(()()()(()((((((()()))())()))()(((()(((())((((()()()(()))())()()))))())()))())((())()())(((((())())((())())))(((())(((())(((((()(((((())(()(()())())(()(())(()))(()((((()))())()))))())))((()(()))))())))(((((())()))())()))))()))))(((()))()))))((()))((()((()(()(())()())))(()()()(())()))()((((())))))))(())(()((()()))(()))(()))(()((()))))))()()((((()()))()())()))))))()()()))(()((())(()))((()()()())()(((()((((())())))()((((()(()))))))())))()()())()))(()))))(()())()))))))((())))))))())()))()((())())))(()((()))()))(())))))(()))()())()()))((()(()))()()()()))))())()()))())(())()()))()))((()))))()()(()())))))()()()))((((()))()))))(()(())))(()())))((())())(()))()))))()())))()())()())))))))))()()))))())))((())((()))))())))(((()())))))))(()))()()))(()))()))))()())))))())((((()())))))))())))()()))))))))()))()))))()))))))(())))))))))())))))))))))))))())())((())))))))))()))((())))()))))))))())()(()))))))())))))()()()())()(()()()(()())(()))()()()(()())))())())))()))))())))))))()()()()())(())())()())()))))(()()()()()))))()))())())))((()())()())))()))()))))(()())))()))))))))(((()))()()))))))))))))))))))))(()))(()((()))())))())(()))(()(()(())))))()(()))()))()()))))))))))))()((()())(())())()(())))))())()())((()()))))(()()))))())()(())()))))))))))))))))))))()))(()(()())))))))()()((()))()))))))((())))()))))))))((()))())()()))())()()))((()))())))))))))))(()())()))(())((()(()()))(()())(())))()())(()(())()()))))()))()(()))))))(()))))))))))(()))())))))))))())))))())))(())))))()))))(())())))))))))()(()))))()())))())(()))()())))))))))))))())()()))))()))))))())))))()))))(())(()()()()((())()))())(()))((())()))())())(())(()()))))()))(())()()((())(())))(())))()))())))))))))()(((((())())))(())()))))(())))((()))()(((((((()))))()()))(())))))()(()))))(()()))()))())))))))(()())()))))))))())))(()))())()))(())()((())())()())())(()(()))))()))))))((()())(())()()(()())))()()))(())(())(()))())))()))(()))()()))((((()))))()))((()()()))))()))()))())))(()))()))))(())))()))())()(()))()())))())))))))())))())))()()))))))(()))())())))()))()()())())))))))))))))())))()))(()()))))())))())()(())))())))))))))))))))))()()())())))))()()()((()(()))()()(())()())()))()))))()()()))))))((()))))))))()(()(()((((((()()((()())))))))))))()))())))))((())())(()))())))())))))())()()())(())))())))()())())(())))))))()()(())))()))())))())())())()))))))))()))(()()()())())())))(())())))))))()()())()))))())))())()(())())))))))()())()))(()()(())())))()(()((()()((()()(((((())(()())()))(())()))(())))(())))))))()))()))((()))()))()))))))))()))))))))((()()())(()))(((()))(())))()))((())(((())))()())))())))))((())))))(())())((((((())())()(()))()(()((()())))((())()(()(()))))(())(()()())(())))())((()(((())())))(((()())())))())()(())())((((()()))))())((()))()()()()(())(((((((()()()((()))())(()())))(())())((((()()(()))))()((())))((())()))()(((()))())))()))((()(()))(())(()((((())((((()()(()()))(((())(()))))((((()(()))(())))))((()))(()))((()(((()(()))(()(()((()(())(()(()(()(()()((()))())(((())(()(()))))(()))()()))(())))(())()(((())(()))()((((()()))))())(()))))((())()((((()(((()))())())(((()))()())((())(())())(())()(())()(()()((((((()()))))()()(((()()))))()())()(((()(()))(()(()())(()(()))))(((((()(((())())))))(((((()((()()((())())((((((()(())(()()((()()()()()()()(()()))()(((()))()))(((((((())(((()((()())()((((())(((()(())))()((()(()()()((())((()())()))()))())))())((((((()))(()(()()()))(()((()(()(()))()((()(((()()()((())(((((())()(()))())())((()(())))(()(()())(())((())())())(((()()()(())))))())(()))))))()))))))())((()()()))((()((((((()))(((()((((()()()(((()))())()(()()(((()((()()()()())()()))()()()(()(())((()))))(()))())))))))()(()()(((((())()(()(((((()((()(()()())(()((((((((()((((((())()((((()()()((()((()((((((()))((())))))))())()))((()(()))()(()()(()((())((()()((((((((((((()())(()()()))((((()((((((())(()))())(()()((()()))()(((((((()((()()((((((()(((())))((())))((((((((()()(((((((())(((((()())(((())((())()((((()(((((((()(()(((()((((((()(((()(((((((((((()()((()()(()))((()()(((()(((())))((((())()(()(((())()(()(((())(((((((((((()))())))((((((())((()()((((()())())((((()()))((())(((((()(()()(()()()((())(()((()()((((()(((((()((()(()((((()())((((((()(((((()()(()(()((((())))(())(())(())((((()(()()((((()((((()()((()((((((())))(((((()))))()))(()((((((((()(((())())(((())))(()(()((())(((()((()()(((((()((()()(((())()(()))(((((((())(()(((((()))((()((()((()))(())())((((()((((())()(()))(((()(((((((((((((((())(((((((((()))(((()(()()()()((((((()((())()((((((((()(())(((((((((((()(()((())()((()()(()(()()((((()()((())(()((()()(()()((((()(((((((())))((((())(())()(((()()((()()((((()((()(((()((())(((()()()((((()((((()()(()(()((((((((())(()(((((())(()())(((((((()())()(()((((()((())(()()())((((()()(((()((((())(())(()()(((((((((()()))()(((())(()(()((((((())(()()())(()))()()(((()(((()((())(()(((((((()(()(()((()(((((()(()((()(()((((((()((((()()((((()(((()((())(()(()((()()((((()()(())()(())(((())(()((((((((()())(((((((((()(())()((((())))()))()()(((((()()((((((())(()()(((()(()(((((((()(()(((((((())(())((((()((()(())))((((()()())(()))((()())((((()(((((()(()(())(()(()()())(((((()(((((()((((()()((((((((()()))(()((((((())((((())()(()(((()()()(((()(()(())(())(((((()(())())((((())(())(()(((()(((((())((((())())((()(((((((()(((())(()(()))(((((((((()((()((()()(()((((())(((()((())((((())(()(((()(((()(()((((()(((())(()(((()(()()(()(()((()()(()())(())())((()(()(((()(((()(((()()(((((((((()(((((((((()()(((()(((()())((((()(()(((()()()((())((((((((((())(()(((()((((()())((((()((()))(((()()()(((((()(((((((())((()())(()((((())((((((((())(()((()((((((((((()()((()((()()))(((()())()())()(((()())()()(()(()(((((((())()))(())()))())()()((())()((()((((()((()((())(((((()((((((()(())))(()))())(((()))((()()(()(((()))((((())()(((()))))()(()(())()(((((())(()(()(())(())()((()()()((((()(())((()())(()(()))(()(()(()()(())()()(()((())()((()))))()))((()(()()()()((()())(()))())()(()(((((((((())())((()((()((((((())()((((())(((())((()(()()()((())(()((())(((()((((()()((()(()(((((())()))()((((((()))((())(((()()))(((())(())()))(((((((())(())())()(())(((((()))()((()))()(()()((()()()()()())(((((((';


function deliverPresents(input){
  var singleDirections = input.split('');
  var counter = 0;
  for (var i = 0; i < singleDirections.length; i++) {
    if(singleDirections[i] === '('){
      counter += 1;
    } else {
      counter -= 1;
    }
  }
  console.log(counter, "counter");
}

// deliverPresents(directions);

//result(floor) = 280

// --- Part Two ---

// Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

// For example:

// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
// What is the position of the character that causes Santa to first enter the basement?

function getPosition(input){
  var singleDirections = input.split('');
  var counter = 0;
  var position = 0;
  for (var i = 0; i < singleDirections.length; i++) {
    position += 1;
    if(singleDirections[i] === '('){
      counter += 1;
      if(counter === -1){
        console.log(position, "position");
        break;
      }
    } else {
      counter -= 1;
      if(counter === -1){
        console.log(position, "position");
        break;
      }
    }
  }
}

// getPosition(directions);

//result (position) = 1797


//--------------------------------------------------//
//                                                  //
// --- Day 2: I Was Told There Would Be No Math --- //
//                                                  //
//--------------------------------------------------//


// The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.

// Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.

// For example:

// A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
// A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
// All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?



//input all the dimensions, parse them to integers, and sort them low-high.
function getDimensions(input){
  var packages = input.split(' ');
  //to hold the array of actual dimensions
  var dimensions = [];
  //for each set of dimensions - split it into three separate number strings, and parseint each.
  packages.forEach(function(data){
    var container = [];
    var box = data.split('x');
     // console.log(box, 'box')
    box.forEach(function(data2){
      var boxNumbers = parseInt(data2);
      // console.log(boxNumbers, 'boxNumbers')
      container.push(boxNumbers);
      // dimensions.push(container);
    });
    dimensions.push(container.sort(function(a, b){return a-b;}));
  });
  return dimensions;
}


function calculateWrapping(array){
  var totalPaper = 0;
  array.forEach(function(box){
    totalPaper += 2*box[0]*box[1] + 2*box[1]*box[2] + 2*box[2]*box[0] + box[0]*box[1];
  });
  return totalPaper;
}

//correct - total square feet = 1,606,483


// --- Part Two ---

// The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

// The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

// For example:

// A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
// A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
// How many total feet of ribbon should they order?

function calculateRibbon(array){
  var totalRibbon = 0;
  array.forEach(function(box){
    totalRibbon += 2 * box[0] + 2 * box[1] + box[0]*box[1]*box[2];
  });
  return totalRibbon;
}

// correct. total ribbon = 3,842,356


//-------------------------------------------------------//
//                                                       //
// --- Day 3: Perfectly Spherical Houses in a Vacuum --- //
//                                                       //
//-------------------------------------------------------//


// Santa is delivering presents to an infinite two-dimensional grid of houses.

// He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

// However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

// For example:

// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.


//assign each move to a number on the x/y axis.  If the move is in the array, don't count it.  If it isn't, add to the array and count it.
function countHouses(array){
  var count = 1;
  var visitedHouses = array.sort();
  console.log(visitedHouses, 'visitedHouses');
  console.log(array.length);

  for (var i = 1; i < visitedHouses.length; i++) {
    if(visitedHouses[i] != visitedHouses[i-1]){
      count++;
    }
  }
  console.log(count, 'COUNT');
}

function findHouses(array){
  var house;
  var houses = ['00'];
  var x = 0;
  var y = 0;

  for (var i = 0; i < array.length; i++) {
    // debugger
    if (array[i]=== '^'){
      y += 1;
      house = x.toString() + y.toString();
      // console.log(house, "house");
      houses.push(house);
    } else if (array[i]=== 'v'){
      y -= 1;
      house = x.toString() + y.toString();
      // console.log(house, "house");
      houses.push(house);
    } else if (array[i]=== '>'){
      x += 1;
      house = x.toString() + y.toString();
      // console.log(house, "house");
      houses.push(house);
    } else if (array[i]=== '<'){
      x -= 1;
      house = x.toString() + y.toString();
      // console.log(house, "house");
      houses.push(house);
    }
  }
  // console.log(houses.sort())
  countHouses(houses);
}

//Your puzzle answer was 2592 (correct)

// --- Part Two ---

// The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

// Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

// This year, how many houses receive at least one present?

// For example:

// ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
// ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
// ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.


function findHousesAgain(array){
  var house;
  var houses = ['00'];
  var santax = 0;
  var santay = 0;
  var roboSantax = 0;
  var roboSantay = 0;

  for (var i = 0; i < array.length; i++) {
    if(i % 2 !=0){
      console.log
      if (array[i]=== '^'){
        santay += 1;
        house = santax.toString() + santay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== 'v'){
        santay -= 1;
        house = santax.toString() + santay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== '>'){
        santax += 1;
        house = santax.toString() + santay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== '<'){
        santax -= 1;
        house = santax.toString() + santay.toString();
        // console.log(house, "house");
        houses.push(house);
      }
    } else if (i % 2 === 0){
        if (array[i]=== '^'){
        roboSantay += 1;
        house = roboSantax.toString() + roboSantay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== 'v'){
        roboSantay -= 1;
        house = roboSantax.toString() + roboSantay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== '>'){
        roboSantax += 1;
        house = roboSantax.toString() + roboSantay.toString();
        // console.log(house, "house");
        houses.push(house);
      } else if (array[i]=== '<'){
        roboSantax -= 1;
        house = roboSantax.toString() + roboSantay.toString();
        // console.log(house, "house");
        houses.push(house);
      }
    }
  }
  // console.log(houses.sort())
  countHouses(houses);
}


// Your puzzle answer was 2360 (correct)




