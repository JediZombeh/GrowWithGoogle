/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num){
    var nextLine = "";
    for (var x = 1; x <= num; x++){
        nextLine += makeLine(x);
    }
    return nextLine;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));