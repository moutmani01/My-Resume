export type Milestone = {
  id: string;
  date: string;
  sortKey: number;
  type: "role" | "education" | "achievement" | "certification";
  title: string;
  detail: string;
};

export const milestones: Milestone[] = [
  {
    id: "m-tcs",
    date: "Mar 2016",
    sortKey: 2016.2,
    type: "role",
    title: "Started career as Junior IT Consultant",
    detail: "Training Consulting Services — virtualization deployments for major industrial clients.",
  },
  {
    id: "m-dut",
    date: "2016",
    sortKey: 2016.5,
    type: "education",
    title: "University Degree in Technology (DUT), Computer Science",
    detail: "ENSA, Berrechid, Morocco.",
  },
  {
    id: "m-ymagis",
    date: "Feb 2018",
    sortKey: 2018.1,
    type: "role",
    title: "Joined Ymagis Group as IT Engineer",
    detail: "Took ownership of a 4,500-server fleet across 3 continents.",
  },
  {
    id: "m-masters",
    date: "2018",
    sortKey: 2018.5,
    type: "education",
    title: "Professional Master's Degree, System Engineering, Networking & Security",
    detail: "Faculty of Sciences and Technologies (FST), Settat, Morocco.",
  },
  {
    id: "m-power-maroc",
    date: "Jun 2019",
    sortKey: 2019.5,
    type: "role",
    title: "Became Principal Architect at Power Maroc",
    detail: "Advisory consultant for nine premium corporate and government accounts.",
  },
  {
    id: "m-cdm",
    date: "Apr 2021",
    sortKey: 2021.3,
    type: "role",
    title: "Promoted to System & Security Expert",
    detail: "Crédit Du Maroc Bank — led security posture hardening and DevSecOps automation.",
  },
  {
    id: "m-30pct",
    date: "2021 – 2025",
    sortKey: 2023,
    type: "achievement",
    title: "Cut identified threat parameters by 30%",
    detail: "Through strategic vulnerability management and precision penetration testing.",
  },
  {
    id: "m-80pct",
    date: "2021 – 2025",
    sortKey: 2023.2,
    type: "achievement",
    title: "Automated 80% of deployment pipelines",
    detail: "Ansible, Docker, and Kubernetes — cutting delivery cycles by 50%.",
  },
  {
    id: "m-certs",
    date: "2019 – 2025",
    sortKey: 2024,
    type: "certification",
    title: "Earned 7 professional certifications",
    detail: "Including Azure Solutions Architect Expert, DevOps Engineer Expert, and LPIC-3.",
  },
  {
    id: "m-phd",
    date: "2025",
    sortKey: 2025.5,
    type: "education",
    title: "Doctor of Philosophy (PhD), Computing & Information Technologies and Engineering",
    detail:
      "Madison International Institute & Business School, USA — research on multi-cloud and hybrid-cloud architectures, disaster recovery, and near-zero-downtime systems.",
  },
  {
    id: "m-saham",
    date: "Jan 2026",
    sortKey: 2026.1,
    type: "role",
    title: "Became AI & Infrastructure Expert at Saham Bank",
    detail: "Leading production GenAI orchestration on NVIDIA Operator, AI Foundry, and Bedrock.",
  },
];
