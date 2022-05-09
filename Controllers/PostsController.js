const req = require("express/lib/request")
const mysql = require("mysql")



function getAllPosts(req, res){
    const query = 'SELECT * FROM posts'
    getConnection().query("SELECT * FROM posts", (err, row, fields) => {
        res.json(row)
    })
}

// function getPostsByID(req, res){
//     const id = req.params
//     getConnection().query(`SELECT * FROM posts WHERE id=${id}`, (err, row, fields) => {
//         res.json(row)
//     })
// }

 function createPosts(req, res){
    const {category, title, content} =req.body
    const queryStrings= "INSERT INTO posts (title, category, content) VALUES (?, ?, ?)"
    getConnection().query(queryStrings, [title, category, content], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "post created"
              });
            }
            
            res.end()
        })
};

function updatePosts(req, res){
    const {category, title, content, id} =req.body
    const queryStrings= "UPDATE posts SET category = ?, title = ?, content = ? WHERE id = 6"
    getConnection().query(queryStrings, [title, category, content, id], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "post updted"
              });
            }
            
            res.end()
        })

}



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blog'
    
})

function getConnection() {
    return pool
}


module.exports = {
    getAllPosts,
    // getPostsByID,
    createPosts,
    updatePosts

    
}