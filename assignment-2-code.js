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

  // SOME //
  Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) { //as the loop iterates checks to see if callbackFn enacted on element returns true
            return true;
        }
    }
    return false;
  };

  // REDUCE //
  Array.prototype.myReduce = function(callbackFn, initial) {
    // Place your code here.
    let reduced = ( initial === undefined) ? this[0] : initial;//ternary operator used to check if initial value param is present
    let start = (initial === undefined) ? 1 : 0; //if initial value undefined set to 1 otherwise 0
    for (let i = start; i < this.length; i++) {
      reduced = callbackFn(reduced, this[i]) //sets reduced variable to output of callbackFn and initial/prev value
    }
    return reduced;
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function(x) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) { //if element detected in array returns true
      const inc = this[i];
      if (inc === x) {
        return true;
      }
    }
    return false;
  };

  // INDEXOF //
  Array.prototype.myIndexOf = function(x) {
    // Place your code here.
    for (let i = 0; i < this.length; i++) { //iterates through array until element found, then returns true otherwise false
      if (this.myIncludes(x)) {
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
    for (let i = this.length - 1; i > -1; i--) { //for loop iterates through array from the back
      if (this.myIncludes(x)) { //checks to see if element is in the array
        if (this[i] === x) { //when element is found returns the index
          return i;
        }
      }
      else {
        return -1; //if elelemnt not found returns -1
      }
    }
  };
 
  // KEYS //
  Object.myKeys = function(x) {
    // Place your code here.
    let array = []; //creates empty array to store keys
    for(var key in x) { //iterates through keys in object x
      array.myPush(key); //pushes key into empty array
    }
    return array;
  };

  // VALUES //
  Object.myValues = function(x) {
    // Place your code here.
    let array = []; //creates empty array to store values
    for(var key in x) { //iterates through keys of object x
      array.myPush(x[key]); //accesses element using key as an index and pushes element into empty array
    }
    return array;
  };

  // MAP //
  Array.prototype.myMap = function(callbackFn) {
    // Place your code here.
    const newArray = []; //creates empty array to store output of callbackFn
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        newArray.myPush(callbackFn(this[i], i, this)); //pushes the element post callbackFn into new array
    }
    return newArray;
  };