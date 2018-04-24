fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++) {
          cb(collection[i], i, collection)
        }
      }
      else {
          let keyArray = Object.keys(collection)
          for (let i = 0; i < keyArray.length; i++) {
            cb(collection[keyArray[i]], i, collection)
          }
        }
      return collection
    },

    map: function(collection, cb) {
      // let newCollection = Object.assign({}, collection)
      let newCollection;
      if (Array.isArray(collection)) {
        newCollection = []
        for (let i = 0; i < collection.length; i++) {
         newCollection.push(cb(collection[i], i, collection));
        }
        return newCollection;
      }
      else {
        newCollection = Object.assign({}, collection);
        let keyArray = Object.keys(collection);
        for (let i = 0; i < keyArray.length; i++) {
          // debugger
          newCollection[keyArray[i]] = cb(collection[keyArray[i]], keyArray[i], collection)
        }
        return Object.values(newCollection)
      }
    },

    reduce: function(collection, cb, acc) {
      let sum = acc;
      for (i = 0; i < collection.length; i++) {
        sum = cb(sum, collection[i], collection);
      }
      return sum;
    },

    find: function(collection, cb) {


      for (i = 0; i < collection.length; i++) {

        if ( cb(collection[i]) == true ) {
          let result =  collection[i];
            return true
          }
        }
        return false
    },

    filter: function(collection, cb) {
      let even = [];
      for (i = 0; i < collection.length; i++) {
        if ( cb(collection[i]) == true ) {
          even.push(collection[i]);
        }
      }
      return even
    },

    size: function(collection) {
    let count = Object.keys(collection).length
    return count 
    }

}})()

fi.libraryMethod()
