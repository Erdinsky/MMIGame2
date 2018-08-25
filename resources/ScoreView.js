var ModelGame = ModelGame || {};
ModelGame.ScoreView = function () {


    var that = {},
        categoryFrame,
        imageFrame,
        questionFrame,
        answers,
        nextButton,
        gameOverBtn,
        scoreFrame;




    function addScore(score){
        scoreFrame = document.querySelector(".scoreFrame");
        scoreFrame.innerHTML = "Dein Score beträgt: "+score;


    }
    function showScore(){
        categoryFrame = document.querySelector(".categoryFrame");
        imageFrame = document.querySelector(".imageFrame");
        questionFrame = document.querySelector(".questionFrame");
        answers = document.querySelector(".answers");
        gameOverBtn = document.querySelector(".gameOverButton");
        nextButton = document.querySelector(".nextButton");
        scoreFrame = document.querySelector(".scoreFrame");

        nextButton.classList.add("hidden");
        categoryFrame.classList.add("hidden");
        imageFrame.classList.add("hidden");
        questionFrame.classList.add("hidden");
        answers.classList.add("hidden");


        gameOverBtn.classList.remove("hidden");
        scoreFrame.classList.remove("hidden");

        gameOverBtn.addEventListener("click", restartGame);
    }


    function restartGame(){
        location.reload();
    }



    that.addScore = addScore;
    that.showScore = showScore;
    return that;
};