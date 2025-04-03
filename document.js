document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const weddingDate = new Date("April 21, 2025 12:37:00").getTime();
        const now = new Date().getTime();
        const timeDiff = weddingDate - now;

        if (timeDiff <= 0) {
            document.getElementById("countdown").innerHTML = "आजचा मोठा दिवस आहे! 🎉";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
