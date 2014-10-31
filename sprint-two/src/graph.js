var Graph = function(){
  this._superStorage = {};

};

Graph.prototype.addNode = function(newNode, toNode){

  this._superStorage[newNode] = {edgesArray:[toNode]};
  this._superStorage[toNode].edgesArray.push(newNode);
};

Graph.prototype.contains = function(node){
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
