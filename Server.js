const express = require('express');
const app = express();

var portNumber=3000;
var apiDocRouter = require("./api/router/APIDocRouter");
var studentRouter = require("./api/router/StudentRouter");



app.use(apiDocRouter, studentRouter);

app.listen(portNumber, () => {
    console.log("-------------------------");
    console.log("Server Running ...");
    console.log("-------------------------");
    console.log("Port Number : "+portNumber);
    console.log("-------------------------");
});
