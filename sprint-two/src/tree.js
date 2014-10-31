


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
  //console.log(this.children);
  //console.log((this.children[0]).value +'index');
  if((this.children[0]).value === target){
    return true;
  }

};















// console.log(this.children);
  // if(5===target){
  //   return true;}

  //var startTree = ??
  //for(var i=0; i<startTree.length; i++){
  //   if(startTree[i]==target){
  //     return true;
  //   } else if(startTree.children){
  //     (startTree.children).contains(target);
  //   } else {
   //    return false;}


/*
 * Complexity: What is the time complexity of the above functions?
 */
