// raccourci pour créer une région mettre "#" et ça affiche région ou endregion

// #region Création des variables js
const questions = [
    {
        q0: "En quelle année est née la beauté ?",
        rep0: ["2014", "2018", "2023"],
        bonneRep0: "2018"
    },
    {

    }
];
// #endregion 

// #region Création des variables en lien avec l'html
let questionElement = document.getElementById('question');
let choixReponses = document.getElementById('choices');
let radio = document.createElement('input');
let buttonVerification = document.getElementById('submit');


// #endregion


// #region Création de fonction pour afficher la question

// Pour l'instant pas besoin de paramètre car que 1 question
function afficherQuestion() {
    questionElement.innerHTML = questions[0].q0;
    for (let i = 0; i < questions[0].rep0.length; i++) {
        // console.log(questions[0].rep0[i])
        radio.innerHTML = questions[0].rep0;
        // choixReponses.innerHTML = questions[0].rep0;

    }
}
afficherQuestion();
// #endregion

//#region  Création d'une fonction pour faire apparaître la question et les réponses
const buttonPret = document.getElementById('boutonPret');
let pretCommencer = document.getElementById('pret');
const resultat = document.getElementById('resultat');
const questionPret = document.getElementById('question-pret');


function enleveCache() {
    buttonPret.classList.remove('cache');

}
buttonPret.onclick = () => {
    if (pretCommencer.value === "Non") {
        resultat.textContent = "Tu n'es pas prêt pour le test sur la beauté";

    } else {
        resultat.textContent = "C'est parti!";
        formulaire.classList.remove('cache');
        questionPret.classList.add('cache');

    }
}
//#endregion

//#region Création d'une fonction pour le bouton "as-tu réussi?"

function verification() {
    buttonVerification = document.getElementsByName("reponse0");
}

buttonVerification("onclick" , verification() ) = {
    if ( choixReponses = questions[0].rep0[1]) {
        document.getElementById('vraiOuFaux').innerHTML = "Bravo, Bonne réponse";
        console.log("Bravo");

    } 
}
console.log ("trouve le bug");


//#endregion



// document.getElementById("question").innerHTML="Nouveaux text";

