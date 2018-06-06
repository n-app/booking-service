const express = require('express');
const routesDebug = require('debug')('app:routes');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  routesDebug(`GET room id: ${id}`);
  res.status(200).json({
    message: `room ${id} fetched`,
  });
});

module.exports = router;
