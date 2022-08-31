// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    var num1 = 0;
    var num2 = 0;
    for(var i=0;i<array.length;i++){
      if(num1<array[i]){
        num2 = num1;
        num1 = array[i];
      }else if(num2<array[i]){
        num2 = array[i];
      }
    }
    return num2;
  }