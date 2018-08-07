const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('Started on port 3001');
})

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(
        (doc) => {
            res.send(doc);
        },
        (e) => {
            res.status(400).send(e);
        }
    )
})
