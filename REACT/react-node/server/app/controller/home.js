'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  // 连条
  async list () {
    const { ctx } = this;
    const result = await ctx.service.diary.list()
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败'
      }
    }
  }
  async add () {
    const { ctx } = this
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.diary.add(params)
    if (result) {
      ctx.body = {
        status: 200,
        data: '提交成功'
      }
    } else {
      ctx.body = {
        status: 403,
        data: '数据格式错误'
      }
    }
  }
  async getDetailById () {
    const { ctx } = this

    const result = await ctx.service.diary.getDetailById(ctx.params.id)
    //get两种参数拼法/id的话params  ?id的话就是query
    if (result.length) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        data: '查找失败'
      }
    }
  }
}

module.exports = HomeController;
