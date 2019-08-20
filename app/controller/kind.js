'use strict';

const Controller = require('egg').Controller;

class KindController extends Controller {
  async index() {
    this.ctx.session.name = '天下无敌'
    let data = await this.service.kind.index()
    await this.ctx.render('kind.html', {
      name: this.ctx.cookies.get('name'),
    })
  }
  async article () {

  }
}

module.exports = KindController;
