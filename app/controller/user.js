const { Controller } = require("egg");
const dayjs = require("dayjs");
class UserController extends Controller {
  // 登录
  async login() {
    const { ctx, app } = this;
    // 获取用户名，密码
    const { username, password } = ctx.request.body;
    // 查找用户是否存在
    // const data = await app.mysql.get("user", { username });
    // // 不存在返回不存在
    if (username !== "admin") {
      ctx.body = {
        code: 500,
        message: "用户不存在",
      };
      return;
    }
    // 判断密码是否正确
    if (password !== "123456") {
      ctx.body = {
        code: 500,
        message: "密码错误",
      };
      return;
    }
    // 生成token
    const token = ctx.service.token.createToken({ username, password }, "24h");
    // 将用户信息存到redis
    // await app.redis.set(token, JSON.stringify(data));
    // 设置cookies
    ctx.cookies.set("token", token);
    // 登录成功
    ctx.body = {
      code: 200,
      data: { username },
    };
  }
  // 注册
  async register() {
    const { ctx, app } = this;
    ctx.body = {
      code: 500,
      message: "数据库到期，无法注册",
    };
    return;
    const { username, password } = ctx.request.body;
    ctx.logger.info(username, password, "注册");
    // 查找用户是否存在
    const data = await app.mysql.get("user", { username });
    // 存在返回已存在
    if (data) {
      ctx.body = {
        code: 500,
        message: "用户已存在",
      };
      return;
    }
    // 不存在插入新的数据
    await app.mysql.insert("user", {
      username,
      password: ctx.service.token.md5(password),
      regDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });
    // 返回前端的结果
    ctx.body = {
      code: 200,
      message: "注册成功",
    };
  }
  async userInfo() {
    const { ctx, app } = this;
    // const userInfo = await app.redis.get(ctx.cookies.get('token'));
    // 返回信息
    ctx.body = {
      // userInfo: JSON.parse(userInfo),
      userInfo: ctx.service.token.veriftyToken(ctx.cookies.get("token"), "MY"),
      code: 200,
      message: "注册成功",
    };
  }
}

module.exports = UserController;
