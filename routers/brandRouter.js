var express = require('express')
const { getListBrand,addBrand, editBrand, deleteBrand } = require('../controllers').brandController
var router = express.Router()



router.get('/getlistbrand',getListBrand )

router.post('/addbrand', addBrand)

router.put('/editbrand/:id',editBrand )

router.delete('/deletebrand/:id',deleteBrand )

module.exports = router;