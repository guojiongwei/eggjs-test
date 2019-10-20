module.exports = app => {
  const { router, controller } = app
  let auth = app.middleware.auth({name: '我是路由中间价参数'})
  // 首页路由
  router.get('/', auth, controller.home.index)
  router.post('/post', controller.home.post)
  router.get('/test', controller.home.test)
}