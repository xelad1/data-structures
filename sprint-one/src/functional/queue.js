var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;



  // Implement the methods below

  someInstance.enqueue = function(value){

    storage[counter] = value;
    counter += 1;

  };

  someInstance.dequeue = function(){

    var results = [];
    var keyArray = Object.keys(storage).sort(function(a, b) {return a - b;});
    var firstKey = keyArray[0];
    results.push(storage[firstKey]);
    delete storage[firstKey];
    return results[0];
  };

  someInstance.size = function(){

    return Object.keys(storage).length;
  };

  return someInstance;
};


// var makeQueue = function() {
//   var storage = {};
//   var queueStart = 0;
//   var queueEnd = 0;
//   var Queue = {};
//   Queue.enqueue = function(value){
//     storage[queueEnd] = value;
//     queueEnd++;
//   }
//   Queue.dequeue = function() {
//     if (! storage[queueStart]) { console.log('EMPTY LINE'); return}
//     var luckyturn = storage[queueStart];
//     delete storage[queueStart];
//     queueStart++;
//     return luckyturn;
//   }
//   Queue.size = function() {
//     return queueEnd - queueStart;
//   }
//   return Queue;
// }
