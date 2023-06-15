
module.exports = app => {
    const blog = require("../controller/blog.controller");
    const {Router} = require("express");

    let router = require("express").Router();

// Create a new BLOG
    router.post("/create", blog.create);

// Retrieve all BLOGs
    router.get("/all", blog.findAll);

// Retrieve a single BLOG with id
    router.get("/:id", blog.findOne);

// Update a BLOG with id
    router.put("/:id", blog.update);

// Delete a BLOG with id
    router.delete("/:id", blog.delete);


    app.use('/api/blogs', router);
};