import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const baseURL = 'http://localhost:4444/api/v1';

const DataAnalyticsPage = () => {
    const [chart, setChart] = useState([]);
    const [chart2, setChart2] = useState([]);
    useEffect(() => {
        const getInfomation = async () => {
            await fetch(`${baseURL}/analytics/get?subIntent=ad`).then((response) => {
                response.json().then((json) => {
                    console.log(json.data);
                    setChart(json.data)
                })
            })
        }
        getInfomation()
        const getInfomation2 = async () => {
            await fetch(`${baseURL}/analytics/get?subIntent=sap`).then((response) => {
                response.json().then((json) => {
                    console.log(json.data);
                    setChart2(json.data)
                })
            })
        }
        getInfomation2()
    }, [])

    var data = {
        labels: chart?.map(x => x.intent),
        datasets: [
            {
                label: '# of Votes',
                data: chart?.map(x => x.point),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ],
    };
    var data2 = {
        labels: chart2?.map(x => x.intent),
        datasets: [
            {
                label: '# of Votes',
                data: chart2?.map(x => x.point),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ],
    };
    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    }
    return <div>
        <div>
            <Pie data={data} height="320px"
                width="320px" options={{ maintainAspectRatio: false }} />
        </div>
        <div>
            <Pie data={data2} height="320px"
                width="320px" options={{ maintainAspectRatio: false }} />
        </div>
    </div>

};

export default DataAnalyticsPage