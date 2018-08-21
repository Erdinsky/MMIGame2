//Categories-Class contains the logic deciding a random categorhy and the pictures and question inside
var ModelGame = ModelGame || {};
ModelGame.Categories = function () {

    var that = {},
        CATEGORY_ARRAY = ["Stadt","Land", "Fluss"],
        categoryView,
        categoryStadt,
        randomNumber1;







    function init (index){



        //VARIABLE DEFINITIONS



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
    categoryStadt = new StadtCategory();
    categoryStadt.generateQuestionAndAnswer();
    }
    //IF "LAND" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A LAND THEMATIC
    function handleLandQuestions(){

    }
    //IF "FLUSS" IS CHOSEN - FILL THE FIELDS WITH FITTING QUESTION FOR A FLUSS THEMATIC
    function handleFlussQuestions(){


    }






    that.init = init;
    return that;
};