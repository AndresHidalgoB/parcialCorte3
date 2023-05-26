
const express = require('express')
const {saveMessage,getMessages} = require('../controllers/message')


const router = express.Router();

router.post('/save', saveMessage)
router.get('/messages', getMessages)

module.exports = {router}