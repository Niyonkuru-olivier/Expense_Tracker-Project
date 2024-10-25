import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ExpenseChart = ({ expenses, groupBy }) => {
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const key = groupBy === 'category' ? expense.category : expense.date;
    acc[key] = (acc[key] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const labels = Object.keys(groupedExpenses);
  const data = Object.values(groupedExpenses);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `Expenses by ${groupBy}`,
        data: data,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#66D9EF'
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#66D9EF'
        ]
      }
    ]
  };

  return (
    <div className="bg-white p-5 shadow-md rounded mt-5">
      <h2 className="text-xl font-bold text-center mb-4">Expense Visualization</h2>
      {groupBy === 'category' ? (
        <Pie data={chartData} />
      ) : (
        <Bar data={chartData} />
      )}
    </div>
  );
};

export default ExpenseChart;
