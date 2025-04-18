const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAllAuthors);
router.get('/', authorsController.getAlejandru);
router.delete('/', authorsController.deleteEntry);
router.put('/', authorsController.updateEntry);
router.post('/', authorsController.insertEntry);

module.exports = router;