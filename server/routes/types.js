const router = require('express').Router();
const knex = require('../db/knex');

router.get('/types', (req, res) => {

    knex('donut_type')
    .then( types => {
        res.send(types);
    })
})

module.exports = router;