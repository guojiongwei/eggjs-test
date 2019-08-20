'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
  async index() {
    let data = await this.service.cart.index()
    await this.ctx.render('cart.html', {
      name: data.name
    })
  }
}

module.exports = CartController;
