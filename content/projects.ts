export type ProjectMetric = {
  value: string;
  label: string;
};

export type ArchLayer = {
  label: string;
  nodes: string[];
  /** Optional line of detail under the nodes. */
  note?: string;
  /** "up" when this layer supports the one above instead of receiving from it. */
  flow?: "up";
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
  /** High-level flow, top to bottom. */
  architecture: ArchLayer[];
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
    architecture: [
      { label: "Users", nodes: ["End-user applications"] },
      {
        label: "Workflows & agents",
        nodes: ["Enterprise GenAI workflows", "Autonomous AI agents"],
      },
      {
        label: "Hybrid LLM stack",
        nodes: ["Azure AI Foundry", "Amazon Bedrock", "Kubernetes / NVIDIA GPU"],
      },
      {
        label: "Wrapped by",
        nodes: ["DevSecOps pipeline", "LGTM observability stack"],
        flow: "up",
      },
    ],
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
    stack: [
      "Jenkins",
      "GitLab",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Harbor",
      "Trivy",
      "SIEM",
      "PKI",
    ],
    architecture: [
      { label: "Source", nodes: ["GitLab"] },
      {
        label: "CI with security gates",
        nodes: ["Jenkins", "GitLab CI", "Dependency-Track", "Dependency-Check", "Trivy"],
      },
      { label: "Registries", nodes: ["Nexus", "Harbor"] },
      { label: "Deploy", nodes: ["Ansible"] },
      { label: "Kubernetes environments", nodes: ["Dev", "PreProd", "Prod"] },
    ],
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
      "Architected unified telemetry pipelines with Centreon, the LGTM stack, the ELK stack, and Dynatrace.",
      "Built proactive threat-alerting and deep performance-profiling dashboards for cluster stability.",
      "Standardized monitoring across Windows, Linux, AIX, Nutanix, Kubernetes, and applications, from application to middleware, OS, virtualization, and hardware.",
    ],
    metrics: [
      { value: "4", label: "Monitoring stacks unified" },
      { value: "24/7", label: "Proactive alerting coverage" },
    ],
    stack: ["Centreon", "LGTM Stack", "ELK Stack", "Dynatrace"],
    architecture: [
      {
        label: "Sources",
        nodes: ["Windows", "Linux", "AIX", "Nutanix", "Kubernetes", "Applications"],
      },
      {
        label: "Telemetry platforms",
        nodes: ["Centreon", "LGTM stack", "ELK", "Dynatrace"],
      },
      {
        label: "Outcome",
        nodes: ["24/7 alerts", "End-to-end observability & monitoring"],
        note: "From application to middleware, OS, virtualization, and hardware.",
      },
    ],
  },
  {
    id: "weather-supercomputer",
    name: "National Weather Service Supercomputer",
    org: "Power Maroc — for Morocco's national weather service (DMN)",
    period: "2019 – 2021",
    description:
      "Implementation of the first supercomputer for Morocco's national weather service: 128 RHEL servers on an InfiniBand network, with IBM Spectrum Scale and Spectrum Archive for storage.",
    problem:
      "The weather service needed its first supercomputing platform, built consistently across 128 servers and kept patched and compliant throughout its lifecycle.",
    approach: [
      "Automated the build and configuration of 128 RHEL servers with Ansible.",
      "Ran lifecycle patching and compliance through Red Hat Satellite.",
      "Interconnected the cluster over an InfiniBand network, with IBM Spectrum Scale and Spectrum Archive for storage.",
    ],
    metrics: [
      { value: "128", label: "RHEL servers in the cluster" },
      { value: "1st", label: "Supercomputer for the weather service" },
    ],
    stack: [
      "RHEL",
      "Ansible",
      "Red Hat Satellite",
      "InfiniBand",
      "IBM Spectrum Scale",
      "IBM Spectrum Archive",
    ],
    architecture: [
      { label: "Automation & lifecycle", nodes: ["Ansible", "Red Hat Satellite"] },
      { label: "Compute", nodes: ["128 RHEL servers"] },
      { label: "Interconnect", nodes: ["InfiniBand network"] },
      { label: "Storage", nodes: ["IBM Spectrum Scale", "IBM Spectrum Archive"] },
    ],
  },
  {
    id: "self-service-infra",
    name: "Self-Service Infrastructure Platform",
    org: "Crédit Du Maroc Bank",
    period: "2021 – 2025",
    description:
      "Modernized application time to market by replacing a 7–15 day infrastructure provisioning process with self-service delivery in seconds, built as infrastructure as code.",
    problem:
      "Application teams waited 7 to 15 days for infrastructure, which slowed every release.",
    approach: [
      "Codified infrastructure with Terraform and Ansible across Nutanix and Azure.",
      "Delivered Windows Server, RHEL, and middleware through the same self-service flow.",
      "Built compliance requirements and security best practices into every provisioned environment.",
    ],
    metrics: [
      { value: "7–15 days", label: "Previous infrastructure lead time" },
      { value: "Seconds", label: "Self-service provisioning time" },
    ],
    stack: [
      "Terraform",
      "Ansible",
      "Nutanix",
      "Azure",
      "Windows Server",
      "RHEL",
      "Middleware",
    ],
    architecture: [
      { label: "Request", nodes: ["Self-service portal"] },
      { label: "Infrastructure as code", nodes: ["Terraform", "Ansible"] },
      { label: "Guardrails", nodes: ["Compliance checks", "Security best practices"] },
      { label: "Platforms", nodes: ["Nutanix", "Azure"] },
      {
        label: "Delivered",
        nodes: ["Windows Server", "RHEL", "Middleware", "Applications"],
      },
    ],
  },
];
