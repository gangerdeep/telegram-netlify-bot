const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;

// Webhook route
app.post("/", async (req, res) => {
  const msg = req.body.message;

  if (msg && msg.text === "/start") {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: msg.chat.id,
      text: "🚀 Bot Running on Northflank"
    });
  }

  res.sendStatus(200);
});

// Server start
app.listen(PORT, () => {
  console.log("Server running...");
});