import useGlobalStore from "@/lib/store";
import React from "react";

const PortsList = () => {
  const ports = useGlobalStore((state) => state.ports);
  return (
    <div className="flex flex-col gap-1">
      <div>
        {ports.map((i) => (
          <div>{i}</div>
        ))}
      </div>
    </div>
  );
};

export default PortsList;
