'use strict';

const Service = require('egg').Service;

class CartService extends Service {
  async index() {
    return {
      name: '郭炯韦购物车页面'
    }
  }
}

module.exports = CartService;
