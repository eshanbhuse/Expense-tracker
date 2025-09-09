
const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL,{})
//         console.log("MongoDB connected successfully");
//     } catch (err) {
//         console.error("MongoDB connection failed:",err);
//         process.exit(1);
//     }
// };


let isConnected = false; // Track the connection status

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected successfully");

    }
    catch(err){
        console.error("MongoDB connection failed:", err);
    }
}



module.exports = connectDB;
