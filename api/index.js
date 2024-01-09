import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/User.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//API Routes

app.use('/api/user', userRoutes)
app.use("/api/auth", authRoutes);