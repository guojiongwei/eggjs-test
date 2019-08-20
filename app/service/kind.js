'use strict';

const Service = require('egg').Service;

class KindService extends Service {
  async index() {
    return {
      name: '郭炯韦分类页面'
    }
  }
}

module.exports = KindService;
