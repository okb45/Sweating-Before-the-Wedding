const startDate = new Date("2026-06-14");
const weddingDate = new Date("2026-12-12");
const today = new Date();

const totalDuration = weddingDate - startDate;
const elapsed = today - startDate;

const percentComplete = Math.min(
    Math.max((elapsed / totalDuration) * 100, 0),
    100
);

document.getElementById("progress-fill").style.width =
    `${percentComplete}%`;

const daysRemaining = Math.ceil(
    (weddingDate - today) / (1000 * 60 * 60 * 24)
);

document.getElementById("countdown-text").textContent =
    `${daysRemaining} days until the wedding • ${percentComplete.toFixed(0)}% of the competition completed`;