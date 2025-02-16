const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFilePath = path.join(__dirname, '../data.json');

// GET endpoint to fetch sustainability actions
router.get('/', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data file' });
        }
        res.json(JSON.parse(data));
    });
});

// POST endpoint to add a new sustainability action
router.post('/', (req, res) => {
    const newAction = req.body;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data file' });
        }

        const actions = JSON.parse(data);
        actions.push(newAction);

        fs.writeFile(dataFilePath, JSON.stringify(actions, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error writing to data file' });
            }
            res.status(201).json(newAction);
        });
    });
});

module.exports = router;