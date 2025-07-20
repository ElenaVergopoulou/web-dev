// Sample event data (can be replaced with dynamic API later)
const events = [
  {
    id: 1,
    title: "Film Festival 2025",
    description:
      "A weekend celebration of indie films showcasing talent from all over the world.",
    date: "2025-08-15",
    location: "Los Angeles, CA",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/event1.png?v=1746887109669",
  },
  {
    id: 2,
    title: "Indie Filmmakers Meetup",
    description:
      "A networking event for independent filmmakers, directors, and creatives.",
    date: "2025-09-05",
    location: "New York, NY",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/event2.png?v=1746887218676",
  },
  {
    id: 3,
    title: "Virtual Filmmaking Workshop",
    description:
      "Join us for an online workshop where we discuss the future of filmmaking in the digital age.",
    date: "2025-10-10",
    location: "Online",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/event3.png?v=1746887246734",
  },
];

// Get the container where event cards will be dynamically injected
const eventsContainer = document.getElementById("events-container");

// Render event cards dynamically into the DOM
function displayEvents(eventList) {
  eventsContainer.innerHTML = ""; // Clear container first

  if (eventList.length === 0) {
    eventsContainer.innerHTML = "<p>No events found.</p>";
    return;
  }

  // Loop through events and create each card
  eventList.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    // Card structure with expandable details
    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <h3>${event.title}</h3>
        <p class="short-description">${event.description}</p>
        <button class="view-details-btn">View Details</button>
        <div class="event-details hidden">
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
        </div>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });

  // Add toggle functionality to each View Details button
  const buttons = document.querySelectorAll(".view-details-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.classList.toggle("hidden");

      // Toggle button text based on state
      button.textContent = details.classList.contains("hidden")
        ? "View Details"
        : "Hide Details";
    });
  });
}

// Render events on page load
displayEvents(events);

// Handle subscription form submission
document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkboxes = document.querySelectorAll('input[name="interests"]:checked');

  const interests = Array.from(checkboxes).map((cb) => cb.value);

  // Create feedback message
  const messageBox = document.createElement("p");
  messageBox.className = "confirmation-message";

  if (!name || !email) {
    messageBox.textContent = "Please fill in all required fields.";
  } else {
    messageBox.textContent = `Thanks, ${name}! We'll email you at ${email} about: ${
      interests.join(", ") || "all events"
    }.`;
  }

  // Remove any existing confirmation message
  const existing = document.querySelector(".confirmation-message");
  if (existing) existing.remove();

  // Add the message under the form
  e.target.parentNode.appendChild(messageBox);
});

// Toggle mobile hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Apply and manage dark/light theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    // Apply saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }

    // Toggle and save preference
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
});
