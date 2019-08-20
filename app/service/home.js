'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    return {
      name: '郭炯韦首页'
    }
  }
}

module.exports = HomeService;
