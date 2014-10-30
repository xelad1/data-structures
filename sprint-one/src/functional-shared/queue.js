var makeQueue = function(){
  var newQueue = {};
  newQueue.startValue = 0;
  newQueue.endValue = 0;
  newQueue.storage = {};
  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

var extend = function(to, from){
  for(var key in from){
    to[key]=from[key];
  }
};

queueMethods.enqueue = function(value){
  this.storage[this.endValue]= value;
  this.endValue ++;
};

queueMethods.dequeue = function(){
  if (this.startValue<this.endValue) {
  // debugger;
  var popOff = this.storage[this.startValue];
  console.log(popOff);
  delete this.storage[this.startValue];
  this.startValue ++;
  return popOff;}

};

queueMethods.size = function(){
  // return 0;
  return Math.max(this.endValue - this.startValue,0);
};
