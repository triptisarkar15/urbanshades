const router = require('express').Router()


const postSchema = require('../model/postSchema')


router.get('/posts', async (req, res) => {
    const posts = await postSchema.find()
    res.json({res: posts})
})

router.post('/create', async (req, res) => {

    //create post
    const post = new postSchema({
        filename: req.body.filename,
        description: req.body.description
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