/*
 * @Author: 马妍
 * @Date: 2024-01-23 22:17:30
 * @LastEditors: 马妍
 * @LastEditTime: 2024-01-23 23:54:11
 * @Description:
 */
module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.logger.error(new Error(err));
      ctx.body = {
        statu: 500,
        message: '服务异常',
      };
    }
  };
};
