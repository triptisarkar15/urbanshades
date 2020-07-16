const router = require('express').Router()


const subscribeSchema = require('../model/subscribeSchema')


router.get('/subs', async (req, res) => {
    const subs = await subscribeSchema.find()
    res.json({res: subs})
})

router.post('/create', async (req, res) => {

    //create subs
    const subs = new subscribeSchema({
        email: req.body.email
    })

    try {
        const savedSubs = await subs.save()
        res.json({ res: "success", id: savedSubs._id })
    }
    catch (err) {
        res.json({ error: err })
    }

})

module.exports = router