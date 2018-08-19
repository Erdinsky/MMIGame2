//KLASSE VON DER AUS ALLES STARTET
var ModelGame = (function() {
    "use strict";


    //VARIABLES
    var that = {},
        mainView,
        categories,
        config,
        randomIndex;






    function init (){
        //CLASS INSTANCES
        mainView = ModelGame.MainView();
        categories = ModelGame.Categories();
        config = ModelGame.Config;


        //VARIABLE DEFINITIONS
        randomIndex = Math.floor(Math.random() *3);



        //METHOD
        mainView.init();


    }






    that.init = init;
    return that;

}());