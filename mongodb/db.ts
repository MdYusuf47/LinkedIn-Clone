import mongoose from "mongoose"


const connectionString = `mongodb+srv://mdyusuf:12345@cluster0.rbacx4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


if(!connectionString){
    throw new Error("connection string is not defined")
}

const connectDB = async () => {
    if(mongoose.connection?.readyState >=1){
        return;
    }
    try {
        console.log("Connection to MongoDB")
        await mongoose.connect(connectionString)
    } catch (error) {
        console.log("Error connecting to MongoDB:",error)
    }
}