import React from "react";

const ExpenseList = ({ groupedExpenses, deleteExpense, editExpense, groupBy }) => {
  return (
    <div>
      {Object.keys(groupedExpenses).length > 0 ? (
        Object.keys(groupedExpenses).map((key) => (
          <div key={key} className="mb-5">
            <h2 className="font-bold text-lg mb-2">{groupBy === "category" ? `Category: ${key}` : `Date: ${key}`}</h2>
            {groupedExpenses[key].map((expense, index) => (
              <div key={index} className="bg-white p-4 mb-2 shadow-md flex justify-between">
                <div>
                  <p><strong>Amount:</strong> ${expense.amount}</p>
                  <p><strong>Category:</strong> {expense.category}</p>
                  <p><strong>Date:</strong> {expense.date}</p>
                  <p><strong>Description:</strong> {expense.description}</p>
                </div>
                <div>
                  <button
                    onClick={() => deleteExpense(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editExpense(index, expense)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
