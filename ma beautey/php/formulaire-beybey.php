<!DOCTYPE html>
<html lang="fr-be">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacter la beautey</title>
    <link rel="stylesheet" href="style.css">
</head>
<body> 
</div>
        <h1>Contacter la Beautey</h1>
        <br>    
        <form method="get" action="merci.php">
            <!-- dans cette balise que l'on place le contenu d'un formulaire -->
             <!-- un inout est une balise permettant à l'utilisateur de renseigner une info 
              il y a une grande variété que l'on peut définir à l'input, limitant les possibilités de réponse de l'utilisateur -->
            <div>
                <br>
                <label for="ForNomDeFamille">Votre nom de famille: </label>  
                <input type="text" name="NomDeFamille" id="ForNomDeFamille" placeholder="Exemple:Vancau" title="Votre nom de famille">
            </div>
            <br>
            <div>
                <label for="VotrePrénom">Votre Prénom:</label>
                <input type="text" name="Prénom" id="VotrePrénom" placeholder="Exemple: Stephanie" title="Votre Prénom" required>
            </div>
            <br>
            <div>
                <input type="radio" name="web" value="Femme"> <label for="Femme">Femme</label>
                <input type="radio" name="web" value="Homme"> <label for="Homme">Homme</label>
                <input type="radio" name="web" value="Autre"> <label for="Autre">Autre</label>
            </div>
            <br>
            <div>
                <label for="Email">Adresse mail:</label>
                <input type="email" id="Email" placeholder="Exemple: hju@" title="Votre Email" required> 
                <br><!-- required obligatoire -->
            </div>
            <br>
            <div>
                <label for="DateNaissance">Date de Naissance</label>
                <input type="date" name="DateNaissance" id="DateNaissance">
            </div>
            <br>
            <div> 
                <label for="VotreMessage">Votre Message:</label>
                <br>
                <br>
                <textarea id="VotreMessage" name="VotreMessage" rows="3" cols="42"></textarea>
            </div>
            <br>
            <div>
            <label for="TuMAime">Tu as aimé la Beautey?</label>
            <input type="checkbox" name="TuMAime" id="TuMAime" required >
            <br>
            </div>
            <br>
            <div>
                <button type="submit">Envoyer</button>
            </div>
            <br>
        </form>
        <br>
        <br>
        <br>
            <img src="beybey1.jpg" alt="" class="center">

    </div>

</body>
</html>