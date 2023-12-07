// 添加免费 API

// 使用 Mailinator 的 API
// https://mailinator.com/api

function create() {
  // ...

  // 获取邮箱地址
  var email = document.querySelector("input[name='email']").value;

  // 获取过期时间
  var expired = document.querySelector("input[name='expired']").value;

  // 创建临时邮箱地址
  var url = "https://api.mailinator.com/v
