import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import path from 'path';
import fs from 'fs';

console.log('DATABASE_URL:', process.env.DATABASE_URL);

// App configuration
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Ensure the /tmp/uploads directory exists
const tmpDir = '/tmp/uploads';
if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
}

// Serve static files from the /tmp/uploads directory
app.use("/images", express.static(tmpDir));

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Handle requests for /favicon.ico
app.get('/favicon.ico', (req, res) => {
    // Return a 200 OK response with an empty body for requests to /favicon.ico
    res.status(200).send();
  });

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Export the Express app for Vercel
export default app;



// import express from "express"
// import cors from "cors"
// import { connectDB } from "./config/db.js"
// import foodRouter from "./routes/foodRoute.js"
// import userRouter from "./routes/userRoute.js"
// import 'dotenv/config'
// import cartRouter from "./routes/cartRoute.js"
// import orderRouter from "./routes/orderRoute.js"


// // app config
// const app = express()
// // const port = process.env.PORT || 5000;


// // middleware
// app.use(express.json())
// app.use(cors())

// // db connection
// connectDB();

// // api endpoints
// app.use("/api/food",foodRouter)
// app.use("/images",express.static('uploads'))
// app.use("/api/user",userRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)



// app.get("/",(req,res)=>{
//     res.send("API Working")
// })

// // app.listen(port,()=>{
// //     console.log(`Server Started on http://localhost:${port}`)
// // })

// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT --> 