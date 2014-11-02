var makeBinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  extend(newBinaryTree, binaryTreemethods);
  return newBinaryTree;
  };



var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
}

var binaryTreemethods = {};

binaryTreemethods.insert = function(value){
// if there is no node
var newNode=makeBinarySearchTree(value);
var stalin = value;
if(newNode.value<this.value){
  this.left=newNode;
  //case 1: if newNode.left=null && newNode.value<this.value;
} else if(newNode.value>this.value){
  this.right=newNode;
}
 }
  //create new node passing in value
// if there is a node
  // check if value  > node.value
    // value.right
  // else if value < node.value
     // value.left = true;
//
};

binaryTreemethods.contains = function(target){

};

binaryTreemethods.depthFirstLog = function(func){

};

// var makeNode = function(value){
//   var node = {};
//   node.value = value;
//   node.left = null;
//   node.right = null;

//   return node;
// }


/*
 * Complexity: What is the time complexity of the above functions?
 */

/* makeBinaryTree(5): value=5; left=null; right = null;
 makeBinaryTree(3): if 3<5
 makeBinaryTree(2): if2<3 && 2<5
 makeBinaryTree(1)L if1<2 && 1<3 && 1<5 
