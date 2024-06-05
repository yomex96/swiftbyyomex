// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://abayomirobertonawole3:dAuPCficn9f0booe@cluster0.a0toidj.mongodb.net/tomato-delivery-master').then(()=>console.log("DataBase Connected"));
//    // mongodb+srv://mattbelido:<password>@cluster0.9r6mwpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//     //mongodb+srv://abayomirobertonawole3:dAuPCficn9f0booe@cluster0.a0toidj.mongodb.net/tomato-delivery-master
//     //mongodb+srv://kimrogers1004:professor1234@cluster0.kvddyvv.mongodb.net/tomato-delivery-master
// }

import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};



