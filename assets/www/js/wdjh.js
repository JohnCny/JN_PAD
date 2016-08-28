//我的计划
function mywdjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>计划管理</div>"+  
                    "<div class='content'>" +
                        "<div class='box jhgl' onclick='khwhjhlb()'><img src='images/khwhjh.png' style='margin-left:-15px;'/><span>客户维护计划</span></div>"+
                        "<div class='box jhgl' onclick='khcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
                        "<div class='box jhgl' onclick='pxjh()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
                        "<div class='box jhgl' onclick='gzjh()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>工作计划</span></div>"+                       
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//客户维护计划
function khwhjhlb(){
	window.scrollTo(0,0);//滚动条回到顶端	
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var obj;
	var head ="<tr>"+   
	"<th></th>"+ 
	"<th>序号</th>"+  
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>产品名称</th>"+
	"<th>客户经理</th>"+"</tr>";

	var khwhurl="/ipad/product/getMaintenanceList.json"+"?userId="+userId+"&userType="+userType;
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+
                "<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].chineseName+"@"+
                obj.result[i].productName+"@"+obj.result[i].cardId+
                "@"+obj.result[i].customerId+"@"+obj.result[i].appId+"'"+"/>"+"</span></td>"+
				"<td>"+i+"</td>"+
				"<td>"+obj.result[i].chineseName+"</td>"+
				"<td>"+obj.result[i].cardId+"</td>"+
				"<td>"+obj.result[i].productName+"</td>"+
				"<td>"+obj.result[i].userName+"</td>"+
				"</tr>";
				
				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护-客户维护列表</div>"+  
					"<div class='content'>"+
					"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+

					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='添加维护计划' id = 'tjwhjh'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='mywdjh()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(obj[page]){
					$("#whlb").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(obj[page]){
					$("#whlb").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
			$("#tjwhjh").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var objs={};
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					objs.chineseName = values[0];
					objs.productName = values[1];
					objs.getCardId = values[2];
					objs.customerId = values[3];
					objs.appId = values[4];
					tjkhwhjh(objs);
				}else{
					alert("请选择一行");
				}
			})
		}
	})


}
//function mykhwhjh(){
//window.scrollTo(0,0);//滚动条回到顶端
//$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护计划</div>"+ 
//                    "<div class='content'>"+
//                        "<table class='cpTable' style='text-align:center;'>"+
//                            "<tr>"+                             
//                                "<th>序号</th>"+  
//                                "<th>客户姓名</th>"+
//                                "<th>客户身份标识</th>"+
//                                "<th>产品标识</th>"+
//                                "<th>贷款金额</th>"+
//                                "<th>还款状态</th>"+
//                                "<th>贷款余额</th>"+
//                                "<th width='10%'>维护方式</th>"+
//                                "<th width='10%'>维护目标</th>"+
//                                "<th>维护时间</th>"+
//                            "</tr>"+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>郝俊芝</td>"+
//                                "<td></td>"+
//                                "<td></td>"+
//                                "<td>100000</td>"+
//                                "<td><span class='label'>还款中</span></td>"+
//                                "<td>50000</td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='date' class='addinput'/></td>"+
//                            "</tr>"+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>郝俊芝</td>"+
//                                "<td></td>"+
//                                "<td></td>"+
//                                "<td>100000</td>"+
//                                "<td><span class='label label-warning'>已逾期</span></td>"+
//                                "<td>50000</td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='date' class='addinput'/></td>"+
//                            "</tr>"+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>郝俊芝</td>"+
//                                "<td></td>"+
//                                "<td></td>"+
//                                "<td>100000</td>"+
//                                "<td><span class='label label-success'>已还款</span></td>"+
//                                "<td>50000</td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='date' class='addinput'/></td>"+
//                            "</tr>"+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>郝俊芝</td>"+
//                                "<td></td>"+
//                                "<td></td>"+
//                                "<td>100000</td>"+
//                                "<td><span class='label label-important'>已拒绝</span></td>"+
//                                "<td>50000</td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='date' class='addinput'/></td>"+
//                            "</tr>"+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>郝俊芝</td>"+
//                                "<td></td>"+
//                                "<td></td>"+
//                                "<td>100000</td>"+
//                                "<td><span class='label label-inverse'>已关闭</span></td>"+
//                                "<td>50000</td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='text' class='addinput'/></td>"+
//                                "<td><input type='date' class='addinput'/></td>"+
//                            "</tr>"+
//                        "</table>"+
//                        "<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
//                    "</div>");
//    $(".right").hide();
//    $("#mainPage").show();
//  }   
//客户催收计划
function khcsjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户催收计划</div>"+ 
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>产品标识</th>"+
                                "<th>贷款金额</th>"+
                                "<th>逾期金额</th>"+
                                "<th>逾期期数</th>"+
                                "<th width='10%'>催收方式</th>"+
                                "<th width='10%'>催收目标</th>"+
                                "<th>催收时间</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><font class='red'>3000<font></td>"+
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
//培训计划
function pxjh(){
	
	var pxjhurl ="/ipad/NotifictionMessage/browse.json";
	var userId = window.sessionStorage.getItem("userId") ;
	var tmp="";
	var result=[];
	var page=1;
	var j=1;
	$.ajax({
		url:wsHost+pxjhurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
		},
		success:function(json){
		var obj = $.evalJSON(json);
		for(var i =0;i<totalcount;i++){
			
			if(obj.items[i].isCheck==0){
				obj.items[i].isCheck ="未查看";
			}
			tmp += "<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value=''/></span></td>"
				+"<td>"+i+1+"</td>"+
				"<td>"+obj.items[i].noticeTitle+"</td>"+
				"<td>"+obj.items[i].noticeCount+"</td>"+
				"<td>"+obj.items[i].isCheck+"</td></tr>";
			
			if((i+1)%5==0){
				result[j]=tmp;
				tmp="";
				j++;
			}
			}
			result[j]=tmp;
			
		}
	})
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>培训计划</div>"+ 
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                            	"<th></th>"+  
                                "<th>序号</th>"+  
//                                "<th>客户经理姓名</th>"+
//                                "<th>培训目标</th>"+
//                                "<th>培训方式</th>"+
//                                "<th>培训时间</th>"+
//                                "<th>考核方式</th>"+
//                                "<th>客户经理确认</th>"+
                                "<th>通知标题</th>"+
                                "<th>通知内容</th>"+
                                "<th>是否查看</th>"+
                            "</tr>"+
                            result[page]+
//                            "<tr>"+    
//                                "<td>1</td>"+
//                                "<td>李丽</td>"+
//                                "<td>微贷知识</td>"+
//                                "<td></td>"+
//                                "<td>2015-12-12</td>"+
//                                "<td>笔试</td>"+
//                                "<td><input type='button' class='btn btn-large btn-info' value='确认'/></td>"+
//                            "</tr>"+
                            "<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
        					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
        					"<input type='button' class='btn btn-large btn-primary' value='已查看' id = 'yck'/>"+
        					"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    
    
    
  }   
  //工作计划
function gzjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>工作计划</div>"+ 
                    "<div class='content'>"+
                        "<table id='gzjh' class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th style='width:100px;'>序号</th>"+  
                                "<th>工作事项描述</th>"+
                                "<th>地点</th>"+
                                "<th>时间</th>"+
                                "<th>实施状态</th>"+
                                "<th>实施描述</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='add-button' onclick='addTd(\"gzjh\")'><img src='images/add.png'/></button>" +
                            "<button class='add-button' onclick='removeTd(\"gzjh\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   