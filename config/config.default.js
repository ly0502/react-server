const path = require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = {
    keys: appInfo.name + "_1703037795636_8208",
    security: {
      // 关闭 csrf
      csrf: {
        enable: false,
      },
    },
    cors: {
      origin: "*",
      allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    cluster: {
      listen: {
        port: 7001,
        hostname: "0.0.0.0", // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      },
    },
    logger: {
      disableConsoleAfterReady: false,
    },
    multipart: {
      mode: "file",
      fileSize: 1048576000,
      fieldSize: "50mb",
      whitelist: [
        ".doc",
        ".pdf",
        ".docx",
        ".xls",
        ".xlsx",
        ".ppt",
        ".pptx",
        ".png",
        ".jpeg",
      ],
    },
  };
  // 数据库连接
  const sqlConfig = {
    // mysql: {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: "rm-cn-pe33k817p000504o.rwlb.rds.aliyuncs.com",
    //     // 端口号
    //     port: "3306",
    //     // 用户名
    //     user: "my",
    //     // 密码
    //     password: "Mayan0827",
    //     // 数据库名
    //     database: "egg-test",
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },
    redis: {
      client: {
        port: 6379, // Redis port
        host: "118.178.137.143", // Redis host
        password: "",
        db: 0,
      },
    },
  };
  // 全局使用中间件;
  const middlewareConfig = {
    middleware: ["tryCatch"],
  };

  const viewConfig = {
    view: {
      root: [path.join(appInfo.baseDir, "app/view")].join(","),
      defaultViewEngine: "nunjucks",
      mapping: {
        ".tpl": "nunjucks",
      },
    },
  };

  const scoketConfig = {
    io: {
      init: {},
      namespace: {
        // 命名空间
        "/socket": {
          connectionMiddleware: ["auth"], // 连接中间件
          packetMiddleware: [], // 消息中间件
        },
      },
    },
  };

  const userConfig = {};
  return {
    ...config,
    ...sqlConfig,
    ...middlewareConfig,
    ...viewConfig,
    ...scoketConfig,
    ...userConfig,
  };
};
