"use client"

import { Bar } from "react-chartjs-2"
import { useProperty } from "@/contexts/PropertyContext"
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

export function Overview() {
  const { currentPropertyData } = useProperty()

  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: currentPropertyData.revenueData,
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
      },
      {
        label: 'Outstanding',
        data: currentPropertyData.outstandingData,
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={data} />
} 