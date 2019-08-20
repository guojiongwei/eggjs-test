'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    let data = await this.service.user.index()
    await this.ctx.render('user.html', {
      name: data.name,
      test: this.ctx.session.name
    })
  }
  async article () {

  }
}

module.exports = UserController;
