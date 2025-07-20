// Wait until the entire DOM is loaded before executing code
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  /**
   * Renders a carousel of film cards, adds optional countdown timers,
   * and sets up horizontal scroll navigation via arrows.
   * 
   * @param {string} carouselId - The container ID for the carousel track
   * @param {string} leftBtnId - The left arrow button ID
   * @param {string} rightBtnId - The right arrow button ID
   * @param {Array} films - Array of film objects to display
   * @param {boolean} includeCountdown - Whether to display release countdown (used in Coming Soon tab)
   */
  const setupCarousel = (carouselId, leftBtnId, rightBtnId, films, includeCountdown = false) => {
    const track = document.getElementById(carouselId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    // Clear carousel before rendering new films
    track.innerHTML = "";

    films.forEach((film) => {
      const card = document.createElement("div");
      card.className = "film-card";

      const releaseDate = new Date(film.releaseDate);
      let countdownHTML = "";

      // Add countdown element only if required (Coming Soon tab)
      if (includeCountdown) {
        const countdownId = `countdown-${film.id}`;
        countdownHTML = `<p class="countdown" id="${countdownId}"></p>`;
      }

      // Inject HTML into each card
      card.innerHTML = `
        <a href="film-details.html?id=${film.id}">
          <img src="${film.image}" alt="${film.alt || film.title}">
          <div class="info">
            <h3>${film.title}</h3>
            ${countdownHTML}
          </div>
        </a>
      `;
      track.appendChild(card);

      // If countdown is included, dynamically update time left until release
      if (includeCountdown) {
        const countdownEl = document.getElementById(`countdown-${film.id}`);
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = releaseDate - now;

          if (distance <= 0) {
            countdownEl.textContent = "Now Streaming!";
            clearInterval(interval);
            return;
          }

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
      }
    });

    // Scroll amount in pixels per arrow click
    const scrollStep = 260;

    // Clone and replace buttons to remove duplicate event listeners
    const newRight = rightBtn.cloneNode(true);
    const newLeft = leftBtn.cloneNode(true);
    rightBtn.replaceWith(newRight);
    leftBtn.replaceWith(newLeft);

    // Arrow scroll interactions
    newRight.addEventListener("click", () => {
      track.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    newLeft.addEventListener("click", () => {
      track.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  };

  // Tab buttons
  const featuredTab = document.getElementById("featured-tab");
  const comingsoonTab = document.getElementById("comingsoon-tab");

  // Tab content containers
  const featuredContent = document.getElementById("featured-content");
  const comingsoonContent = document.getElementById("comingsoon-content");

  // Filter films from dataset
  const featuredFilms = filmProjects.filter((f) => f.featured);
  const comingSoonFilms = filmProjects.filter((f) => new Date(f.releaseDate) > today);

  // Initialize carousels with and without countdowns
  setupCarousel("film-carousel-featured", "left-btn-featured", "right-btn-featured", featuredFilms);
  setupCarousel("film-carousel-comingsoon", "left-btn-comingsoon", "right-btn-comingsoon", comingSoonFilms, true);

  // Tab switching logic
  featuredTab.addEventListener("click", () => {
    featuredTab.classList.add("active");
    comingsoonTab.classList.remove("active");
    featuredContent.classList.add("active");
    comingsoonContent.classList.remove("active");
  });

  comingsoonTab.addEventListener("click", () => {
    comingsoonTab.classList.add("active");
    featuredTab.classList.remove("active");
    comingsoonContent.classList.add("active");
    featuredContent.classList.remove("active");
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Light/dark mode toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
});
