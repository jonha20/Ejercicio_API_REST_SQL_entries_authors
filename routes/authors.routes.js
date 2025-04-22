const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAllAuthors);
router.get('/:email?', authorsController.getEmail);
router.delete('/', authorsController.deleteAuthor);
router.put('/', authorsController.updateAuthor);
router.post('/', authorsController.insertAuthor);

module.exports = router;