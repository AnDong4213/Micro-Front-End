const router = require('koa-router')()

router.prefix('/vue2')
// 1https://photo.tuchong.com/4490993/f/279446318.jpg
// 2https://cdn6-banquan.ituchong.com/weili/image/l/1073371924412629084.jpeg

router.get('/car/list', function (ctx, next) {
  console.log(ctx.request.query)
  ctx.body = [
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
    {
      img: 'https://photo.tuchong.com/4490993/f/279446318.jpg',
      name: '沃尔沃',
    },
  ]
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
