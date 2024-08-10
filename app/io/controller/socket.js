"use strict";

const Controller = require("egg").Controller;
class SocketController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 获取命名空间为 '/socket' 的 Socket.IO 对象
    const nsp = app.io.of("/socket");
    const message = ctx.args[0] || {};
    const room = await ctx.getRoom();
    // 消息分发
    ctx.logger.info(room, ctx.socket.id);
    room
      .filter((v) => v !== ctx.socket.id)
      .forEach((v) => nsp.emit(v, message));
  }
  async send() {
    const { ctx, app } = this;
    const nsp = app.io.of("/socket");
    const content = JSON.stringify({
      name: "System",
      message: ctx.request.body.message,
      socketId: "System",
    });
    const sta = nsp.emit("message", content);
    ctx.logger.info(sta);
    ctx.body = {
      status: 200,
      data: "success",
      message: ctx.request.body,
    };
  }
}

module.exports = SocketController;
