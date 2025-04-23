
const { default: mongoose } = require("mongoose");

   const ConnectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connection Message",connection.connection.host)

    }catch(err){
        console.log("Error in Database Connection",err)
    }
}

module.exports =  {ConnectDB};