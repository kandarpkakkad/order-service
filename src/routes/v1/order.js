const express = require("express");

const db = require("../../database");

const router = express.Router();

router.get("/user/:user_id", async (req, res, next) => {
    const { user_id } = req.params;
    if (!id) {
        throw new Error("Invalid user id");
    }
    try {
        const result = await db.query(`SELECT * FROM orders where user_id='${user_id}'`);
        const orders = result.rows;
        return res.json(orders);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new Error("Invalid id");
    }
    try {
        const result = await db.query(`SELECT * FROM orders where id='${id}'`);
        const orders = result.rows;
        if (orders.length) {
            return res.json(orders);
        }
        throw new Error(`No order found for id: ${id}`);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});

module.exports = router;