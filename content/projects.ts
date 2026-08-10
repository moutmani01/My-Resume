export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  name: string;
  org: string;
  period: string;
  description: string;
  problem: string;
  approach: string[];
  metrics: ProjectMetric[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "genai-orchestration",
    name: "Enterprise GenAI Orchestration Platform",
    org: "Saham Bank",
    period: "2026",
    description:
      "Production execution environment for autonomous AI agents and enterprise GenAI workflows running on containerized, GPU-accelerated infrastructure.",
    problem:
      "The bank needed to move GenAI workloads from experimentation to production with enterprise-grade throughput, security isolation, and observability.",
    approach: [
      "Deployed the NVIDIA Operator across containerized infrastructure for high-performance model execution.",
      "Orchestrated autonomous AI agents and enterprise workflows on Microsoft AI Foundry and Amazon Bedrock.",
      "Wrapped the platform in the same DevSecOps and observability fabric used for core banking systems.",
    ],
    metrics: [
      { value: "2", label: "AI platforms integrated (AI Foundry + Bedrock)" },
      { value: "GPU", label: "Accelerated container execution" },
    ],
    stack: ["NVIDIA Operator", "Azure AI Foundry", "Amazon Bedrock", "Kubernetes", "AKS"],
  },
  {
    id: "devsecops-pipeline",
    name: "Zero-Trust DevSecOps Pipeline",
    org: "Crédit Du Maroc Bank",
    period: "2021 – 2025",
    description:
      "End-to-end CI/CD transformation embedding security gates, SCA, and vulnerability scanning natively into every deployment.",
    problem:
      "Manual, inconsistent deployment processes were slowing delivery and leaving security review as an afterthought.",
    approach: [
      "Automated 80% of deployment pipelines with Ansible, Docker, and Kubernetes.",
      "Embedded software composition analysis and dependency scanning using Nexus, Harbor, Trivy, Dependency-Track, and Dependency-Check.",
      "Ran strategic vulnerability management and precision penetration testing campaigns.",
    ],
    metrics: [
      { value: "80%", label: "Of pipelines automated" },
      { value: "50%", label: "Faster software delivery cycles" },
      { value: "30%", label: "Reduction in identified threat parameters" },
    ],
    stack: ["Jenkins", "GitLab", "Ansible", "Docker", "Kubernetes", "Harbor", "Trivy", "SIEM", "PKI"],
  },
  {
    id: "observability-fabric",
    name: "Full-Stack Observability Fabric",
    org: "Saham Bank / Crédit Du Maroc Bank",
    period: "2021 – Present",
    description:
      "Unified monitoring and log-management architecture spanning infrastructure, network, and application layers for proactive incident response.",
    problem:
      "Fragmented monitoring tools meant slow detection and blind spots across hybrid infrastructure.",
    approach: [
      "Architected unified telemetry pipelines with Nagios, the Grafana stack, the ELK stack, and Dynatrace.",
      "Built proactive threat-alerting and deep performance-profiling dashboards for cluster stability.",
      "Standardized monitoring across Windows, Linux, AIX, and virtualized estates with Centreon and Prometheus.",
    ],
    metrics: [
      { value: "4", label: "Monitoring stacks unified" },
      { value: "24/7", label: "Proactive alerting coverage" },
    ],
    stack: ["Grafana", "ELK Stack", "Dynatrace", "Nagios", "Prometheus", "Centreon"],
  },
  {
    id: "multicloud-migration",
    name: "Multi-Cloud & Hybrid Infrastructure Program",
    org: "Power Maroc — for Attijari, CIH, BCP, JESA & others",
    period: "2019 – 2021",
    description:
      "Principal-architect engagement delivering hybrid OpenShift/OpenStack and IBM Power infrastructure for premium corporate and government clients.",
    problem:
      "Multiple enterprise clients needed modernized, centrally-managed infrastructure spanning mainframe, IBM Power, and open hybrid cloud.",
    approach: [
      "Architected implementations on IBM AIX, Power Systems, IBM Storage Suites, mainframe, RHEL, and hybrid OpenShift/OpenStack.",
      "Led cross-functional migrations using Red Hat Satellite for centralized fleet configuration management.",
      "Advised nine major accounts including Royal Air Maroc, WafaSalaf, and DGI on infrastructure strategy.",
    ],
    metrics: [
      { value: "9", label: "Enterprise & government accounts advised" },
      { value: "1", label: "Centralized fleet-management platform" },
    ],
    stack: ["IBM AIX", "Power Systems", "RHEL", "OpenShift", "OpenStack", "Red Hat Satellite"],
  },
  {
    id: "global-fleet",
    name: "Global Multi-Continent Fleet Automation",
    org: "Ymagis Group",
    period: "2018 – 2019",
    description:
      "Provisioning and automation framework maintaining high availability across a large, geographically distributed server fleet.",
    problem:
      "A 4,500-server fleet spread across three continents required consistent, high-availability configuration management.",
    approach: [
      "Maintained system integrity across a high-density hybrid cloud environment.",
      "Built modular provisioning frameworks with Puppet and Ansible.",
      "Wrote tailored Python and Bash utilities to remove standard engineering friction points.",
    ],
    metrics: [
      { value: "4,500", label: "Production servers maintained" },
      { value: "3", label: "Continents" },
    ],
    stack: ["Puppet", "Ansible", "Python", "Bash"],
  },
];
