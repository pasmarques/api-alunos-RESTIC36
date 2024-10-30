const express = require('express') 
const {create} = require("./repositories/studentRepository")

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

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const deletedStudent = deleteById(id);

  if (deletedStudent) {
    return res.status(200).json({ message: `Student with id ${id} deleted successfully` });
  } else {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
