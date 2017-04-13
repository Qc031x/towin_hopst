/**
 * Created by Administrator on 2016/12/22 0022.
 */
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
