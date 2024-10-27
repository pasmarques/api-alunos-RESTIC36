const express = require('express') 
const {create, findAll} = require("./repositories/studentRepository")

const app = express()
const port = 3000;

app.use(express.json())

app.post("/students", (req,res)=>{
  const newStudent = req.body
  
  if ((!newStudent.name) || (!newStudent.email) || (!newStudent.course_name)){
    return res.status(400).json({message: "All fields are mandatory: name,email and course_name"});
  }
  create(newStudent)
  return res.status(201).json({message: `Student ${newStudent.name} created sucessfully`});
})

app.get('/students', (req,res)=>{
  const students = findAll();

  res.json(students);
  if (students.length === 0) {
    return res.status(404).json({ error: "Nenhum estudante encontrado" });
  }
  res.status(200).json(students);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
