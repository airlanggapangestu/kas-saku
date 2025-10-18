import React, { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.description) return alert("Isi semua field!");
    onAdd({ ...form, amount: Number(form.amount) });
    setForm({ type: "income", amount: "", description: "" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 flex-wrap ">
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="cursor-pointer border-b border-gray-300 focus:outline-none p-2 rounded-md bg-gray-50">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="border-b border-gray-300 focus:outline-none p-2 flex-1 bg-gray-50 rounded-md" />

        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border-b border-gray-300 focus:outline-none p-2 flex-1 bg-gray-50 rounded-md" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
