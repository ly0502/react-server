/*
 * @Author: wb_luyin wb_luyin@zhongan.com
 * @Date: 2022-05-24 17:15:23
 * @LastEditors: wb_luyin wb_luyin@zhongan.com
 * @LastEditTime: 2022-05-24 17:16:40
 * @FilePath: /demo-react-server/app/controller/csrf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const Controller = require('egg').Controller;

class Csrf extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = {
            csrf: ctx.csrf
        }
    }
}

module.exports = Csrf;
