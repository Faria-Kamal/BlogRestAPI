const router = require("express").Router();


const{
    getAllPosts,
    // getPostsByID,
    createPosts,


} = require('../Controllers/PostsController')

router.get("/all", getAllPosts)
// router.get("/id", getPostsByID)
router.post("/create", createPosts)

module.exports = router


