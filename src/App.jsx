import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import { getTransactions } from "./api/transactions";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const [activePage, setActivePage] = useState("Dashboard");
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    if (isLoggedIn) fetchTransactions();
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (!isLoggedIn) return <Login onLogin={handleLogin} />;

  return (
    <div className="flex flex-col md:flex-row min-h-screen pb-14 bg-gray-100">
      <Sidebar active={activePage} setActive={setActivePage} />
      {/* Content wrapper with margin-left for desktop so sidebar tidak menutupi */}
      <div className="flex-1 flex flex-col md:ml-64">
        <Header user={{ name: "Admin" }} onLogout={handleLogout} />
        <div className="pt-28 md:pt-28 p-4 md:p-6 flex-1 overflow-x-hidden">
          {activePage === "Dashboard" && <Dashboard transactions={transactions} />}
          {activePage === "Transactions" && <Transactions transactions={transactions} fetchTransactions={fetchTransactions} />}
          {activePage === "Reports" && <Reports transactions={transactions} />}
        </div>
      </div>
    </div>
  );
};

export default App;
