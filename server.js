const express = require('express') 
const {create, findAll, findById, update, deleteById} = require("./repositories/studentRepository")

const app = express()
const port = 3000;

app.use(express.json())

// URL PARA O POSTMAN (POST e GET): http://localhost:3000/students

app.post("/students", (req, res) => {
  const newStudent = req.body;
  
  if (!newStudent.name || !newStudent.email || !newStudent.course_name) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios: name, email e course_name." });
  }
  create(newStudent);
  return res.status(201).json({ message: `Estudante ${newStudent.name} criado com sucesso.` });
});


app.get('/students', (req, res) => {
  const students = findAll();

  if (!students) {
    return res.status(404).json({ message: "Nenhum estudante encontrado." });
  }
  res.status(200).json(students);
});

app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const student = findById(id);
  
  if (!student) {
    return res.status(404).json({ message: `Nenhum estudante encontrado para o id: ${id}.` });
  }  
  res.status(200).json(student);
});
  
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const deletedStudent = deleteById(id);

  if (deletedStudent) {
    return res.status(200).json({ message: `Estudante com o id ${id} excluído com sucesso.` });
  } else {
    return res.status(404).json({ message: `Estudante com o id ${id} não encontrado.` });
  }
});

app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  if (!updatedData.name && !updatedData.email && !updatedData.course_name) {
    return res.status(400).json({ message: "Preencha corretamente os campos." });
  }

  const updatedStudent = update(id, updatedData);

  if (updatedStudent) {
    return res.status(200).json({ message: `O estudante com o id ${id} foi atualizado com sucesso.`, updatedStudent });
  } else {
    return res.status(404).json({ message: `O estudante com o id ${id} não foi encontrado.` });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
