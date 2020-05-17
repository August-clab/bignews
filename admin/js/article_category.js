$(function () {
    // 发送ajax请求
    $.ajax({
        type: 'get',
        url: BigNew.category_list,
        success: function (res) {
            if (res.code == 200) {
                var htmlStr = template('categoryList', res)
                $('tbody').html(htmlStr)
            }
        }
    })
    // 获取数据并渲染页面
    $('#xinzengfenlei').on('click', function () {
        $('.modal').modal('show')
    })
})