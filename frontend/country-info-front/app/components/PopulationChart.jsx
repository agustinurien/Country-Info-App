"use client";
import "../[country]/[countryCode]/infoCard.css";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import React, { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PopulationChart = ({ population }) => {

    const [years, setYears] = useState([]);
    const [populations, setPopulations] = useState([]);

    useEffect(() => {
        if (population === '') {
            console.log('No data');
            return;
        } else {
            setPopulations(population.map(data => data.value));
            setYears(population.map(data => data.year));
        }
    }, [population]);



    // Datos para la gráfica
    const data = {
        labels: years,
        datasets: [
            {
                label: 'Population',
                data: populations,
                borderColor: 'rgb(0, 81, 255)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            }
        ]
    };

    // Opciones de la gráfica
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Population',
                },
                beginAtZero: true,
            },
        }
    };

    return (
        <section className="chartSection">
            <h2>POPULATION</h2>
            <div className="containerChart">
                <Line data={data} options={options} />
            </div>
        </section>
    );
};

export default PopulationChart
