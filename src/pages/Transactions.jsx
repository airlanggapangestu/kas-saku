import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { addTransaction, deleteTransaction } from "../api/transactions";

const Transactions = ({ transactions, fetchTransactions, categories }) => {
  const handleAdd = async (t) => {
    await addTransaction(t);
    fetchTransactions();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionForm onAdd={handleAdd} categories={categories} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default Transactions;
