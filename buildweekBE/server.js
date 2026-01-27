const express = require("express");

const cors = require("cors");
const startServer = require("./config/db");
const PORT = 4545;

// middleware imports
const errorHandler = require("./middleware/errorHandler/errorHandler");


// routes imports
const userRoute = require("./modules/user/user.route");
const experienceRoute= require("./modules/experience/experience.route")
const server = express();

// middlewares
server.use(cors());
server.use(express.json());

// route
server.use("/user", userRoute);
server.use("/",experienceRoute)


// error handlers
server.use(errorHandler);

startServer(PORT, server);
