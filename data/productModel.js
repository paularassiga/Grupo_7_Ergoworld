const fs = require("fs");
const path = require("path");

const getAll = () => JSON.parse(fs.readFileSync(path.join(__dirname, './products.json'),{encoding:"utf-8"}));

module.exports = {getAll}