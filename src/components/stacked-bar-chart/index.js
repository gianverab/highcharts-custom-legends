import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import options from "../../utils/config";

const StackedBarChart = () => {
  const highchartsCallback = (chart) => {
    const legendArea = document.querySelector(".legend-area");

    chart.series.forEach((item, index) => {
      const myButton = document.createElement("button");
      myButton.textContent = item.name;
      myButton.style.backgroundColor = item.color;
      myButton.style.padding = "6px 42px";
      myButton.style.border = "none";
      myButton.style.outline = "none";
      myButton.style.borderRadius = "4px";
      if (index > 0) {
        myButton.style.marginLeft = "16px";
      }
      if (index === 1) {
        myButton.style.color = "#ffffff";
      }

      myButton.addEventListener("click", () => {
        item.setVisible(!item.visible);
        switch (myButton.style.opacity) {
          case "":
            return (myButton.style.opacity = "0.3");
          case "0.3":
            return (myButton.style.opacity = "1");
          case "1":
            return (myButton.style.opacity = "0.3");
        }
      });
      legendArea.appendChild(myButton);
    });
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      callback={highchartsCallback}
    />
  );
};

export default StackedBarChart;
