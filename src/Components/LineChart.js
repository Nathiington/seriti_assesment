import React from "react";
import { Line } from "react-chartjs-2";

const labels =
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May", 
    ]
const data = {
        labels, 
        datasets: [
            {
                label: "Amount",
                data: [12, 15, 3, 5, 9],
                borderWidth: 2,
                fill: true, 
                borderColor: "#96bbcd"
            } 
        ],
    }

const options = {
    plugins: {
        legend: {
            display: false,
        },
    }
};

export default function LineChart() {
    return (
        <div>
            <Line data={data} options={options}  />
        </div>
    )
}
