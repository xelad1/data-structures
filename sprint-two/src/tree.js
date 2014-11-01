


var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree, treeMethods);
  return newTree;
};



var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

if(this.value === target) {
  return true;
} else if(!this.children || this.children.length === 0) {
  return false;
} else {
  for(var i = 0; i < this.children.length; i ++) {
    if(this.children[i].contains(target)){
      return true;
    }
  }
}
return false;
};
