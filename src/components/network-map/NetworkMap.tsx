import useGlobalStore from "@/lib/store";

const NetworkMap = () => {
  const ports = useGlobalStore((state) => state.ports);
  const totalNodes = ports.length;
  const radius = 200;

  const boxSize = radius * 2 + 250;
  const centerX = boxSize / 2;
  const centerY = boxSize / 2;

  return (
    <div className="flex justify-center items-center flex-1">
      <svg height={boxSize} width={boxSize}>
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          className="text-black dark:text-white"
        />
        {ports.map((node, i) => {
          const angle = (2 * Math.PI * i) / totalNodes;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <g key={node}>
              <circle
                cx={x}
                cy={y}
                r={8}
                onClick={() => console.log("clicking", node)}
                fill="currentColor"
                className="text-slate-600 dark:text-slate-300"
              />
              <rect
                x={x - 25} // adjust based on text width
                y={y + 10} // position below the circle
                width={50} // fixed or calculated based on text
                height={18}
                fill="#f0f0f0" // background color
                rx={4} // rounded corners
              />
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                dominantBaseline="hanging"
                fontSize="12"
                className="bg-white"
              >
                {node}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NetworkMap;
