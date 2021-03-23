const router = require('express').Router()
const PelangganController = require('../controllers/pelangganController')

router.get('/', PelangganController.viewPelanggan)

module.exports = router