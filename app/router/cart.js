module.exports = app => {
  const { router, controller } = app
  // 购物车路由
  router.get('/cart', controller.cart.index)
}