module.exports = app => {
  return async (ctx, next) => {
    try {
      // 验证是否存在token 是否失效
      ctx.service.token.veriftyToken(ctx.cookies.get('token'), 'MY');
      // 继续执行
      await next();
    } catch (err) {
      // await app.redis.del(ctx.cookies.get('token'));
      ctx.cookies.set('token', null);
      // 返回错误信息
      ctx.body = {
        code: 401,
        message: 'token过期,登录失效',
        err,
      };
    }
  };
};
