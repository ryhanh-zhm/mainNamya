const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const header = document.querySelector(".header");
const blue = document.querySelector(".blob-blue");
const green = document.querySelector(".blob-green");

/* Mobile menu toggle */
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close nav when clicking a link on mobile
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

/* Sticky header effect on scroll */
window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 10) {
    header.style.background = "rgba(248, 251, 255, 0.82)";
    header.style.boxShadow = "0 6px 24px rgba(18, 60, 122, 0.08)";
    header.style.borderBottom = "1px solid rgba(28, 99, 255, 0.08)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.28)";
    header.style.boxShadow = "none";
    header.style.borderBottom = "1px solid rgba(28, 99, 255, 0.08)";
  }
});

/* Background parallax effect */
window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  if (blue) {
    blue.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
  }

  if (green) {
    green.style.transform = `translate(${x * -22}px, ${y * -22}px)`;
  }
});
// Header search dropdown
const searchTab = document.getElementById("searchTab");
const searchDropdown = document.getElementById("searchDropdown");
const searchInput = document.getElementById("searchInput");
const headerSearch = document.getElementById("headerSearch");

function closeSearch() {
  if (!searchTab || !searchDropdown) return;
  searchDropdown.classList.remove("open");
  searchTab.classList.remove("is-open");
  searchTab.setAttribute("aria-expanded", "false");
}

function openSearch() {
  if (!searchTab || !searchDropdown) return;
  searchDropdown.classList.add("open");
  searchTab.classList.add("is-open");
  searchTab.setAttribute("aria-expanded", "true");
  if (searchInput) searchInput.focus();
}

if (searchTab && searchDropdown) {
  searchTab.addEventListener("click", () => {
    const isOpen = searchDropdown.classList.contains("open");
    if (isOpen) closeSearch();
    else openSearch();
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (!headerSearch) return;
    if (!headerSearch.contains(e.target)) closeSearch();
  });

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
  });
}

// Optional: close search when opening mobile nav (prevents overlap)
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    closeSearch();
  });
}
