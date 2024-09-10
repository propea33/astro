// Fonction pour calculer le compte à rebours
function countdown() {
    const christmas = new Date("December 25, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = christmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    document.getElementById("days").textContent = days + " jours";
    document.getElementById("weeks").textContent = weeks + " semaines";
    document.getElementById("months").textContent = months + " mois";
}

// Appeler la fonction au chargement de la page et toutes les secondes
countdown();
setInterval(countdown, 1000);

// Script pour l'effet neige (à personnaliser)
// ... (voir des tutoriels en ligne pour créer un effet neige avec JavaScript)
