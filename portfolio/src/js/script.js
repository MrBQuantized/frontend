// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

// change element's
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuToggle.textContent = "×";

    //
    menuToggle.setAttribute("aria-label", "Close navigation");
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    menuToggle.textContent = "☰";

    //
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Make the mobile menu close automatically when you click a nav link
const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    // each item can control the appearance of the nav-links.
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Active-section Highlighting — Scroll Spy
// when you scroll down the page, the active section's link will be highlighted

// All sections: #home, #about, #projects, #skills, #contact
const sections = document.querySelectorAll("main section");

// All navigation links <a href="..."></a>
const navLinksA = document.querySelectorAll(".nav-links a");

// Watch these sections and tell me when 50% of
// one is visible.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // if this section is in view

        // remove active from all links first
        navLinksA.forEach((link) => {
          link.classList.remove("active");
        });

        // find the link that points to this section
        // if entry.target.id = "projects", find a[href="#projects"]
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );

        // light it up
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.2, // threshold 0.2 = 20% visible
  },
);

// Start watching
sections.forEach((section) => {
  observer.observe(section);
});

// Reveal animation
// All elements we want to reveal (i.e. has "reveal" in the class name)
const revealElements = document.querySelectorAll(".reveal");

// watch the elements and notify when one of them is 50% visible
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If element is visible

        // make element visible
        entry.target.classList.add("visible");

        // stop watching it
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // 20% visible
  },
);

// start observing
revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Scrolled class
// header element
const header = document.querySelector("header");

//
window.addEventListener("scroll", () => {
  // add scrolled class to header after scrolling more than 50px
  header.classList.toggle("scrolled", window.scrollY > 50);
});