const express = require('express');
const router = express.Router();
const {Products} = require('../models');

router.get('/', async(req,res) => {
    const product = await Products.findAll();
    res.json(product);
});

router.post('/', async(req,res) => {
    const product = req.body;
    await Products.create(product);
    res.json("ok");
});

router.delete('/delByID/:id', async (req,res) => {
    const id = req.params.id;
    await Products.destroy({
        where : {
            id : id
        }
    });
    res.json('deleted');
})

module.exports = router;