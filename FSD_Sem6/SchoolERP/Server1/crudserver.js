import http from "http";
const port=5001;
const users=[{id:1,name:"xyz",email:"xyz@gmail.com"},
{id:2,name:"abc",email:"xyz1@gmail.com"},
{id:3,name:"pqr",email:"xyz2@gmail.com"}
]
const server =http.createServer((req, res) => {
    const url=req.url;
    const method=req.method;
    if(url=="/" && method=="GET"){
        res.end("Home Page")
    }
    else if(url.startsWith("/users") && method=="GET"){
        const id=url.split("/")[2];
        const user=users.filter(u=>u.id==id);
        if(!user){
            res.statusCode=400;
            console.log(`User with id ${id} not found`);
        }
        console.log("user",id,user);
        res.end(JSON.stringify(user))
    }
     else if(url=="/createuser" && method=="POST"){
            let body="";
        req.on("data",(chunk)=>{
            body=body+chunk;
        })
        req.on("end",()=>{
            const user=JSON.parse(body);
            users.push(user);
            console.log("User Created Successfully",user);
            res.end("Create User")
        })

    }
        else if(url.startsWith("/users") && method=="PUT"){
            let body="";
            req.on("data",(chunk)=>{
                body=body+chunk;
            })
            req.on("end",()=>{
                const user=JSON.parse(body);
                const userIndex=users.findIndex(u=>u.id==user.id);
                users.push(newUser);
                res.statusCode=201;
                res.end(JSON.stringify(newUser)+"User Created Successfully");
                if(userIndex==-1){
                    console.log(`User with id ${user.id} not found`);
                    return res.end(`User with id ${user.id} not found`);
                }
                users[userIndex]=user;
                console.log("User Edited Successfully",user);
                res.end("User Edited Successfully");
            })
        }
        else if(url.startsWith("/users") && method=="DELETE"){
            const id=url.split("/")[2];
            const userIndex=users.findIndex(u=>u.id==id);
            if(userIndex==-1){
                console.log(`User with id ${id} not found`);
                return res.end(`User with id ${id} not found`)
            }
             users.splice(userIndex,1); 
            console.log(`user id ${id} deleted successfully`);
        res.end("Delete User"); }
        else{
            res.statusCode=404;
            res.end("Page Not Found");  
        }
})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
