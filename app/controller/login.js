'use strict';

const Controller = require('egg').Controller;

class Login extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      message: '登陆成功',
    }
  }
}

module.exports = Login;
