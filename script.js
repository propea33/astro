function getZodiacSign() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1; // Mois en numérique (1-12)
    const day = birthdate.getDate();

    let zodiacSign = '';
    let description = '';

    // Logique complète pour les 12 signes du zodiaque
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = 'Bélier';
        description = "Le Bélier est un signe de feu, audacieux et déterminé. Cette semaine, vous serez particulièrement énergique et créatif.";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = 'Taureau';
        description = "Le Taureau est un signe de terre, stable et patient. Cette semaine, concentrez-vous sur vos objectifs à long terme.";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        zodiacSign = 'Gémeaux';
        description = "Les Gémeaux sont des signes d'air, curieux et communicatifs. Cette semaine, de nouvelles opportunités s'offriront à vous.";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        zodiacSign = 'Cancer';
        description = "Le Cancer est un signe d'eau, émotionnel et intuitif. Cette semaine, prenez soin de vous et de vos proches.";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = 'Lion';
        description = "Le Lion est un signe de feu, confiant et généreux. Cette semaine, votre charisme vous permettra de briller.";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = 'Vierge';
        description = "La Vierge est un signe de terre, analytique et perfectionniste. Cette semaine, l'organisation sera votre alliée.";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = 'Balance';
        description = "La Balance est un signe d'air, diplomate et sociable. Cette semaine, favorisez les relations avec vos proches.";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = 'Scorpion';
        description = "Le Scorpion est un signe d'eau, passionné et intense. Cette semaine, vous serez particulièrement magnétique.";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = 'Sagittaire';
        description = "Le Sagittaire est un signe de feu, optimiste et aventurier. Cette semaine, l'aventure vous appelle.";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = 'Capricorne';
        description = "Le Capricorne est un signe de terre, ambitieux et discipliné. Cette semaine, vous progresserez vers vos objectifs.";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = 'Verseau';
        description = "Le Verseau est un signe d'air, original et indépendant. Cette semaine, vous aurez des idées novatrices.";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = 'Poissons';
        description = "Les Poissons sont un signe d'eau, émotif et intuitif. Cette semaine, laissez-vous guider par votre intuition.";
    }

    document.getElementById('result').innerHTML = `
        <h2>Votre signe astrologique : ${zodiacSign}</h2>
        <p>${description}</p>
    `;
}
