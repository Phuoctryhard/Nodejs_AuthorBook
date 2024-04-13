const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const dotenv = require("dotenv");
dotenv.config();
//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL1, () => {
  console.log("Connected to MongoDB");
});


app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000, () => {
  console.log("Server is running... 8000");
});
