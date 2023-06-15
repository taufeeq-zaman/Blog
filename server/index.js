const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./routes/blog.routes")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Blog." });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

