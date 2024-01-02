const express = require('express')
const router = express.Router()
const data = require('../controller/controller')
const { model } = require('mongoose')

router.post('/', data.postData)
router.get('/get', data.getData)
router.get('/getById/:id', data.getbyid)
router.patch('/update/:id', data.update)
router.delete('/delete/:id', data.deletes)

module.exports = router