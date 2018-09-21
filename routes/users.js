const router = require('koa-router')()

const { 
  getUsersByPage, getUserById, createUser, deleteUserById, searchUsers 
} = require("../service/userService.js")

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post("/test", async function (ctx, next){
  ctx.body = ctx.request.body
})

router.get("/getUsersByPage.json", async (ctx, next) => {
  ctx.body = await getUsersByPage(ctx.request.query)
})

router.get("/getUserById.json", async (ctx, next) => {
  ctx.body = await getUserById(ctx.request.query)
})

router.post("/createUser.json", async (ctx, next) => {
  ctx.body = await createUser(ctx.request.body)
})

router.get("/deleteUserById.json", async (ctx, next) => {
  ctx.body = await deleteUserById(ctx.request.query)
})

router.get("/searchUsers.json", async (ctx, next) => {
  ctx.body = await searchUsers(ctx.request.query)
})

module.exports = router
