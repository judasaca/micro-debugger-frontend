import useGlobalStore from "@/lib/store";
import React from "react";

const PortsList = () => {
  const ports = useGlobalStore((state) => state.ports);
  return (
    <div className="flex flex-col gap-1">
      <div>
        {ports.map((i, index) => (
          <div key={`port-${i}-${index}`}>{i}</div>
        ))}
      </div>
    </div>
  );
};

export default PortsList;
