var Deck = (function(){
   
    //var cards = new Card(Suit,Value);//create array
     function Deck(){
        this.cards = new Array();//crate array
    }
     Deck.prototype.shuffle = function(){
         var j, x, i;
            for (i = this.cards.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x =this.cards[i - 1];
                this.cards[i - 1] = this.cards[j];
                this.cards[j] = x;
            }
        return this.cards;
    };
     Deck.prototype.createFullDeck = function(){
        //Generate Cards
        for(var cardSuit in Suit){
            for(var cardValue in Value){
                //add new card to the mix 
                this.cards.push(new Card(cardSuit,cardValue));
            }
        }
    };
     Deck.prototype.drawMe = function(){
        var cardListOutput = "";
       
        for (var aCard in this.cards){
           cardListOutput += "\n" + this.cards[aCard].stringosvane();
        }
        return cardListOutput;
    };
     Deck.prototype.getCard = function( i ){
      return this.cards[i];
    };
     Deck.prototype.removeCard = function(i){
        this.cards.splice(i,1);
    };
     Deck.prototype.addCard = function(cardSuit,cardValue){
        this.cards.push(cardSuit+"-"+cardValue);
        
    };
     Deck.prototype.draw = function(i){
       this.cards.splice(i,1);
        return this.cards[i]; 
    };
     Deck.prototype.results = function(){
        var playerResult = new Deck();
        var oponentResult = new Deck();
    };
     Deck.prototype.nestho = function(){
       for(i = 1; i <= 6; i++){
           sym.getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString())
           .css({'background-image':'url(images/cards/'+playerDeck.cards[i-1].getValue().toString()+'-'+playerDeck.cards[i-1].getSuit().toString()+'.png)'});
		}
   };
     Deck.prototype.cardsValue = function(){
        var totalValue = 0;
            for(var aCard in this.cards){
                switch(this.cards[aCard].getValue()){
                    case "NINE" : totalValue += 0;break;
                    case "TEN" : totalValue += 10;break;
                    case "JACK" : totalValue += 2;break;
                    case "QUEEN" : totalValue += 3;break;
                    case "KING" : totalValue += 4;break;
                    case "ACE" : totalValue += 11;break;
                    }
                }
         return totalValue;
    };
     Deck.prototype.cardValue = function(i){
        var cardValue = 0;
                switch(this.cards[i].getValue()){
                    case "NINE" : cardValue = 0;break;
                    case "TEN" : cardValue = 10;break;
                    case "JACK" : cardValue = 2;break;
                    case "QUEEN" : cardValue = 3;break;
                    case "KING" : cardValue = 4;break;
                    case "ACE" : cardValue = 11;break;
                    }
                return cardValue;
            };
   
return Deck;
    
}());
/*
var Deck = (function(){
   
    var cards = new Card(Suit,Value);//create array
     
    
    
     function Deck(){
        this.cards = new Array();//crate array
    }
     
    Deck.prototype.shuffle = function(){
         var j, x, i;
            for (i = this.cards.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x =this.cards[i - 1];
                this.cards[i - 1] = this.cards[j];
                this.cards[j] = x;
            }
        return this.cards;
    };

     Deck.prototype.createFullDeck = function(){
        //Generate Cards
        for(var cardSuit in Suit){
            for(var cardValue in Value){
                //add new card to the mix 
                this.cards.push(new Card(cardSuit,cardValue));
            }
        }
    };
    
    Deck.prototype.drawMe = function(){
        var cardListOutput = "";
       
       // console.log(this.cards[2]+ " this.cards");
       
        for (var aCard in this.cards){
           //cardListOutput += "\n" + aCard.toString();
            cardListOutput += "\n" + this.cards[aCard].toString();
         //  console.log(aCard);
           
        }
        
        return cardListOutput;
        
    };
    
     Deck.prototype.getCard = function( i ){
       //  console.log(this.cards);
        return this.cards[i];
    };
    
     Deck.prototype.removeCard = function(i){
        this.cards.splice(i,1);
    };
    
     Deck.prototype.addCard = function(cardSuit,cardValue){
        this.cards.push(cardSuit+"-"+cardValue);
        
    };
    Deck.prototype.draw = function(i){
        //this.cards.add(commingFrom.getCard(0));
        //commingFrom.removeCard(0);
       this.cards.splice(i,1);
        return this.cards[i]; 
        
    };
    
   
    
     Deck.prototype.cardsValue = function(){
        var totalValue = 0;
            for(var aCard in this.cards){
                switch(this.cards[aCard].getValue()){
                    case "NINE" : totalValue += 0;break;
                    case "TEN" : totalValue += 10;break;
                    case "JACK" : totalValue += 2;break;
                    case "QUEEN" : totalValue += 3;break;
                    case "KING" : totalValue += 4;break;
                    case "ACE" : totalValue += 11;break;
                    }
                }
        // console.log(totalValue);
         return totalValue;
    };
  /*  Deck.prototype.cardValue = function(i){
        var cardValue = 0;
                switch(this.cards[i].getValue()){
                    case "NINE" : cardValue = 0;break;
                    case "TEN" : cardValue = 10;break;
                    case "JACK" : cardValue = 2;break;
                    case "QUEEN" : cardValue = 3;break;
                    case "KING" : cardValue = 4;break;
                    case "ACE" : cardValue = 11;break;
                    }
                }
         
         return cardValue;
    };*/
/*    
   return Deck;
    
}());
*/