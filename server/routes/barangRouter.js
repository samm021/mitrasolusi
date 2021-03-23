const router = require('express').Router()
const BarangController = require('../controllers/barangController')

router.get('/', BarangController.viewBarang)

module.exports = router