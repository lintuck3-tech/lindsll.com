const experienceRoles = [
  {
    period: "Aug 2023 – Present",
    role: "Psychiatric Social Worker",
    organization: "County of San Mateo",
    icon: "fa-solid fa-heart-pulse",
    highlights: [
      "Provide therapy to adolescents and families, assess self-harm and suicide risk, and develop treatment and safety plans.",
      "Coordinate crisis response, hospitalizations, and follow-up care with schools, caregivers, emergency responders, and other providers.",
      "Evaluate complex information to recommend appropriate care, complete mandated reports, and document clinical decisions.",
      "Improve referral processes and develop Excel trackers adopted by colleagues to manage case deadlines.",
    ],
    skills: ["Risk and safety assessment", "Crisis response", "Treatment planning", "Clinical documentation", "Process improvement"],
  },
  {
    period: "Jun 2021 – Aug 2023",
    role: "Child Welfare Investigator",
    organization: "County of San Mateo",
    icon: "fa-solid fa-shield-heart",
    highlights: [
      "Investigated child abuse, neglect, and sexual exploitation through interviews, case histories, and evidence review while assigned to the emergency response unit.",
      "Assessed ambiguous information and coordinated protective action with legal counsel, law enforcement, and community partners.",
      "Prepared court reports, presented safety recommendations, and testified about investigative findings.",
      "Responded to urgent concerns during on-call shifts and supported new investigators through field guidance and feedback.",
    ],
    skills: ["Child-safety investigations", "Investigative interviewing", "Evidence review", "Court reporting", "Cross-functional coordination"],
  },
  {
    period: "Sep 2020 – Jun 2021",
    role: "Family and Children Services, Social Work Intern",
    organization: "County of Santa Clara",
    icon: "fa-solid fa-hand-holding-heart",
    highlights: [
      "Helped transition-age youth build independent-living skills and access housing, education, employment, and health services.",
      "Completed case documentation and court reports in accordance with child welfare requirements.",
    ],
    skills: ["Youth advocacy", "Case management", "Resource navigation", "Independent-living support", "Court reporting"],
  },
  {
    period: "Sep 2019 – Jun 2020",
    role: "School Social Work Intern",
    organization: "Santa Cruz City Schools",
    icon: "fa-solid fa-school",
    highlights: [
      "Supported students with emotional, family, attendance, and school-engagement concerns.",
      "Collaborated with caregivers, school staff, and community providers on case planning and access to services.",
    ],
    skills: ["Student support", "Case planning", "Family engagement", "School collaboration", "Resource coordination"],
  },
  {
    period: "Sep 2017 – Aug 2018",
    role: "AmeriCorps VIP Lead",
    organization: "Volunteer Center of Santa Cruz County",
    icon: "fa-solid fa-people-group",
    highlights: [
      "Recruited, trained, and coordinated volunteers for service projects across Santa Cruz County.",
      "Supported AmeriCorps members and nonprofit partners in planning service projects, resolving site concerns, and recruiting volunteers.",
      "Used Salesforce to track participation and returning volunteers, informing recruitment and retention outreach.",
    ],
    skills: ["Volunteer leadership", "Training", "Partner engagement", "Project coordination", "Salesforce"],
  },
  {
    period: "Jan 2016 – Jul 2017",
    role: "Wraparound Family Service Provider",
    organization: "ACTION Council of Monterey County",
    icon: "fa-solid fa-house-chimney-heart",
    highlights: [
      "Supported youth and families with emotional regulation, coping skills, and crisis de-escalation.",
      "Collaborated with caregivers, clinicians, schools, and case managers to implement care plans and document progress.",
    ],
    skills: ["Crisis de-escalation", "Care planning", "Family-centered support", "Cross-system collaboration", "Documentation"],
  },
];

