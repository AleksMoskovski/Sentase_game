/*function op(){
    console.log('opponentMove');
        sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
            
        return oponentDeck.cards[0];
}*/
var Opponent = (function(){
    //var oponentDeck = new Deck();
    function Opponent(oponentDeck){
        this.oponentDeck = oponentDeck;
    }
    
    Opponent.prototype.opponentMove = function(){
        console.log('opponentMove');
        sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
            
        return oponentDeck.cards[0];
    };
}());

/*

console.log("welcome to 66game!");
       var playingDeck = new Deck();
       playingDeck.createFullDeck();
       console.log("Full Deck:")
       console.log(playingDeck.drawMe());
       playingDeck.shuffle();
       console.log("after shuffle:")
       console.log(playingDeck.drawMe());

       var playerDeck = new Deck();
		 var oponentDeck = new Deck();

		 for(var i =0; i<6; i++){ //players gets six cards
          playerDeck.cards.push(playingDeck.draw(i));
          oponentDeck.cards.push(playingDeck.draw(i+6));

       }
		playerDeck.cards[1].getValue();
		playerDeck.cards[1].getSuit();
		var i;

		for(i = 1; i <= 6; i++){

       sym.getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString())
       .css({'background-image':'url(images/cards/'+playerDeck.cards[i-1].getValue().toString()+'-'+playerDeck.cards[i-1].getSuit().toString()+'.png)'});
		//sym.setVariable('myArr',playerDeck.cards[i-1]);
		}
		sym.$('lastCard').css({'background-image':'url(images/cards/'+playingDeck.cards[11].getValue()+'-'+playingDeck.cards[11].getSuit()+'.png)'});

       while(true){
           console.log("your hand: ");
           console.log( playerDeck.drawMe());
           console.log("your hand valued at: "+ playerDeck.cardsValue());

           console.log("opponent hand: ");
           console.log( oponentDeck.drawMe());
           console.log("oponent hand valued at: "+ oponentDeck.cardsValue());

           console.log('Make a move');
          // console.log(sym.getVariable(myArr));
           console.log('oponent move');
            console.log('some one win');
             console.log('get card');
              console.log('winner is first');
               console.log('Make a move');
                console.log('Make a move');
                 console.log('Make a move');
                  console.log('Make a move');
                  
           break;
       }
*/