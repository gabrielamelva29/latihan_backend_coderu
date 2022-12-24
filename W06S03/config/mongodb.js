const mongoose=require('mongoose')

async function connect(){
    await mongoose.connect('mongodb+srv://gabriela_naibaho:atgab2922*@cluster0.ggsinn2.mongodb.net/TodoDB?retryWrites=true&w=majority')
    .then(()=>console.log("Database Connected"))
    .catch(()=>console.error("Error connection to mongoDB", e))
}

module.exports={connect}