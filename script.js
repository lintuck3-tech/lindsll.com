const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const menuNavLinks = [...siteNav.querySelectorAll("a")];
const navLinks = menuNavLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
const articleList = document.querySelector("#article-list");
const articleEmpty = document.querySelector("#article-empty");
const toggleLabel = menuToggle.querySelector("span");
const toggleIcon = menuToggle.querySelector("i");
const FOCUSABLE_NAV_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])';

const setMenuState = (isOpen) => {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close primary navigation" : "Open primary navigation");
  if (toggleLabel) {
    toggleLabel.textContent = isOpen ? "Close" : "Menu";
  }
  if (toggleIcon) {
    toggleIcon.classList.remove("fa-bars", "fa-xmark");
    toggleIcon.classList.add(isOpen ? "fa-xmark" : "fa-bars");
  }
};

const getNavFocusables = () =>
  [...siteNav.querySelectorAll(FOCUSABLE_NAV_SELECTOR)].filter((node) => !node.disabled);

const trapMenuFocus = (event) => {
  const focusable = getNavFocusables();
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const isShiftTab = event.shiftKey;

  if (!isShiftTab && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
  if (isShiftTab && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  }
};

const closeMenu = () => {
  setMenuState(false);
};

const openMenu = () => {
  setMenuState(true);
  const focusable = getNavFocusables();
  if (focusable.length > 0) {
    focusable[0].focus();
  }
};

const handleMenuToggle = () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
    menuToggle.focus();
  } else {
    openMenu();
  }
};

const handleMenuDocumentKeydown = (event) => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (!isOpen) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    menuToggle.focus();
    return;
  }

  if (event.key === "Tab") {
    trapMenuFocus(event);
  }
};

const handleOutsideClick = (event) => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (!isOpen) return;
  if (event.target.closest(".site-nav") || event.target.closest(".menu-toggle")) return;
  closeMenu();
};

setMenuState(false);

menuToggle.addEventListener("click", handleMenuToggle);
menuToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
    event.preventDefault();
    handleMenuToggle();
  }
});

document.addEventListener("click", handleOutsideClick);
document.addEventListener("keydown", handleMenuDocumentKeydown);

const updateCanvasZoom = () => {
  const designWidth = 864;
  const fullScreenGutter = 96;
  const availableWidth = window.innerWidth - fullScreenGutter * 2;
  const zoom = availableWidth > designWidth ? availableWidth / designWidth : 1;

  document.documentElement.style.setProperty("--canvas-zoom", zoom.toFixed(4));
};

window.addEventListener("resize", updateCanvasZoom);
updateCanvasZoom();

menuNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
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

const loadSlideImage = (index) => {
  const image = slides[index]?.querySelector("img[data-src]");
  if (!image) return;

  image.src = image.dataset.src;
  image.removeAttribute("data-src");
};

const renderThumbnails = () => {
  slides.forEach((slide, index) => {
    const sourceImage = slide.querySelector("img");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "carousel__thumb";
    button.dataset.slideIndex = String(index);
    button.setAttribute("aria-label", `Show photograph ${index + 1}`);
    const image = sourceImage.cloneNode();
    image.src = sourceImage.dataset.thumbnail;
    image.alt = "";
    image.removeAttribute("data-src");
    image.removeAttribute("data-thumbnail");
    image.width = 320;
    image.height = Math.round((320 * Number(sourceImage.height)) / Number(sourceImage.width));
    image.loading = "lazy";
    button.appendChild(image);
    thumbsContainer.appendChild(button);
  });
};

const showSlide = (index) => {
  activeSlide = (index + slides.length) % slides.length;
  loadSlideImage(activeSlide);
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
  [...dotsContainer.children].forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
  [...thumbsContainer.children].forEach((thumbnail, thumbnailIndex) => {
    const isActive = thumbnailIndex === activeSlide;
    thumbnail.classList.toggle("is-active", isActive);
    thumbnail.setAttribute("aria-current", isActive ? "true" : "false");
  });
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

slides.forEach((_slide, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "carousel__dot";
  dot.setAttribute("aria-label", `Show photograph ${index + 1}`);
  dotsContainer.appendChild(dot);
});

dotsContainer.addEventListener("click", (event) => {
  const dot = event.target.closest(".carousel__dot");
  if (!dot) return;
  showSlide([...dotsContainer.children].indexOf(dot));
});

renderThumbnails();
thumbsContainer.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".carousel__thumb");
  if (!thumbnail) return;
  showSlide(Number(thumbnail.dataset.slideIndex));
});

previousButton.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton.addEventListener("click", () => showSlide(activeSlide + 1));
showSlide(0);
