require('dotenv').config({ path: '.env-backend' });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;
console.log("PORT from env:", process.env.PORT);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

connectDB();

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Kullanıcılar alınamadı" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı eklenemedi" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı silinemedi" });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    res.json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı güncellenemedi" });
  }
});
