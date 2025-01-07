const mongoose=require('mongoose');
const colors=require('colors');

//Function mongoose connection
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
}
module.exports=connectDB;

