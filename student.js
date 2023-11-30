const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://anjithkj:anjith@cluster0.8uatvth.mongodb.net/college?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const studscheme = new sc({
Admno:String,
sname:String,
Age:Number,
Status:String
});

var studmodel=mongoose.model("Student",studscheme)
module.exports =studmodel;