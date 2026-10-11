export type Service = {
  name: string;
  outcome: string;
  proof: { label: string; href: string };
};

export const services: Service[] = [
  {
    name: "GenAI platform to production",
    outcome: "Run agents and LLM workloads on GPU infrastructure you control.",
    proof: { label: "GenAI Orchestration Platform", href: "#genai-orchestration" },
  },
  {
    name: "DevSecOps transformation",
    outcome: "Security gates inside the delivery pipeline, not after it.",
    proof: { label: "Zero-Trust DevSecOps Pipeline", href: "#devsecops-pipeline" },
  },
  {
    name: "Self-service infrastructure",
    outcome: "Provisioning in seconds instead of days, with compliance built in.",
    proof: { label: "Self-Service Infrastructure Platform", href: "#self-service-infra" },
  },
  {
    name: "Observability and reliability",
    outcome: "See every layer from application to hardware, with 24/7 alerting.",
    proof: { label: "Full-Stack Observability Fabric", href: "#observability-fabric" },
  },
  {
    name: "System & security engineering",
    outcome:
      "Linux, AIX, Windows, and virtualized estates tuned and hardened, with EDR, SIEM, DLP, and PKI in place.",
    proof: { label: "Experience at Crédit Du Maroc Bank", href: "#experience" },
  },
];

export const engagements = [
  {
    name: "Architecture review",
    detail: "A short assessment that ends in findings and a roadmap.",
  },
  {
    name: "Fixed-scope build",
    detail: "Design and delivery of a defined platform or pipeline.",
  },
  {
    name: "Ongoing advisory",
    detail: "A set number of days each month as your architect.",
  },
  {
    name: "Team training",
    detail: "Workshops and coaching for your engineers.",
  },
  {
    name: "Full-time on-board",
    detail: "Embedded in your team for the length of the mission.",
  },
] as const;

export const engagementTerms = {
  location: "Remote, worldwide — with on-site travel when a project needs it.",
  /** Set to a Calendly or Cal.com URL to show the booking button. */
  bookingUrl: "",
} as const;
