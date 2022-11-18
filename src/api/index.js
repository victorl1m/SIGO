const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const db = require("./db/pool");
require("./db/connect");

/* ==================== GET ROUTES ==================== */

app.get("/getUserCustomers", (req, res) => {
    try {
        db.query("SELECT * FROM tb_client", (err, data) => {
            if (err) throw new Error(err);

            res.json(data.rows);
        })

    } catch (error) {
        res.json({"error": error});
    }

})

/* ==================== POST ROUTES ==================== */

app.post("/createNewCustomer", (req, res) => {
    const architect_id = req.body.uid;
    const client_name = req.body.clientName;
    try {
        db.query("INSERT INTO tb_client (architect_id, client_name) VALUES ($1, $2)", [architect_id, client_name], (err, data) => {
            if (err) throw new Error(err);

            res.json(data);
        })

    } catch (error) {
        res.json({"error": error});
    }
})

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));