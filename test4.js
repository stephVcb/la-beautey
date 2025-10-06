//#region Declaration des variables
let pretJs = document.getElementById('pret');
let questionsJs = document.getElementById('questionsHtml');
let reponsesJs = document.getElementById('reponsesHtml');
let resultatJs = document.getElementById('resultat');
const suivantDivJs = document.getElementById('suivantDiv');
const titreQuestion = document.getElementById('h2');
const buttonTrueJs = document.getElementsByName('buttonTrue');
const buttonFalseJs = document.getElementsByName('buttonFalse');
let currentQuestionIndex = 0;
let currentReponsesIndex = 0;
let scoreJsIndex = 0;
let scoreJs = document.getElementById('score');
const valeurButtonVrai = parseInt(document.getElementById('buttonTrue').value);
const valeurButtonFaux = parseInt(document.getElementById('buttonFalse').value);
const recommencerJs = document.getElementById('recommencer');
const wrapJs = document.getElementsByClassName('wrap');




//#endregion


//#region Creation du tableau questions et réponse

const questions = [
    { question: "La beautey est née en 2018.", reponse: 1 },
    { question: "La beautey adore manger.", reponse: 1 },
    { question: "La beautey adore faire de longue promenade avec n'importe quelle météo.", reponse: 2 },
    { question: "La beautey a trois cousines", reponse: 2 },
    { question: "La beautey possede ses propres tubes", reponse: 1 },
    { question: "La beautey a un caractère extrêment doux et delicat", reponse: 2 },
    { question: "La beautey adore les fruits", reponse: 1 },
    { question: "La beautey n'a jamais été hospitalisé", reponse: 2 },
    { question: "La beautey a déjà manger une plaquette de chocolat au lait sans être malade", reponse: 1 },
    {question:"La beautey a déja été à l'école pour chien", reponse: 1},
    {question:" La beautey a un oeil bleu ", reponse: 2},
    {question:"La beautey ne c'est jamais battue avec un autre beybey", reponse:2},
    {question:"Tout le monde aime la beautey", reponse: 1},
    {question:"La beautey est gatey par les voisins", reponse: 1},
    {question:"La beautey vient de l'île de la Reunion", reponse:2},
    {question:"La beautey est parfaite", reponse: 1},
    
];

//#endregion 


//#region cacher les textes au début

questionsJs.style.display = "none";
pretJs.style.display = "block";
resultatJs.style.display = "none";
scoreJs.style.display = "none";
suivantDivJs.style.display = "none";
recommencerJs.style.display = "none";


//#endregion




function beginQuizz() {
    pretJs.style.display = "none";
    questionsJs.style.display = "block";
    recommencerJs.style.display = "none";
    scoreJs.style.display = "none";
    afficherQuestion();
}

//#endregion

//#region fonction afficherQuestion()

function afficherQuestion() {
    titreQuestion.innerHTML = questions[currentQuestionIndex].question;

}
function afficherReponses() {
    resultat.innerHTML = questions[currentReponsesIndex].reponse;

}

//#endregion


//#region fonction pour la navbar
function myFunction() {
    document.getElementById("navbarId").classList.toggle("navbar");
}

// Close the dropdown if the user clicks outside of it
wrapJs.onclick = function (event) {
    if (event.target.matches('.wrap')) {
        let dropdowns = document.getElementsByClassName("navbar");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('.navbar')) {
                openDropdown.classList.remove('.navbar');
            }
        }
    }
}
//#endregion


//#region fonction verifier réponse
function verifierReponse(button) {
    resultatJs.style.display = "block";
    suivantDivJs.style.display = "block";

    if (button.textContent == "Vrai") {
        resultat.textContent = "Vous avez choisi vrai";
    } else {
        resultat.textContent = "Vous avez choisi faux";
    };
    if (((valeurButtonVrai == questions[currentReponsesIndex].reponse) && (button.textContent == "Vrai")) || ((valeurButtonFaux == questions[currentReponsesIndex].reponse) && (button.textContent == "Faux"))) {
        resultat.textContent = "Bonne réponse";
        scoreJsIndex++;

    } else {
        resultat.textContent = "Mauvaise réponse";

    }


}
//#endregion


