export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI Ops",
    items: ["NVIDIA Operator", "Amazon Bedrock", "Microsoft AI Foundry", "Autonomous Agents"],
  },
  {
    category: "Cloud Infrastructure",
    items: ["AWS (EKS, EC2, S3)", "Azure (AKS, App Service, Entra ID)", "Hybrid Cloud"],
  },
  {
    category: "DevSecOps & Automation",
    items: ["Jenkins", "GitLab CI/CD", "Ansible", "Puppet", "Docker", "Harbor", "Trivy"],
  },
  {
    category: "Kubernetes & Platforms",
    items: ["Kubernetes", "OpenShift", "OpenStack", "Nutanix Kubernetes Platform (NKP)"],
  },
  {
    category: "Observability",
    items: ["Grafana Stack", "ELK Stack", "Dynatrace", "Nagios", "Prometheus", "Centreon"],
  },
  {
    category: "Security Engineering",
    items: ["SIEM", "EDR", "DLP", "Enterprise PKI", "Vulnerability Management"],
  },
  {
    category: "Systems & Virtualization",
    items: ["RHEL", "IBM AIX", "Windows Server", "VMware vSphere", "Nutanix AHV"],
  },
  {
    category: "Languages & Data",
    items: ["Python", "Bash", "SQL / PostgreSQL"],
  },
];

export const languages = [
  { name: "English", level: "Fluent (TOEFL Certified)" },
  { name: "Arabic", level: "Native Speaker" },
  { name: "French", level: "Professional Proficiency" },
] as const;
