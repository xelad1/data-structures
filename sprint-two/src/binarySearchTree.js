var makeBinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.children = undefined;
  extend(newBinaryTree, binarybinaryTreemethods);
  return newBinaryTree;
  };



var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
}

var binaryTreemethods = {};

binaryTreemethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(makeBinarySearchTree(value));
  console.log(this.children);

};

binaryTreemethods.contains = function(target){
// find if tree contains target
// first get root node:
//    if root node value = target, return true and you're done
    var root = this.children;
    if(this.children[0].value === target){
      return true;
    } else if(!root.children){
      return false;
    }
    console.log(root);
    debugger;
// if no root children, return false
// otherwise there are root children, recursively check children and compare value

};

binaryTreemethods.depthFirstLog = function(func){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
