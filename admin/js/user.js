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
                }
                $('#form .user_pic').attr('src', res.data.userPic)
            }
        }
    })
})