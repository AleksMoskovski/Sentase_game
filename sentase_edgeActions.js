

function op(){
    console.log('opponentMove');
        sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
         console.log('minava animaciqta');   
        return oponentDeck.cards[0];
}
function opMove(){
    sym.getSymbol("enemyHandAnimation").play('start');
          		}


/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
	
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
		
   //Edge symbol: 'stage'
   (function(symbolName) {
 			
       
       Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
       GameLogic();
        for(i = 1; i <= 6; i++){
            sym.getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString())
           .css({'background-image':'url(images/cards/'+playerDeck.cards[i-1].getValue().toString()+'-'+playerDeck.cards[i-1].getSuit().toString()+'.png)'});
       
            }
        sym.$('lastCard').css({'background-image':'url(images/cards/'+playingDeck.cards[11].getValue()+'-'+playingDeck.cards[11].getSuit()+'.png)'});	
       
       sym.getSymbol("win").$("winer").hide();
       
       
       // Hide an element 
       sym.getSymbol("playerWinAnimation").getSymbol("winnerAnime").$("winnerWallpaper").hide();
       
       // Hide an element 
       sym.getSymbol("playerWinAnimation").$("playAgain").hide();
       
       
       
       
       

      });
      //Edge binding end
 
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_Welcome}", "click", function(sym, e) {
         sym.play();
 
      });
      //Edge binding end
 
 
 
      Symbol.bindElementAction(compId, symbolName, "${_card-666}", "click", function(sym, e) {
        	
        	var card666 = sym.getSymbol("card-666");
			card666.play();
         var aCard = playerDeck.cards[5];

         sym.$('Block').css({'display':'block'});// block();

 		//opponent	
 		  sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
        // sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
        //  sym.getSymbol("enemyHandAnimation").show();


         sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
			 sym.getSymbol("enemyHandAnimation").play('start');
          sym.$('op1').css({'display':'none'});




          console.log("Player card: ");	
 		    console.log(aCard);
 		    console.log("Oponent card: ");
 		    console.log(oponentDeck.cards[0]);

          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);







			//sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          // sym.getSymbol("card-666").getSymbol("card-66").$('card-6').hide();



      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-666}", "mouseover", function(sym, e) {
         sym.getSymbol("card-666").getSymbol("card-66").play('start');
         sym.getSymbol("card-666").getSymbol("card-66").stop('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-666}", "mouseout", function(sym, e) {
         sym.getSymbol("card-666").getSymbol("card-66").play('onTop');
 
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-555}", "click", function(sym, e) {
         sym.getSymbol("card-555").play();
         sym.$('Block').css({'display':'block'});
         var aCard = playerDeck.cards[4];
         console.log(aCard);
         
         var aCard = playerDeck.cards[4];
         
         sym.$('Block').css({'display':'block'});// block();
         
 		//opponent	
 		  sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
          sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
          sym.getSymbol("enemyHandAnimation").play('start');
 			sym.$('op2').css({'display':'none'});
          console.log("Player card: ");	
 		  console.log(aCard);
 		  console.log("Oponent card: ");
 		  console.log(oponentDeck.cards[0]);
 
          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);
 
 
 

      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-444}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("card-444").getSymbol("card-44").play('start');
         sym.getSymbol("card-444").getSymbol("card-44").stop('onTop');
 
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-444}", "mouseout", function(sym, e) {
         sym.getSymbol("card-444").getSymbol("card-44").play('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.$('Welcome').hide();
         sym.$('_7002071-spades-poker-cards-wallpaper').hide();
         
         
         

      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-333}", "mouseover", function(sym, e) {
         sym.getSymbol("card-333").getSymbol("card-33").play('start');
         sym.getSymbol("card-333").getSymbol("card-33").stop('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-333}", "mouseout", function(sym, e) {
         sym.getSymbol("card-333").getSymbol("card-33").play('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-222}", "mouseover", function(sym, e) {
         sym.getSymbol("card-222").getSymbol("card-22").play('start');
         sym.getSymbol("card-222").getSymbol("card-22").stop('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-222}", "mouseout", function(sym, e) {
         sym.getSymbol("card-222").getSymbol("card-22").play('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-111}", "mouseover", function(sym, e) {
         sym.getSymbol("card-111").getSymbol("card-11").play('start');
         sym.getSymbol("card-111").getSymbol("card-11").stop('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-111}", "mouseout", function(sym, e) {
         sym.getSymbol("card-111").getSymbol("card-11").play('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-555}", "mouseover", function(sym, e) {
         sym.getSymbol("card-555").getSymbol("card-55").play('start');
         sym.getSymbol("card-555").getSymbol("card-55").stop('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-555}", "mouseout", function(sym, e) {
         sym.getSymbol("card-555").getSymbol("card-55").play('onTop');
 
      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-333}", "click", function(sym, e) {
         sym.getSymbol("card-333").play();
         var aCard = playerDeck.cards[2];
         
         sym.$('Block').css({'display':'block'});// block();
         
 		//opponent	
 		  sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
          sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
          sym.getSymbol("enemyHandAnimation").play('start');
 			sym.$('op4').css({'display':'none'});
          console.log("Player card: ");	
 		  console.log(aCard);
 		  console.log("Oponent card: ");
 		  console.log(oponentDeck.cards[0]);
 
          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);

      });
      //Edge binding end
 
      Symbol.bindElementAction(compId, symbolName, "${_card-444}", "click", function(sym, e) {
         sym.getSymbol("card-444").play();
			var aCard = playerDeck.cards[3];

         sym.$('Block').css({'display':'block'});// block();

 		//opponent	
 		  sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
          sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
          sym.getSymbol("enemyHandAnimation").play('start');
				sym.$('op3').css({'display':'none'});
          console.log("Player card: ");	
 		  console.log(aCard);
 		  console.log("Oponent card: ");
 		  console.log(oponentDeck.cards[0]);

          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card-222}", "click", function(sym, e) {
         sym.getSymbol("card-222").play();
			var aCard = playerDeck.cards[1];

         sym.$('Block').css({'display':'block'});// block();

 		//opponent	
 		  sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
          sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
          sym.getSymbol("enemyHandAnimation").play('start');
			sym.$('op5').css({'display':'none'});
          console.log("Player card: ");	
 		  console.log(aCard);
 		  console.log("Oponent card: ");
 		  console.log(oponentDeck.cards[0]);

          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_card-111}", "click", function(sym, e) {
         sym.getSymbol("card-111").play();
			var aCard = playerDeck.cards[0];

         sym.$('Block').css({'display':'block'});// block();

 		//opponent	
			sym.getSymbol('enemyHandAnimation').$('_2_of_heartsCopy').css({'background-image':'url(images/cards/'+oponentDeck.cards[0].getValue().toString()+'-'+oponentDeck.cards[0].getSuit().toString()+'.png)'});
          sym.getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").show();
          sym.getSymbol("enemyHandAnimation").play('start');
				sym.$('op6').css({'display':'none'});
          console.log("Player card: ");	
 		  console.log(aCard);
 		  console.log("Oponent card: ");
 		  console.log(oponentDeck.cards[0]);

          win = fight(aCard,oponentDeck.cards[0]);
          console.log('the winer is : ');
          console.log(win);

      });
      //Edge binding end





      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         sym.getSymbol("enemyLoseAnimation").$("enemyLose").hide();
         sym.getSymbol('enemyLoseAnimation').stop();
         sym.getSymbol("enemyWinAnimation").$("enemyWin2").hide();
         sym.getSymbol('enemyWinAnimation').stop();
         sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
         sym.$('Block').css({'display':'none'});
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sixthCardPopUpAnimation'
   (function(symbolName) {   
   
      

      

      

   })("sixthCardPopUpAnimation");
   //Edge symbol end:'sixthCardPopUpAnimation'

   //=========================================================
   
   //Edge symbol: 'seconCardHandAnimation'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 810, function(sym, e) {
         showing = 0;
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
         //sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			        sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                   sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 862, function(sym, e) {
          
          sym.getSymbol("card-22").$("card-2").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          
          

      });
      //Edge binding end

   })("seconCardHandAnimation");
   //Edge symbol end:'seconCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'secondCardPopUpAnimation'
   (function(symbolName) {   
   
      

      

      

      

      

   })("secondCardPopUpAnimation");
   //Edge symbol end:'secondCardPopUpAnimation'

   //=========================================================
   
   //Edge symbol: 'fifthCardHandAnimation'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 381, function(sym, e) {
         showing = 0;
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			         sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                   sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
          
          sym.getSymbol("card-55").$("card-5").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          
          

      });
      //Edge binding end

   })("fifthCardHandAnimation");
   //Edge symbol end:'fifthCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'enemyHandAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 457, function(sym, e) {
         // insert code here

      });
      //Edge binding end

   })("enemyHandAnimation");
   //Edge symbol end:'enemyHandAnimation'

   //=========================================================
   
   //Edge symbol: 'enemyLoseAnimation'
   (function(symbolName) {   
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
      
          sym.getComposition().getStage().$('Block').css({'display':'none'});
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
      var i; 
      for(i = 1; i <=6; i++){
 		 if(sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString()).css('display') == 'none'){
		  if(!playingDeck.cards.length == 0){
		  //ako snimkata e izcheznala e pokazva 
		  sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString()).show();
		 }

		 //spira animaciqta za da ne se izpulni pak
		  sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).stop(0);
		  //smenq snimkata 
		  sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString())
		  .css({'background-image':'url(images/cards/'+playerDeck.cards[i-1].getValue().toString()+'-'+playerDeck.cards[i-1].getSuit().toString()+'.png)'});
		}
}
 for(i = 1; i <=6; i++){
 	if(sym.getComposition().getStage().$('op'+i.toString()).css('display') == 'none'){
	  	if(playingDeck.cards.length > 0){
		 	sym.getComposition().getStage().$('op'+i.toString()).css({'display':'block'});
		 	}
		}
	}
          var br = (playingDeck.cards.length+2)/2;
	sym.getComposition().getStage().$("playerScore").html(playerScore);
    sym.getComposition().getStage().$("opponentScore").html(opponentScore);
    sym.getComposition().getStage().$("cardsLenght").html(playingDeck.cards.length);
    sym.getComposition().getStage().$("testeCard"+br.toString()).hide();
    if(br == 1){
         sym.getComposition().getStage().$("lastCard").hide();
         sym.getComposition().getStage().$("cardsLenght").hide(); 
         sym.getComposition().getStage().$("kartiText").hide();
         sym.getComposition().getStage().$("ostvatText").hide();

    }




	 if(playerScore > 15){
	    console.log('vliza v if');

	//	sym.getComposition().getStage().getSymbol("playerWinAnimation").$("winnerWallpaper").show();
	//	sym.getComposition().getStage().getSymbol("playerWinAnimation").$("playAgain").show();
	//	sym.getComposition().getStage().getSymbol("playerWinAnimation").play();

// Show an element 
sym.getComposition().getStage().getSymbol("playerWinAnimation").$("winnerWallpaper").show();
sym.getComposition().getStage().getSymbol("playerWinAnimation").$("playAgain").show();
sym.getComposition().getStage().getSymbol("playerWinAnimation").play();
		  console.log('izliza v if enemyLoseAnimation');
 }



