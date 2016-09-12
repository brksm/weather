const serve = require('koa-static');
const send = require('koa-send');
const koa = require('koa');
const app = koa();

const dir = __dirname + '/public';
console.log(`Serving ${dir}.`);

app.use(serve(dir));

app.use(function* index() {
  yield send(this, './public/index.html');
});

const port = process.env.PORT || 8000;

app.listen(port);

console.log(`Listening on port ${port}.`);
