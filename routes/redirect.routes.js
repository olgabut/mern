const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()


// /api/t/:code
router.get('/:code', async (req, res) => {
    try {
        console.log('code')
        const link = await Link.findOne({code: req.params.code})

        if (!link) {
            return res.status(404).json('Link is not exist')
        }

        link.clicks++
        await link.save()
        return res.redirect(link.from)
    } catch (e) {
        res.status(500).json({ message: 'Server error, try agen'})
    }
})

module.exports = router