const express = require("express");
const orderRoutes = require("./order");

const router = express.Router();

router.use('/order', orderRoutes);

// Always keep this in the end.
// router.use('*', pageNotFoundRoutes);

module.exports = router;
