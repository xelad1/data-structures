var Stack = function() {
  // this = Object.create(stackMethods);
  this.counter = 0;
  this.storage = {};
};

// stackMethods = {};

Stack.prototype.push = function(value){
this.storage[this.counter]=value;
this.counter ++;

};
Stack.prototype.pop = function(){
  var res;
  if(this.counter > 0){
    res = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter --;
    return res;
  }
};

Stack.prototype.size = function(){
  return this.counter;
};

var Test = new MakeStack();

