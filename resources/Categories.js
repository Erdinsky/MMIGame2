//Categories-Class contains the logic deciding a random category and the pictures and question inside
var ModelGame = ModelGame || {};
ModelGame.Categories = function () {

    var that = {},
        CATEGORY_ARRAY = ["Stadt","Land", "Fluss"],
        QUESTION_ARRAY = [],
        categoryView,
        randomIndex,
        controls,
        testArr;



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


        /*
        var questionAndAnswers = ({
            question: "Wo liegt die Stadt",
            ersteAntwort: "Italien",
            zweiteAntwort: "Serbien",
            dritteAntwort: "USA",
            vierteAntwort: "Spanien"

        });

        categoryView.setUpQuestionAndAnswers(questionAndAnswers.question,questionAndAnswers.ersteAntwort,questionAndAnswers.zweiteAntwort,
            questionAndAnswers.dritteAntwort,questionAndAnswers.vierteAntwort);
        */

    }
    //IF "LAND" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A LAND THEMATIC
    function handleLandQuestions(){
     /*
        var questionAndAnswers = ({
            question: "Wo liegt das Land",
            ersteAntwort: "Italien",
            zweiteAntwort: "Serbien",
            dritteAntwort: "USA",
            vierteAntwort: "Spanien"

        });
        categoryView.setUpQuestionAndAnswers(questionAndAnswers.question,questionAndAnswers.ersteAntwort,questionAndAnswers.zweiteAntwort,
            questionAndAnswers.dritteAntwort,questionAndAnswers.vierteAntwort);

            */
    }
    //IF "FLUSS" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A FLUSS THEMATIC
    function handleFlussQuestions(){

        /*
        var questionAndAnswers = ({
            question: "Wo liegt der Fluss",
            ersteAntwort: "Italien",
            zweiteAntwort: "Serbien",
            dritteAntwort: "USA",
            vierteAntwort: "Spanien"

        });
        categoryView.setUpQuestionAndAnswers(questionAndAnswers.question,questionAndAnswers.ersteAntwort,questionAndAnswers.zweiteAntwort,
            questionAndAnswers.dritteAntwort,questionAndAnswers.vierteAntwort);

            */
    }






    that.init = init;
    return that;
};