const express = require("express");
const app = express();

app.listen(3000, function(req, res) {
    console.log("Server started on port 3000");
})