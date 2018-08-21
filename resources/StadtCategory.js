//CLASS WHICH GENERATES QUESTIONS AND ANSWERS FOR TOPIC STADT
// TODO: Kopieren für die anderen Themen
var ModelGame = ModelGame|| {};
ModelGame.StadtCategory = (function (){
    var that = {};
    // Ein Array mit den Fragen
    const questions = [
            {
                // Die Frage
                question: "Wo liegt Regensburg?",
                // Der Link zu einem Bild
                picture: "",
                // Antworten
                answers: {
                    erste: "Regensburg",
                    zweite: "München",
                    dritte: "Hanover",
                    vierte: "Berlin"
                },
                // Die Richtige Antwort
                correctAnswer: "Regensburg"
            },
            {
                // DIe Frage
                question: "Wo liegt München?",
                // Der Link zu einem Bild
                picture: "",
                // Antworten
                answers: {
                    erste: "Regensburg",
                    zweite: "München",
                    dritte: "Hanover",
                    vierte: "Berlin"
                },
                // Die Richtige Antwort
                correctAnswer: "München"
            },
            {
                // Die Frage
                question: "Wo liegt Hanover?",
                // Der Link zu einem Bild
                picture: "",
                // Antworten
                answers: {
                    erste: "Regensburg",
                    zweite: "München",
                    dritte: "Hanover",
                    vierte: "Berlin"
                },
                // Die Richtige Antwort
                correctAnswer: "Hanover"
            }
        ];

    that.questions = questions;
    return that;
}());
