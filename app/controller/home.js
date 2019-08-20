'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let data = await this.service.home.index()
    await this.ctx.render('index.html', {
      name: this.ctx.cookies.get('name'),
    })
  }
  async post () {
    // console.log(this.ctx.request.body)
    this.ctx.cookies.set('name', '111111', {
      // renew: true,
      maxAge: 5000
    })
    this.ctx.send({...this.ctx.request.body, test: this.ctx.cookies.get('name')})
  }
}

module.exports = HomeController;
