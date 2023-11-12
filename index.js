import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const API_URL = "https://api.tvmaze.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "/search/shows?q=girls");
        res.render("index.ejs");
        console.log(response.data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})