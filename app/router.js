module.exports = app => {
  const { router, controller } = app
  let auth = app.middleware.auth({name: '我是路由中间价参数'})
  // 首页路由
  router.get('/', auth, controller.home.index)
  router.post('/post', controller.home.post)
  // 分类路由
  router.get('/cart', controller.cart.index)
  // 购物车路由
  router.get('/kind', controller.kind.index)
  // 个人中心路由
  router.get('/user', controller.user.index)
}