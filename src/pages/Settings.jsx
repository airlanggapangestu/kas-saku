import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("User");
  const [initialBalance, setInitialBalance] = useState(0);

  const saveSettings = () => {
    alert(`Settings disimpan:\nNama: ${name}\nSaldo Awal: Rp${initialBalance}`);
    // nanti bisa simpan ke localStorage atau ke backend
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Nama Pengguna</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded-lg w-full" />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Saldo Awal</label>
        <input type="number" value={initialBalance} onChange={(e) => setInitialBalance(Number(e.target.value))} className="border p-2 rounded-lg w-full" />
      </div>

      <button onClick={saveSettings} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Simpan
      </button>
    </div>
  );
};

export default Settings;
