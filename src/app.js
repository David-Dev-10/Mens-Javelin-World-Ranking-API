const express = require("express");
require("./db/conn");
const Menjavelin = require("./models/javelin");
const router = require("./routers/record");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}😅`);
});