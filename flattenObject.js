// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
    // Write your code here
  let res = {}
      for(const i in unflatObject)
        {
         if((typeof unflatObject[i]==='object' && !Array.isArray(unflatObject[i])))
           {
             const t = flatten(unflatObject[i])
             for(const j in t)
               {
                 res[i+'.'+j] = t[j]
               }
           }
          else if(Array.isArray(unflatObject[i]))
            {
               const t = flatten(unflatObject[i])
             for(const j in t)
               {
                 res[i+'.'+j] = t[j]
               }
            }
          else
            {
              res[i]=unflatObject[i]
            }
        }
      console.log(res)
      return res
  }
  