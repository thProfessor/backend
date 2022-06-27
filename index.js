const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');

let page="./";

    switch(req.url){
        case "/":
            page+="index.html";
            break;
        case "/about":
            page+="about.html";
            break;
        default:
            page+="404.html";
            break;
    }

    fs.readFile(page,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })
   
})

server.listen(4000,()=>{
    console.log("server running at port 4000")
})