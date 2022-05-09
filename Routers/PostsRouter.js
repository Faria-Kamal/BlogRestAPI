const router = require("express").Router();


const{
    getAllPosts,
    createPosts,
    updatePosts,
    getPostsById,
    removePost,


} = require('../Controllers/PostsController')

router.get("/all", getAllPosts)
router.get("/:id", getPostsById)
router.post("/create", createPosts)
router.put("/update", updatePosts)
router.delete("/delete", removePost)

module.exports = router


