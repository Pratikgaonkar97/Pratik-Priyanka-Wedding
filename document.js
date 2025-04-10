document.addEventListener("DOMContentLoaded", function () {
    // Countdown Logic with Confetti
    function updateCountdown() {
        const weddingDate = new Date("April 21, 2025 12:37:00").getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = formattedHours;
        document.getElementById("minutes").innerText = formattedMinutes;
        document.getElementById("seconds").innerText = formattedSeconds;

        if (timeLeft <= 0) {
            const lang = document.querySelector(".lang-switcher button.active")?.getAttribute("data-lang") || "mr";
            document.getElementById("countdown").innerHTML = lang === "mr" ? "आज आमचा लग्नाचा दिवस आहे!" : "Today is our wedding day!";
            launchConfetti();
        }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Confetti Function
    function launchConfetti() {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
        document.body.appendChild(script);
        script.onload = function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff4081', '#ff9800', '#8e24aa']
            });
        };
    }

    // Language Switcher
    const langButtons = document.querySelectorAll(".lang-switcher button");
    const translations = {
        mr: {
            invitation: "विवाह! एक बंधन, एक कर्तव्य, एक नवं नातं, एक जाणीव. नव्याने जुळणारी एक रेशीम गाठ! एक स्वप्न… दोन डोळ्यांचं, एक हुरहूर… दोन मनांची, एक चाहूल… सात जन्मांची, अशा मंगल क्षणाचे साक्षीदार होण्यासाठी आपणांस विवाहाचे अगत्याचे आमंत्रण",
            title: "प्रियंका आणि प्रतिक",
            days: "दिवस",
            hours: "तास",
            minutes: "मिनिटे",
            seconds: "सेकंद",
            timeline: [
                { title: "साखरपुडा समारंभ", date: "१८ एप्रिल २०२५", time: "१२:०० PM", location: "मु. पो. पिरकोन-आवरे, ता. उरण, जि. रायगड", address: "" },
                { title: "हळदी समारंभ", date: "२० एप्रिल २०२५", time: "५:०० PM", location: "मु. पो. पिरकोन-आवरे, ता. उरण, जि. रायगड", address: "" },
                { title: "लग्न समारंभ", date: "२१ एप्रिल २०२५", time: "१२:३७ PM", location: "मोरया बँक्वेट हॉल", address: "खोपटा कॉन्टिनेंटल बस स्टॉप जवळ, खोपटा ब्रिज जवळ, उरण, नवी मुंबई, महाराष्ट्र ४१०२०६" },
                { title: "स्वागत समारंभ आणि स्नेह भोजन", date: "२१ एप्रिल २०२५", time: "१:०० - ३:०० PM", location: "मोरया बँक्वेट A/C हॉल", address: "" }
            ],
            labels: { date: "तारीख", time: "वेळ", location: "स्थळ", address: "पत्ता" }
        },
        en: {
            invitation: "Marriage! A bond, a duty, a new relationship, a realization. A newly tied knot! A dream… seen by two eyes, a longing… felt by two hearts, a calling… for a lifetime. You are cordially invited to be a part of this auspicious moment and bless the couple.",
            title: "Priyanka & Pratik",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            timeline: [
                { title: "Engagement Ceremony", date: "18 April 2025", time: "12:00 PM", location: "Pirakon-Aware, Uran, Raigad District", address: "" },
                { title: "Haldi Ceremony", date: "20 April 2025", time: "5:00 PM", location: "Pirakon-Aware, Uran, Raigad District", address: "" },
                { title: "Wedding Ceremony", date: "21 April 2025", time: "12:37 PM", location: "Morya Banquet Hall", address: "Near Khopta Continental Bus Stop, Near Khopta Bridge, Uran, Navi Mumbai, Maharashtra 410206" },
                { title: "Reception", date: "21 April 2025", time: "1:00 - 3:00 PM", location: "Morya Banquet A/C Hall", address: "" }
            ],
            labels: { date: "Date", time: "Time", location: "Venue", address: "Address" }
        }
    };

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            langButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Update Invitation Message
            document.querySelector(".invitation-message").textContent = translations[lang].invitation;

            // Update Title
            document.querySelector(".name-color").textContent = translations[lang].title;

            // Update Countdown Labels
            document.querySelectorAll(".countdown-label span").forEach((span, i) => {
                span.textContent = Object.values(translations[lang])[i + 2];
            });

            // Update Timeline
            document.querySelectorAll(".timeline-item").forEach((item, i) => {
                const event = translations[lang].timeline[i];
                const address = event.address ? `<p><strong>${translations[lang].labels.address}:</strong> ${event.address}</p>` : "";
                item.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>${translations[lang].labels.date}:</strong> ${event.date}</p>
                    <p><strong>${translations[lang].labels.time}:</strong> ${event.time}</p>
                    <p><strong>${translations[lang].labels.location}:</strong> ${event.location}</p>
                    ${address}
                    ${item.dataset.map ? `<iframe src="${item.dataset.map}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : ""}
                `;
            });
        });
    });

    // Initialize with Marathi (default)
    document.querySelector(".invitation-message").textContent = translations.mr.invitation;
    document.querySelector(".name-color").textContent = translations.mr.title;
    document.querySelectorAll(".timeline-item").forEach((item, i) => {
        const event = translations.mr.timeline[i];
        const address = event.address ? `<p><strong>${translations.mr.labels.address}:</strong> ${event.address}</p>` : "";
        item.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>${translations.mr.labels.date}:</strong> ${event.date}</p>
            <p><strong>${translations.mr.labels.time}:</strong> ${event.time}</p>
            <p><strong>${translations.mr.labels.location}:</strong> ${event.location}</p>
            ${address}
            ${item.dataset.map ? `<iframe src="${item.dataset.map}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : ""}
        `;
    });

    // Set default active language (Marathi)
    document.querySelector("[data-lang='mr']").classList.add("active");
});
