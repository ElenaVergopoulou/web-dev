// Get the container where film cards will be displayed
const filmContainer = document.getElementById("film-gallery");

// Filter out films to include only those that are featured or have crowdfunding enabled
let films = filmProjects.filter((film) => film.featured || film.crowdfund);

// Dynamically populate the genre dropdown with unique genres extracted from all films
const genreFilter = document.getElementById("filter-genre");
const genres = [
  ...new Set(filmProjects.flatMap((film) => film.genre.split("/"))),
];
genres.unshift("All"); // Add "All" as the default filter option

genres.forEach((genre) => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreFilter.appendChild(option);
});

// Function to display an array of films as cards in the DOM
function displayFilms(filmList) {
  filmContainer.innerHTML = ""; // Clear existing cards

  if (filmList.length === 0) {
    filmContainer.innerHTML = "<p>No films found.</p>";
    return;
  }

  // Generate film card for each item in the list
  filmList.forEach((film) => {
    const filmCard = document.createElement("div");
    filmCard.classList.add("film-card");
    filmCard.innerHTML = `
      <a href="film-details.html?id=${film.id}">
        <img src="${film.image}" alt="${film.alt}">
        <div class="info">
          <h3>${film.title}</h3>
          <p>${film.description}</p>
        </div>
      </a>
    `;
    filmContainer.appendChild(filmCard);
  });
}

// Initial display of all films
displayFilms(films);

// Get DOM elements for filter/search/sort functionality
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const sortBySelect = document.getElementById("sort-by");

// Function to filter and sort the list of films based on UI inputs
function searchFilms() {
  const searchValue = searchBar.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;
  const sortBy = sortBySelect.value;

  let filteredFilms = films;

  // Filter by search input (title or description)
  if (searchValue) {
    filteredFilms = filteredFilms.filter(
      (film) =>
        film.title.toLowerCase().includes(searchValue) ||
        film.description.toLowerCase().includes(searchValue)
    );
  }

  // Filter by genre (each film can have multiple genres)
  if (selectedGenre !== "All") {
    filteredFilms = filteredFilms.filter((film) =>
      film.genre
        .split("/")
        .some((genre) => genre.toLowerCase() === selectedGenre.toLowerCase())
    );
  }

  // Apply sorting based on selected option
  if (sortBy === "title") {
    filteredFilms.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "release-newest") {
    filteredFilms.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  } else if (sortBy === "release-oldest") {
    filteredFilms.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
  } else if (sortBy === "raised-highest") {
    filteredFilms.sort((a, b) => b.raised - a.raised);
  } else if (sortBy === "raised-lowest") {
    filteredFilms.sort((a, b) => a.raised - b.raised);
  }

  // Render the updated film list
  displayFilms(filteredFilms);
}

// Event listener to filter results in real-time as the user types
searchBar.addEventListener("input", searchFilms);

// Event listeners for dropdowns (genre and sort)
genreFilter.addEventListener("change", searchFilms);
sortBySelect.addEventListener("change", searchFilms);

// Clear button resets all inputs and redisplays full list
const clearButton = document.getElementById("clear-filters");
clearButton.addEventListener("click", () => {
  searchBar.value = "";
  genreFilter.value = "All";
  sortBySelect.value = "title";
  displayFilms(films);
});

// Hamburger menu toggle for mobile navigation
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Handle light/dark theme toggle with persistence
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    // Load previously saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }

    // Allow user to toggle and save theme choice
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
});
