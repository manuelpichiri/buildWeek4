const express = require("express");

const cors = require("cors");
const startServer = require("./config/db");
const PORT = 4545;

// middleware imports

// routes imports

const server = express();

// middlewares
server.use(cors());
server.use(express.json());

// route

// error handlers
//server.use(errorHandler)

startServer(PORT, server);
