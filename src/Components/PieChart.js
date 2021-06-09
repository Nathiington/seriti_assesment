import React from "react";
import { Pie } from "react-chartjs-2";

const labels =
    [
        "Yes",
        "No",
    ]
const data = {
        labels, 
        datasets: [
            {
                backgroundColor: ["#46bfbd","#f7454a"],
                label: "Data",
                data: [85,15],
                borderWidth: 2,
                fill: false, 
                borderColor: "#ffffff" 
            } 
        ],
    }

const options = {
    plugins: {
        legend: {
            display: false,
        },
        showtooltips: { 
            enabled: false 
        },
    },
    maintainAspectRatio: false ,
    
};

export default function LineChart() {
    return (
        <div>
            <Pie data={data} options={options} width={"30%"} height={"300%"}  />
        </div>
    )
}
