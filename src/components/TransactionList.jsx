import React, { useState } from "react";

// Transaction Form
const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.description) return alert("Isi semua field!");
    onAdd({ ...form, amount: Number(form.amount), date: new Date().toISOString(), _id: Date.now().toString() });
    setForm({ type: "income", amount: "", description: "" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 flex-wrap">
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="border-b border-gray-300 p-2 focus:outline-none flex-1">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="border-b border-gray-300 p-2 focus:outline-none flex-1" />

        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="border-b border-gray-300 p-2 focus:outline-none flex-1" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

// Transaction List
const TransactionList = ({ transactions, onDelete }) => {
  if (!transactions || transactions.length === 0) return <p className="text-center text-gray-500 mt-4">Belum ada transaksi.</p>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-6 overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Date Added</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className={`p-2 font-medium ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>{t.type}</td>
              <td className="p-2">Rp{t.amount}</td>
              <td className="p-2">{t.description}</td>
              <td className="p-2">{new Date(t.date).toLocaleDateString("id-ID")}</td>
              <td className="p-2 text-right">
                <button onClick={() => onDelete(t._id)} className="text-red-600 hover:text-red-800 cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Dashboard Transaction
const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (t) => {
    setTransactions([t, ...transactions]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  return (
    <div className="flex flex-col gap-8">
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default TransactionList;
