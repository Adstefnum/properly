"use client"

import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [6500, 5900, 8000, 8100, 7800, 9000],
      backgroundColor: 'rgba(37, 99, 235, 0.5)',
    },
    {
      label: 'Outstanding',
      data: [1200, 1900, 300, 500, 800, 300],
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    },
  ],
}

export function Overview() {
  return <Bar options={options} data={data} />
} 