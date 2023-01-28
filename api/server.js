const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Appoint = require('../db/mongoose');
const { response, json } = require('express');
mongoose.set('strictQuery', false);

app.use(bodyParser.json());

//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


mongoose.connect('mongodb://localhost:27017/Appointments', function() {
    if(mongoose){
        console.log('Database connected successfully!!');
    } else {
        console.log('Failed to connect to the database');
    }
});

app.get('/appointments', (req, res) => {
    Appoint.find({}).then((appointments) => {
        res.send(appointments);
    });
})

app.post('/appointments', function(req, res) {
    let appName = req.body.appName;
    let appDate = req.body.appDate;
    let appTime1 = req.body.appTime1;
    let appTime2 = req.body.appTime2;

    let newAppoint = new Appoint({
        appName, appDate, appTime1, appTime2
    });

    if(req.body.appName == null || req.body.appName == ''){
        res.json({success: false, message: 'Please enter your Appointment'});
    } else if( req.body.appDate == null || req.body.appDate == ''){
        res.json({success: false, message: 'Please enter your Appointment Date'});
    } else {
        newAppoint.save().then((listDoc) => {
            res.send(listDoc);
        })
    }
});

app.patch('/appointments/:id', function(req, res){
    Appoint.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
})

app.delete('/appointments/:id', function(req, res){
    Appoint.findOneAndRemove({ 
        _id: req.params.id 
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    });
})



app.listen(port, function() {
    console.log('Connected to port ' + port);
});
