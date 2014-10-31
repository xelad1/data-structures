var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){

   var newNode = makeNode(value); //create the node
    //console.log(value);
   if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail= newNode;
   }
  };

  list.removeHead = function(){

    var oldHead = this.head.value;
    if (this.head !== null) {

      var pointer2 = this.head.next;
      this.head = pointer2;
      return oldHead;

    }



  };

  list.contains = function(target){

    var checker;
      if(this.head.value === target){
        return true;
      } else {
        checker = this.head.next;
        while(checker !== null){
          if(checker.value === target) {
            return true;
          }
          checker = checker.next;
        }

        return false;
      }




  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
