export type ExperienceHighlight = {
  label: string;
  detail: string;
};

export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  highlights: ExperienceHighlight[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "saham-bank",
    title: "AI & Infrastructure Expert",
    company: "Saham Bank",
    location: "Casablanca, Morocco",
    start: "Jan 2026",
    end: "Present",
    current: true,
    summary:
      "Leading production AI/GenAI orchestration and DevSecOps pipeline architecture for enterprise banking workloads.",
    highlights: [
      {
        label: "AI & GenAI Orchestration",
        detail:
          "Engineered high-performance execution environments for production AI implementations using the NVIDIA Operator on containerized infrastructure. Orchestrated autonomous AI agents and enterprise workflow solutions on Microsoft AI Foundry and Amazon Bedrock.",
      },
      {
        label: "Advanced DevSecOps Pipelines",
        detail:
          "Built secure, high-throughput CI/CD pipelines with Jenkins and GitLab. Integrated software composition analysis and registry isolation using Nexus, Harbor, Trivy, Dependency-Track, and Dependency-Check.",
      },
      {
        label: "GitOps Transformation with ArgoCD",
        detail:
          "Drove 100% GitOps adoption across all Kubernetes projects using ArgoCD, fully automating build, ship, and run pipelines and establishing Git as the single source of truth for cluster state.",
      },
      {
        label: "Full-Stack Observability & Telemetry",
        detail:
          "Architected unified monitoring and log fabrics with Nagios, Grafana, ELK, and Dynatrace for proactive threat alerts, performance profiling, and cluster stability.",
      },
      {
        label: "Cloud Platforms & Modern Infrastructure",
        detail:
          "Engineered hybrid topologies across Azure (App Service, AKS, VM, Application Gateway, Entra ID) and AWS (EKS, S3, EC2). Managed hyperconverged infrastructure on Nutanix, VMware, RHEL, IBM AIX, and Nutanix Kubernetes Platform.",
      },
    ],
    stack: [
      "NVIDIA Operator",
      "Azure AI Foundry",
      "Amazon Bedrock",
      "AKS",
      "EKS",
      "ArgoCD",
      "GitOps",
      "Jenkins",
      "GitLab",
      "Harbor",
      "Trivy",
      "Grafana",
      "ELK",
      "Dynatrace",
      "Nutanix",
    ],
  },
  {
    id: "credit-du-maroc",
    title: "System & Security Expert",
    company: "Crédit Du Maroc Bank",
    location: "Casablanca, Morocco",
    start: "Apr 2021",
    end: "Dec 2025",
    current: false,
    summary:
      "Owned infrastructure performance and security posture across a multi-platform banking environment, driving DevSecOps automation.",
    highlights: [
      {
        label: "Infrastructure & Performance Tuning",
        detail:
          "Optimized complex multi-platform environments (Windows, Linux, AIX) and virtualization (VMware, Nutanix). Implemented proactive monitoring with Nagios, Centreon, and Prometheus, reducing operational downtime.",
      },
      {
        label: "Security Posture Hardening",
        detail:
          "Pioneered defensive security programs including EDR, DLP, SIEM, and enterprise PKI. Ran strategic vulnerability management and penetration testing, cutting identified threat parameters by 30%.",
      },
      {
        label: "DevSecOps & Automation",
        detail:
          "Automated 80% of deployment pipelines using Ansible, Docker, and Kubernetes, reducing software delivery cycles by 50% while embedding security gates natively into the lifecycle.",
      },
    ],
    stack: [
      "VMware",
      "Nutanix",
      "Prometheus",
      "Centreon",
      "SIEM",
      "PKI",
      "Ansible",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "power-maroc",
    title: "IT Solution Expert",
    company: "Power Maroc",
    location: "Casablanca / Rabat, Morocco",
    start: "Jun 2019",
    end: "Apr 2021",
    current: false,
    summary:
      "Principal architect and advisory consultant for premium corporate and government accounts across Morocco.",
    highlights: [
      {
        label: "Strategic Solution Architecture",
        detail:
          "Functioned as principal architect for Attijari, CIH, BCP, DGI, TGR, DMN, Royal Air Maroc, WafaSalaf, and JESA, delivering implementations on IBM AIX, Power Systems, IBM Storage, mainframe, RHEL, and hybrid OpenShift/OpenStack.",
      },
      {
        label: "Hybrid Cloud & Automation",
        detail:
          "Led large-scale cross-functional migrations using Red Hat Satellite for centralized enterprise fleet configuration management, improving scalability and configuration velocity.",
      },
    ],
    stack: ["IBM AIX", "Power Systems", "RHEL", "OpenShift", "OpenStack", "Red Hat Satellite"],
  },
  {
    id: "ymagis",
    title: "IT Engineer",
    company: "Ymagis Group",
    location: "Casablanca, Morocco",
    start: "Feb 2018",
    end: "May 2019",
    current: false,
    summary:
      "Maintained global fleet integrity across a high-density, multi-continent hybrid cloud footprint.",
    highlights: [
      {
        label: "Global Fleet Administration",
        detail:
          "Maintained high-availability system integrity for 4,500 production servers distributed across 3 continents in a high-density hybrid cloud environment.",
      },
      {
        label: "Task Automation & Scripting",
        detail:
          "Created modular provisioning frameworks using Puppet and Ansible alongside tailored Python and Bash automation utilities to reduce engineering friction.",
      },
    ],
    stack: ["Puppet", "Ansible", "Python", "Bash"],
  },
  {
    id: "tcs",
    title: "Junior IT Consultant",
    company: "Training Consulting Services (TCS)",
    location: "Casablanca, Morocco",
    start: "Mar 2016",
    end: "Jan 2018",
    current: false,
    summary:
      "Foundational virtualization and enterprise workspace migration work for major industrial and retail clients.",
    highlights: [
      {
        label: "Virtualization Deployments",
        detail:
          "Spearheaded foundational virtual compute designs (vSphere ESXi, vCenter, vSAN, Site Recovery Manager, Fault Tolerance) for clients including SNTL, Jacobs, SOLIBRA, NewRest, and Atlas Peintures.",
      },
      {
        label: "Enterprise Workspace Migrations",
        detail:
          "Managed modernizations to Microsoft Exchange 2013, Office 365, and multi-tier Windows Server clusters to unify corporate communication.",
      },
    ],
    stack: ["vSphere", "vCenter", "vSAN", "Exchange 2013", "Office 365", "Windows Server"],
  },
];
