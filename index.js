function intersection() {
  let mySet = new Map();

  for (let arg = 0; arg < arguments.length;  arg++) {
    let uniq = new Set();
    for (let i=0; i < arguments[arg].length; i++) {
      if (!uniq.has(arguments[arg][i])) {
        if (mySet.has(arguments[arg][i])) {
          mySet.set(arguments[arg][i], mySet.get(arguments[arg][i])+1);
        } else {
          mySet.set(arguments[arg][i], 1);
        }
        uniq.add(arguments[arg][i]);
      }
      
    }
    
  }
 console.log(mySet);
  let result = [];
  mySet.forEach( (value, i) => {
   
    if (value >= arguments.length) {
        result.push(i);
    }
  })

  return result;
}

var a = [1,2,3,1];
var b = [2,3,4];

console.log(intersection(a, b)); // [2,3]

var c = [3,4,5];

console.log(intersection(a,b,c)); // [3]


