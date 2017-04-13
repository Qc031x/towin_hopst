/**
 * Created by Administrator on 2016/12/22 0022.
 */
function removeMealInfo() {
    $('input:checkbox[name=checkMealCheckbox]:checked').each(function(i) {
        var id = $(this).val();
        $(this).parents("p").remove();
    });

    //ajaxMealInfo();
}

function removePackage(self){
    var bool = window.confirm('确定删除加项包“' + $(self).attr('pack_name')+'”？');
    if(bool){
        $(self).parents('.additional-package').remove();
        if ($('#packageInfo').children().length == 0) {
            $('#packageInfo').html("<h3 style='color: #ff4159;'>当前未选择任何加项包..</h3>");
        }
    }
}

function addMealInfo(objId) {

    if($("input[name='mealInfoCheckbox']:checked").length == 0) {
        alert('请选择至少一项单项内容...');
    }

    $('input:checkbox[name=mealInfoCheckbox]:checked').each(function() {
        var id = $(this).parent().siblings("td:eq(0)").text();
        var category = $(this).parent().siblings("td:eq(1)").text();
        var name = $(this).parent().siblings("td:eq(2)").text();
        var content = $(this).parent().siblings("td:eq(3)").text();
        var price = $(this).parent().find("input").attr("price");
        var sex;
        if ($(this).parent().siblings("td:eq(4)").find("span").hasClass("ishas")&&$(this).parent().siblings("td:eq(5)").find("span").hasClass("ishas")){
            sex = "男女通用";
        } else if ($(this).parent().siblings("td:eq(4)").find("span").hasClass("ishas")&& !$(this).parent().siblings("td:eq(5)").find("span").hasClass("ishas")){
            sex = "男";
        } else if (!$(this).parent().siblings("td:eq(4)").find("span").hasClass("ishas")&& $(this).parent().siblings("td:eq(5)").find("span").hasClass("ishas")){
            sex = "女";
        }
        var html = "<p><label title='" + name + "'><input type='checkbox' name='checkMealCheckbox' value='" +id+"' content='"+content+"' item='"+name+"' category='"+category+"' sex='"+sex+"' price='"+price+"'/>"
                    + id + ":" + name + "</label></p>";
        $("#"+objId).append(html);
    });

    //ajaxMealInfo();
}


function addBranch(){

    if($("input[name='branchCheckbox']:checked").length==0){
        $.sgfmdialog({isModel:false,"info":"请选择一个分院！","showTime":2000,level:1});
        return false;
    }
    $('input:checkbox[name=branchCheckbox]:checked').each(function(){

        var esid = $($(this).parent().siblings("td:eq(0)").find("input")[0]).val();
        //var name = $(this).parent().siblings("td:eq(1)").text();
        var name = $(this).parent().siblings("td:eq(0)").text();
        var address = $(this).parent().siblings("td:eq(1)").text();
        var cityname = $($(this).parent().siblings("td:eq(0)").find("input")[1]).val();

        $("#checkBranch").append("<p><label title='"+name+"'><input type='checkbox' name='checkBranckCheckbox' address='"+address+"' alt='"+cityname+"' value='"+esid+"'/>"+name+"</label></p>");
    });

    //getBranchByCsidAndCity($("#cityList").val());
}

function removeBranch(){
    $('input:checkbox[name=checkBranckCheckbox]:checked').each(function(i){
        var esid = $(this).val();
        $(this).parents("p").remove();
    });
    //getBranchByCsidAndCity($("#cityList").val());
}


function getBranchByCsidAndCity(city){
    if(city==null || city==undefined){
        return false;
    }
    var esids = "";
    $("#checkBranch p:gt(0)").each(function(){
        esids = esids + $(this).find("input").val() + ",";
    })
    if(esids!=""){
        esids=esids.substring(0,esids.length-1);
    }
    /*
    var url = "${ctx}/core/product.findBranchByCsidAndCity.do",
        data = {"tentityshop.csid" : ${sjLoginUserInfo.csid}, "tentityshop.city" : city,"esid":esids};

    $("div.b_frame > table").sgfmtable({async:false,url:url,params:data,"ajaxtype":"post",
        "callback":function(event,td){
        }
    });
    */
    $("#select3").attr("checked",false);
    $("#select4").attr("checked",false);
}

function addPackage(){
    var items = $('#checkPackageInfo p:gt(0)');
    if (items.length == 0) {
        alert('加项包的组成需要至少一项单项！');
        return false;
    }

    var name = $('#package-name').val();
    if (name === '' ) {
        alert('请填写加项包名称！');
        return false;
    }

    var length = $("ul[role='tablist']").children().length;
    length = length === 0 ? 1:length + 1;
    //if ($('#packageInfo').children("h3").length != 0)
    //    $('#packageInfo').html('');

    var prevDiv = "<div class='additional-package-"+length+"' style='display:none;'><div class='tcxmtitle'>"+name+"</div><div class='tcxmdiv'>";
    var thead = "<table width='100%' border='0' cellspacing='0' cellpadding='0'><thead><tr class='toplist'><td width='10%'>编号</td><td width='10%'>类别</td><td width='10%'>名称</td><td>名称</td><td>男</td><td>女</td></tr></thead><tbody>",
    nextDiv = "</tbody></table></div></div></div>", tbody = '', html;
    var $input;
    items.each(function(){
        $input = $(this).find("input");
        tbody += "<tr><td>"+$input.val()+"</td><td>"+$input.attr('category')+"</td><td>"+$input.attr('item')+"</td><td>"+$input.attr('content')+"</td>";
        if ($input.attr('sex') === '男女通用'){tbody+="<td><span class='ishas'><span></span></span></td><td><span class='ishas'><span></span></span></td></tr>"}
        if ($input.attr('sex') === '男'){tbody+="<td><span class='ishas'><span></span></span></td><td><span><span></span></span></td></td>"}
        if ($input.attr('sex') === '女'){tbody+="<td><span><span></span></span></td><td><span class='ishas'><span></span></span></td></tr>"};
    })

    html = prevDiv + thead + tbody + nextDiv;
    $('#packageInfo').append(html);
    $(".nav-pills").append("<li role='presentation' class='active'><a href='#' data-toggle='modal' li-index='"+length+"'>"+name+"</a></li>");
    $('#selectPackage').modal('hide');

}