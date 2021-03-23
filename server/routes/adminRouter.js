const router = require('express').Router()
const AdminController = require('../controllers/adminController')

router.post('/login', AdminController.login)

module.exports = router