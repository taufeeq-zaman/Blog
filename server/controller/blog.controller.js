const db = require("../models");
const redis = require("redis");
const redisConfig = require("../config/redis.config.js");
const Blog = db.Blog;
const Op = db.Sequelize.Op;



const redisClient = redis.createClient();

//set blog to redis
const setRedisCache = async (jsonData) => {

};

//set blog from redis
const getRedisCache = async () => {

};

//delete blog from redis
const deleteRedisCache = async () => {

};

//publish blog to redis
// const publishToRedis = async (data) => {
//     await redisClient.connect();
//     const subscriberCount = await redisClient.publish(data);
//     await redisClient.disconnect();
//     return subscriberCount;
// };

// Create and Save a new BLog
exports.create = async (req, res) => {

    console.log(req.body)
    const blog= {
        title: req.body.title,
        description: req.body.description,
        image:req.body.image,
        body: req.body.body
    }
    // const subscriberCount = await publishToRedis(blog);
    // console.log({ subscriberCount });
    //const test = await deleteRedisCache();

    Blog.create(blog)
        .then(data => {
            res.send(data);
        })
        .catch( err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the blog"
            })
        })
};

// Retrieve all Blog from the database.
exports.findAll = async (req, res) => {

    Blog.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving blogs."
            });
        });
};

// Find a single Blog with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Blog.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find blog with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving blog with id=" + id
            });
        });
};

// Update a Blog by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Blog.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Blog was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update blog with id=${id}. Maybe blog was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating blog with id=" + id
            });
        });
};

// Delete a Blog with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Blog.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "BLog was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete blog with id=${id}. Maybe blog was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete blog with id=" + id
            });
        });
};

