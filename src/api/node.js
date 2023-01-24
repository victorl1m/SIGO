const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());

app.get("/getCustomers", (req, res) => {
    return res.json({ message: "hello world" });
});

app.listen(PORT, () => console.log("running..."));