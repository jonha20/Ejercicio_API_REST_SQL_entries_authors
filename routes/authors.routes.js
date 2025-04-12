const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAllAuthors);
router.get('/', authorsController.getAlejandru);
router.get('/', authorsController.deleteEntry);
router.get('/', authorsController.updateEntry);
router.get('/', authorsController.insertEntry);

module.exports = router;