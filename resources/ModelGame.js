//KLASSE VON DER AUS ALLES STARTET
var ModelGame = (function() {
    "use strict";


    //VARIABLES
    var that = {},
        mainView,
        config,
        randomIndex,
        cityQuestions,
        numberOfRightAnswers;


    function init (){
        //CLASS INSTANCES
        mainView = ModelGame.MainView();
        config = ModelGame.Config;

        // Setzt die Nummer der richtigen Antworten bei Spielstart zurück
        numberOfRightAnswers = 0;
        that.numberOfRightAnswers = numberOfRightAnswers;

        // Zu beginn der Anwendung werden Alle fragen in ein Array gepackt
        cityQuestions = [];

        ModelGame.StadtCategory.questions.forEach((element) =>{
            cityQuestions.push(element);
        });

        that.cityQuestions = cityQuestions;

        //VARIABLE DEFINITIONS
        randomIndex = Math.floor(Math.random() *3);



        //METHOD
        mainView.init();


    }





    
    that.init = init;
    
    return that;

}());