// set curren year to the year we wnt now
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

// Working with mobile navigation

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// for implementing smooth scrooling on different browsers

// const allNavLinks = document.querySelectorAll("a:link");
// // console.log(allNavLinks)

// allNavLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     console.log(href)

//     // Scrolls back to top

//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }
//   });
// });

// doing fixed navigtation
// same logic to be applied on future products
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent)
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHero);