//#region fonction pour les boutton 
function nextQ(button) {
    resultatJs.style.display = "none";
    suivantDivJs.style.display = "none";
    currentQuestionIndex++;
    currentReponsesIndex++;
    // Incrémente l'index de la question actuelle
    if (currentQuestionIndex < questions.length) {
        afficherQuestion(); // Affiche la prochaine question
    } else {
        // Si toutes les questions ont été posées, afficher le score ou un message de fin
        questionsJs.style.display = "none";
        scoreJs.style.display = "block";
        scoreJs.innerHTML = `Votre score est de : ${scoreJsIndex} sur ${questions.length}  !`;
        if (scoreJsIndex >= (currentQuestionIndex - 1)) {
            scoreJs.innerHTML = `Votre score est de : ${scoreJsIndex} sur ${questions.length}  !  Vous êtes un vrai fan de la beautey!`;

        } else {
            scoreJs.innerHTML = `Votre score est de : ${scoreJsIndex} sur ${questions.length}  !  Vous vous avez fait des fautes! recommencer le test!`;
            recommencerJs.style.display = "block";

        }

    }

}
//#endregion

//#region fonction pour  recommencer
function recommencer() {
    // Cache les éléments affichés après le début du quiz
    questionsJs.style.display = "none";
    scoreJs.style.display = "none";
    recommencerJs.style.display = "none";
    // Réinitialise les indices
    currentQuestionIndex = 0;
    currentReponsesIndex = 0;
    scoreJsIndex = 0;

    // Affiche à nouveau l'écran de départ
    pretJs.style.display = "block";
}
if (currentQuestionIndex === questions.length) {
    scoreJs.style.display = "block";
    recommencerJs.style.display = "block"; // Affiche le bouton "Recommencer"
}

//#endregion

document.onmousemove = suitsouris;
function suitsouris(event) {
    if (pretJs != "pret") {
        var x = event.x + document.body.scrollLeft;
        var y = event.y + document.body.scrollTop;
    }
    else {
        var x = event.pageX;
        var y = event.pageY;
    }
    document.getElementById("curseur").style.left = (x + 1) + 'px';
    document.getElementById("curseur").style.top = (y + 1) + 'px';
}


let id = null;
const elem = document.getElementById("cercle");
let pos = 0;
clearInterval(id);
id = setInterval(frame, 9);
function frame() {
    if (pos == 200) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.bottom = pos + "px";
        elem.style.center = pos + "px";
    }
}

let a = null;
const eleme = document.getElementById("animate2");
let posi = 650;
clearInterval(a);
a = setInterval(frame2, 9);
function frame2() {
    if (posi == 200) {
        clearInterval(a);
    } else {
        posi--;
        eleme.style.top = posi + "px";
        eleme.style.right = posi + "px";
    }
}

let ide = null;
const ele = document.getElementById("animate3");
let posit = 650;
clearInterval(id);
ide = setInterval(frame3, 9);
function frame3() {
    if (posit == 200) {
        clearInterval(ide);
    } else {
        posit--;
        ele.style.top= posit + "px";
        ele.style.left = posit + "px";
    }
}

























//#region fonction beginQuizz()

// function beginQuizz() {
//     pretJs.style.display = "none";
//     questionsJs.style.display = "block";
//     for (let i = 0; i < questions[0].question.length; i++) {
//         titreQuestion.innerHTML = questions[0].question;

//     }

// }

//#region fonction beginQuizz()




// // Tableau de questions (à remplacer par vos propres questions)
// const questions = [
//     { question: "La beauté est née en 2018.", reponse: true },
//     { question: "La beauté adore manger.", reponse: true },
//     // ... Ajoutez d'autres questions ici
// ];

// // Variables pour suivre l'état du quiz
// let currentQuestion = 0;
// let score = 0;

// // Fonction pour afficher la question actuelle
// const questionElement = document.getElementById("questionsHtml")
// function displayQuestion() {
//     questionElement.querySelector("h2").textContent = questions[currentQuestion].question;
// }

// // Fonction pour vérifier la réponse
// const bonneReponse = questions[currentQuestion].reponse;
// function verifierReponse(reponseUtilisateur) {
//     if (reponseUtilisateur === bonneReponse) {
//         score++;
//     }
//     // ... Afficher un message indiquant si la réponse est correcte
//     // ... Passer à la question suivante
// }

// // Fonction pour passer à la question suivante
// function suivant() {
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         displayQuestion();
//     } else {
//         // Afficher le score final
//         document.getElementById("resultat").textContent = `Vous avez obtenu ${score} bonnes réponses sur ${questions.length}.`;
//     }
// }

// // Fonction pour commencer le quiz
// function beginQuizz() {
//     document.getElementById("pret").style.display = "none";
//     document.getElementById("questionsHtml").style.display = "block";
//     displayQuestion();
// }
