// ===== Secret Code =====
const CODE = "2208";

// ===== Unlock Website =====
function unlock() {
    const entered = document.getElementById("password").value;
    if (entered === CODE) {
        document.getElementById("lockScreen").classList.add("hidden");
        const mainPage = document.getElementById("mainPage");
        mainPage.classList.remove("hidden");
        mainPage.classList.add("show"); // adds fade-in effect
    } else {
        document.getElementById("wrong").innerHTML = "❌ Wrong code. Try again ❤️";
    }
}

// ===== Countdown =====
// Reunion Date: 1 December 2026
const reunionDate = new Date("December 1, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = reunionDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Floating Hearts =====
const heartContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 350);
