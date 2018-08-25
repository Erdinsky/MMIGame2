var SCORE_COUNTER = 0;
var answerField1;
var answerField2;
var answerField3;
var answerField4;
var questionFromCategory;
var pickedAnswer = "";
var lockedInButton = document.querySelector(".lockAnswer");
var nextButton = document.querySelector(".nextButton");
var score = 0;
var scoreView;


function ControlAnswer(question){
    questionFromCategory = question;

}

ControlAnswer.prototype.checkIfRightAnswerIsPicked = function(){
    answerField1 = document.querySelector(".answerFrame1");
    answerField2 = document.querySelector(".answerFrame2");
    answerField3 = document.querySelector(".answerFrame3");
    answerField4 = document.querySelector(".answerFrame4");


    answerField1.addEventListener("click", answerField1Clicked);
    answerField2.addEventListener("click", answerField2Clicked);
    answerField3.addEventListener("click", answerField3Clicked);
    answerField4.addEventListener("click", answerField4Clicked);


};


answerField1Clicked = function (){


    pickedAnswer = answerField1.innerHTML;

    lockedInButton.classList.remove("hidden");
    lockedInButton.addEventListener("click", onLockedInButtonClicked);

}

answerField2Clicked = function (){


    pickedAnswer = answerField2.innerHTML;

    lockedInButton.classList.remove("hidden");
    lockedInButton.addEventListener("click", onLockedInButtonClicked);
};
answerField3Clicked = function (){

    pickedAnswer = answerField3.innerHTML;

    lockedInButton.classList.remove("hidden");
    lockedInButton.addEventListener("click", onLockedInButtonClicked);
};
answerField4Clicked = function (){


    pickedAnswer = answerField4.innerHTML;

    lockedInButton.classList.remove("hidden");
    lockedInButton.addEventListener("click", onLockedInButtonClicked);
};



onLockedInButtonClicked = function () {
    answerField1.removeEventListener("click", answerField1Clicked);
    answerField2.removeEventListener("click", answerField2Clicked);
    answerField3.removeEventListener("click", answerField3Clicked);
    answerField4.removeEventListener("click", answerField4Clicked);
    nextButton.classList.remove("hidden");
     console.log("GEPICKTE ANTWORT : " + pickedAnswer);
     console.log("RICHTIGE ANTWORT : "+ questionFromCategory.rightAnswer);

     if(pickedAnswer === questionFromCategory.rightAnswer){
         scoreView = ModelGame.ScoreView();
         console.log(pickedAnswer + " war die richtige Antwort");
         score++;
         scoreView.addScore(score);
         console.log("Dein Score lautet: " + score);

     } else {
         console.log(pickedAnswer + " war leider die falsche Antowrt");
         console.log("Dein Score lautet: " + score);
     }


     lockedInButton.classList.add("hidden");


};


