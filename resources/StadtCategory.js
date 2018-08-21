//CLASS WHICH GENERATES QUESTIONS AND ANSWERS FOR TOPIC STADT



var questionAndAnswer1 = ({
    question: "Wie viel Einwohner hat Stuttgart",
    rightAnswer: "628.032",
    secondAnswer: "230.002",
    thirdAnswer: "1.123.000",
    fourthAnswer: "890.932"

});

var questionAndAnswer2 = ({
    question: "Wie viel Einwohner hat Berlin",
    rightAnswer: "3.574.830",
    secondAnswer: "230.002",
    thirdAnswer: "1.123.000",
    fourthAnswer: "890.932"

});

var questionAndAnswer3 = ({
    question: "Wie viel Einwohner hat Hamburg",
    rightAnswer: "1.810.438",
    secondAnswer: "230.002",
    thirdAnswer: "1.123.000",
    fourthAnswer: "890.932"

});

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

var arrayOfQuestiondAndAnswers = [questionAndAnswer1,questionAndAnswer2,questionAndAnswer3];



var randomNumber1;

var question;
var rightAnswer;
var secondAnswer;
var thirdAnswer;
var fourthAnswer;

var categoryView;
var INKREMENTER = 0;
var updatedAnswerAndQuestionArray = [];
var updatedAnswerAndQuestionArray2 = [];
var controlInstance;



function StadtCategory(){

    INKREMENTER++;
    console.log("INKREMENTER : " + INKREMENTER);

}



StadtCategory.prototype.generateQuestionAndAnswer = function (){

    if(INKREMENTER === 1) {
        randomNumber1 = Math.floor(Math.random() * arrayOfQuestiondAndAnswers.length);


        question = arrayOfQuestiondAndAnswers[randomNumber1].question;
        rightAnswer = arrayOfQuestiondAndAnswers[randomNumber1].rightAnswer;
        secondAnswer = arrayOfQuestiondAndAnswers[randomNumber1].secondAnswer;
        thirdAnswer = arrayOfQuestiondAndAnswers[randomNumber1].thirdAnswer;
        fourthAnswer = arrayOfQuestiondAndAnswers[randomNumber1].fourthAnswer;


        categoryView = ModelGame.CategoryView();
        categoryView.setUpQuestionAndAnswers(question, rightAnswer, secondAnswer, thirdAnswer, fourthAnswer);


        controlInstance = new ControlAnswer(arrayOfQuestiondAndAnswers[randomNumber1]);
        controlInstance.checkIfRightAnswerIsPicked();


        arrayOfQuestiondAndAnswers.remove(randomNumber1);

        for(var i = 0; i < arrayOfQuestiondAndAnswers.length; i++){
            updatedAnswerAndQuestionArray[i] = arrayOfQuestiondAndAnswers[i];
        }


    } else if (INKREMENTER === 2){
        randomNumber1 = Math.floor(Math.random() * updatedAnswerAndQuestionArray.length);

        question = updatedAnswerAndQuestionArray[randomNumber1].question;
        rightAnswer =  updatedAnswerAndQuestionArray[randomNumber1].rightAnswer;
        secondAnswer =  updatedAnswerAndQuestionArray[randomNumber1].secondAnswer;
        thirdAnswer =  updatedAnswerAndQuestionArray[randomNumber1].thirdAnswer;
        fourthAnswer =  updatedAnswerAndQuestionArray[randomNumber1].fourthAnswer;


        categoryView = ModelGame.CategoryView();
        categoryView.setUpQuestionAndAnswers(question, rightAnswer, secondAnswer, thirdAnswer, fourthAnswer);


        controlInstance = new ControlAnswer(updatedAnswerAndQuestionArray[randomNumber1]);
        controlInstance.checkIfRightAnswerIsPicked();


        updatedAnswerAndQuestionArray.remove(randomNumber1);

        for(var i = 0; i < updatedAnswerAndQuestionArray.length; i++){
            updatedAnswerAndQuestionArray2[i] = updatedAnswerAndQuestionArray[i];
        }
;


    } else if (INKREMENTER === 3){
        randomNumber1 = Math.floor(Math.random()* updatedAnswerAndQuestionArray2.length);

        question = updatedAnswerAndQuestionArray2[randomNumber1].question;
        rightAnswer =  updatedAnswerAndQuestionArray2[randomNumber1].rightAnswer;
        secondAnswer =  updatedAnswerAndQuestionArray2[randomNumber1].secondAnswer;
        thirdAnswer =  updatedAnswerAndQuestionArray2[randomNumber1].thirdAnswer;
        fourthAnswer =  updatedAnswerAndQuestionArray2[randomNumber1].fourthAnswer;


        categoryView = ModelGame.CategoryView();
        categoryView.setUpQuestionAndAnswers(question, rightAnswer, secondAnswer, thirdAnswer, fourthAnswer);

        controlInstance = new ControlAnswer(updatedAnswerAndQuestionArray2[randomNumber1]);
        controlInstance.checkIfRightAnswerIsPicked();

    }


}






