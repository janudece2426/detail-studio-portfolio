const nodes = [
  { x: 682, y: 118, color: "#D8B76A", r: 2.2, o: 0.12 },
  { x: 806, y: 84, color: "#F4ECDC", r: 1.8, o: 0.1 },
  { x: 952, y: 142, color: "#86F2D3", r: 2.4, o: 0.11 },
  { x: 1110, y: 104, color: "#D8B76A", r: 1.9, o: 0.1 },
  { x: 1268, y: 186, color: "#F4ECDC", r: 2, o: 0.08 },
  { x: 742, y: 284, color: "#86F2D3", r: 1.7, o: 0.08 },
  { x: 888, y: 324, color: "#D8B76A", r: 2.3, o: 0.12 },
  { x: 1056, y: 292, color: "#F4ECDC", r: 1.8, o: 0.09 },
  { x: 1220, y: 378, color: "#86F2D3", r: 2.1, o: 0.1 },
  { x: 626, y: 496, color: "#F4ECDC", r: 1.6, o: 0.06 },
  { x: 788, y: 520, color: "#D8B76A", r: 2.1, o: 0.09 },
  { x: 946, y: 470, color: "#86F2D3", r: 1.9, o: 0.1 },
  { x: 1126, y: 548, color: "#D8B76A", r: 2.2, o: 0.11 },
  { x: 1322, y: 488, color: "#F4ECDC", r: 1.7, o: 0.07 },
  { x: 716, y: 692, color: "#86F2D3", r: 2, o: 0.08 },
  { x: 902, y: 668, color: "#F4ECDC", r: 1.8, o: 0.08 },
  { x: 1084, y: 720, color: "#D8B76A", r: 1.9, o: 0.1 },
  { x: 1280, y: 666, color: "#86F2D3", r: 1.8, o: 0.08 },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [2, 7],
  [4, 8],
  [6, 10],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [10, 14],
  [14, 15],
  [15, 16],
  [16, 17],
] as const;

export function GraphBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        aria-hidden="true"
        className="hidden h-full w-full opacity-90 sm:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="graphLineGold" x1="620" y1="120" x2="1360" y2="760">
            <stop stopColor="#D8B76A" stopOpacity="0.26" />
            <stop offset="0.46" stopColor="#F4ECDC" stopOpacity="0.34" />
            <stop offset="1" stopColor="#86F2D3" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="graphLineMint" x1="660" y1="720" x2="1320" y2="120">
            <stop stopColor="#86F2D3" stopOpacity="0.22" />
            <stop offset="0.5" stopColor="#D8B76A" stopOpacity="0.3" />
            <stop offset="1" stopColor="#F4ECDC" stopOpacity="0.2" />
          </linearGradient>
          <filter id="graphSoft">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
          <radialGradient id="nodeGlow">
            <stop stopColor="#F4ECDC" stopOpacity="0.16" />
            <stop offset="1" stopColor="#F4ECDC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g filter="url(#graphSoft)">
          {edges.map(([from, to], index) => {
            const a = nodes[from];
            const b = nodes[to];
            const isLeftEdge = a.x < 760 || b.x < 760;
            const isStrongEdge = a.x > 900 && b.x > 900;
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={index % 3 === 0 ? "url(#graphLineMint)" : "url(#graphLineGold)"}
                strokeWidth={isStrongEdge ? "1.35" : "1.1"}
                opacity={isLeftEdge ? "0.34" : "0.58"}
                strokeLinecap="round"
              />
            );
          })}
        </g>
        <g>
          {edges.map(([from, to], index) => {
            const a = nodes[from];
            const b = nodes[to];
            const isLeftEdge = a.x < 760 || b.x < 760;
            const isStrongEdge = a.x > 900 && b.x > 900;
            return (
              <line
                key={`crisp-${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={index % 3 === 0 ? "#86F2D3" : index % 3 === 1 ? "#D8B76A" : "#F4ECDC"}
                strokeWidth={isStrongEdge ? "0.82" : "0.68"}
                opacity={isLeftEdge ? "0.1" : "0.18"}
                strokeLinecap="round"
              />
            );
          })}
        </g>
        <g>
          {nodes.map((node, index) => (
            <g key={`node-${index}`}>
              <circle cx={node.x} cy={node.y} r={node.r * 5.5} fill="url(#nodeGlow)" />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={node.color}
                opacity={node.o}
              />
            </g>
          ))}
        </g>
      </svg>
      <svg
        aria-hidden="true"
        className="h-full w-full opacity-35 sm:hidden"
        viewBox="0 0 390 760"
        preserveAspectRatio="none"
      >
        <path
          d="M210 84 L316 152 L278 282 L338 410 L242 520 L322 650"
          fill="none"
          stroke="#D8B76A"
          strokeOpacity="0.08"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <path
          d="M286 92 L226 220 L328 334 L246 460 L288 628"
          fill="none"
          stroke="#86F2D3"
          strokeOpacity="0.06"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        {[84, 152, 282, 410, 520, 650].map((y, index) => (
          <circle
            key={y}
            cx={index % 2 === 0 ? 210 + index * 12 : 316 - index * 8}
            cy={y}
            r="1.6"
            fill={index % 2 === 0 ? "#D8B76A" : "#F4ECDC"}
            opacity="0.09"
          />
        ))}
      </svg>
      <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-charcoal via-charcoal/72 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/80 to-transparent" />
    </div>
  );
}
