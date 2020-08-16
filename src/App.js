import React from "react";
import styled from "styled-components";
import StackedBarChart from "./components/stacked-bar-chart";

const App = () => {
  return (
    <AppWrapper>
      <h1>React Highcharts</h1>
      <StackedBarChart />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  text-align: center;
`;

export default App;
