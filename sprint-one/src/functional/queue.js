var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var startItem = "start";
  var lastItem = "end";


  // Implement the methods below

  someInstance.enqueue = function(value){

    someInstance[counter] = value;
    counter += 1;
    lastItem
  };

  someInstance.dequeue = function(){

    var results = [];
    var keyArray = Object.keys(someInstance).sort(function(a, b) {return a - b;});



    var firstKey = keyArray[0];
    results.push(someInstance[firstKey]);
    delete someInstance[firstKey];
    counter -= 1;

    return results[0];
  };

  someInstance.size = function(){

    return Math.max(counter, 0);
  };

  return someInstance;
};
