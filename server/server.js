import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Message from "./msg.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

mongoose

  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const corsOptions = {
  origin: process.env.FRONTEND_DOMAIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // JSON request body parse

app.get("/api/contact", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Errro!",
    });
  }
});


app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const msg = await Message.create({
      name,
      email,
      subject,
      message,
    });    
   
    await msg.save();
     res.json({
      success: true,
      message: "Message sent successfully!",
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Errro!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
