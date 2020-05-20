$(function () {
    // 发送ajax请求
    render();
    function render() {
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
    }


    // 获取数据并渲染页面
    // 新增按钮注册事件弹出模态框
    $('#xinzengfenlei').on('click', function () {
        // 清空模态框
        $('#myform')[0].reset()//重置表单
        // 显示模态框
        $('.addModal').modal('show');
        // 修改提示标题
        $('.addModal h4').text('新增文章分类');
    })


    // 编辑按钮
    // 给编辑按钮注册事件  弹出模态框  要使用委托的方式注册事件
    // 需要进行委托的方式注册事件
    $('tbody').on('click', '.btn-edit', function () {
        $('.addModal').modal('show');
        // 修改提示标题
        $('.addModal h4').text('更新文章分类');
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: BigNew.category_search,
            data: {
                id: $(this).data('id')
            },
            success: function (res) {
                if (res.code == 200) {
                    // 将查询到的要编辑的数据线显示在模态框上
                    $('#myform input[name=id]').val(res.data[0].id)
                    $('#myform input[name=name]').val(res.data[0].name)
                    $('#myform input[name=slug]').val(res.data[0].slug)
                }
            }
        })
    })


    // 新增或更新数据
    // 给模态框的确定按钮注册事件
    // 根据id有没有数据进行判断 是新增还是更新操作
    // 如果成功刷新页面
    $('.addModal .btn-sure').on('click', function () {
        // 获取隐藏域中的id
        var id = $('#myform input[name=id]').val()
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: id ? BigNew.category_edit : BigNew.category_add,
            data: $('#myform').serialize(),
            success: function (res) {
                if (res.code == 200 || res.code == 201) {
                    // 隐藏模态框
                    $('.addModal').modal('hide')
                    //刷新页面
                    render()
                }
            }
        })
    })




    // 删除数据
    // 给删除按钮注册事件
    $('tbody').on('click', '.btn-del', function () {
        // 弹出提示框
        $('.delModal').modal('show');
        // 获取当前按钮所在数据的id
        window.categoryId = $(this).data('id');
    })

    // 给删除的模态框中的确定按钮注册事件
    $('.delModal .btn-sure').on('click', function () {
        $.ajax({
            type: 'post',
            url: BigNew.category_delete,
            data: {
                id: window.categoryId
            },
            success: function (res) {
                if (res.code == 204) {
                    $('.delModal').modal('hide')
                    render()
                }
            }
        })
    })




})