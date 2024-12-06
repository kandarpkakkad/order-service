const express = require("express");
const cors = require("cors");
const { routeV1 } = require("./routes")

const { PORT, BASE_V1_PATH } = require("./config");

const app = express();

app.use(cors());

app.use(`${BASE_V1_PATH}`, routeV1);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Successfully started order service on port: ${PORT}`);
    }
})