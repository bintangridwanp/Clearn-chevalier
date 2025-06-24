const express = require('express');
const router = express.Router();
const ctrl = require('../controller/mahasiswa-controller');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);
router.get('/:id', ctrl.getById); // Get mahasiswa by id

module.exports = router;

