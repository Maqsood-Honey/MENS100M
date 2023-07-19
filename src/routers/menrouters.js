const express = require('express');
const MensRanking = require('../models/mens');
const router = new express.Router();
// 1: Get all Records
router.get('/mens', async (req, res) => {
    try {
        const gettMens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(gettMens);
    }
    catch (e) { res.status(400).send(e) }
})
// 2: Get one record
router.get('/mens/:id', async (req, res) => {
    try {
        const gettMen = await MensRanking.findById({ _id: req.params.id });
        res.send(gettMen);
    }
    catch (e) { res.status(400).send(e) }
})
// 3: Update one Record
router.patch('/mens/:id', async (req, res) => {
    try {
        const updateMen = await MensRanking.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.send(updateMen);
    }
    catch (e) { res.status(500).send(e) }
})
// 4: Delete one Record
router.delete('/mens/:id', async (req, res) => {
    try {
        const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(updateMen);
    }
    catch (e) { res.status(500).send(e) }
})
// 5: Insert Record in database
router.post('/mens', async (req, res) => {
    try {
        const addMensRecord = new MensRanking(req.body);
        console.log(addMensRecord);
        const insertMens = await addMensRecord.save();
        res.send(insertMens);
    }
    catch (e) { res.status(400).send(e) }
})

module.exports = router;