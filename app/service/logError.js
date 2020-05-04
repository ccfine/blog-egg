const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

class LogErrorService extends Service {
  async index(data) {
    try {
      fs.appendFileSync(path.join(__dirname, "../public/logError.log"), JSON.stringify(data, null, 2));
      return {
        success: true,
        status: 200,
        msg: "记录错误成功",
        data: null
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        status: 500,
        msg: "记录错误失败",
        data: null
      };
    }
  }
}

module.exports = LogErrorService;