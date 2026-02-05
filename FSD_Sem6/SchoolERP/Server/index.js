import http from 'http';
import os, { platform } from 'os';
const server=http.createServer((req,res) => {
    const url=req.url;
if (url ==="/" && req.method ==="GET") {
    res.statusCode=201;
    res.write("<h1>Hello Ashu</h1>");   
}
else if (url ==="/system" && req.method ==="GET") {
    res.statusCode=201;
const data={
    platform: os.platform(),
    cpu: os.cpus().length,
    Arch: os.arch(),
    FreeMemory: (os.freemem()/1024**3).toFixed(2)+" GB",
    TotalMemory: (os.totalmem()/1024**3).toFixed(2)+" GB"
}
res.write(JSON.stringify(data));
}
else{
    res.statusCode=404;
    res.write("<h1>Page Not Found</h1>");
}
})
server.listen(5001, () => {
    console.log(`Server is running on port 5001`);
});
