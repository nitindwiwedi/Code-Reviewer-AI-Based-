const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", function(req, res){
    res.send("Hello world");
})

app.use("/ai", aiRoutes);

module.exports = app;