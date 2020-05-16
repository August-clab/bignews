$(function () {
    // 1.立即向服务器发送请求
    $.ajax({
        type: 'get',
        url: BigNew.user_info,

        headers: {
            'Authorization': localStorage.getItem('token')
        },

        success: function (res) {
            // 2.请求回来的数据后要渲染界面
            if (res.code == 100) {
                //显示登陆的用户名
                $('.user_info span i').text(res.data.nickname)
                // 显示登陆的头像
                $('.user_info img').attr('src', res.data.userPic)
                //个人中心的图片也设置一样
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })




    /* var xhr = XMLHttpRequest();
    xhr.open('get', 'http://localhost:8080/api/v1/admin/user/info');
    xhr.setRequestHeader('Authorization', '这里写token，在登录成功后的login里找')
    xhr.send(null);
    xhr.onreadystatechange(){
        if (xhr.status == 200 && xhr.readyStatus == 4) {
            console.log(xhr.responseText);
        }
    }
 */






    //  退出功能
    // 1.给退出按钮注册事件
    $('.logout').on('click', function () {
        // 2.删除本地存储中的token
        localStorage.removeItem('token')
        // 3.跳转到登录页面
        window.location.href = './login.html'
    })


})
