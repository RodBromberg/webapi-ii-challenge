const express = require('express')

const server = express();

const postRouter = require('./posts/posts-router')

server.use(express.json());
server.use('/api/posts', postRouter)

server.get('/', (req, res) => {
    res.send(`<div>webapi-II</div>`)
})


module.exports = server;