export type Certification = {
  id: string;
  name: string;
  issuer: string;
  category: "Cloud" | "DevOps" | "Systems" | "Virtualization";
};

export const certifications: Certification[] = [
  {
    id: "lpic3",
    name: "LPIC-3: Certified Linux Enterprise Professional (Mixed Environment)",
    issuer: "Linux Professional Institute",
    category: "Systems",
  },
  {
    id: "ms-devops",
    name: "Certified DevOps Engineer Expert",
    issuer: "Microsoft",
    category: "DevOps",
  },
  {
    id: "ms-azure-architect",
    name: "Certified Azure Solutions Architect Expert",
    issuer: "Microsoft",
    category: "Cloud",
  },
  {
    id: "ibm-cloud-private",
    name: "Cloud Private Infrastructure and Architecture",
    issuer: "IBM",
    category: "Cloud",
  },
  {
    id: "ibm-devops",
    name: "Certified Solution Advisor — DevOps V2",
    issuer: "IBM",
    category: "DevOps",
  },
  {
    id: "redhat-cloud-mgmt",
    name: "Delivery Specialist — Cloud Management",
    issuer: "Red Hat",
    category: "Cloud",
  },
  {
    id: "vmware-dcv",
    name: "Certified Advanced Professional (DCV Design)",
    issuer: "VMware",
    category: "Virtualization",
  },
];

export const certificationCategories = [
  "Cloud",
  "DevOps",
  "Systems",
  "Virtualization",
] as const;
