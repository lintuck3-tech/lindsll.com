const projectList = document.querySelector("#project-list");
const projectEmpty = document.querySelector("#project-empty");
const projects = Array.isArray(window.ARTICLES)
  ? window.ARTICLES.filter((project) => project.published !== false)
  : [];

if (projects.length === 0) {
  projectEmpty.hidden = false;
} else {
  projects.forEach((project) => {
    const item = document.createElement("article");
    item.className = "article-row";
    item.innerHTML = `
      <span class="article-row__icon" aria-hidden="true"><i class="${project.icon}"></i></span>
      <div class="article-row__body">
        <h3><a class="article-row__title-link" href="${project.href}">${project.title}</a></h3>
        <p>${project.summary}</p>
      </div>
      <a class="article-row__link" href="${project.href}" aria-label="Read ${project.title}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    `;
    projectList.appendChild(item);
  });
}
