// const rep1 = true ;
// const rep2 = false;
// const rep3 = false;

// const bonnesReponses = ["2018"];

// const reponses = document.getElementById("r1");

// for (let i = 0; i < bonnesReponses.length; i++) {
//     if (bonnesReponses[i] === reponses) {
//         console.log("bravo!")
//     }
//     else {
//         console.log("tes nulle!")
//     }

// }


// Tableau de questions (tu peux ajouter d'autres questions ici)
const questions = [
    {
        question: "En quelle année est née la beauté ?",
        choices: ["2014", "2018", "2023"],
        correctAnswer: choices[1] // L'indice de la bonne réponse (ici, il n'y a pas de bonne réponse "objective" pour cette question)
    }
];

// Sélectionner les éléments HTML nécessaires
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');

// Fonction pour afficher une question
// Fonction pour afficher une question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click',() => {
                // Vérifier si la réponse est correcte pour la question actuelle
                if (choicesElement === currentQuestion.correctAnswer) {
                    alert("Félicitations ! Vous avez trouvé la bonne réponse.");
                } else {
                    alert("Désolé, ce n'est pas la bonne réponse. La bonne réponse était : " + currentQuestion.correctAnswer);
                }
            });
        choicesElement.appendChild(button);
    });
}

// Afficher la première question
displayQuestion(questions[0]);




