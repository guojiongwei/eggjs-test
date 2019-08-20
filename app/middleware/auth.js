module.exports = (option, app) => {
  return async function(ctx, next) {
    // console.log(option, '1111111')
    // console.log('我是路由中间件')
    await next()
  }
}