
$(function() {

  // 1. 进入页面, 请求当前用户数据, 进行页面渲染
  $.ajax({
    type: "get",
    url: "/user/queryUserMessage",
    dataType: "json",
    success: function( info ) {
      console.log( info );
      if ( info.error === 400 ) {
        // 用户未登录
        location.href = "login.html";
        return;
      }

      // 用户已登录, 会返回用户数据, 进行渲染
      var htmlStr = template( "userTpl", info );
      $('#userInfo').html( htmlStr );
    }
  })


  // 2. 退出功能
  $('.logoutBtn').click(function() {
    // 发送请求, 进行退出操作即可
    $.ajax({
      type: "get",
      url: "/user/logout",
      dataType: "json",
      success: function( info ) {
        console.log( info );
        if ( info.success ) {
          // 退出成功, 跳转到登录页
          location.href = "login.html";
        }
      }
    })
  })
})