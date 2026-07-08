// AIVerse India - Basic Interactions

document.addEventListener("DOMContentLoaded", () => {

  // Explore button
  const exploreBtn = document.querySelector(".hero-buttons button");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.querySelector(".section").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Start Learning button
  const learnBtn = document.querySelector(".secondary");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      alert("🚀 Learning section is coming soon!");
    });
  }

  // Theme button
  const themeBtn = document.querySelector(".topbar button:last-child");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // Search box
  const search = document.querySelector("input");
  if (search) {
    search.addEventListener("keyup", () => {
      console.log("Searching:", search.value);
    });
  }

});
