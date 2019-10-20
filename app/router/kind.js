module.exports = app => {
  const { router, controller } = app
  // 分类路由
  router.get('/kind', controller.kind.index)
}