// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    // Write your code here
  var dist = {}
  for(var i=0;i<string.length;i++){
    var char = string[i]
    if(dist[char] == undefined){
      dist[char] = 1
    }else{
      dist[char]++
    }
  }
  return dist;
}
