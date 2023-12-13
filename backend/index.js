const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "praktyki"

})

app.get('/',(re, res)=> {
    return res.json("Halo!");
})

app.get('/users',(req,res)=>{
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/recipes', (req, res) => {
  const sql = "SELECT * FROM Recipes";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});

app.post('/addusers', (req, res) => {
    const { username, email, password } = req.body; 
  
    const sql = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
  
    connection.query(sql, [username, email, password], (err, result) => {
      if (err) {
        console.error('Błąd podczas dodawania użytkownika:', err);
        res.status(500).send('Błąd podczas dodawania użytkownika');
      } else {
        console.log('Użytkownik dodany pomyślnie!');
        res.status(200).send('Użytkownik dodany pomyślnie!');
      }
    });
});
app.post('/addrecipe', (req, res) => {
  const { title, description, instructions, user_id } = req.body;

  const sql = 'INSERT INTO Recipes (user_id, title, description, instructions,) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, description, instructions, user_id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Błąd dodawania przepisu' });
      throw err;
    }
    res.status(200).json({ message: 'Przepis został dodany pomyślnie', recipe_id: result.insertId });
  });
});

app.listen(8081, ()=> {
    console.log("listening");
})
