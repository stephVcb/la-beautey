// Tableau de questions (tu peux ajouter d'autres questions ici)
const questions = [
    {
        question: "En quelle année est née la beauté ?",
        choices: ["2014", "2018", "2023"],
        correctAnswer: 1 // L'indice de la bonne réponse (ici, il n'y a pas de bonne réponse "objective" pour cette question)
    }
];

// Sélectionner les éléments HTML nécessaires
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');

// Fonction pour afficher une question
function displayQuestion(question) {
    questionElement.textContent = question.question;

    // Effacer les choix précédents
    choicesElement.innerHTML = '';

    // Créer les boutons pour les choix
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => {
            // Ici, tu peux ajouter une logique pour vérifier la réponse, mais comme il n'y a pas de bonne réponse "objective", tu peux simplement afficher un message comme "C'est une question philosophique !"
            alert("C'est une question philosophique ! La beauté est éternelle.");
        });
        choicesElement.appendChild(button);
    });
}

// Afficher la première question
displayQuestion(questions[0]);