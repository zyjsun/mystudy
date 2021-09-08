'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/user', controller.user.index);
  router.get('/getId/:id', controller.user.getId);
  router.post('/add', controller.user.add);
};
// http://127.0.0.1:7001/getId/999
