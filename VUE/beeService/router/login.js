// const StudentSchema = require("../modules/stud");
// const bcryptjs = require("bcryptjs");
module.exports = {
  async login (ctx, next) {
    // console.log(ctx.query);
    // const { password, studyNumber } = ctx.query;
    // const res = await StudentSchema.findOne({ studyNumber });
    // // console.log(res);

    // if (res && await bcryptjs.compare(password, res.password)) {
    //     // console.log(await bcryptjs.compare(password, res.password));
    //   ctx.body = {
    //     data:res,
    //     resultCode: 200,
    //     info: "ok",
    //   };
    // } else {
    ctx.body = {
      resultCode: 200,
      info: "no",
    };
    //   }
  }
};
