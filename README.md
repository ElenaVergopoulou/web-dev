# Indie Film Showcase

A responsive, interactive website to discover, support, and celebrate independent films and filmmakers.

## Project Overview

The Indie Film Showcase is a web platform designed to:

- Highlight featured and upcoming indie films
- Enable users to search, filter, and explore detailed film content
- Support crowdfunding campaigns directly through the interface
- Provide access to film-related events and workshops

All assets (film data, images, event posters) were generated using AI tools in accordance with assessment guidelines. No AI tools were used to write code or generate this report.

---

## Project Structure

📂 project-root/

├── 📄 index.html → Homepage with tabs & carousels

├── 📄 films.html → Discover Films page

├── 📄 crowdfunding.html → Crowdfunding campaigns list

├── 📄 film-details.html → Film detail view with donation modal

├── 📄 events.html → Events & subscription form

├── 📁 scripts/

│ ├── data.js → JSON-like array of all film project data

│ ├── homepage.js → Handles carousels, countdowns, and theme toggle

│ ├── discover-films.js → Search, filter, and sorting logic

│ ├── crowdfunding.js → Renders all crowdfunded projects + modal logic

│ └── film-details.js → Displays metadata, crowdfunding, reviews

├── 📁 styles/

│ └── style.css → Global layout, theme, and responsive design

├── 📁 assets/

│ All film, event images and hero video background

└── 📄 README.md → This file

---

## Pages & Functionality

### Homepage

- Hero video background
- Tabbed carousels:
  - **Featured Films**
  - **Coming Soon** (with live countdowns)
- Horizontal carousel scroll (click & swipe)
- Mobile-responsive (swipe gestures only, arrows hidden)

### Discover Films

- Search by title/description
- Filter by genre
- Sort by title, release date, or funding progress
- Clear filters instantly
- All results update in real time (no page reloads)

### Film Details Page

- Accessed from homepage, discover, or crowdfunding
- Displays full metadata, reviews, and crowdfunding status
- Crowdfunding:
  - Modal donation form
  - Validates input & updates progress instantly
  - Allows "Enter" key or "Confirm" button for submission
  - LocalStorage persistence
  - Thank-you toast message
- Back button dynamically reflects user’s entry path

### Crowdfunding Page

- Lists all actively crowdfunded projects
- Support via modal interface
- Redirect to Film Details for more information
- Designed for users focused solely on project funding

### Events Page

- Upcoming events shown as dynamic cards
- Toggle "View Details" on each card
- Form to subscribe to event notifications
  - Validates name/email
  - Displays confirmation message

---

## Key Features

- Fully responsive layout (flexbox + media queries)
- Theme toggle (light/dark) with persistence
- Semantic HTML & accessibility features
  - Heading hierarchy
  - Alt text for images
  - Keyboard-tab navigation
- Modular card components reused across pages
- Live countdowns for Coming Soon films
- Scrollable carousels across devices

---

## Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Media Queries)
- **Vanilla JavaScript (ES6+)**
- **LocalStorage** (for persistence)
- **DALL·E / ChatGPT** (for images and non-code content generation)

---

## Setup Instructions

1. Clone or download this repository.
2. Open `index.html` in any browser.
3. No build tools or backend needed – this is a front-end only site.

> Note: Make sure you are connected to the internet to load externally hosted images and fonts.

---

## Credits

All films, event content, and multimedia assets were generated via AI (ChatGPT, DALL·E) for educational purposes.

---

## Contact

Created by **Elena Vergopoulou** for the INM316 Web Design & Development module at City, University of London.
