const mysql = require("mysql")



function getAllPosts(req, res){
    const query = 'SELECT * FROM posts'
    getConnection().query("SELECT * FROM posts", (err, row, fields) => {
        res.json(row)
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
    
}