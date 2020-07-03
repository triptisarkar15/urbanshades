const jwt = require('jsonwebtoken')
const router = require('express').Router()


// import Schema
const User = require('../model/userSchema')
const postSchema = require('../model/postSchema')

router.post('/login', async (req, res) => {
    // check if the user already exists
    const user = await User.findOne({ username: req.body.username, password: req.body.password })
    if (!user) return res.json({ err: 'Email or password is wrong' })

    //Create and assign token
    const token = jwt.sign({ id: user._id }, "35gvw5e4ybv54y4bj5vc64650984590")
    res.json({ token })
})

router.get('/posts', async (req, res) => {
    const posts = await postSchema.find()
    res.send(posts)
})

router.post('/create', async (req, res) => {

    //create post
    const post = new postSchema({
        file_name: req.body.file_name
    })

    try {
        const savedPost = await post.save()
        res.json({ res: "success", id: savedPost._id })
    }
    catch (err) {
        res.json({ error: err })
    }

})

module.exports = router