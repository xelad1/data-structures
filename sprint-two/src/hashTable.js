var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = [k, v];
  if(!this._storage[i]){
    this._storage[i] = [arr];
  } else {
    this._storage[i].push(arr);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var counter = 0;
  if(this._storage[i]){
    if(this._storage[i].length===1){
      return this._storage[i][0][1];
    } else{
      for(var j=0; j<this._storage[i].length; j++){
        if(this._storage[i][j][0] === k){
          return this._storage[i][j][1];
        }
      }
    }
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i];
  console.log(this._storage[i]);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
