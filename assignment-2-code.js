// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
  };
  
  // MAP //
  Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        newArray.push(callbackFn(this[i], i, this)); //use custom push function
    }
    return newArray;
  };

  /*
  let myArray = [32,23,43,56];
  let doubled = myArray.map(x => {return x * 2;});
  console.log(doubled);
  let doubleds = myArray.myMap(x => {return x * 2;});
  console.log(doubleds);
  */

  // SOME //
  Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }
    return false;
  };

  /*
  let myArray = [32,23,43,56];
  console.log(myArray.some(x => x === 32));
  console.log(myArray.mySome(x => x === 32));
  */

  // REDUCE //
  Array.prototype.myReduce = function(callbackFn, initial) {
    // Place your code here.
    let reduced = ( initial === undefined) ? this[0] : initial;
    let start = (initial === undefined) ? 1 : 0
    for (let i = start; i < this.length; i++) {
      reduced = callbackFn(reduced, this[i])
    }
    return reduced;
  };

  /*
  console.log([1, 2, 3].myReduce((sum, curr) => sum - curr));
  console.log([1, 2, 3].reduce((sum, curr) => sum - curr));
  */
  
  // INCLUDES //
  Array.prototype.myIncludes = function(x) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) {
      const inc = this[i];
      if (inc === x) {
        return true;
      }
    }
    return false;
  };

  /*
  let myArray = [1,2,3,4,5];
  console.log(myArray.myIncludes(1));
  console.log(myArray.includes(0));
  */

  
  // INDEXOF //
  Array.prototype.myIndexOf = function(x) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) {
      if (this.includes(x)) {
        if (this[i] === x) {
          return i;
        }
      }
      else {
        return -1;
      }
    }
  };
  
  // PUSH //
  Array.prototype.myPush = function(...args) {
    // Place your code here.
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(x) {
    // Place your code here.
    for (let i = this.length - 1; i > -1; i--) {
      if (this.includes(x)) {
        if (this[i] === x) {
          return i;
        }
      }
      else {
        return -1;
      }
    }
  };
  
  /*
  let myArray = [9,8,7,6,5,7,5];
  console.log(myArray.myLastIndexOf(10));
  console.log(myArray.lastIndexOf(10));
  */

  // KEYS //
  Object.myKeys = function() {
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function() {
    // Place your code here.
  };