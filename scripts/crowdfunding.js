// Get the container element to hold all crowdfunding project cards
const container = document.getElementById("project-container");

// Filter projects that are currently open for crowdfunding
// Also check localStorage for previously stored raised values and override them
let crowdfundingProjects = filmProjects
  .filter((project) => project.crowdfund)
  .map((project) => {
    const stored = localStorage.getItem(`raised-${project.id}`);
    if (stored) {
      return { ...project, raised: parseFloat(stored) };
    }
    return project;
  });

// Loop through each crowdfunding project and render a card for it
crowdfundingProjects.forEach((project) => {
  const percent = Math.min((project.raised / project.goal) * 100, 100); // Calculate progress bar width

  // Create project card element
  const card = document.createElement("div");
  card.className = "fund-card";
  card.innerHTML = `
    <a href="film-details.html?id=${project.id}">
      <img src="${project.image}" alt="${project.alt}" onerror="this.src='https://via.placeholder.com/300x450?text=Image+Unavailable'">
    </a>
    <div class="fund-info">
      <h3>${project.title}</h3>
      <p class="description-banner">${project.description}</p>
      <div class="progress-bar">
        <div class="progress" style="width: ${percent}%"></div>
      </div>
      <p class="funding-status">$${project.raised.toLocaleString()} raised of $${project.goal.toLocaleString()}</p>
      <div class="button-container">
        <button class="back-btn" data-id="${project.id}">Support this Project</button>
      </div>
    </div>
  `;
  container.appendChild(card);

  // Create the modal form for backing the project
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>Choose an amount to back this project</h3>
      <input type="number" class="back-amount" placeholder="Enter amount in USD" min="1">
      <button class="confirm-back-btn">Confirm</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Get relevant modal and card elements
  const backButton = card.querySelector(".back-btn");
  const closeModalButton = modal.querySelector(".close-btn");
  const backAmountInput = modal.querySelector(".back-amount");
  const confirmBackButton = modal.querySelector(".confirm-back-btn");

  // Open modal on support button click
  backButton.addEventListener("click", () => {
    modal.style.display = "block";
    backAmountInput.focus();
  });

  // Close modal when clicking close button
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Confirm donation
  confirmBackButton.addEventListener("click", () => {
    const backAmount = parseFloat(backAmountInput.value);

    if (isNaN(backAmount) || backAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Update raised value and persist it
    project.raised += backAmount;
    localStorage.setItem(`raised-${project.id}`, project.raised);

    // Update progress bar and funding status on the card
    const updatedCard = backButton.closest(".fund-card");
    const progressBar = updatedCard.querySelector(".progress");
    const fundingStatus = updatedCard.querySelector(".funding-status");
    const newPercent = Math.min((project.raised / project.goal) * 100, 100);

    progressBar.style.width = `${newPercent}%`;
    fundingStatus.textContent = `$${project.raised.toLocaleString()} raised of $${project.goal.toLocaleString()}`;

    modal.style.display = "none";

    // Show temporary confirmation message
    const toast = document.createElement("div");
    toast.className = "confirmation-toast";
    toast.textContent = "Thanks for supporting!";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });

  // Allow submission with Enter key
  backAmountInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      confirmBackButton.click();
    }
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Handle hamburger toggle for mobile nav
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Theme toggle support using localStorage
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
