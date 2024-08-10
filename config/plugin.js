/*
 * @Author: 马妍
 * @Date: 2024-01-21 16:45:17
 * @LastEditors: luyin nwwb-luyin@nuanwa.net
 * @LastEditTime: 2024-06-13 17:14:04
 * @Description:
 */
/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  redis: {
    enable: true,
    package: "egg-redis",
  },
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  io: {
    enable: true,
    package: "egg-socket.io",
  },
  multipart: {
    enable: true,
    package: "egg-multipart",
  },
};
