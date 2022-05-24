/*
 * @Author: wb_luyin wb_luyin@zhongan.com
 * @Date: 2022-05-24 16:33:00
 * @LastEditors: wb_luyin wb_luyin@zhongan.com
 * @LastEditTime: 2022-05-24 17:17:31
 * @FilePath: /demo-react-server/app/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 获取csrf令牌
  router.get('/api/getCsrf',controller.csrf.index)
  // 登陆
  router.post('/api/login', controller.login.index);
};
