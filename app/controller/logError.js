const Controller = require("egg").Controller;

class LogErrorController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.logError.index(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = LogErrorController; 