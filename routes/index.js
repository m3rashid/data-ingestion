const express = require("express");
const { parseData } = require("../services/parseData");
const { upload } = require("../utils/multer")

const router = express.Router();

router.post('/initial', parseData)

module.exports = router
