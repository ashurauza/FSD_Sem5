import http from "http";
import os from "os";

const port = 4000;
let body="";
const data=[];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home Page</h1>");
    }
    else if (url === "/system" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        const systemInfo = {
            Hostname: os.hostname(),
            Platform: os.platform(),
            CPU_length: os.cpus().length,
            Architecture: os.arch(),
            TotalMemory: (os.totalmem() / 1024 ** 3).toFixed(2),
            FreeRam: (os.freemem() / 1024 ** 3).toFixed(2),
        };
        // res.write("<h1>System Info</h1>");
        // res.write(`<p>Hostname: ${systemInfo.Hostname}</p>`);
        // res.write(`<p>Platform: ${systemInfo.Platform}</p>`);
        // res.write(`<p>CPUs: ${systemInfo.CPU_length}</p>`);
        // res.write(`<p>Architecture: ${systemInfo.Architecture}</p>`);
        // res.write(`<p>Total Memory: ${systemInfo.TotalMemory} GB</p>`);
        // res.write(`<p>Free RAM: ${systemInfo.FreeRam} GB</p>`);
    }
    else if (url === "/senddata" && method === "POST") {
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Data Send Successfully");
        req.on("data", (chunk) => {
            body=body+chunk;
        });
        req.on("end", () => {
            console.log(body,"Data Received");
            data.push
            res.write(body);
            res.end();
        });
    }
    else if (url === "/viewdata" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>View Data</h1>");
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 - Page Not Found</h1>");
    }

    res.end(body);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
