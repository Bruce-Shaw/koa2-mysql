const router = require('koa-router')()

const { getUsersByPage } = require("../service/userService.js")

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post("/test", async function (ctx, next){
  ctx.body = ctx.request.body
})

router.get("/getUsersByPage", async (ctx, next) => {
  ctx.body = await getUsersByPage(ctx.request.query)
})

module.exports = router
