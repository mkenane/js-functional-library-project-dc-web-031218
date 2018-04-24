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

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
