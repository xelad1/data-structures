var makeStack = function() {
  var newStack = {};
  newStack.counter = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

var extend = function(to,from){
  for (var key in from){
    to[key] = from[key];
  }
};

stackMethods.push = function(value){
this.storage[this.counter]=value;

this.counter ++;

};
stackMethods.pop = function(){
  var res;
  if(this.counter > 0){
    res = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter --;
    return res;
  }
};

stackMethods.size = function(){
  return this.counter;
};
