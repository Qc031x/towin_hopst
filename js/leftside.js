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


//placeholder兼容ie8
if (!('placeholder' in document.createElement('input'))) {
    $('input[placeholder],textarea[placeholder]').each(function () {
        var self = $(this),
            text = self.attr('placeholder');
        if (self.val() === "") {
            self.val(text).addClass('placeholder');
        }
        self.focus(function () {
            if (self.val() === text) {
                self.val("").removeClass('placeholder');
            }
        })
            .blur(function () {
                if (self.val() === "") {
                    self.val(text).addClass('placeholder');
                }
            })
            .closest('form').submit(function () {
            if (self.val() === text) {
                self.val('');
            }
        });
    });
} 
