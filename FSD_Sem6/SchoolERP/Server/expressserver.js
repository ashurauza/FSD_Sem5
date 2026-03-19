import express from "express"
const port=3001;
const app=express();
const users=[
    {id:1,name:"ABC1",email:"abc1@gmail.com"},
    {id:2,name:"ABC2",email:"abc2@gmail.com"},
    {id:3,name:"ABC3",email:"abc3@gmail.com"}
]
app.get("/users/:id",(req,res)=>{
    try{
        const uid = req.params.id;
        const user=users.find(u=>u.id==uid);

        if(!user){
            res.status(400).json({message:`user id ${uid} not found`});

        }
        res.json(user);

    }
    catch(err){
        const message=err.message;
        res.status(500).json({message:"server error" + message})


    }

})
app.listen(port,()=>{
    console.log('server is running on port ${port}')

})

