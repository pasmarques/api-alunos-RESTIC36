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

function findById(id){
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    const student = students[index];
    return student;
  }
  return null;
}

function deleteById(id) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    const deletedStudent = students.splice(index, 1);
    return deletedStudent[0];
  }
  return null;
}

function update(id, { name, email, course_name }) {
  
  const index = students.findIndex(student => student.id === id);
  
  if (index !== -1) {
    students[index] = {
      ...students[index],
      name: name,
      email: email,
      course_name: course_name,
    };
    return students[index];
  }
  
  return null;

}

module.exports = {
  create,
  findAll,
  findById,
  deleteById,
  update,
}
