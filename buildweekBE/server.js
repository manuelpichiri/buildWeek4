const express = require("express");

const cors = require("cors");
const startServer = require("./config/db");
const PORT = 4545;

// middleware imports
const errorHandler = require("./middleware/errorHandler/errorHandler");
const tokenVerify = require("./middleware/tokenVerify/tokenVerify");

// routes imports
const userRoute = require("./modules/user/user.route");
const experienceRoute = require("./modules/experience/experience.route");
const authRoute = require("./modules/auth/auth.route");
const server = express();

// middlewares
server.use(cors());
server.use(express.json());
server.use(tokenVerify);
// route
server.use("/", authRoute);
server.use("/", userRoute);
server.use("/", experienceRoute);

// error handlers
server.use(errorHandler);

startServer(PORT, server);
