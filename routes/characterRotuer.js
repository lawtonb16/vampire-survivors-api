const express = require('express');
const characterRouter = express.Router();

characterRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the characters to you');
})
.post((req, res) => {
    res.end(`Will add the character: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /characters');
})
.delete((req, res) => {
    res.end('Deleting all characters');
});

characterRouter.route('/:characterId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the character: ${req.params.characterId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /characters/${req.params.characterId}`);
})
.put((req, res) => {
    res.write(`Updating the character: ${req.params.characterId}\n`);
    res.end(`Will update the character: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting character: ${req.params.characterId}`);
})

module.exports = characterRouter;