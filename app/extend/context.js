module.exports = {
  test() {
    return '我是xtc扩展的方法'
  },
  send (data) {
    console.log(data, '11111')
    this.body = {
      data: data || {},
      code: 0,
      msg: '请求成功'
    }
  }
}