'use strict';
module.exports = app => {
  return async (ctx, next) => {
    await ctx.setRoom(ctx.socket.id);
    await next();
  };
};
