const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const timeController = require('../controllers/timeController');

router.get('/', timeController.timesList);
router.get('/:id', timeController.timesRead);
router.post('/', verify, timeController.timesCreate);
router.put('/:id', verify, timeController.timesUpdate);
router.delete('/:id', verify, timeController.timesDelete);

module.exports = router;
