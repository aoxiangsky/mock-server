const router = require('koa-router')()
const {
    SuccessModel,
    ErrorModel
} = require('../../model/resModel')
router.prefix('/api/test')

const {
    testMockData
} = require('./data/testMock.js')

const testFakerData = require('./data/testFaker')

router.get('/detailmock', async (ctx, next) => {
    ctx.body = new SuccessModel(testMockData)
})
router.get('/detailfaker', async (ctx, next) => {
    ctx.body = new SuccessModel(testFakerData)
})

module.exports = router;