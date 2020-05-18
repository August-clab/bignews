$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.user_detail,
        /*  headers: {
             'Authorization': localStorage.getItem('token')
         }, */
        success: function (res) {
            if (res.code == 200) {
                /* $('#form .username').val(res. data.username)
                $('#form .nickname').val(res. data.nickname)
                $('#form .emali').val(res.data.emali)
                $('#form .password').val(res. data.password) */
                for (var key in res.data) {
                    $('#form .' + key).val(res.data[key])
                };
                $('#form .user_pic').attr('src', res.data.userPic);
            }
        }
    })


    // 个人中心实现图片预览
    $('#exampleInputFile').on('change', function () {
        // 获取待上传的文件
        var file = this.files[0];
        // URL.createObjectURL会将待上传的文件生成一个可浏览的地址
        var url = URL.createObjectURL(file);
        // 在图片上渲染出来，预览待上传的图片
        $('#form .user_pic').attr('src', url);
    })


    // 更新个人中心的数据
    // 给修改按钮注册事件
    $('#form').on('submit', function (e) {
        // 阻止默认提交行为
        e.preventDefault()
        // 准备待发送的数据
        var data = new FormData(this);//将form表单中的待上传数据转换成二进制形式
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: BigNew.user_edit,
            data: data,
            /* headers: {
                'Authorization': localStorage.getItem('token')
            }, */
            contentType: false,//不要进行其他编码 不需要额外编码就是二进制
            processData: false,//不要转换成字符串
            success: function (res) {
                // 请求成功后刷新对应的数据
                if (res.code == 200) {
                    // 第一种更新父页面的方式
                    // parent.window.location.reload();//重新刷新页面
                    // 第二种更新父页面的方式
                    $.ajax({
                        type: 'get',
                        url: BigNew.user_info,
                        success: function (res) {
                            if (res.code == 200) {
                                // 显示登陆的用户名 
                                parent.$('.user_info span i').text(res.data.nickname);
                                // 显示登陆的头像
                                parent.$('.user_info img').attr('src', res.data.userPic);
                                // 个人中心的图片也设置一样
                                parent.$('.user_center_link img').attr('src', res.data.userPic);
                            }
                        }
                    })
                }
            }
        })
    })




})