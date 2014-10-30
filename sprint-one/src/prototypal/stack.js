var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.counter = 0;
  newStack.storage = {};
  return newStack;
};

stackMethods = {};

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
