const router = require('express').Router()
const adminRouter = require('./adminRouter')
const penjualanRouter = require('./penjualanRouter')
const pelangganRouter = require('./pelangganRouter')
const barangRouter = require('./barangRouter')

router.use('/', adminRouter)
router.use('/penjualan', penjualanRouter)
router.use('/pelanggan', pelangganRouter)
router.use('/barang', barangRouter)

module.exports = router