const trainingItems = [
  {
    category: "Assessment certification",
    title: "California Integrated Practice CANS",
    organization: "Praed Foundation Collaborative Training Website",
    icon: "fa-solid fa-clipboard-check",
    completionDate: "September 24, 2026",
    validity: "Valid for 12 months",
    skills: [],
  },
  {
    category: "Law and ethics training",
    title: "Law and Ethics: Involuntary Treatment and the 5150 Process",
    organization: "Provider not listed on certificate",
    icon: "fa-solid fa-scale-balanced",
    completionDate: "August 3, 2026",
    skills: [],
  },
  {
    category: "Youth behavioral health training",
    title: "From Risk to Resilience: Addressing Behavioral Health Needs of Youth Impacted by Substance Use",
    organization: "UCLA ISAP, LA County SAPC & Pacific Southwest ATTC",
    icon: "fa-solid fa-seedling",
    completionDate: "May 8, 2026",
    skills: [],
  },
  {
    category: "Safety and crisis training",
    title: "Prevention and Management of Assaultive Behaviors: Introductory Course",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-shield-heart",
    completionDate: "March 20, 2026",
    hours: "3.75 continuing education hours",
    skills: [],
  },
  {
    category: "Trauma-informed care training",
    title: "Trauma Informed Systems 101",
    organization: "East Bay Agency for Children",
    icon: "fa-solid fa-people-roof",
    completionDate: "March 5, 2026",
    hours: "3.5 contact hours",
    skills: [],
  },
  {
    category: "Behavioral health training",
    title: "Practical Considerations for Providers Treating Patients in Mental Health Diversion",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-brain",
    completionDate: "January 20, 2026",
    hours: "1 continuing education hour",
    skills: [],
  },
  {
    category: "Workplace training",
    title: "2025 Countywide Required Trainings",
    organization: "San Mateo County Human Resources Department",
    icon: "fa-solid fa-building-circle-check",
    completionDate: "December 22, 2025",
    skills: [],
  },
  {
    category: "Law and ethics training",
    title: "Law and Ethics: Legal Updates for Healthcare Providers",
    organization: "Garrett Law LLP",
    icon: "fa-solid fa-scale-balanced",
    completionDate: "October 28, 2025",
    hours: "6 contact hours",
    skills: [],
  },
  {
    category: "Emergency response certification",
    title: "Basic Life Support: CPR and AED",
    organization: "American Heart Association",
    icon: "fa-solid fa-heart-pulse",
    completionDate: "October 3, 2025",
    validity: "Renew by October 2027",
    skills: [],
  },
  {
    category: "Assessment certification",
    title: "California CANS 50 1.0",
    organization: "Praed Foundation Collaborative Training Website",
    icon: "fa-solid fa-clipboard-check",
    completionDate: "September 16, 2025",
    validity: "Valid through September 16, 2026",
    skills: [],
  },
  {
    category: "Clinical assessment training",
    title: "Childhood OCD: Symptoms & Assessment",
    organization: "NOCD Academy",
    icon: "fa-solid fa-magnifying-glass-chart",
    completionDate: "February 18, 2025",
    hours: "1.5 continuing education hours",
    skills: [],
  },
  {
    category: "Clinical training",
    title: "Eating Disorders Training: Diagnostic Overview",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-notes-medical",
    completionDate: "January 24, 2025",
    hours: "4 training hours",
    skills: [],
  },
  {
    category: "Clinical training",
    title: "Dialectical Behavior Therapy Highlight: DBT & Applied Substance Use",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-comments",
    completionDate: "January 16, 2025",
    hours: "6 continuing education hours",
    skills: [],
  },
  {
    category: "Clinical training",
    title: "Dialectical Behavior Therapy Highlight: High Level Review",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-comments",
    completionDate: "January 9, 2025",
    hours: "6 continuing education hours",
    skills: [],
  },
  {
    category: "Law and ethics training",
    title: "Law and Ethics: Involuntary Treatment and the 5150 Process",
    organization: "Garrett Law LLP",
    icon: "fa-solid fa-scale-balanced",
    completionDate: "December 3, 2024",
    hours: "3 contact hours",
    skills: [],
  },
  {
    category: "Language access training",
    title: "Behavioral Health Interpreter Training",
    organization: "National Latino Behavioral Health Association",
    icon: "fa-solid fa-language",
    completionDate: "October 30–31, 2024",
    hours: "7 training hours",
    skills: [],
  },
  {
    category: "Provider well-being training",
    title: "Providers' Vicarious Trauma and Toxic Stress",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-hands-holding-circle",
    completionDate: "October 23, 2024",
    hours: "6 continuing education hours",
    skills: [],
  },
  {
    category: "Assessment certification",
    title: "California CANS 50 1.0",
    organization: "Praed Foundation Collaborative Training Website",
    icon: "fa-solid fa-clipboard-check",
    completionDate: "August 13, 2024",
    validity: "Valid through August 13, 2025",
    skills: [],
  },
  {
    category: "Child welfare services training",
    title: "Intensive Care Coordination, Intensive Home Based Services, and Therapeutic Foster Care for Clinicians",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-house-circle-check",
    completionDate: "July 24, 2024",
    hours: "3 training hours",
    skills: [],
  },
  {
    category: "Trauma-informed care training",
    title: "Six Core Strengths: The Neurosequential Model of Therapeutics",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-brain",
    completionDate: "May 7 and 16, 2024",
    hours: "13 training hours",
    skills: [],
  },
  {
    category: "Clinical training",
    title: "Dialectical Behavior Therapy for Behavioral Health Professionals",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-comments",
    completionDate: "January 25, 26, and 30, 2024",
    hours: "18 training hours",
    skills: [],
  },
  {
    category: "Substance use treatment training",
    title: "Mindfulness-Based Substance Abuse Treatment Facilitator Training",
    organization: "Center for Adolescent Studies",
    icon: "fa-solid fa-spa",
    completionDate: "December 15, 2023",
    hours: "12 continuing education credits",
    skills: [],
  },
  {
    category: "Clinical training",
    title: "Motivational Interviewing: The Basics for Behavioral Health Professionals",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-comments",
    completionDate: "October 26, 2023",
    hours: "7 training hours",
    skills: [],
  },
  {
    category: "Child safety training",
    title: "Engaging All Youth in Human Trafficking Prevention",
    organization: "Sowers Education Group",
    icon: "fa-solid fa-shield-heart",
    completionDate: "September 21, 2023",
    hours: "3.5 hours",
    skills: [],
  },
  {
    category: "Cultural humility training",
    title: "Cultural Humility 101: Building Bridges to Diversity and Inclusion",
    organization: "San Mateo County Behavioral Health & Recovery Services",
    icon: "fa-solid fa-people-arrows-left-right",
    completionDate: "September 8, 2023",
    hours: "3 training hours",
    skills: [],
  },
  {
    category: "Safety and crisis training",
    title: "5150 Certification Training for San Mateo County",
    organization: "San Mateo County Health",
    icon: "fa-solid fa-shield-heart",
    completionDate: "August 25, 2023",
    skills: [],
  },
  {
    category: "Child safety training",
    title: "NCMEC Reporting: Someone Disclosed to Me, Now What?",
    organization: "National Center for Missing & Exploited Children",
    icon: "fa-solid fa-shield-heart",
    skills: [],
  },
  {
    category: "Child safety training",
    title: "Introduction to Child Sex Trafficking",
    organization: "National Center for Missing & Exploited Children",
    icon: "fa-solid fa-shield-heart",
    skills: ["Child Welfare"],
  },
  {
    category: "Child safety training",
    title: "Introduction to the National Center for Missing & Exploited Children",
    organization: "National Center for Missing & Exploited Children",
    icon: "fa-solid fa-shield-heart",
    skills: [],
  },
  {
    category: "Data analysis training",
    title: "SQL for Data Science Capstone Project",
    organization: "UC Davis Continuing and Professional Education",
    icon: "fa-solid fa-database",
    credentialId: "AEY6S3SF2B16",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/AEY6S3SF2B16",
    skills: ["SQL", "Data Analysis"],
  },
  {
    category: "Data analysis training",
    title: "SQL Problem Solving",
    organization: "UC Davis Continuing and Professional Education",
    icon: "fa-solid fa-database",
    skills: ["SQL"],
  },
  {
    category: "OSINT training",
    title: "The OSINT Handbook: Mastering Open Source Intelligence",
    organization: "Packt",
    icon: "fa-solid fa-magnifying-glass",
    skills: ["Open Source Intelligence"],
  },
  {
    category: "Cybersecurity training",
    title: "Foundations of Cybersecurity",
    organization: "Google",
    icon: "fa-solid fa-lock",
    skills: ["Cybersecurity"],
  },
  {
    category: "Data analysis training",
    title: "SQL for Data Science",
    organization: "UC Davis Continuing and Professional Education",
    icon: "fa-solid fa-database",
    skills: ["SQL"],
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
    <h3 class="${selected.role.length > 32 ? "experience-detail__title--long" : ""}">${selected.role}</h3>
    <p class="experience-detail__organization">${selected.organization}</p>
    <ul class="experience-detail__highlights"><li>${selected.highlights.join("</li><li>")}</li></ul>
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

const trainingGroups = [
  {
    key: "child-safety",
    label: "Child Safety & Child Welfare",
    description: "Reporting, trafficking prevention, and coordinated services for children and families",
    icon: "fa-solid fa-shield-heart",
    categories: ["Child safety training", "Child welfare services training"],
  },
  {
    key: "crisis-safety",
    label: "Crisis Response, Safety & Ethics",
    description: "Crisis intervention, emergency response, professional standards, and workplace safety",
    icon: "fa-solid fa-triangle-exclamation",
    categories: ["Safety and crisis training", "Emergency response certification", "Law and ethics training", "Workplace training"],
  },
  {
    key: "therapeutic-modalities",
    label: "Therapeutic Modalities",
    description: "Evidence-informed approaches used in behavioral health treatment and engagement",
    icon: "fa-solid fa-comments",
    categories: ["Clinical training", "Substance use treatment training"],
  },
  {
    key: "assessment-behavioral-health",
    label: "Assessment & Behavioral Health",
    description: "Clinical assessment, care planning, diversion, and youth behavioral health",
    icon: "fa-solid fa-clipboard-check",
    categories: ["Assessment certification", "Clinical assessment training", "Behavioral health training", "Youth behavioral health training"],
  },
  {
    key: "trauma-cultural",
    label: "Trauma-Informed & Culturally Responsive Practice",
    description: "Trauma-informed systems, cultural humility, language access, and provider well-being",
    icon: "fa-solid fa-people-arrows-left-right",
    categories: ["Trauma-informed care training", "Cultural humility training", "Language access training", "Provider well-being training"],
  },
  {
    key: "data-investigations",
    label: "Data, OSINT & Cybersecurity",
    description: "Technical learning that supports research, investigations, and pattern recognition",
    icon: "fa-solid fa-database",
    categories: ["Data analysis training", "OSINT training", "Cybersecurity training"],
  },
];

const consolidateRecurringTraining = (items) => {
  const cansItems = items.filter((item) => item.title.includes("CANS"));
  const remainingItems = items.filter((item) => !item.title.includes("CANS"));

  if (cansItems.length < 2) return items;

  return [
    {
      ...cansItems[0],
      title: "California CANS Certification",
      organization: "Praed Foundation Collaborative Training Website",
      completionDate: "2024, 2025, and 2026",
      validity: "Most recent certification completed September 24, 2026",
    },
    ...remainingItems,
  ];
};

const trainingCategories = document.querySelector("#training-categories");

const formatTrainingItem = (item) => {
  const metadata = [
    item.completionDate ? `<span><strong>Completed:</strong> ${item.completionDate}</span>` : "",
    item.hours ? `<span><strong>Training:</strong> ${item.hours}</span>` : "",
    item.validity ? `<span><strong>Status:</strong> ${item.validity}</span>` : "",
  ].filter(Boolean).join("");
  const credentialLink = item.credentialUrl
    ? `<a href="${item.credentialUrl}" target="_blank" rel="noopener noreferrer">View credential <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
    : "";

  return `
    <li class="training-category__item">
      <div class="training-category__item-icon" aria-hidden="true"><i class="${item.icon}"></i></div>
      <div class="training-category__item-copy">
        <h4>${item.title}</h4>
        <p>${item.organization}</p>
        ${metadata ? `<div class="training-category__metadata">${metadata}</div>` : ""}
        ${credentialLink}
      </div>
    </li>
  `;
};

trainingGroups.forEach((group, index) => {
  const groupedItems = consolidateRecurringTraining(
    trainingItems.filter((item) => group.categories.includes(item.category)),
  );
  const article = document.createElement("article");
  const panelId = `training-panel-${group.key}`;
  const buttonId = `training-button-${group.key}`;
  article.className = "training-category";
  article.innerHTML = `
    <h3>
      <button id="${buttonId}" class="training-category__button" type="button" aria-expanded="${index === 0}" aria-controls="${panelId}">
        <span class="training-category__icon" aria-hidden="true"><i class="${group.icon}"></i></span>
        <span class="training-category__heading">
          <strong>${group.label}</strong>
          <small>${group.description}</small>
        </span>
        <span class="training-category__count">${groupedItems.length} ${groupedItems.length === 1 ? "training" : "trainings"}</span>
        <i class="fa-solid fa-chevron-down training-category__chevron" aria-hidden="true"></i>
      </button>
    </h3>
    <div id="${panelId}" class="training-category__panel" role="region" aria-labelledby="${buttonId}" ${index === 0 ? "" : "hidden"}>
      <ul>${groupedItems.map(formatTrainingItem).join("")}</ul>
    </div>
  `;

  const button = article.querySelector(".training-category__button");
  const panel = article.querySelector(".training-category__panel");
  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";
    document.querySelectorAll(".training-category__button").forEach((otherButton) => {
      const otherPanel = document.getElementById(otherButton.getAttribute("aria-controls"));
      otherButton.setAttribute("aria-expanded", "false");
      otherPanel.hidden = true;
    });
    button.setAttribute("aria-expanded", String(willOpen));
    panel.hidden = !willOpen;
  });

  trainingCategories.appendChild(article);
});
