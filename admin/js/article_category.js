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
    // 新增按钮注册事件弹出模态框
    $('#xinzengfenlei').on('click', function () {
        $('.addModal').modal('show');

        $('.addModal h4').text('新增文章分类');
    })


    // 编辑按钮
    // 给编辑按钮注册事件  弹出模态框  要使用委托的方式注册事件
    // 需要进行委托的方式注册事件
    $('tbody').on('click', '.btn-edit', function () {
        $('.addModal').modal('show');

        $('.addModal h4').text('更新文章分类');

    })



})