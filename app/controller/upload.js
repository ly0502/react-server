"use strict";

const Controller = require("egg").Controller;
const dayjs = require('dayjs') 
const fs = require("fs");
const path = require("path");
class Upload extends Controller {
  async index() {
    const { ctx, app } = this;
    const imageData = ctx.request.body.image; // 获取图像数据
    const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, "");
    const binaryData = Buffer.from(base64Data, 'base64');
    const filePath = path.join(
      this.config.baseDir,
      "app/public",
      `${dayjs().format('YYYY-MM-DD-HH:mm:ss')}.jpeg`
    );
    // 将二进制数据写入文件
    fs.writeFile(filePath, binaryData, 'binary', (err) => {
      if (err) {
        console.error("Error saving image:", err);
      } else {
        console.log("Image saved successfully");
      }
    });
    ctx.body = {
      code: 200,
      message: '上传成功',
    };
  }
}

module.exports = Upload;
