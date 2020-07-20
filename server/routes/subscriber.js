const nodemailer = require('nodemailer');
const router = require('express').Router()


const subscribeSchema = require('../model/subscribeSchema')


router.get('/subs', async (req, res) => {
    const subs = await subscribeSchema.find()
    res.json({ res: subs })
})

router.post('/create', async (req, res) => {

     // check if the subscriber already exists
     const isSubscriber = await subscribeSchema.findOne({ username: req.body.username })
     if (isSubscriber) return res.json({ res: 'subscriber already exist' })

    //create subs
    const subs = new subscribeSchema({
        email: req.body.email
    })

    try {
        const savedSubs = await subs.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'urbanshadesbpl@gmail.com',
                pass: 'onlyme2705'
            }
        });

        var mailOptions = {
            from: 'urbanshadesbpl@gmail.com',
            to: 'rishabh25126@gmail.com',
            subject: 'Subscribing to urbanshades',
            text: 'Thankyou to subscribe to urbanshades',
            html: `<h1>ThankYou for subscribing</h1>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                res.json({ res: "success", id: savedSubs._id, info })
            }
        });

    }
    catch (err) {
        res.json({ error: err })
    }

})

router.post('/postalert', async (req, res) => {

     // check if the subscriber already exists
     const Subscribers = await subscribeSchema.find()
     let subsEmail = []
     for(let i = 0; i<Subscribers.length; i++){
         subsEmail.push(Subscribers[i].email)
     }
     console.log("Email: ", subsEmail.toString())

    try {
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'urbanshadesbpl@gmail.com',
                pass: 'onlyme2705'
            }
        });

        var mailOptions = {
            from: 'urbanshadesbpl@gmail.com',
            to: subsEmail.toString(),
            subject: 'New Post in Urbanshades',
            html: `<h1>New Post is arrived check it out-> <a href=${req.body.postUrl}>Click Here</a></h1>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                res.json({ res: "success", info })
            }
        });

    }
    catch (err) {
        res.json({ error: err })
    }

})



module.exports = router