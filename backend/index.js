import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dayjs from 'dayjs';
import shortId from 'shortid';
import db from './lib/db';

const app = express();

app.use(cors());
app.use(bodyParser());

app.get('/', (req, res) => {
  const { day } = req.query;
  res.send(
    db
      .get('todos')
      .filter({ date: day })
      .value()
  );
});

app.post('/add', (req, res) => {
  const { todo } = req.body;
  const newTodo = {
    ...todo,
    id: shortId.generate(),
    date: dayjs().format('DD.MM.YYYY'),
    done: false,
  };
  db.get('todos')
    .push({ ...newTodo })
    .write();
  res.send({ ...newTodo });
});

app.post('/done', (req, res) => {
  const { id } = req.body;
  // Get current value from DB
  const { done } = db
    .get('todos')
    .find({ id })
    .value();
  // Set value
  db.get('todos')
    .find({ id })
    .assign({ done: !done })
    .write();
});

app.listen(3000, () => console.log('Server listening on Port 3000'));
