// WRITE A JAVASCRIPT CODE TO CREATE HTTP SERVER 
import http from 'http';
const server=http.createServer((req, res) => {
     const url=req.url;
     if(url=="/" && req.method=="GET"){
        res.write("Home Page");
        res.statusCode=201;

     }
    //  else if(url=="/about" && req.method=="GET"){
    //     res.write("About Page");
    //     res.statusCode=201;
    // }
    else if(url=="/contact" && req.method=="GET"){
        res.write("Contact Page");
        res.statusCode=201;
    }
    else if(url=="/services" && req.method=="POST"){
        res.write("Services Page");
        res.statusCode=201;
    }
    else if(url=="/system" && req.method=="GET"){
        res.write("System Page");
        res.statusCode=201;
    }
    else{
        res.write("Error Page");    
        res.statusCode=404;
    }
    res.end();

})
server.listen(5001, () => {
    console.log("Server is running on port 5001");
});