const router = require('koa-router')()
const {
    SuccessModel,
    ErrorModel
} = require('../../model/resModel')
const courseData = require("./data/courseData")
const homeData = require("./data/homeData")
router.prefix('/api/student')

router.get('/homepage/task/list', async (ctx, next) => {
    ctx.body = new SuccessModel(homeData)
})
router.get('/course/list', async (ctx, next) => {
    ctx.body = new SuccessModel(courseData)
})

module.exports = router;