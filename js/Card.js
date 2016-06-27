var Card = (function(){

     var suit;
     var value;
    
     function Card(suit,value){
        this.suit = suit;
        this.value = value;
    }
    
      Card.prototype.stringosvane = function(){
    
        //console.log(this.suit + "-" + this.value);
        return this.value + "-" + this.suit;
        };

      Card.prototype.getValue = function(){
      //  console.log(this.value);
          return this.value;
          
      };
    Card.prototype.getSuit = function(){
      //  console.log(this.value);
          return this.suit;
          
      };



    return Card;
}());
