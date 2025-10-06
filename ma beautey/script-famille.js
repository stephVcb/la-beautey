const membres = [
    {
        nom: "Son Poupa et sa Mouma: Bertrand et Stephanie",
        photo: "image/parent1.jpg",
    },

    {
        nom: "Sa grand-mouma et son grand-poupa: Marilette et Jean-michel",
        photo: "image/grand-parents2.jpg",
    },
    {
        nom: "Sa tatie tchoin: Virginie",
        photo: "image/tatie-tchoin2.jpg",

    },
    {
        nom: "Sa fit tatie: Valérie",
        photo: "image/tatie-val.jpg",
    },
    {
        nom:"Sa tatie: Aurore",
        photo: "aurore1.jpg",
    },
    {
        nom: "Sa tatie: Magali alias Marie-Josée",
        photo: "mag1.jpg",
    },
    {
        nom: "Sa belle-mouma: Caroline alias WIFE!!",
        photo: "wife.jpg",
    },
    {
        nom:"Sa tatie: Moganeeeee",
        photo: "mogane.jpg",
    },
    {
        nom: "Son ptétendant: Greg!",
        photo: "greg.jpg",
    },
    {
        nom: "Sa cousine: Papaye la petite fille modèle",
        photo: "image/cousine2.jpg",
    },
    {
        nom: 'Son cousin: Mugi alias "Toutoune" fils peureux de sa mouma Valérie',
        photo: "image/toutoune.2jpg.jpg",
    },
    {
        nom: "Sa grande soeur: vamp",
        photo: "image/vamp.jpg",
    },
    {
        nom: "Son tonton: Mushi alias le fils",
        photo: "image/grand-parents1.jpg",
    },
   
]

const famille = document.getElementById('famille');
for (let membre of membres) {
    const div = document.createElement('div');
    div.classList.add('card');
    const h2 = document.createElement('h2');
    h2.innerHTML = membre.nom;
    div.appendChild(h2);
    const img = document.createElement('img');
    img.src = membre.photo;
    div.appendChild(img);
    famille.appendChild(div);
}

