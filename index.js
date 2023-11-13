// import relevant packages
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// initial constants
const app = express();
const port = 3001;
const API_URL = "https://api.tvmaze.com";

// initialize middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//root route
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

//submit route
app.post("/submit", async (req, res) => {
    const searchQuery = req.body["searchQuery"];

    try {
        const response = await axios.get(API_URL + "/search/shows?q=" + searchQuery);
        const data = response.data;
        res.render("index.ejs", { data });
    } catch (error) {
        res.status(404).send(error.message);
    }
})

//listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})