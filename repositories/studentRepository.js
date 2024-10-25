const {v4: uuidv4} = require('uuid');

let students = []

function create({name,email,course_name}){
  const student = {
    id: uuidv4(),
    name,
    email,
    course_name
  }
  students.push(student)
  return student
}

function findAll(){
  return students;
}

module.exports = {
  create,
  findAll
}