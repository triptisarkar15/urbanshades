const jwt = require('jsonwebtoken')
const router = require('express').Router()


// import Schema
const User = require('../model/userSchema')

router.post('/register', async (req, res) => {
    // check if the user already exists
    const user = await User.findOne({ username: req.body.username })
    if (user) return res.json({ err: 'username already exist' })

    const createUser = new User({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const savedUser = await createUser.save()
        res.json({ res: "success" })
    }
    catch (err) {
        console.log("ERROR: ", err)
    }


})
router.post('/login', async (req, res) => {
    // check if the user already exists
    const user = await User.findOne({ username: req.body.username, password: req.body.password })
    if (!user) return res.json({ err: 'Email or password is wrong' })

    //Create and assign token
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
    res.json({ token })
})



module.exports = router