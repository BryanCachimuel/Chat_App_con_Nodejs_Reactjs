const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

// invocando a la dependencia de socket.io
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

// proceso de uso del socket
const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`Usuario con ID: ${socket.id} se a unido a la sala ${data}`)
    })

    socket.on("disconnect", () => {
        console.log("Usuario Desconectado", socket.id);
    });
});

server.listen(3002, () => {
    console.log("Servidor en el puerto 3002");
});