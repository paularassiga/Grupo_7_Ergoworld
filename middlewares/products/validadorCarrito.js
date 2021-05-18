const path = require("path");
const { body } = require("express-validator");
const bycript = require("bcryptjs");


module.exports = {
  addCart: [
    body("cantidad")
      .custom((value) => value > 0)
      .withMessage("Debe agregar almenos un producto a su carrito"),
  ],
};
