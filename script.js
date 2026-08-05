const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const menuNavLinks = [...siteNav.querySelectorAll("a")];
const navLinks = menuNavLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
const articleList = document.querySelector("#article-list");
const articleEmpty = document.querySelector("#article-empty");

const updateCanvasZoom = () => {
  const designWidth = 864;
  const fullScreenGutter = 96;
  const availableWidth = window.innerWidth - fullScreenGutter * 2;
  const zoom = availableWidth > designWidth ? availableWidth / designWidth : 1;

  document.documentElement.style.setProperty("--canvas-zoom", zoom.toFixed(4));
};

window.addEventListener("resize", updateCanvasZoom);
updateCanvasZoom();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

menuNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateCurrentSection = () => {
  const marker = window.scrollY + window.innerHeight * 0.3;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= marker) currentSection = section;
  });

  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

window.addEventListener("scroll", updateCurrentSection, { passive: true });
window.addEventListener("resize", updateCurrentSection);
updateCurrentSection();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.05 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const articles = Array.isArray(window.ARTICLES)
  ? window.ARTICLES.filter((article) => article.published !== false).slice(0, 3)
  : [];

if (articles.length > 0) {
  articleEmpty.hidden = true;

  articles.forEach((article) => {
    const item = document.createElement("article");
    item.className = "article-row";
    item.innerHTML = `
      <span class="article-row__icon" aria-hidden="true">
        <i class="${article.icon}"></i>
      </span>
      <div class="article-row__body">
        <h3>
          <a class="article-row__title-link" href="${article.href}">
            ${article.title}
          </a>
        </h3>
        <p>${article.summary}</p>
      </div>
      <a class="article-row__link" href="${article.href}" aria-label="Read ${article.title}">
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
    `;
    articleList.appendChild(item);
  });
}

const carousel = document.querySelector(".carousel");
const slides = [...carousel.querySelectorAll(".carousel__slide")];
const previousButton = carousel.querySelector(".carousel__button--previous");
const nextButton = carousel.querySelector(".carousel__button--next");
const dotsContainer = carousel.querySelector(".carousel__dots");
const thumbsContainer = carousel.querySelector(".carousel__thumbs");
let activeSlide = 0;

const renderThumbnails = () => {
  thumbsContainer.innerHTML = "";
  slides.forEach((slide, index) => {
    const sourceImage = slide.querySelector("img");
    const button = document.createElement("button");
    button.type = "button";
    button.className = `carousel__thumb${index === activeSlide ? " is-active" : ""}`;
    button.setAttribute("aria-label", `Show photograph ${index + 1}`);
    button.setAttribute("aria-current", index === activeSlide ? "true" : "false");
    const image = sourceImage.cloneNode();
    image.alt = "";
    image.removeAttribute("loading");
    button.appendChild(image);
    button.addEventListener("click", () => showSlide(index));
    thumbsContainer.appendChild(button);
  });
};

const showSlide = (index) => {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
  [...dotsContainer.children].forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
  renderThumbnails();
  const activeThumbnail = thumbsContainer.children[activeSlide];
  if (activeThumbnail) {
    const centeredPosition =
      activeThumbnail.offsetLeft -
      (thumbsContainer.clientWidth - activeThumbnail.clientWidth) / 2;
    thumbsContainer.scrollTo({
      left: Math.max(0, centeredPosition),
      behavior: "smooth",
    });
  }
};

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "carousel__dot";
  dot.setAttribute("aria-label", `Show photograph ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

previousButton.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton.addEventListener("click", () => showSlide(activeSlide + 1));
showSlide(0);
