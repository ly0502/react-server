/*
 * @Author: luyin nwwb-luyin@nuanwa.net
 * @Date: 2024-02-27 20:01:06
 * @LastEditors: luyin nwwb-luyin@nuanwa.net
 * @LastEditTime: 2024-06-13 18:44:12
 * @FilePath: /egg-example/app/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, io, middleware } = app;
  router.get("/api/home", controller.home.index);
  router.get("/api/GetCss", controller.home.ReturnCss);
  router.post("/api/bossList", controller.home.bossList);
  router.post("/api/bossStart", controller.home.bossStart);
  // 登录
  router.post("/api/login", controller.user.login);
  // 注册
  router.post("/api/register", controller.user.register);
  // 用户信息
  router.get("/api/userInfo", middleware.auth(app), controller.user.userInfo);
  // 上传
  router.post("/api/upload", controller.upload.index);
  // 消息推送
  router.post("/api/io/send", io.controller.socket.send);
  // 创建 /socket 命名空间
  io.of("/socket").route("msg", io.controller.socket.index);
};
