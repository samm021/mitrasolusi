const router = require('express').Router()
const PenjualanController = require('../controllers/penjualanController')

router.get('/', PenjualanController.viewPenjualan)
router.post('/', PenjualanController.addPenjualan)
router.get('/:id', PenjualanController.viewOnePenjualan)
router.put('/:id', PenjualanController.editPenjualan)
router.delete('/:id', PenjualanController.deletePenjualan)

module.exports = router