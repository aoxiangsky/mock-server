const router = require('koa-router')()
const {
    SuccessModel,
    ErrorModel
} = require('../../model/resModel')
const courseData = require("./data/courseData")
const homeData = require("./data/homeData")
const courseDetailData = require("./data/courseDetailData")
router.prefix('/api/student')

router.get('/homepage/task/list', async (ctx, next) => {
    ctx.body = new SuccessModel(homeData)
})
router.get('/course/list', async (ctx, next) => {
    ctx.body = new SuccessModel(courseData)
})
router.get('/course/detail', async (ctx, next) => {
    ctx.body = new SuccessModel(courseDetailData)
})

module.exports = router;
