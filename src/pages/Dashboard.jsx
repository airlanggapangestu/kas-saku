import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const Dashboard = ({ transactions = [] }) => {
  const [filterType, setFilterType] = useState("all"); // all, income, expense
  const [filterDate, setFilterDate] = useState("all"); // all, today, week, month

  // Filter transactions based on type
  let filteredTransactions = transactions.filter((t) => (filterType === "all" ? true : t.type === filterType));

  // Filter transactions based on date
  const now = new Date();
  filteredTransactions = filteredTransactions.filter((t) => {
    const txDate = new Date(t.date);
    if (filterDate === "today") {
      return txDate.toDateString() === now.toDateString();
    } else if (filterDate === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      return txDate >= oneWeekAgo && txDate <= now;
    } else if (filterDate === "month") {
      return txDate.getMonth() === now.getMonth() && txDate.getFullYear() === now.getFullYear();
    }
    return true;
  });

  const totalIncome = filteredTransactions.filter((t) => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = filteredTransactions.filter((t) => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome - totalExpense;

  // Group transactions by date for chart
  const groupedData = {};
  filteredTransactions.forEach((t) => {
    const date = new Date(t.date).toLocaleDateString("id-ID");
    if (!groupedData[date]) groupedData[date] = { Income: 0, Expense: 0, name: date };
    if (t.type === "income") groupedData[date].Income += t.amount;
    if (t.type === "expense") groupedData[date].Expense += t.amount;
  });
  const chartData = Object.values(groupedData);

  // Top 5 transactions (by amount)
  const topTransactions = [...filteredTransactions].sort((a, b) => b.amount - a.amount).slice(0, 5);

  // Alerts
  const alerts = [];
  if (totalExpense > totalIncome) {
    alerts.push("Warning: Your expenses exceed your income!");
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Filter Type */}
        <div className="flex-1 bg-white p-4 rounded-2xl shadow flex items-center justify-center cursor-pointer">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full bg-white border-none focus:ring-0 text-gray-700 font-medium cursor-pointer">
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Filter Date */}
        <div className="flex-1 bg-white p-4 rounded-2xl shadow flex items-center justify-center cursor-pointer">
          <select value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="w-full bg-white border-none focus:ring-0 text-gray-700 font-medium cursor-pointer">
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

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

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded-lg">
          {alerts.map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </div>
      )}

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

      {/* Top 5 Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow w-full">
        <h3 className="font-bold mb-4">Top 5 Transactions</h3>
        {topTransactions.length === 0 ? (
          <p className="text-gray-500">No transactions found.</p>
        ) : (
          <ul className="space-y-2">
            {topTransactions.map((t) => (
              <li key={t._id} className="flex justify-between p-2 border-b border-gray-200">
                <span className={t.type === "income" ? "text-green-600" : "text-red-600"}>{t.type}</span>
                <span>{t.description}</span>
                <span>Rp{t.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
