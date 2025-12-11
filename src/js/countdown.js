// Date cible : 28 août 2026 à 18h00
const targetDate = new Date('2026-08-28T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcul des jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mise à jour de l'affichage
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    if (countdownNumbers.length >= 4) {
        countdownNumbers[0].textContent = String(days).padStart(3, '0');
        countdownNumbers[1].textContent = String(hours).padStart(2, '0');
        countdownNumbers[2].textContent = String(minutes).padStart(2, '0');
        countdownNumbers[3].textContent = String(seconds).padStart(2, '0');
    }

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownNumbers.forEach(num => num.textContent = '00');
    }
}

// Mise à jour immédiate
updateCountdown();

// Mise à jour toutes les secondes
const countdownInterval = setInterval(updateCountdown, 1000);
