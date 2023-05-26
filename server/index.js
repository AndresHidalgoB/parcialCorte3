const express = require('express')
const dbConnection = require("./database/config")
const {router} = require('./routes/message')
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')

const app = express()

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
    },

  });

app.use(cors());
app.use(express.json())
dbConnection()
app.use("/api", router);

io.on('connection', (socket) =>{
    console.log('user connected')
    //console.log(socket.id)
  
    socket.on('message', (id) => {
        console.log(message)
        //Envio al resto de clientes con broadcast.emit
        socket.broadcast.emit('message', {
            body: id,
        })
    })
  })

app.listen(process.env.PORT, () => {
    console.log("Server on port",process.env.PORT)
})

