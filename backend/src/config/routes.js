const express = require('express')
const todo = require('../api/todo/todoService')

module.exports = function (server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}