/*
 * @Author: 马妍
 * @Date: 2024-01-01 21:18:33
 * @LastEditors: luyin nwwb-luyin@nuanwa.net
 * @LastEditTime: 2024-06-13 17:56:27
 * @Description:
 */
const Subscription = require("egg").Subscription;
const axios = require("axios");
class Test extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // 每三小时准点执行一次
      cron: "0 0 */3 * * *",
      type: "all", // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {

  }
}

module.exports = Test;
