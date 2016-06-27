    var playingDeck = new Deck();
    playingDeck.createFullDeck();
    playingDeck.shuffle();
    var cards = new Card(Suit,Value);    
    var uniqueSuit = playingDeck.cards[23].getSuit().toString();
    var playerDeck = new Deck();
    var oponentDeck = new Deck();
    var fihtingObject;
    var win;
    var showing;
    var playerScore = 0;
    var opponentScore = 0;
function restart(){
  //var href = location.href;
    location.reload();

}
function fight(aCardX,aCardY){
              var x=0,y=0;
            for(i = 1; i<=6;i++){

                    if(aCardY == oponentDeck.cards[i]){
                        console.log(oponentDeck.cards[i]);
                        console.log('is removed!');
                        oponentDeck.removeCard(i);

                    }
                    if(aCardX == playerDeck.cards[i]){
                        console.log(playerDeck.cards[i]);
                        console.log('is removed!');
                        playerDeck.removeCard(i);    
                    }
                }//tuka gi dobavqm 
        playerDeck.cards.push(playingDeck.draw(0));
        oponentDeck.cards.push(playingDeck.draw(0));
    
         switch(aCardX.getValue()){
                    case "NINE" : x += 0;break;
                    case "TEN" : x += 10;break;
                    case "JACK" : x += 2;break;
                    case "QUEEN" : x += 3;break;
                    case "KING" : x += 4;break;
                    case "ACE" : x += 11;break;
                    }
          switch(aCardY.getValue()){
                    case "NINE" : y += 0;break;
                    case "TEN" : y += 10;break;
                    case "JACK" : y += 2;break;
                    case "QUEEN" : y += 3;break;
                    case "KING" : y += 4;break;
                    case "ACE" : y += 11;break;
                    }
            
         if(aCardX.getSuit() == uniqueSuit && aCardY.getSuit() == uniqueSuit){
            if(x>y){
                playerScore += x+y;
               // return aCardX;
                return 'Player';
            }
             else{
                 opponentScore += x+y;
                // return aCardY;
                 return 'Opponent';
            }    
         }
         else if(aCardX.getSuit() == uniqueSuit){
             playerScore += x+y;
            // return aCardX;
             return 'Player';
         }
         else if(aCardY.getSuit() == uniqueSuit){
             opponentScore += x+y; 
            // return aCardY;
             return 'Opponent';
         }
         else{
              if(x>y){
                  playerScore += x+y;
              //  return aCardX;
                  return 'Player';
            }
             else{
                 opponentScore += x+y;
                // return aCardY;
                 return 'Opponent';
            }    
         }
      return console.log('ima greshka');   
     }
function GameLogic(){ 
    
    console.log("welcome to 66game!");
   // var playingDeck = new Deck();
  //  playingDeck.createFullDeck();
    console.log("Full Deck:")
    console.log(playingDeck.drawMe());

    //playingDeck.shuffle();
    console.log("after shuffle:")
    console.log(playingDeck.drawMe());

   // var playerDeck = new Deck();
    //var oponentDeck = new Deck();
    
    for(var i =0; i<6; i++){ //players gets six cards
        playerDeck.cards.push(playingDeck.draw(i));
        oponentDeck.cards.push(playingDeck.draw(i));

    }
    
    console.log(playingDeck.cards[11].getValue().toString()+'-'+playingDeck.cards[11].getSuit().toString()+'opa');
    console.log('-');
    var temp = playerDeck.cards[1].getValue().toString()+'-'+playerDeck.cards[1].getSuit().toString();
    
    console.log('-');
    console.log(temp);
   // while(true){
        console.log("your hand: ");
        console.log( playerDeck.drawMe());
        console.log("your hand valued at: "+ playerDeck.cardsValue());

        console.log("opponent hand: ");
        console.log( oponentDeck.drawMe());
        console.log("oponent hand valued at: "+ oponentDeck.cardsValue());
        console.log("Unique suit: "+uniqueSuit);
        //winAnimation(win);
        console.log('stupka 2 ');
    
     //   break;
    //}
}
