const targetDate = new Date('2026-08-28T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    const countdownNumbers = document.querySelectorAll('.countdown-number');
    if (countdownNumbers.length >= 4) {
        countdownNumbers[0].textContent = String(days).padStart(3, '0');
        countdownNumbers[1].textContent = String(hours).padStart(2, '0');
        countdownNumbers[2].textContent = String(minutes).padStart(2, '0');
        countdownNumbers[3].textContent = String(seconds).padStart(2, '0');
    }

  
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownNumbers.forEach(num => num.textContent = '00');
    }
}


updateCountdown();


const countdownInterval = setInterval(updateCountdown, 1000);

