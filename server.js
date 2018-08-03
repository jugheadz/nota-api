const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const notes = require('./controllers/notes');
const newnote = require('./controllers/newnote');
const updatenote = require('./controllers/updatenote');
const deletenote = require('./controllers/deletenote');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'jugheadz',
    password : '',
    database : 'nota'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.post('/notes', notes.handleNotes(db))
app.post('/newnote', newnote.handleNewNotes(db))
app.put('/updatenote', updatenote.handleUpdateNote(db))
app.post('/deletenote', deletenote.handleDeleteNote(db))

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
//post /notes