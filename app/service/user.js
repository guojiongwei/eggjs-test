'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    return {
      name: '郭炯韦个人中心'
    }
  }
}

module.exports = UserService;
