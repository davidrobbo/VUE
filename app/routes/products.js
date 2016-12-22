const routes = require('express').Router();
var Product = require("../models/Product.js");
var dbConn = require("../../config/db.js");
dbConn.connect();

routes.post("/api/product/create", function(req, res){
    var product = req.body.product;
    dbConn.query("INSERT INTO products VALUES (null, '" + product.name + "', '" + product.desc + "', null, null," + product.price + ")", function(err, result){
        product.id = result.insertId;
    });
    res.json({product: product});
});

routes.get("/api/product", function(req, res){
    var products = [];
    dbConn.query("SELECT * FROM products", function(err, rows, fields){
        var product = new Product(rows);
        products.push(product);
    });
    res.json({product: product});
});

module.exports = routes;