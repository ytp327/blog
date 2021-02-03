const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')

const Blog = require('../models/Blog')

// @desc Show add page
// @route GET /blogs/add
router.get('/add', ensureAuth, (req, res) =>{
    res.render('blogs/add')
})

// @desc Process add form
// @route POST /blogs
router.post('/', ensureAuth, async (req, res) =>{
    try{
        req.body.user = req.user.id
        await Blog.create(req.body)
        res.redirect('/dashboard')
    } catch(err) {
        console.error(err)
        res.render('error/500')
    }
})


module.exports = router