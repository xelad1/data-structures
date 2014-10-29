var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter =  0;

  // Implement the methods below
  someInstance.push = function(value){

    someInstance[counter] = value;

    counter ++;

  };

  someInstance.pop = function(){


  var returnValue = [];
  returnValue.push(someInstance[counter - 1]);

  delete someInstance[counter - 1];


  counter --;

  return returnValue[0];

  };

  someInstance.size = function(){
  if(counter<0){return 0;
  }
  return counter;
};

  return someInstance;
};
