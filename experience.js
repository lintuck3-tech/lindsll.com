const experienceRoles = [
  {
    period: "2023 - Present",
    role: "Psychiatric Social Worker",
    organization: "County of San Mateo",
    icon: "fa-solid fa-heart-pulse",
    summary: "Support adolescents and families navigating acute mental-health needs by assessing risk, coordinating treatment, developing safety plans, and collaborating with multidisciplinary partners to promote stability and long-term well-being.",
    skills: ["Risk and safety assessment", "Crisis intervention", "Treatment planning", "Care coordination", "Multidisciplinary collaboration"],
  },
  {
    period: "2021 - 2023",
    role: "Child Welfare Social Worker",
    organization: "County of San Mateo",
    icon: "fa-solid fa-shield-heart",
    summary: "Led complex child-safety investigations from intake through resolution by interviewing children, caregivers, and collateral contacts; assessing risk; documenting evidence; coordinating with legal and community partners; and developing recommendations for court and ongoing safety.",
    skills: ["Child-safety investigations", "Investigative interviewing", "Risk and safety assessment", "Court and legal documentation", "Multidisciplinary collaboration"],
  },
  {
    period: "2020 - 2021",
    role: "Social Work Intern",
    organization: "County of Santa Clara",
    icon: "fa-solid fa-hand-holding-heart",
    summary: "Supported current and former foster youth as they prepared for independent adulthood by providing individualized case support, connecting them with housing, education, employment, and benefits resources, documenting progress, and advocating for their needs across systems.",
    skills: ["Youth advocacy", "Case management", "Resource navigation", "Transition planning", "Court documentation"],
  },
  {
    period: "2019 - 2020",
    role: "School Social Work Intern",
    organization: "Santa Cruz City Schools",
    icon: "fa-solid fa-school",
    summary: "Supported students and families with school engagement, social-emotional needs, and community connections.",
    skills: ["Case planning", "School collaboration", "Family support"],
  },
  {
    period: "2017 - 2018",
    role: "AmeriCorps VIP Lead",
    organization: "Volunteer Center of Santa Cruz County",
    icon: "fa-solid fa-people-group",
    summary: "Coordinated volunteers and countywide service projects while building community partnerships.",
    skills: ["Volunteer leadership", "Partner engagement", "Data tracking"],
  },
  {
    period: "2016 - 2017",
    role: "Wraparound Family Service Provider",
    organization: "ACTION Council of Monterey County",
    icon: "fa-solid fa-house-chimney-heart",
    summary: "Provided community-based support to youth and families through care planning, coping skills, and crisis de-escalation.",
    skills: ["Crisis de-escalation", "Care planning", "Family-centered support"],
  },
];

const controls = document.querySelector("#experience-controls");
const detail = document.querySelector("#experience-detail");

const showExperienceRole = (index) => {
  const selected = experienceRoles[index];
  [...controls.children].forEach((button, buttonIndex) => {
    const isSelected = buttonIndex === index;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  detail.innerHTML = `
    <div class="experience-detail__icon" aria-hidden="true"><i class="${selected.icon}"></i></div>
    <p class="experience-detail__period">${selected.period}</p>
    <h3>${selected.role}</h3>
    <p class="experience-detail__organization">${selected.organization}</p>
    <p class="experience-detail__summary">${selected.summary}</p>
    <ul class="experience-detail__skills" aria-label="Key skills learned"><li>${selected.skills.join("</li><li>")}</li></ul>
  `;
};

experienceRoles.forEach((item, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "experience-timeline__point";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-label", `${item.period}: ${item.role}`);
  button.innerHTML = `<span>${item.period}</span><strong>${item.role}</strong>`;
  button.addEventListener("click", () => showExperienceRole(index));
  button.addEventListener("keydown", (event) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
    const nextIndex = (index + direction + experienceRoles.length) % experienceRoles.length;
    controls.children[nextIndex].focus();
    showExperienceRole(nextIndex);
  });
  controls.appendChild(button);
});

showExperienceRole(0);
