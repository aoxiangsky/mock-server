const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors')
const compress = require('koa-compress')

const test = require('./routes/test')
const student = require('./routes/student')

onerror(app)

app.use(compress({
    threshold: 2048
}))

app.use(cors({
    credentials: true,
}))

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())

app.use(test.routes(), test.allowedMethods())
app.use(student.routes(), student.allowedMethods())

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app