const Service = require('egg').Service;
// 生成token
const jwt = require('jsonwebtoken');
// 密码加密
const crypto = require('crypto');
// 定义公共秘钥
const SECRET = 'MY';

class TokenService extends Service {
  // 生成token user:用户信息,time:token有效时间
  createToken(user, time) {
    return jwt.sign(user, SECRET, { expiresIn: time });
  }

  // 验证token token:token,SECRET:秘钥
  veriftyToken(token, SECRET) {
    return jwt.verify(token, SECRET);
  }

  // 密码加密 {password:密码}
  md5(password) {
    return crypto
      .createHash('md5')
      .update(`password=${password}&SECRET=${SECRET}`)
      .digest('hex');
  }
}

module.exports = TokenService;
