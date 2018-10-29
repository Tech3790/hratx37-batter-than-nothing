const router = require('express').Router();
const knex = require('../db/knex');

router.get('/bases', (req, res) => {

    knex('donut_base')
        .then(bases => {
            res.send(bases);
        })
})

module.exports = router;