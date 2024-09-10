function getZodiacSign() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1; // Mois en numérique (1-12)
    const day = birthdate.getDate();

    let zodiacSign = '';
    let description = '';

    // Logique pour déterminer le signe astrologique (à compléter avec vos propres descriptions)
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = 'Bélier';
        description = 'Le Bélier est un signe de feu, audacieux et déterminé.';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = 'Taureau';
        // ... et ainsi de suite pour les autres signes
    }

    document.getElementById('result').textContent = `Votre signe astrologique est : ${zodiacSign}\n\n${description}`;
}
