const router = require("express").Router();


const{
    getAllPosts,
    getPostsByID,
    createPosts,
    updatePosts,
    getPostsById,


} = require('../Controllers/PostsController')

router.get("/all", getAllPosts)
router.get("/:id", getPostsById)
router.post("/create", createPosts)
router.put("/update", updatePosts)

module.exports = router


