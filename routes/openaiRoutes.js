const express = require('express');
const { generateImage }= require ('../contorllers/openaiController');
const router = express.Router();

router.post('/generateimage',generateImage);
module.exports =router;