var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){

    someInstance[counter] = value;
    counter += 1;
  };

  someInstance.dequeue = function(){

    var results = [];
    results.push(someInstance[counter - 1]);
    delete someInstance[counter - 1];
    counter -= 1;

    return results;
  };

  someInstance.size = function(){

    return Math.max(counter, 0);
  };

  return someInstance;
};
