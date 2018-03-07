/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num){
  var chuckle = "";
  for (i=1; i <= num; i++){
    chuckle += "ha";
  }
  return chuckle += "!";
}

console.log(laugh(3))