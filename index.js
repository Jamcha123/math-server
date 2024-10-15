import express from 'express'
import fs from 'fs';
import http from 'http'
import {Server} from 'socket.io'

const app = express();
app.use(express.static("public"));

app.get("/:file", (req, res) => {
    const {file} = req.params;
    fs.readFile(file, (err, data) => {
        if(err){
            res.writeHead(404, {"content-type": "text/html"})
            return res.end("404, not found")
        }
        res.writeHead(200, {"content-type": "text/html"})
        res.write(data);
        res.end();
    }) 
})

const server = http.createServer(app)

function newItem(items, nums){
    app.post("/" + items, (req, res) => {
        res.writeHead(200, {'content-type': "text/html"});
        res.write(nums)
        res.end()
    })
}

const io = new Server(server);
io.on("connection", (socket) => {
    socket.on("plus", (msg) => {
        newItem("item1", "" + msg + "")
    })
    socket.on("minus", (msg) => {
        newItem("item2", "" + msg + "")
    })
    socket.on("times", (msg) => {
        newItem("item3", "" + msg + "")
    })
    socket.on("division", (msg) => {
        newItem("item4", "" + msg + "")
    })
})

server.listen(8080, () => console.log("http://127.0.0.1:8080/index.html"))