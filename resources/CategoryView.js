//SETS UP THE ANSWERS AND QUESTION AND FILL THE FIELDS WITH THEM
var ModelGame = ModelGame || {};
ModelGame.CategoryView = function () {
    var that = {},
        categoryLabel,
        questionFrame,
        answerFrame1,
        answerFrame2,
        answerFrame3,
        answerFrame4,
        nextButton;

    function setUpCategoryLabel(label){
        categoryLabel = document.querySelector(".categoryFrame");
        categoryLabel.innerHTML = ""+label;
    }
    //METHOD GETS QUESTION AND ANSWERS FROM "CATEGORIES.JS"
    function setUpQuestionAndAnswers(question, answer1, answer2, answer3, answer4){
        questionFrame = document.querySelector(".questionFrame");
        answerFrame1 = document.querySelector(".answerFrame1");
        answerFrame2 = document.querySelector(".answerFrame2");
        answerFrame3 = document.querySelector(".answerFrame3");
        answerFrame4 = document.querySelector(".answerFrame4");

        questionFrame.innerHTML = ""+question;
        answerFrame1.innerHTML = ""+answer1;
        answerFrame2.innerHTML = ""+answer2;
        answerFrame3.innerHTML = ""+answer3;
        answerFrame4.innerHTML = ""+answer4;

        nextButton = document.querySelector(".nextButton");
        lockButton = document.querySelector(".lockButton");

        nextButton.classList.add("hidden");
        
        

        //WHAT HAPPENS IF A SPECIFIC ANSWER IS PRESSED
        answerFrame1.addEventListener("click", answerFrame1Clicked);
        answerFrame2.addEventListener("click", answerFrame2Clicked);
        answerFrame3.addEventListener("click", answerFrame3Clicked);
        answerFrame4.addEventListener("click", answerFrame4Clicked);
    }


    function answerFrame1Clicked() {

        answerFrame1 = document.querySelector(".answerFrame1");
        answerFrame2 = document.querySelector(".answerFrame2");
        answerFrame3 = document.querySelector(".answerFrame3");
        answerFrame4 = document.querySelector(".answerFrame4");

        answerFrame1.style.background = "orange";

        answerFrame2.style.background = "white";
        answerFrame3.style.background = "white";
        answerFrame4.style.background = "white";

        lockButton.classList.remove("hidden");
    }

    function answerFrame2Clicked() {

        answerFrame1 = document.querySelector(".answerFrame1");
        answerFrame2 = document.querySelector(".answerFrame2");
        answerFrame3 = document.querySelector(".answerFrame3");
        answerFrame4 = document.querySelector(".answerFrame4");

        answerFrame2.style.background = "orange";

        answerFrame1.style.background = "white";
        answerFrame3.style.background = "white";
        answerFrame4.style.background = "white";

        lockButton.classList.remove("hidden");
    }

    function answerFrame3Clicked() {

        answerFrame1 = document.querySelector(".answerFrame1");
        answerFrame2 = document.querySelector(".answerFrame2");
        answerFrame3 = document.querySelector(".answerFrame3");
        answerFrame4 = document.querySelector(".answerFrame4");

        answerFrame3.style.background = "orange";

        answerFrame2.style.background = "white";
        answerFrame1.style.background = "white";
        answerFrame4.style.background = "white";

        lockButton.classList.remove("hidden");
    }

    function answerFrame4Clicked() {
        answerFrame1 = document.querySelector(".answerFrame1");
        answerFrame2 = document.querySelector(".answerFrame2");
        answerFrame3 = document.querySelector(".answerFrame3");
        answerFrame4 = document.querySelector(".answerFrame4");

        answerFrame4.style.background = "orange";

        answerFrame2.style.background = "white";
        answerFrame3.style.background = "white";
        answerFrame1.style.background = "white";

        lockButton.classList.remove("hidden");
    }

    that.setUpQuestionAndAnswers = setUpQuestionAndAnswers;
    that.setUpCategoryLabel = setUpCategoryLabel;
    return that;
};