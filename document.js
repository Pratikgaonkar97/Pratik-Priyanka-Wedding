function changeMusic() {
    let selectedMood = document.getElementById("moodSelector").value;
    document.getElementById("bgMusic").src = `assets/${selectedMood}`;
    document.getElementById("bgMusic").play();
}

function generateLoveStory() {
    let name1 = document.getElementById("partner1").value;
    let name2 = document.getElementById("partner2").value;
    let stories = [
        `${name1} and ${name2} met at a beautiful garden... their love grew under the moonlight!`,
        `It was love at first sight when ${name1} bumped into ${name2} at a coffee shop!`,
        `${name1} wrote a poem, and ${name2} fell in love instantly. A true love story!`
    ];
    let randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById("loveStory").innerText = `💖 ${randomStory}`;
}

document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const weddingDate = new Date("April 21, 2025 12:37:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
