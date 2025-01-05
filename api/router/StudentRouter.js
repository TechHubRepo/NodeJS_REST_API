const express = require('express');
const studentRouter = express.Router();

var studentController = require("../controller/StudentController");

/**
 * @swagger
 * /student/get:
 *   get:
 *     tags:
 *       - Student Controller
 *     summary: Return Student info by student ID
 *     description: Enter your student id to get the information
 *     responses:
 *       '200':
 *         description: Okey
 */
studentRouter.get("/student/get", async(request, response) => {
    response.send("Getting Students");
});

/**
 * @swagger
 * /student/add-new:
 *   post:
 *     tags:
 *       - Student Controller
 *     summary: Return Student info by student ID
 *     description: Enter your student id to get the information
 *     parameters:
 *      - in: body
 *        description: Optional description in *Markdown*
 *        required: true
 *        type: json
 *     responses:
 *       '200':
 *         description: Okey
 */
studentRouter.post("/student/add-new", async(request, response) => {
    var studentJSON = request.body;
    // var responseResult = await studentController.addNewStudent("ID", "NAME", "CLSS", "ROLL");
    response.send(studentJSON);
});


module.exports = studentRouter;
