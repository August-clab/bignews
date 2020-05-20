$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.category_list,
        success: function (res) {
            // console.log(res);
            var htmlStr = template('categoryList', res)

            $('#selCategory').html(htmlStr)
        }
    })


    // 显示当前页面中的所有的文章数据
    /* $.ajax({
        type: 'get',
        url: BigNew.article_query,
        data: {
            key: $('#key').val(),
            type: $('#selCategory').val(),
            state: $('#selStatus').val(),
            page: 1,
            perpage: 7
        },
        success: function (res) {
            if (res.code == 200) {
                var htmlStr = template('articleList', res.data);
                $('tbody').html(htmlStr)
            }
        }
    }) */

    // 对以上代码封装
    getDataByParams({
        key: $('#key').val(),
        type: $('#selCategory').val(),
        state: $('#selStatus').val(),
        page: 1,
        perpage: 7
    });
    function getDataByParams(obj) {
        $.ajax({
            type: 'get',
            url: BigNew.article_query,
            data: obj,
            success: function (res) {
                if (res.code == 200) {
                    var htmlStr = template('articleList', res.data);
                    $('tbody').html(htmlStr);


                    // 启动分页功能
                    pagination(res.data.totalPage)
                }
            }
        })
    }


    // 给筛选按钮注册事件
    $('#btnSearch').on('click', function (e) {
        // 阻止默认行为
        e.preventDefault();
        // 调用函数来获取数据
        getDataByParams({
            key: $('#key').val(),
            type: $('#selCategory').val(),
            state: $('#selStatus').val(),
            page: 1,
            perpage: 7
        })
    })



    // 实现分页功能
    function pagination(totalPages, visiblePages) {
        $('#pagination-demo').twbsPagination({
            totalPages: totalPages,// 总页数
            visiblePages: visiblePages || 7,// 可见最大上限页码值
            first: '首页',
            last: '最后一页',
            next: '下一页',
            prev: '上一页',
            initiateStartPageClick: false,//不要默认点击
            onPageClick: function (event, page) {
                // $('#page-content').text('Page ' + page);
                // page是当前页码
                getDataByParams({
                    key: $('#key').val(),
                    type: $('#selCategory').val(),
                    state: $('#selStatus').val(),
                    page: page,
                    perpage: 7
                })
            }
        })
    }

})