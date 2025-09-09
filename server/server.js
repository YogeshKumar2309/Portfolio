// Step 1: Required packages
import express from "express";
import cors from "cors";

// Step 2: Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Step 3: CORS Configuration
const corsOptions = {
  origin: ["http://localhost:3000", "https://your-frontend-domain.com"], // ✅ Allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allowed headers
  credentials: true, // ✅ Enable cookies or Authorization headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Step 4: Middleware
app.use(express.json()); // JSON request body parse करने के लिए

// Step 5: Sample routes
app.get("/", (req, res) => {
  res.send("Server is running with CORS enabled!");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Step 6: Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
