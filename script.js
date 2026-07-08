// AIVerse India - Stable Professional Interactions

document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = document.querySelectorAll("input");
  const cards = document.querySelectorAll(".card, .tool, .tool-item");
  const exploreBtn = document.querySelector(".hero-buttons button");
  const learnBtn = document.querySelector(".hero-buttons .secondary");
  const langBtn = document.querySelector(".topbar button:nth-of-type(1)");
  const themeBtn = document.querySelector(".topbar button:nth-of-type(2)");

  // Smooth scroll button
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      const firstSection = document.querySelector(".section");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Secondary button
  if (learnBtn) {
    learnBtn.addEventListener("click", function () {
      alert("📚 Ye feature next update me add hoga.");
    });
  }

  // Language button
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      alert("🌐 Hindi / English mode next update me add hoga.");
    });
  }

  // Theme button
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  }

  // Universal search for all pages
  searchInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const value = input.value.toLowerCase().trim();

      cards.forEach(function (card) {
        const text = card.innerText.toLowerCase();

        if (value === "" || text.includes(value)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Reliable card navigation
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const text = card.innerText.toLowerCase();

      if (text.includes("study")) {
        window.location.href = "study.html";
      } else if (text.includes("coding")) {
        window.location.href = "coding.html";
      } else if (text.includes("content")) {
        window.location.href = "content.html";
      } else if (text.includes("career")) {
        window.location.href = "career.html";
      } else if (text.includes("earning")) {
        window.location.href = "earning.html";
      } else if (text.includes("daily")) {
        window.location.href = "assistant.html";
      }
    });
  });
});
