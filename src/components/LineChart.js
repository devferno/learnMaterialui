import { useTheme } from "@material-ui/core";
import { amber, lightBlue, yellow } from "@material-ui/core/colors";
import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: lightBlue[500],
      borderColor: lightBlue[500],
    },
    {
      label: "of Votes",
      data: [12, 20, 8, 5, 2, 3],
      fill: false,
      backgroundColor: amber[500],
      borderColor: amber[400],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
