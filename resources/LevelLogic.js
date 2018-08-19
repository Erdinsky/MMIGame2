/*LEVELLOGIC IS RESPONSIBLE FOR GENERATING ONE OF THE 3 TOPICS ( STADT , LAND , FLUSS) BY RANDOM
BUT EVERY TOPIC SHOULD BE PICKED UP MAXIMUM 3 TIMES
 */
var ModelGame = ModelGame|| {};
ModelGame.MainView = function (){


  var that = {},
      nextButton,
      categories,
      randomIndexGenerator,
      updatedRandomIndexGenerator1,
      updatedRandomIndexGenerator2,
      updatedRandomIndexGenerator3,
      randomIndex,
      indexLimitArr = [0,0,0],
      indexRandomGeneratorLimit = [0,0,0],
      limitedIndex,
      limitReached = false,
      limitIndex1 = false,
      limitIndex2 = false,
      limitIndex3 = false,
      answerFrame1,
      answerFrame2,
      answerFrame3,
      answerFrame4,
      control;


  function init (){



      //HANDLES NEXT BUTTON
      defineNextButton();

  }

  function defineNextButton(){
      nextButton = document.querySelector(".nextButton");
      nextButton.addEventListener("click", handleNextButton);
  }

  function handleNextButton(){

      answerFrame1 = document.querySelector(".answerFrame1");
      answerFrame2 = document.querySelector(".answerFrame2");
      answerFrame3 = document.querySelector(".answerFrame3");
      answerFrame4 = document.querySelector(".answerFrame4");


      answerFrame1.style.background = "white";
      answerFrame2.style.background = "white";
      answerFrame3.style.background = "white";
      answerFrame4.style.background = "white";


      if(limitReached === false) {
          //Creates Random Number between 0 - 2
          randomIndexGenerator = new RandomIndexGenerator(0, 2);
          randomIndex = randomIndexGenerator.generateRandomIndexBetween();


          //goes into the categories-class and starts init
          categories = ModelGame.Categories();
          categories.init(randomIndex);


          //array is important for limiting 3 question per category
          indexLimitArr[randomIndex]++;
          console.log(indexLimitArr);


          //checks if a index is on limit and which index it is
          control = new Control(indexLimitArr);
          limitedIndex = control.checkIfArrayLimitReached();

          if(limitedIndex !== "") {

              console.log("LIMITED INDEX : " + limitedIndex);
              switch (limitedIndex){

                  case "0":
                      limitIndex1 = true;
                      break;

                  case "1":
                      limitIndex2 = true;
                      break;

                  case "2":
                      limitIndex3 = true;


              }


              limitReached = true;

          }
      } else if (limitIndex1 === true && limitIndex2 !== true && limitIndex3 !== true) {
              console.log("1.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : " + limitIndex3);

              updatedRandomIndexGenerator1 = randomIndexGenerator.generateRandomIndexForOneLimitedIndex(1);
              indexLimitArr[updatedRandomIndexGenerator1]++;
              if (indexLimitArr[1] === 3) {
                  limitIndex2 = true;
              }
              if (indexLimitArr[2] === 3) {
                  limitIndex3 = true;
              }

              categories.init(updatedRandomIndexGenerator1);
              console.log(indexLimitArr);

          } else if (limitIndex2 === true && limitIndex1 !== true && limitIndex3 !== true) {
              console.log("2.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : " + limitIndex3);
              updatedRandomIndexGenerator2 = randomIndexGenerator.generateRandomIndexForTwoLimitedIndex(2);
              indexLimitArr[updatedRandomIndexGenerator2]++;
              if (indexLimitArr[0] === 3) {
                  limitIndex1 = true;
              }
              if (indexLimitArr[2] === 3) {
                  limitIndex3 = true;
              }
              categories.init(updatedRandomIndexGenerator2);
              console.log(indexLimitArr);
          } else if (limitIndex3 === true && limitIndex2 !== true && limitIndex1 !== true) {
              console.log("3.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : " + limitIndex3);
              updatedRandomIndexGenerator3 = randomIndexGenerator.generateRandomIndexForThreeLimitedIndex(3);
              indexLimitArr[updatedRandomIndexGenerator3]++;
              if (indexLimitArr[0] === 3) {
                  limitIndex1 = true;
              }
              if (indexLimitArr[1] === 3) {
                  limitIndex2 = true;
              }

              categories.init(updatedRandomIndexGenerator3);
              console.log(indexLimitArr);
          } else if(limitIndex1 === true && limitIndex2 === true && limitIndex3 !== true){
              console.log("4.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : "+ limitIndex3);


              indexLimitArr[2]++;
              console.log(indexLimitArr);
              if(indexLimitArr[2] === 3){
                  limitIndex3 = true;
              }

             categories.init(2);
          } else if(limitIndex1 !== true && limitIndex2 === true && limitIndex3 === true){
              console.log("5.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : "+ limitIndex3);

              indexLimitArr[0]++;
              console.log(indexLimitArr);
              if(indexLimitArr[0] === 3){
                  limitIndex1 = true;
              }
              categories.init(0);
          } else if(limitIndex1 === true && limitIndex2 !== true && limitIndex3 === true){
              console.log("6.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : "+ limitIndex3);
              indexLimitArr[1]++;
              console.log(indexLimitArr);
              if(indexLimitArr[1] === 3){
                  limitIndex2 = true;
              }
              categories.init(1);
          } else if(limitIndex1 === true && limitIndex2 === true && limitIndex3 === true){
              console.log(indexLimitArr);
              console.log("7.if");
              console.log("ERST BOOL : " + limitIndex1);
              console.log("ZWEIT BOOL: " + limitIndex2);
              console.log("DRITT BOOL : "+ limitIndex3);
              console.log("GAME OVER!");


          }

      }

  that.init = init;
  return that;
};