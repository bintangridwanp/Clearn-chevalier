const express = require('express');
const router = express.Router();
const controller = require('../controllers/mahasiswaControllers');

router.get('/', controller.getAll);
router.get('/:id', controller.getById); // use camelCase
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;