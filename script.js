// AIVerse India - Working Interactions

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".topbar input");
  const exploreBtn = document.querySelector(".hero-buttons button");
  const learnBtn = document.querySelector(".hero-buttons .secondary");
  const langBtn = document.querySelector(".topbar button:nth-of-type(1)");
  const themeBtn = document.querySelector(".topbar button:nth-of-type(2)");

  const cards = document.querySelectorAll(".card, .tool");

  // Explore button
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Start Learning button
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      alert("📚 Learning section coming soon!\n\nYahan AI learning roadmap, free courses aur study tools add honge.");
    });
  }

  // Hindi / English button
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      alert("🌐 Hindi / English switch coming soon!\n\nAbhi website Hinglish mode me hai.");
    });
  }

  // Theme button
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
      } else {
        themeBtn.textContent = "🌙";
      }
    });
  }

  // Search working filter
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      cards.forEach((card) => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Card click details
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.innerText.split("\n")[0];

      alert(
        "🚀 " + title + "\n\n" +
        "Is category/tool ka detail page next update me add hoga.\n\n" +
        "Yahan use case, best prompts, alternatives, jobs aur earning ideas dikhaye jayenge."
      );
    });
  });
});
