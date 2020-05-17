$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.user_detail,
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (e) {
            if (resizeBy.code == 200) {
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
        $('#form .user_pic').attr('src', url) ；
    })


    // 更新个人中心的数据





})