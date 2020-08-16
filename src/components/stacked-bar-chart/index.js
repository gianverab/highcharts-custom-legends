import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import options from "../../utils/config";

const StackedBarChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedBarChart;
