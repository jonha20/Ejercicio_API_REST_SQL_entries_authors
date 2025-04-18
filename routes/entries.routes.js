const express = require('express');
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getAllEntriesSinId);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);


module.exports = router;

