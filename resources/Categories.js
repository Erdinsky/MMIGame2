//Categories-Class contains the logic deciding a random category and the pictures and question inside
var ModelGame = ModelGame || {};
ModelGame.Categories = (function () {

    var that = {},
        CATEGORY_ARRAY = ["Stadt","Land", "Fluss"],
        QUESTION_ARRAY = [],
        categoryView,
        randomIndex,
        controls,
        testArr,
        currentAnswer;



    function init (index){
        
        //VARIABLE DEFINITIONS

        console.log("RANDOMINDEX : " + index);
        console.log("CATEGORY : " + CATEGORY_ARRAY[index]);

        //CLASS INSTANCES
        categoryView = ModelGame.CategoryView();
        categoryView.setUpCategoryLabel(CATEGORY_ARRAY[index]);

        if(CATEGORY_ARRAY[index] === "Stadt"){
            handleStadtQuestions();
        } else if (CATEGORY_ARRAY[index] === "Land"){
            handleLandQuestions();

        } else if (CATEGORY_ARRAY[index] === "Fluss"){
            handleFlussQuestions();
        }


    }
    //TODO: DIE FRAGEN SOLLTEN IN EIN ARRAY GEPACKT WERDEN. DAS HEISST : DIE VARIABLE "questionAndAnswers" MÜUSS IN EIN ARRAY GEPACKT WERDEN DAMIT AUS DEM ARRAY EINE ZUFÄLLIGE FRAGE
    //TODO: HERAUSGEZOGEN WERDEN KANN. BSP : ARRAY [questionAndAnswers1 , questionAndAnswers2] - RANDOM FUNKTION DIE EINEN VON DEN BEIDEN AUSSUCHT.

    //IF "STADT" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A STADT THEMATIC
    function handleStadtQuestions(){
        categoryView = ModelGame.CategoryView();
        // Wählt eine random Frage aus
        var randomNumber = Math.floor((Math.random() * ModelGame.cityQuestions.length));

        // Übergibt die Frage an das Array
        categoryView.setUpQuestionAndAnswers(ModelGame.cityQuestions[randomNumber].question, ModelGame.cityQuestions[randomNumber].answers.erste, 
                                            ModelGame.cityQuestions[randomNumber].answers.zweite, ModelGame.cityQuestions[randomNumber].answers.dritte, 
                                            ModelGame.cityQuestions[randomNumber].answers.vierte);

        // Übergibt die richtige Antwort
        currentAnswer = ModelGame.cityQuestions[randomNumber].correctAnswer;
        that.currentAnswer = currentAnswer;

        // Entfernt die Frage aus dem Array
        ModelGame.cityQuestions.splice(randomNumber,1);
    }

    //IF "LAND" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A LAND THEMATIC
    function handleLandQuestions(){

    }
    //IF "FLUSS" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A FLUSS THEMATIC
    function handleFlussQuestions(){

    }

    that.init = init;
    return that;
}());