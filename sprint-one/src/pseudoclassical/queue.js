var Queue = function(){
  this.startIndex = 0;
  this.endIndex = 0;
  this.storage = {};


};


Queue.prototype.enqueue = function(value){
  this.storage[this.endIndex]= value;
  this.endIndex ++;
};

Queue.prototype.dequeue = function(){
  if (this.startIndex<this.endIndex) {
  // debugger;
  var popOff = this.storage[this.startIndex];
  console.log(popOff);
  delete this.storage[this.startIndex];
  this.startIndex ++;
  return popOff;
  }

};

Queue.prototype.size = function(){
  // return 0;
  return Math.max(this.endIndex - this.startIndex,0);
};

var Whatever = new Queue();
