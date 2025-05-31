"use client";
import dynamic from "next/dynamic";
import React from "react";

const Chart3D = dynamic(() => import("@/components/Chart3D"), {
  ssr: false,
});

const ClientChartContainer: React.FC = () => {
  return (
    <div className="h-[500px] w-full">
      <Chart3D />
    </div>
  );
};

export default ClientChartContainer;
