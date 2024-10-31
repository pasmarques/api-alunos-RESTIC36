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

function deleteById(id) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    const deletedStudent = students.splice(index, 1);
    return deletedStudent[0];
  }
  return null;
}

module.exports = {
  create,
  findAll,
  deleteById,
}
