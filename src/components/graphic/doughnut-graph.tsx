"use client";

import { ChartData } from "@/types";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

type Props = {
  data: ChartData;
};

export default function DoughnutGraph({ data }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Doughnut
        data={data}
        className="!w-full !h-full max-w-[400px] max-h-[400px] lg:max-w-[550px] lg:max-h-[550px]"
      />
    </div>
  );
}
