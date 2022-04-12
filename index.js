const fs = require('fs');
const PORT = 5678;
var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
});
let p_JPJ = require('./p_json/JPJ.json'); //display to console -> console.log(p_JPJ);
const p_JPJ_Str = JSON.stringify(p_JPJ) //display to console -> console.log(p_JPJ_Str);
const p_JPJ_Data = JSON.parse(p_JPJ_Str); //display to console JPJ Nama -> console.log(p_JPJ_Data["Results"][0]["Nama"]);
const nama = p_JPJ_Data["Results"][0]["Nama"]
app.get("/jpj", (req, res, next) => {
    res.json(nama);
    console.log("Nama "+nama+" telah displayed")
});