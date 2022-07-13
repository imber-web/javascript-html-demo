// 前端传一个函数在query里面，后端放回一个函数执行的字符串并把数据放到字符串里面
function jsonp({ url, params, cb }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[cb] = function (data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, cb }
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3000/',
  params: { wd: 'b' },
  cb: 'show'
}).then((data) => {
  console.log(data)
})
// 后端代码：
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   let cb = req.query.cb;
//   console.log(cb);
//   let data = {
//     name: "张三",
//     age: 22,
//   };
//   let Str = `${cb}(${JSON.stringify(data)})`;
//   console.log(Str);
//   res.send(Str);
// });
// app.listen(3000, () => {
//   console.log("启动监听");
// });
