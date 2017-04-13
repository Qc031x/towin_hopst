//左侧边栏焦点切换
$('.blk').each(function () {
    $(this).click(function () {
        if ($(this).siblings('.sub-menu').css('display') == 'none') {
            $('.blk').siblings('.sub-menu').slideUp();
            $('.arrowicon img').attr('src', 'images/arrowdown.png');
            $(this).siblings('.sub-menu').slideDown();
            $(this).find('.arrowicon img').attr('src', 'images/arrowup.png');
        }
        else {
            $(this).siblings('.sub-menu').slideUp();
            $(this).find('.arrowicon img').attr('src', 'images/arrowdown.png');
        }
    });
});


    $(".sideblk").click(function () {
        $(".sub-menu li").removeClass('subMenuLiActive');
        $(".sub-menu li").removeClass('titactive');
        $(".subactive li").removeClass('titactive');
        $(this).addClass('titactive');
        $(this).parent().siblings().children(".sideblk").removeClass('titactive');
    });


//初始化分页
function initUI(pageNo, pageSize) {
    pagination({
        cur: pageNo,
        total: 10,
        len: 3,
        targetId: 'pagination',
        callback: function () {
            var me = this;
            var oPages = document.getElementsByClassName('page-index');
            for (var i = 0; i < oPages.length; i++) {
                oPages[i].onclick = function () {
                    initUI(this.getAttribute('data-index'), 3);
                }
            }
            $('.firstPage').click(function () {
                initUI(1, 3);
            });
            $('.lastPage').click(function () {
                initUI(total, 3);
            });
        }
    });
}
initUI(1, 3);


//placeholder兼容ie8
if (!('placeholder' in document.createElement('input'))) {
    $('input[placeholder],textarea[placeholder]').each(function () {
        var that = $(this),
            text = that.attr('placeholder');
        if (that.val() === "") {
            that.val(text).addClass('placeholder');
        }
        that.focus(function () {
            if (that.val() === text) {
                that.val("").removeClass('placeholder');
            }
        })
            .blur(function () {
                if (that.val() === "") {
                    that.val(text).addClass('placeholder');
                }
            })
            .closest('form').submit(function () {
            if (that.val() === text) {
                that.val('');
            }
        });
    });
} 
