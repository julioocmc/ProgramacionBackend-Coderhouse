const { Router } = require("express");
const router = Router();

const productsRouter = require('./productsRouter.js')
const chatRouter = require('./chatRouter.js') //lo manejo desde app.js porque me da error
const fakerRouter = require('./fakerRouter.js')
const sessionRouter = require('./sessionRouter.js')

router.use('/productos', productsRouter)
router.use('/chat', chatRouter)
router.use('/', fakerRouter)
router.use('/', sessionRouter)

module.exports = router;