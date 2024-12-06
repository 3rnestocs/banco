import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { month: "Enero", ingresos: 600, egresos: 400 },
  { month: "Febrero", ingresos: 700, egresos: 500 },
  { month: "Marzo", ingresos: 800, egresos: 600 },
  { month: "Abril", ingresos: 900, egresos: 300 },
  { month: "Mayo", ingresos: 750, egresos: 450 },
  { month: "Junio", ingresos: 950, egresos: 700 },
  { month: "Julio", ingresos: 800, egresos: 500 },
];

const BUBarChart = () => (
  <BarChart width={500} height={250} data={data}>
    <Legend
      verticalAlign="top"
      wrapperStyle={{ lineHeight: "20px", color: "#000" }}
    />
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="ingresos" fill="#82ca9d" />
    <Bar dataKey="egresos" fill="#ff4caf50" />
  </BarChart>
);

export default BUBarChart;
