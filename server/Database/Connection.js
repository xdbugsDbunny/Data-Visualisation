import mongoose from "mongoose";
mongoose.set("strictQuery",true)

const Connection=async ()=>{
    const URL='mongodb://127.0.0.1:27017'
    try{
        await mongoose.connect(`${URL}/dashboard`,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Database Connected Successfully")
    }catch(error){
        console.log("Connection Error : ",error.message);
    }
}

export default Connection;