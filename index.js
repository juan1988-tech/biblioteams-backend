//conexión a mmongodb
const { connection } = require('./database/connection');

connection();

//servidor
const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const port = 3000;

app.listen(port,()=>console.log(`Servidor correndo en el puerto ${port} 🗳️`))

