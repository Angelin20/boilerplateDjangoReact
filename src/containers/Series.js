import React from "react";
import { HorizontalBarSeries } from "react-vis";

const Series = ({ charts }) => {
  charts.map((item, index) => {
    return <h1>{item.Tamanio}</h1>;
  });
};

export default Series;
