/*
 * @Author: luyin nwwb-luyin@nuanwa.net
 * @Date: 2024-01-31 16:15:40
 * @LastEditors: luyin nwwb-luyin@nuanwa.net
 * @LastEditTime: 2024-06-14 17:26:59
 * @FilePath: /egg-example/app/controller/home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { Controller } = require("egg");
const axios = require("axios");
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = {
      title: "首页",
      desc: "这是一个首页",
    };
    // 使用 Egg.js 提供的 ctx.renderView 方法渲染模板，并将结果设置为响应体
    ctx.body = await ctx.renderView("/home.tpl", data);
  }
  async ReturnCss() {
    const { ctx } = this;
    ctx.set("Content-Type", "text/css");
    await ctx.render("test.css");
  }
  async bossList() {
    const { ctx } = this;
    const headers = ctx.request.body?.headers
    const params = {
      city: '',
      experience: '',
      payType: '',
      partTime: '',
      degree: '',
      industry: '',
      scale: '',
      salary: '',
      jobType: '',
      page: 1,
      pageSize: 15,
      ...(ctx.request.body?.params || {})
    };
    const res = await axios.get('https://www.zhipin.com/wapi/zpgeek/pc/recommend/job/list.json', {
      headers: headers,
      params: params
    })
    this.ctx.body = res.data
  }
  async bossStart() {
    const { ctx } = this;
    const url = 'https://www.zhipin.com/wapi/zpgeek/friend/add.json';
    const params = ctx.request.body?.params;
    const headers = ctx.request.body?.headers
    const response = await axios.post(url, 'sessionId=', {
      params,
      headers
    });
    this.ctx.body = response.data
  }
}

module.exports = HomeController;
