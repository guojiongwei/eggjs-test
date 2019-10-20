module.exports = app => {
  require('./router/index')(app)
  require('./router/kind')(app)
  require('./router/cart')(app)
  require('./router/user')(app)
}