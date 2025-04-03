document.addEventListener("DOMContentLoaded", function () {
    const weddingDate = new Date("April 21, 2025 12:37:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "आजचा दिवस!";
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});
