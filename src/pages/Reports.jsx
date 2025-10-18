import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { saveAs } from "file-saver";

const Reports = ({ transactions = [] }) => {
  // Summary
  const totalIncome = transactions.filter((t) => t.type === "income").reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions.filter((t) => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  // Group per bulan untuk chart
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const chartData = months.map((m, i) => {
    const income = transactions.filter((t) => t.type === "income" && new Date(t.date).getMonth() === i).reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter((t) => t.type === "expense" && new Date(t.date).getMonth() === i).reduce((acc, t) => acc + t.amount, 0);
    return { name: m, Income: income, Expense: expense };
  });

  // Export CSV
  const exportCSV = () => {
    const header = "Tanggal,Tipe,Kategori,Deskripsi,Amount\n";
    const rows = transactions.map((t) => `${new Date(t.date).toLocaleDateString("id-ID")},${t.type},${t.description},${t.amount}`).join("\n");
    saveAs(new Blob([header + rows], { type: "text/csv;charset=utf-8" }), "transactions.csv");
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Reports</h1>

      {/* Summary */}
      <div className="flex flex-col md:flex-row justify-around bg-white p-6 rounded-2xl shadow gap-4">
        <div className="text-center flex-1 bg-green-50 p-4 rounded-lg">
          <h2 className="text-green-600 font-bold">Income</h2>
          <p className="text-xl">Rp{totalIncome}</p>
        </div>
        <div className="text-center flex-1 bg-red-50 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold">Expense</h2>
          <p className="text-xl">Rp{totalExpense}</p>
        </div>
        <div className="text-center flex-1 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-blue-600 font-bold">Balance</h2>
          <p className="text-xl">Rp{balance}</p>
        </div>
      </div>

      {/* Export CSV */}
      <button onClick={exportCSV} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-max cursor-pointer">
        Export CSV
      </button>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow w-full">
        <h3 className="font-bold mb-4">Transactions Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Income" fill="#22c55e" />
            <Bar dataKey="Expense" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
