const express = require('express');
const path = require('path');

var App = require('./model');
var myapp = new App();

var app = express.Router();



const servername = "localhost";
const port = 8080;

module.exports = app
    .post('/login', (req, res) => {
        try {
            console.log(req.body);
            console.log(req.body.Name);
            myapp.addUser(req.body.Name);
            res.send( { success: true } );
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    })

    .get('/map/state', (req, res) => res.send(myapp.getUserMapState(req.query.Name)))
    .get('/todo/state', (req, res) => res.send(myapp.getUserTodoState(req.query.Name)))
    .post('/map/add', (req, res) => res.send(myapp.addUserMapMarker(req.body.Name)))
    .post('/todo/add', (req, res) => res.send(myapp.addUserTodoElement(req.body.Name)))
    .post('/map/del', (req, res) => res.send(myapp.delUserMapMarker(req.body.Name)))
    .post('/todo/del', (req, res) => res.send(myapp.delUserTodoElement(req.body.Name)));
