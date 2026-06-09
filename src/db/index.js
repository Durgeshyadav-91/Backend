import mongoose from "mongoose";

const connectDB = async () => {
    export const DB_NAME = "durgesh"
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}s`)
        // console.log(` \n MondoDB Database Connected Successfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Mongo DB Connection Failed: ", error);
        throw error
    }
}

export default connectDB;