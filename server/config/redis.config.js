require('dotenv').config()
module.exports = {
     redisUsername : process.env.REDISUSERNAME || "",
     redisPassword : process.env.REDISPASS || "",
     redisHost : process.env.REDISHOST || "",
     redisPort : process.env.REDISPORT || "",
     redisChannel : process.env.REDISCHANNEL || ""
};
