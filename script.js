function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25);
    
    if (now > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }
    
    const diff = christmasDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const weeks = Math.floor((days % 30) / 7);
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `Il reste ${days} jours avant Noël`;
    document.getElementById('detailed-countdown').innerHTML = `${months} mois, ${weeks} semaines, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

    document.title = `Combien de jours avant Noël ? ${days} jours restants !`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const snowflakesCount = 50;
const snowflakesContainer = document.createElement('div');
snowflakesContainer.id = 'snowflakes-container';
for (let i = 0; i < snowflakesCount; i++) {
    let snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDelay = `${Math.random() * 10}s`;
    snowflake.innerHTML = '❄';
    snowflakesContainer.appendChild(snowflake);
}
document.body.appendChild(snowflakesContainer);

const recipes = [
    {
        name: "Sablés de Noël",
        ingredients: ["250g de farine", "125g de beurre", "125g de sucre", "1 œuf", "1 pincée de sel"],
        instructions: "Mélangez tous les ingrédients. Formez une boule et laissez reposer 1h au frais. Étalez la pâte et découpez des formes. Cuisez 10-12 min à 180°C."
    },
    {
        name: "Chocolat chaud de Noël",
        ingredients: ["500ml de lait", "50g de chocolat noir", "1 bâton de cannelle", "1 pincée de muscade"],
        instructions: "Faites chauffer le lait avec la cannelle. Ajoutez le chocolat et la muscade. Remuez jusqu'à ce que le chocolat soit fondu. Servez chaud."
    },
    // ... Ajoutez les autres recettes ici
];

const generateButton = document.getElementById('generate-recipe');
const recipeText = document.getElementById('recipe-text');
const sendEmailButton = document.getElementById('send-email');
let currentRecipe = null;

function generateRecipe() {
    currentRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    let recipeHTML = `<h3>${currentRecipe.name}</h3>`;
    recipeHTML += "<h4>Ingrédients :</h4><ul>";
    currentRecipe.ingredients.forEach(ingredient => {
        recipeHTML += `<li>${ingredient}</li>`;
    });
    recipeHTML += "</ul><h4>Instructions :</h4><p>" + currentRecipe.instructions + "</p>";
    recipeText.innerHTML = recipeHTML;
    generateButton.textContent = "Générer une autre recette de Noël";
    sendEmailButton.style.display = "inline-block";
    
    // Scroll en douceur jusqu'à la recette
    document.getElementById('recipe-container').scrollIntoView({ behavior: 'smooth' });
}

generateButton.addEventListener('click', generateRecipe);

sendEmailButton.addEventListener('click', function() {
    if (currentRecipe) {
        const subject = encodeURIComponent("Une délicieuse recette de Noël pour toi !");
        const body = encodeURIComponent(`J'ai trouvé une magnifique recette à te partager pour le temps des fêtes :\n\n${currentRecipe.name}\n\nIngrédients :\n${currentRecipe.ingredients.join('\n')}\n\nInstructions :\n${currentRecipe.instructions}\n\nJoyeuses fêtes !`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
});
