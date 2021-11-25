//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Comments = require('./models/Comments.js')

//app config
const app = express();

const port =  process.env.PORT || 9000;


//DB Config
const connection_url  = 'mongodb+srv://shamik:aerEQ77MRdUeccr7@cluster0.qhxac.mongodb.net/commentdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open',() => {
    console.log('Connection With Database Established');
})


//middleware

app.use(morgan('dev'));
app.use(express.json());


//api routes
app.get('/',(req,res) => res.status(200).send("Hello world"))
app.post('/newcomment',(req,res) => {

    let comments = new Comments({

        name: 'Shamik Bera',
        comment: req.body.comment

    })

    comments.save()
        .then(comment => {
            res.json({
                message: 'Comment Added sucessfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'Error Occured, Could not save the comment'
            })
        })





})

app.get('/allcomments',(req,res) => {

    Comments.find()
        .then(comment => {
            res.status(200).json(
                [comment]
            )
        })
        .catch(error => {
            res.json({message: 'Error Occured'})
        })




})

//listen
app.listen(port,() => console.log(`Listening on localhost: ${port}`));