// Show an element 


      });
      //Edge binding end

   })("enemyLoseAnimation");
   //Edge symbol end:'enemyLoseAnimation'

   //=========================================================
   
   //Edge symbol: 'sixthCardHandAnimation'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         showing = 0;
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			         sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                    sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {



      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1052, function(sym, e) {

          sym.getSymbol("card-66").$("card-6").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();



      });
      //Edge binding end

   })("sixthCardHandAnimation");
   //Edge symbol end:'sixthCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'fourthCardHandAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 505, function(sym, e) {
        
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
       //  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			         sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                    sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 557, function(sym, e) {
          
          sym.getSymbol("card-44").$("card-4").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          
          

      });
      //Edge binding end

   })("fourthCardHandAnimation");
   //Edge symbol end:'fourthCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'thirtdCardHandAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 863, function(sym, e) {
        
       //  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
       //  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			         sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                    sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 915, function(sym, e) {
          
          sym.getSymbol("card-33").$("card-3").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          
          

      });
      //Edge binding end

   })("thirtdCardHandAnimation");
   //Edge symbol end:'thirtdCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'firstCardHandAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
        // sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0);
          if(win == "Player")  {  
                  sym.getComposition().getStage().getSymbol('enemyLoseAnimation').$("enemyLose").show();
			         sym.getComposition().getStage().getSymbol('enemyLoseAnimation').play(0); 
                }

                if(win == "Opponent"){
                    sym.getComposition().getStage().getSymbol('enemyWinAnimation').$("enemyWin2").show();
			         sym.getComposition().getStage().getSymbol('enemyWinAnimation').play(0);
                }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 552, function(sym, e) {
          
          sym.getSymbol("card-11").$("card-1").hide();
          sym.getComposition().getStage().getSymbol("enemyHandAnimation").$("_2_of_heartsCopy").hide();
          
          

      });
      //Edge binding end

   })("firstCardHandAnimation");
   //Edge symbol end:'firstCardHandAnimation'

   //=========================================================
   
   //Edge symbol: 'win'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "click", function(sym, e) {
         restart();

      });
      //Edge binding end

   })("winAnimation");
   //Edge symbol end:'winAnimation'

   //=========================================================
   
   //Edge symbol: 'enemyWinAnimation'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1124, function(sym, e) {
      
          sym.getComposition().getStage().$('Block').css({'display':'none'});
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1224, function(sym, e) {
      var i; 
      for(i = 1; i <=6; i++){
  if(sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString()).css('display') == 'none'){
		  if(!playingDeck.cards.length == 0){//ako kartite sa razdadeni gi pokazva za posledno 

		 	 sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString()).show();
			}

		 //spira animaciqta za da ne se izpulni pak
		  sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).stop(0);
		  //smenq snimkata 
		  sym.getComposition().getStage().getSymbol('card-'+i.toString()+i.toString()+i.toString()).getSymbol('card-'+i.toString()+i.toString()).$('card-'+i.toString())
		  .css({'background-image':'url(images/cards/'+playerDeck.cards[i-1].getValue().toString()+'-'+playerDeck.cards[i-1].getSuit().toString()+'.png)'});
		}
}
for(i = 1; i <=6; i++){
 	if(sym.getComposition().getStage().$('op'+i.toString()).css('display') == 'none'){
	  	if(playingDeck.cards.length > 0){
		 	sym.getComposition().getStage().$('op'+i.toString()).css({'display':'block'});
		 	}
		}
	}
    var br = (playingDeck.cards.length+2)/2; //broqch za vseki 2 karti maha 1 ot snimkite edna 
	 sym.getComposition().getStage().$("playerScore").html(playerScore); // smenq texta na playerScore
    sym.getComposition().getStage().$("opponentScore").html(opponentScore);//smenq texta na opponentScore
    sym.getComposition().getStage().$("cardsLenght").html(playingDeck.cards.length);//smenq texta na ostavashtite carti ot testeto
    sym.getComposition().getStage().$("testeCard"+br.toString()).hide();//scriva carta ot testeto
    if(br == 1){
         sym.getComposition().getStage().$("lastCard").hide();
         sym.getComposition().getStage().$("cardsLenght").hide(); 
         sym.getComposition().getStage().$("kartiText").hide();
         sym.getComposition().getStage().$("ostvatText").hide();
	}
	if(playerScore > 15){
	    console.log('vliza v if');

		// Show an element 
		sym.getComposition().getStage().$("winnerWallpaper").show();

		// Show an element 
		sym.getComposition().getStage().$("Text").show();


/*
		  sym.getComposition().getStage().getSymbol("win").$("winer").show();
			sym.getComposition().getStage().getSymbol("win").$("Text2").show();
		  // sym.getComposition().getStage().getSymbol("win").$("winer").css({'display':'block'});
			//sym.getComposition().getStage().getSymbol("win").play(0);
			sym.getComposition().getStage().getSymbol("win").play();
		  sym.getComposition().getStage().getSymbol("win").$("Text2").play();
	*/	  console.log('izliza v if');
 }

// Show an element 

      });
      //Edge binding end

   })("enemyWinAnimation");
   //Edge symbol end:'enemyWinAnimation'

   //=========================================================
   
   //Edge symbol: 'playerWinAnimation'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_playAgain}", "click", function(sym, e) {
         // insert code for mouse click here
         restart();

      });
         //Edge binding end

   })("playerWinAnimation");
   //Edge symbol end:'playerWinAnimation'

   //=========================================================
   
   //Edge symbol: 'winnerAnime'
   (function(symbolName) {   
   
   })("winnerAnime");
   //Edge symbol end:'winnerAnime'

   //=========================================================
   
   //Edge symbol: 'LoseAnimation'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_playAgain}", "click", function(sym, e) {
         // insert code for mouse click here
         restart();

      });
      //Edge binding end

   })("LoseAnimation");
   //Edge symbol end:'LoseAnimation'

})(jQuery, AdobeEdge, "EDGE-2973069");