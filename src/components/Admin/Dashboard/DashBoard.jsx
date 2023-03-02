import React, { useState } from "react";
import Chart from "react-apexcharts";

const DashBoard = ({postGraphCategories,postGraphData,type}) => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: postGraphCategories?postGraphCategories:"",
          },
        },
        series: [
          {
            name: "series-1",
            data: postGraphData?postGraphData:"",
          },
        ],
      });
      return (
        <div className="flex flex-col w-full rounded-3xl mx-10 bg-white content-center justify-center p-5 gap-y-5">
          <h1 className="text-center text-2xl font-bold">Bookings Chart</h1>
          <div className="mx-auto">
          <Chart 
            options={state.options}
            series={state.series}
            type={type}
            width="300"
          />
          </div>
        </div>
      );
}





export default DashBoard