const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

server.listen(3002, () => {
    console.log("Servidor en el puerto 3002");
});