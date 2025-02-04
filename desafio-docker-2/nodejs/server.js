const express = require('express');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'sql_db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('Conectado ao MySQL!');
});

db.query(
  `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`,
  (err) => {
    if (err) throw err;
  }
);

app.get('/', (req, res) => {
  const fakeNames = [
    faker.person.firstName(),
    faker.person.firstName(),
    faker.person.firstName(),
  ];

  db.query(
    `INSERT INTO people (name) VALUES (?), (?), (?)`,
    fakeNames,
    (error) => {
      if (error) {
        res.status(500).send('Error insert in database');
        return;
      }

      db.query('SELECT * FROM people', (err, results) => {
        if (err) {
          res.status(500).send('Error getting data from database');
          return;
        }

        let namesList = results.map((row) => `<li>${row.name}</li>`).join('');
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
