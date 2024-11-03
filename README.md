
# **Alunos API**

API desenvolvida em **Express.js** para gerenciar alunos de um curso. A API permite criar, listar, atualizar e remover alunos, com documentação automatizada usando Postman.

## **Tecnologias Utilizadas**
- **Node.js** com **Express.js**
- **SQLite** para armazenamento de dados
- **Postman** para documentação
- **Nodemon** para reinicialização automática durante o desenvolvimento
- **UUIDv4** para geração de IDs únicos

## 📂 **Estrutura do Projeto**
- **server.js**: Arquivo principal com as rotas e configuração da API.
- **/repositories/studentRepository.js**: Contém a lógica de persistência dos alunos..

## **Como Rodar o Projeto**
1. Clone o repositório:
   ```bash
   git clone <seu-repositório>
   cd api-alunos-RESTIC36
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor com **Nodemon**:
   ```bash
   npm start
   ```

4. Acesse a API em: [http://localhost:3000/students](http://localhost:3000/students)  
   Acesse a documentação Postman: [http://localhost:3000/students](http://localhost:3000/students)

## 📌 **Endpoints**
### **Criar Aluno**
`POST /students`  
Cria um novo aluno.

**Corpo da Requisição:**
```json
{
  "name": "Junior Argolo",
  "email": "juniordev@gmail.com",
  "course_name": "Science Computer",
}
```

---

### **Listar Alunos**
`GET /students`  
Retorna todos os alunos cadastrados.

---

### **Buscar Aluno**
`GET /students/:id`  
Busca um aluno pelo ID.

---

### **Atualizar Aluno**
`PUT /students/:id`  
Atualiza o(s) dado(s) de um aluno existente.

**Corpo da Requisição:**
```json
{
  
}
```

---

### **Deletar Aluno**
`DELETE /students/:id`  
Remove um aluno pelo ID.

---

## 🛠️ **Dependências do Projeto**
```json
"dependencies": {
  "express": "^4.19.2",
  "nodemon": "^3.1.4",
  "sqlite3": "^5.1.7",
  "uuidv4": "^6.2.13"
}
```

---

## 📖 **Documentação**
A documentação da API é gerada pelo Postman e pode ser acessada em:  
[http://localhost:3000/students](http://localhost:3000/students)

---

## 👨‍💻 **Autores**
Desenvolvido por **Flávia Jesus, Gustavo Aragão, Pedro Marques, Maria Gabriela e Taisy Gomes**.

---
