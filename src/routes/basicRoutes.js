const router = require('express').Router()
const basicController = require('../controllers/basiccontroller')
const searchcontroller = require('../controllers/searchcontroller')

router.get('/products', basicController.findProducts)
router.get('/products/:slug', basicController.findProductWithSlug)
router.get('/topproduct', basicController.topProduct)

router.get('/vendors', basicController.findVendors)
router.get('/vendors/:slug', basicController.findVendorWithSlug)
router.get('/topvendors', basicController.findTopVendors)

router.get('/video', basicController.findVideo)

router.get('/search', searchcontroller.search)



router.post('/call/:slug', basicController.upCallLead)
router.post('/message/:slug', basicController.upMessageLead)


module.exports = router