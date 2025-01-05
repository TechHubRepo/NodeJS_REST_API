const express = require('express');
const apiDocRouter = express.Router();

var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');

var options = {
    swaggerDefinition: {
        info: {
            title: "API Documentation [Student]",
            version: "1.0.0",
            description: "Student API Documentation describes the function implementation",
            contact: {
                name: "Ram Niwash",
                email: "ram.ramniwash@yahoo.com",
                url: "https://ramniwash.000webhostapp.com"
            }
        },
        host: "localhost:3000",
        basePath: '/',
    },
    apis: ["./api/router/StudentRouter.js"]
};
var swaggerSpecifications = swaggerJSDoc(options);

apiDocRouter.get('/api-docs.json', function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(swaggerSpecifications);
});

apiDocRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecifications));

module.exports = apiDocRouter;