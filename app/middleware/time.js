module.exports = (option, app) => {
  // console.log(app.config.keys)
  return async (ctx, next) => {
    let a = await ctx.service.home.index()
    // console.log(a)
    // console.log(ctx.send())
    // console.log(ctx.app.test())
    // console.log(ctx.request.test())
    // console.log(ctx.response.test())
    // console.log(ctx.helper.test('222'))
    console.log('我是中间件')
    await next()
  }
}