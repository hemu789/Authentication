import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/User.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import path from 'path'
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

  const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use(express.json())

app.use(cookieParser())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//API Routes

app.use('/api/user', userRoutes)
app.use("/api/auth", authRoutes);

//own error middelware
app.use( (err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success:false,
    message,
    statusCode
  });
});