module.exports = {
  keys: '1111',
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  middleware: [ 'time', 'csrf', 'cors'],
  time: {
    name: '郭炯韦',
    match: '/cart', // 只匹配/cart
    // ignore: '/cart' 只匹配/cart
    enable: false // 关闭中间件
  },
  view: {
    mapping: {
      '.html': 'arttemplate'
    }
  },
  session: {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }
};