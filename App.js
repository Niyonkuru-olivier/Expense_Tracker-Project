import React, { useState, useEffect } from "react";
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import './styles.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [groupBy, setGroupBy] = useState("category"); // State to handle grouping criteria

  // Load from localStorage on component mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) setExpenses(storedExpenses);
  }, []);

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const editExpense = (index, updatedExpense) => {
    setExpenses(expenses.map((expense, i) => (i === index ? updatedExpense : expense)));
  };

  // Group expenses by category or date
  const groupExpenses = () => {
    return expenses.reduce((groups, expense) => {
      const key = groupBy === "category" ? expense.category : expense.date;
      groups[key] = groups[key] || [];
      groups[key].push(expense);
      return groups;
    }, {});
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Expense Tracker</h1>

      {/* Select for Grouping Criteria */}
      <div className="mb-5 text-center">
        <label className="mr-2">Group by:</label>
        <select
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="category">Category</option>
          <option value="date">Date</option>
        </select>
      </div>

      <AddExpense addExpense={addExpense} />

      {/* Display grouped expenses */}
      <ExpenseList
        groupedExpenses={groupExpenses()}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
        groupBy={groupBy}
      />

      {/* Chart for Expenses */}
      <div className="mt-5">
        <ExpenseChart expenses={expenses} groupBy={groupBy} />
      </div>

      {/* Display Total Spending */}
      <div className="mt-5 text-center font-bold">
        Total Spending: $
        {expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0).toFixed(2)}
      </div>
    </div>
  );
}

export default App;
