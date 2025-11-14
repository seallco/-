
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'db/questions.db'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  db.all('SELECT * FROM questions ORDER BY RANDOM() LIMIT 5', (err, rows) => {
    if (err) throw err;
    rows.forEach(q => {
      q.options = shuffle([q.optionA, q.optionB, q.optionC, q.optionD]);
    });
    res.render('quiz', { questions: rows });
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { question, optionA, optionB, optionC, optionD, answer, explanation } = req.body;
  db.run('INSERT INTO questions (question, optionA, optionB, optionC, optionD, answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [question, optionA, optionB, optionC, optionD, answer, explanation],
    err => {
      if (err) throw err;
      res.redirect('/');
    });
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
