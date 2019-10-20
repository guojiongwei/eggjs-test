module.exports = app => {
  const { router, controller } = app
  // 个人中心路由
  router.get('/user', controller.user.index)
}