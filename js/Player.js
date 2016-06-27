var Player = (function(){
   //  var playerDeck = new Deck();
    function Player(playerDeck){
        this.playerDeck = playerDeck;
    }
    Player.prototype.playerMove = function(){
    console.log('playerMove');    
    };
}());