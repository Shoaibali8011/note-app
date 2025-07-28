const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
 
const app=express()
app.use(express.json())
app.use(cors())
const port =3000;
const userShema=mongoose.Schema({
    name:{
        type:String,
    },
    to:{
      type :String
    },
    from:{
        type:String
    }
})
const flighstObject={
    flight1:{
        name:"PIA",
        to:"Lahore",
        from:"Islamabad"
    },
    flight2:{
        name:"PIA",
        to:"Lahore",
        from:"Islamabad"
    },
    flight3:{
        name:"PIA",
        to:"Lahore",
        from:"Islamabad"
    },
    flight4:{
        name:"PIA",
        to:"Lahore",
        from:"Islamabad"
    },
    flight5:{
        name:"PIA",
        to:"Lahore",
        from:"Islamabad"
    },
}
const User=mongoose.model("User",userShema)
app.get("/api/flights",(req,res)=>{
    
     res.json(flighstObject)
})




app.listen(port,()=>{
    console.log("Server is running",port);
    
})



