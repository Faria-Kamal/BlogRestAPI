const router = require("express").Router();


const{
    getAllPosts,

} = require('../Controllers/PostsController')

router.get("/all", getAllPosts)

module.exports = router


