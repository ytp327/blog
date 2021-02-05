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

// @desc Show all blogs
// @route GET /blogs
router.get('/', ensureAuth, async (req, res) =>{
    try{
        const blogs = await Blog.find({status: 'public'})
            .populate('user').sort({createdAt: 'desc'}).lean()
        res.render('blogs/index', {
            blogs
        })
    } catch(err){
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router