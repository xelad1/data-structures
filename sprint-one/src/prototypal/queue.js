var makeQueue = function(){
  var newQueue = Object.create(queueMethods);
  newQueue.startIndex = 0;
  newQueue.endIndex = 0;
  newQueue.storage = {};

  return newQueue;
};

 queueMethods = {};


queueMethods.enqueue = function(value){
  this.storage[this.endIndex]= value;
  this.endIndex ++;
};

queueMethods.dequeue = function(){
  if (this.startIndex<this.endIndex) {
  // debugger;
  var popOff = this.storage[this.startIndex];
  console.log(popOff);
  delete this.storage[this.startIndex];
  this.startIndex ++;
  return popOff;}

};

queueMethods.size = function(){
  // return 0;
  return Math.max(this.endIndex - this.startIndex,0);
};
