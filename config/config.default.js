/*
 * @Author: wb_luyin wb_luyin@zhongan.com
 * @Date: 2022-05-24 16:33:00
 * @LastEditors: wb_luyin wb_luyin@zhongan.com
 * @LastEditTime: 2022-05-24 17:50:25
 * @FilePath: /demo-react-server/config/config.default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint valid-jsdoc: "off" */
'use strict';
// 配置项
module.exports = (appInfo) => {
  const config = {
    keys: appInfo.name,
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'rm-uf6qobv9we5mbj5u3ro.mysql.rds.aliyuncs.com',
        // 端口号
        port: '3306',
        // 用户名
        user: 'luyin0502',
        // 密码
        password: '2002502Lu',
        // 数据库名
        database: 'findhouse',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };
  config.middleware = [];
  const userConfig = {};
  return {
    ...config,
    ...userConfig,
  };
};
