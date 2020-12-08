const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
 each: function(array1, callback) {
    if (Array.isArray(array1)) {
      for (let i = 0; i < array1.length; i++) {
        let a = array1[i]
        callback(a, i, array1)
      }
    }
    else {
       let keys = Object.keys(array1)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = array1[k]
        callback(v, k, array1)
      }
    }
    return array1 
  },


    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
        let a = collection[i]
        newCollection.push(callback(a, i, collection)) 
      }
    }
      else {
       let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = collection[k]
        newCollection.push(callback(v, k, collection))
      }
    }
      return newCollection 
    },


    reduce: function(col, callback, acc = -2) {
     let myAcc = acc;
       for (let i = 0; i < col.length; i++) {
        myAcc = callback(myAcc, col[i], col)  //returns value times three plus acc 
      }
      return myAcc 
    },

    find: function(collection, predicate) {  //return first one passing predicate test or undefined if nothing passes 
      for (let i = 0; i < collection.length; i++) {   //check if first element passes predicate test 
       if (predicate(collection[i])) {                    //if does not pass grab next element and check, repeat
          return collection[i] 
          break                                //if it does pass, return that element value 
      }
     }
    },

    filter: function(collection, predicate) {
    let newArray = []
     for (let i = 0; i < collection.length; i++) {
      if(predicate(collection[i])) {
        newArray.push(collection[i])
      }
     }
     return newArray
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else if (typeof(collection) === 'object') {
        return Object.keys(collection).length
      }
    },


    first: function(array, n) { 
        if (typeof n !== 'undefined') {
          return array.slice(0, n)
        } else {
          return array[0]
        } 
    },

    last: function(array, n) {
      if (typeof n !== 'undefined') {
        let newArray = array.slice(-n, array.length)
          return newArray
        } else {
          let newDigit = array.length - 1
          return array[newDigit]
        } 
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArray.push(array[i])
        } 
      }
      return newArray
    },

    sortBy: function(array, callback) { 
      let finalArray = [...array]
      finalArray.sort(function(a, b){return callback(a) - callback(b)})
      return finalArray
    },

    flatten: function(array, boolean) { 
      if (typeof boolean !== 'undefined') { //concat
        return [].concat.apply([], array)
      } else {
       let flattenedArray = function(array) {
         return array.reduce((acc, cur) => 
          acc.concat(Array.isArray(cur) ? flattenedArray(cur) : cur), []);
       }
        return flattenedArray(array)
      }
    },

    uniq: function(array, isSorted, callback) {  //duplicate free version of array 
      //is array sorted? isSorted = true 
      //callback is for transformation of values
      //let duplicateValues = []
     if (isSorted === true) {
      let removeDuplicates = function(array) {
        //[...new Set(array)];
       //array.filter((item, index) => array.indexOf(item) === index);
       return array.reduce((unique, item) => 
       unique.includes(item) ? unique : [...unique, item], []);
      }
       return removeDuplicates(array)
     } else {
      let removeDuplicates = function(array, callback) {
       let duplicateArray = [...array]
       if (!!callback) {
        let set = {}
        return duplicateArray.reduce((unique, item) => {
          if (!!set[callback(item)]) {
             return unique
          } else {
             set[callback(item)] = true 
             return [...unique, item]
          } 
        }
           ,[])
       } else {
         return array.reduce((unique, item) => 
         unique.includes(item) ? unique : [...unique, item], [])
       }
      }
       return removeDuplicates(array, callback);
     }
    },

    keys: function(object) { //all enumerable properties
      return Object.getOwnPropertyNames(object)
    },

    values: function(object) { //all values of object
      return Object.values(object)
    },

    functions: function(object) {
        let finalArray = []
      Object.keys(object).forEach(key => {   //returns array of keys 
         if (typeof object[key] === 'function') {
          finalArray.push(object[key])
         }
      })
      return finalArray
  },


  }
})()

fi.libraryMethod()