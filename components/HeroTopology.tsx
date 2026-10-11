import { InView } from "./InView";

type Node = {
  id: string;
  title: string;
  sub: string;
  x: number;
  y: number;
  w: number;
  hub?: boolean;
};

// The platform this portfolio describes: one Kubernetes control plane,
// with the clouds, pipelines and telemetry that connect to it.
const nodes: Node[] = [
  {
    id: "genai",
    title: "GENAI AGENTS",
    sub: "NVIDIA · AI Foundry",
    x: 200,
    y: 44,
    w: 190,
  },
  { id: "azure", title: "AZURE", sub: "AKS · Entra ID", x: 72, y: 140, w: 128 },
  { id: "aws", title: "AWS", sub: "EKS · Bedrock", x: 328, y: 140, w: 128 },
  {
    id: "hub",
    title: "KUBERNETES · OPENSHIFT",
    sub: "platform control plane",
    x: 200,
    y: 236,
    w: 224,
    hub: true,
  },
  { id: "devsecops", title: "DEVSECOPS", sub: "ArgoCD · Trivy", x: 80, y: 340, w: 144 },
  {
    id: "observability",
    title: "OBSERVABILITY",
    sub: "Grafana · ELK",
    x: 320,
    y: 340,
    w: 144,
  },
  {
    id: "onprem",
    title: "ON-PREM & HYBRID",
    sub: "VMware · Nutanix · AIX",
    x: 200,
    y: 428,
    w: 200,
  },
];

const edges: { d: string; reverse?: boolean }[] = [
  { d: "M200 68 V206" },
  { d: "M72 164 V236 H88", reverse: true },
  { d: "M328 164 V236 H312", reverse: true },
  { d: "M80 316 V292 H150 V266" },
  { d: "M320 316 V292 H250 V266" },
  { d: "M200 404 V266", reverse: true },
];

export function HeroTopology() {
  return (
    <InView once={false} rootMargin="0px">
      <svg
        viewBox="0 0 400 464"
        className="h-auto w-full"
        role="img"
        aria-label="Platform topology: a Kubernetes and OpenShift control plane connected to GenAI agents, Azure, AWS, DevSecOps pipelines, observability, and on-prem infrastructure."
      >
        {edges.map((edge, i) => (
          <g key={edge.d} style={{ "--i": i } as React.CSSProperties}>
            <path d={edge.d} pathLength={100} className="topo-edge" />
            <path
              d={edge.d}
              pathLength={100}
              className="topo-pulse"
              style={edge.reverse ? { animationDirection: "reverse" } : undefined}
            />
          </g>
        ))}

        {nodes.map((node, i) => {
          const h = node.hub ? 60 : 48;
          const left = node.x - node.w / 2;
          const top = node.y - h / 2;
          return (
            <g
              key={node.id}
              className="topo-node"
              style={{ "--i": i } as React.CSSProperties}
            >
              {node.hub && (
                <rect
                  x={left - 6}
                  y={top - 6}
                  width={node.w + 12}
                  height={h + 12}
                  rx={14}
                  fill="none"
                  stroke="#3FB950"
                  strokeWidth={1}
                  className="topo-halo"
                />
              )}
              <rect
                x={left}
                y={top}
                width={node.w}
                height={h}
                rx={8}
                fill={node.hub ? "#122019" : "#10161D"}
                stroke={node.hub ? "#3FB950" : "#2C3844"}
                strokeWidth={1}
              />
              <circle
                cx={left + 14}
                cy={node.y - 7}
                r={3}
                fill={node.hub ? "#3FB950" : "#4C9EEB"}
              />
              <text
                x={left + 24}
                y={node.y - 3}
                fill="#E6EDF3"
                fontSize={12}
                letterSpacing="0.08em"
                className="font-mono"
              >
                {node.title}
              </text>
              <text
                x={left + 24}
                y={node.y + 13}
                fill="#7A8794"
                fontSize={11}
                className="font-mono"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </InView>
  );
}
