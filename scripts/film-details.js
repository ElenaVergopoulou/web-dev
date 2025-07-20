// Get the film ID from the URL query parameter
const params = new URLSearchParams(window.location.search);
const filmId = params.get("id");
const container = document.getElementById("film-detail-content");

// Find the film object from the dataset
let film = filmProjects.find((f) => f.id === filmId);

// Check if there's a saved raised amount in localStorage and override
const savedRaised = localStorage.getItem(`raised-${film.id}`);
if (savedRaised !== null) {
  film.raised = parseFloat(savedRaised);
}

// If no matching film is found, show error
if (!film) {
  container.innerHTML = `<p>Film not found.</p>`;
} else {
  const percent = Math.min((film.raised / film.goal) * 100, 100); // cap at 100%

  // Render film content including crowdfunding bar and reviews
  container.innerHTML = `
    <h2 class="film-title">${film.title}</h2>
    <div class="film-details-layout">
      <img src="${film.image}" alt="${film.alt}">
      <table class="film-info-table">
        <tr><th>Description</th><td>${film.description}</td></tr>
        <tr><th>Director</th><td>${film.director}</td></tr>
        <tr><th>Cast</th><td>${film.cast}</td></tr>
        <tr><th>Genres</th><td>${film.genre}</td></tr>
        <tr><th>Release Date</th><td>${film.releaseDate}</td></tr>
      </table>
    </div>

    ${
      film.crowdfund
        ? `
      <div class="progress-bar"><div class="progress" style="width: ${percent}%"></div></div>
      <p class="funding-status">$${film.raised.toLocaleString()} raised of $${film.goal.toLocaleString()}</p>
      <button class="support-project-btn" data-id="${film.id}">Support this Project</button>
    `
        : "<p>This film is not seeking crowdfunding.</p>"
    }

    <div class="reviews">
      <h3>Reviews</h3>
      ${
        film.reviews.length
          ? `
        <ul class="review-list">
          ${film.reviews
            .map((r) => `<li><strong>${r.reviewer}:</strong> ${r.comment}</li>`)
            .join("")}
        </ul>
      `
          : "<p>No reviews yet.</p>"
      }
    </div>
  `;

  // Append modal to body (hidden by default)
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>Choose an amount to back this project</h3>
      <input type="number" id="back-amount" placeholder="Enter amount in USD" min="1">
      <button id="confirm-back-btn">Confirm</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Customize the "Back" button depending on user’s referrer page
  const backBtn = document.getElementById("back-btn");
  const referrer = document.referrer;

  if (referrer.includes("crowdfunding.html")) {
    backBtn.textContent = "Back to Crowdfunding";
  } else if (referrer.includes("films.html")) {
    backBtn.textContent = "Back to Discover Films";
  } else if (referrer.includes("index.html")) {
    backBtn.textContent = "Back to Home";
  }

  backBtn.addEventListener("click", () => window.history.back());

  // Modal functionality setup
  const supportBtn = container.querySelector(".support-project-btn");
  const closeBtn = modal.querySelector(".close-btn");
  const confirmBtn = modal.querySelector("#confirm-back-btn");
  const amountInput = modal.querySelector("#back-amount");

  // Open modal on support button click
  supportBtn?.addEventListener("click", () => {
    modal.style.display = "block";
    amountInput.focus();
  });

  // Close modal on close button click or outside modal
  closeBtn?.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Confirm support: validate amount, update UI + localStorage
  confirmBtn?.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) return alert("Enter a valid amount.");

    film.raised += amount;
    localStorage.setItem(`raised-${film.id}`, film.raised);

    // Update progress bar and funding text
    const newPercent = Math.min((film.raised / film.goal) * 100, 100);
    container.querySelector(".progress").style.width = `${newPercent}%`;
    container.querySelector(".funding-status").textContent =
      `$${film.raised.toLocaleString()} raised of $${film.goal.toLocaleString()}`;

    modal.style.display = "none";

    // Show toast confirmation
    const toast = document.createElement("div");
    toast.className = "confirmation-toast";
    toast.textContent = "Thanks for supporting!";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });

  // Support form submits on Enter key as well
  amountInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      confirmBtn.click();
    }
  });
}

// Hamburger menu toggle logic
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});

// Theme toggle logic
document.addEventListener("DOMContentLoaded", () => {
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
