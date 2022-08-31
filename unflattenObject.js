// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    // Write your code here
    let res = {};
      for (let i in flatObject) {
        let keys = i.split(".");
        keys.reduce((arr, ele, index) => {
          return (
            arr[ele] ||
            (arr[ele] = isNaN(Number(keys[index + 1]))
              ? keys.length - 1 === index
                ? flatObject[i]
                : {}
              : [])
          );
        }, res);
      }
      return res;
  
  }