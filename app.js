const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const userRoute = require("./routes/api/v1/userRoute");
app.use("/api/v1", userRoute);

const accountRoute = require("./routes/api/v1/accountRoute");
app.use("/api/v1", accountRoute);

const transactionRoute = require("./routes/api/v1/transactionRoute");
app.use("/api/v1", transactionRoute);

// 500 handler
// 404 handler

app.listen(port, () => console.info(`app listening on port ${port}!`));
