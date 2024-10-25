import React, { useState } from "react";

const AddExpense = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date && description) {
      addExpense({ amount, category, date, description });
      setAmount("");
      setCategory("");
      setDate("");
      setDescription("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 bg-white p-5 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
};

export default AddExpense;
