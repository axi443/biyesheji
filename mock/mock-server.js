// 文件内容较多时，提取到单独文件中
const { content } = require("./content")
module.exports =  app => {
  app.get('/api/data', function (req, res) {
    const data = [{name: "test_mock", status: 'success'}]
    res.json({code: 0, data})
  })

  app.get('/api/user_info', function (req, res) {
    const data = [{name: "test_mock", id: 'user_info', status: 'success'}]
    res.json({code: 0, data})
  })

  app.get('/api/login', function (req, res) {
    const data = [{name: "test_mock", id: 'login', status: 'success'}]
    res.json({code: 0, data})
  })

  app.get('/api/home_list', function (req, res) {
    const data = [{content: content, id: '1', title: '首页的标题'}]
    res.json({code: 0, data})
  })
}