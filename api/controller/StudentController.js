var commonDAO = require("../dao/CommonDAO");


var addNewStudent = (studentid, student_name, student_class, roll_no) => {
    var addNewStudentQuery = `INSERT INTO students VALUES(${studentid},${student_name},${student_class},${roll_no});`;
    return addNewStudentQuery;
}

module.exports = {
    addNewStudent: addNewStudent
}