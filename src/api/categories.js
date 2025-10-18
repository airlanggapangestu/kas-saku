import axios from "axios";

const API_URL = "http://localhost:5000/api/categories";

// Ambil semua kategori
export const getCategories = async () => {
  const res = await axios.get(API_URL);
  return res.data.map((cat) => cat.name); // ambil array nama kategori
};

// Tambah kategori baru
export const addCategory = async (category) => {
  const res = await axios.post(API_URL, category);
  return res.data;
};

// Hapus kategori
export const deleteCategory = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
