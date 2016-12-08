//我的计划
function mywdjh(){
	var userType = window.sessionStorage.getItem("userType");
	var shows="";
	if(userType!=1){
		shows="<div class='box jhgl' onclick='pxjhlb()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
		"<div class='box jhgl' onclick='yjjdcx()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度查看</span></div>";
	}
//	if(userType==0){
//		shows=shows+"<div class='box jhgl' onclick='zhuanyong()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>专用按钮</span></div>";
//	}
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>计划管理</div>"+  
			"<div class='content'>" +
			"<div class='box jhgl' onclick='khwhjhlb()'><img src='images/khwhjh.png' style='margin-left:-15px;'/><span>客户维护计划</span></div>"+
			"<div class='box jhgl' onclick='cjcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
			shows+
//			"<div class='box jhgl' onclick='khcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
//			"<div class='box jhgl' onclick='pxjhlb()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
//			"<div class='box jhgl' onclick='gzjh()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>工作计划</span></div>"+                       
			"<div class='box jhgl' onclick='yjjdlr()'><img src='images/sdh.png' style='margin-left:-15px;'/><span>业绩进度录入</span></div>"+ 
//			"<div class='box jhgl' onclick='yjjdcx()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度查看</span></div>"+ 
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
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(obj[page]){
					$("#whlb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "info");
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
					objs.currentlo="khwhjhlb()";
					tjkhwhjh(objs);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
		}
	})


}
//function mykhwhjh(){
//window.scrollTo(0,0);//滚动条回到顶端
//$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护计划</div>"+ 
//"<div class='content'>"+
//"<table class='cpTable' style='text-align:center;'>"+
//"<tr>"+                             
//"<th>序号</th>"+  
//"<th>客户姓名</th>"+
//"<th>客户身份标识</th>"+
//"<th>产品标识</th>"+
//"<th>贷款金额</th>"+
//"<th>还款状态</th>"+
//"<th>贷款余额</th>"+
//"<th width='10%'>维护方式</th>"+
//"<th width='10%'>维护目标</th>"+
//"<th>维护时间</th>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label'>还款中</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-warning'>已逾期</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-success'>已还款</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-important'>已拒绝</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-inverse'>已关闭</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"</table>"+
//"<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
//"</div>");
//$(".right").hide();
//$("#mainPage").show();
//}   
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
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>序号</th>"+  
	"<th>通知标题</th>"+
	"<th>通知内容</th>"+
	"<th>是否查看</th>"+
	"</tr>";
	$.ajax({
		url:wsHost+pxjhurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
		},
		success:function(json){
			var obj = $.evalJSON(json);
			for(var i =0;i<obj.result.items.length;i++){

				if(obj.result.items[i].isCheck=="0"){
					obj.result.items[i].isCheck ="未查看";
				}
				tmp += "<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result.items[i].id+"@"+obj.result.items[i].userId+"'/></span></td>"
				+"<td>"+(Number(i)+1)+"</td>"+
				"<td>"+obj.result.items[i].noticeTitle+"</td>"+
				"<td>"+obj.result.items[i].noticeContent+"</td>"+
				"<td>"+obj.result.items[i].isCheck+"</td></tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					tmp="";
					j++;
				}
			}
			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>培训通知</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='已查看' id = 'yck'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='tz()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();

			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "info");
					page = page+1;
				}
			})
			$("#yck").click(function(){

				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var xgjhurl="/ipad/NotifictionMessage/delete.json";
					$.ajax({
						url:wsHost+xgjhurl,
						type: "GET",
						dataType:'json',
						data:{
							id:values[0],
						},
						success:function(json){
							var obj = $.evalJSON(json);
							alert(obj.mess);
							window.wxc.xcConfirm(obj.mess, "success");
							pxjh();
						}
					})
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
					
				}

			})
		}
	})




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
function yjjdlr(){
	var jdlrcxurl="/ipad/performmance/insertSelect.json";
	$.ajax({
		url:wsHost+jdlrcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:window.sessionStorage.getItem("userId"),
		},
		success: function (json){
			var obj = $.evalJSON(json);
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度录入</div>"+  
					"<div class='content' >"+ 
					"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+

					"<tr>"+                             
					"<th style='width:100px;'>拜访数</th>"+  
					"<td><input type='text' class='yejijindu' id='visitcount' name='visitcount' value='0' onfocus='onfocuss' /></td>"+
					"<th style='width:100px;'>申请数</th>"+  
					"<td><input type='text' class='yejijindu' value='"+obj.applyNum+"' id='applycount' name='applycount' readonly='true'/></td>"+
					"<th style='width:100px;'>申请拒绝数</th>"+  
					"<td><input type='text' class='yejijindu' value='"+obj.refuseNum+"' id='applyrefuse' name='applyrefuse' readonly='true'/></td>"+
					"</tr>"+
					"<tr>"+                             
					"<th style='width:100px;'>征信数</th>"+  
					"<td><input type='text' class='' value='0' id='creditcount' name='creditcount'/></td>"+
//					"<td><input type='text' class='addinput' value='0' id='creditcount' name='creditcount'/></td>"+
					"<th style='width:100px;'>征询拒绝数</th>"+  
					"<td><input type='text' class='' value='0' id='creditrefuse' name='creditrefuse'/></td>"+
					"<th style='width:100px;'>实调数</th>"+  
					"<td><input type='text' class='' value='0' id='realycount' name='realycount'/></td>"+
					"</tr>"+
					"<tr>"+                             
					"<th style='width:100px;'>报告数</th>"+  
					"<td><input type='text' class='' value='0' id='reportcount' name='reportcount'/></td>"+
					"<th style='width:100px;'>内审数</th>"+  
					"<td><input type='text' class='' value='"+obj.auditNum+"' id='internalcount' name='internalcount' readonly='true'/></td>"+
					"<th style='width:100px;'>上会数</th>"+  
					"<td><input type='text' class='' value='"+obj.willNum+"' id='meetingcout' name='meetingcout' readonly='true'/></td>"+
					"</tr>"+
					"<tr>"+                             
					"<th style='width:100px;'>通过数</th>"+  
					"<td><input type='text' class='' value='"+obj.passNum+"' id='passcount' name='passcount' readonly='true'/></td>"+
					"<th style='width:100px;'>签约数</th>"+  
					"<td><input type='text' class='' value='0' id='signcount' name='signcount'/></td>"+
					"<th style='width:100px;'>放款数</th>"+  
					"<td><input type='text' class='' value='0' id='givemoneycount' name='givemoneycount' /></td>"+
					"</tr>"+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='保存' id = 'save' />"+
					"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();  
			$("#save").click(function (){
				var yjjdurl="/ipad/performmance/update.json";
				$.ajax({
					url:wsHost+yjjdurl,
					type: "GET",
					dataType:'json',
					data:{
						userId:window.sessionStorage.getItem("userId"),
						visitcount:$("#visitcount").val(),
						applycount:$("#applycount").val(),
						applyrefuse:$("#applyrefuse").val(),
						creditcount:$("#creditcount").val(),
						creditrefuse:$("#creditrefuse").val(),
						realycount:$("#realycount").val(),
						reportcount:$("#reportcount").val(),
						internalcount:$("#internalcount").val(),
						meetingcout:$("#meetingcout").val(),
						passcount:$("#passcount").val(),
						signcount:$("#signcount").val(),
						givemoneycount:$("#givemoneycount").val(),
					},
					success: function (json){
						var obj = $.evalJSON(json);
//						alert(obj.mess);
						window.wxc.xcConfirm(obj.mess, "success");
					}
				})
			})
		}
	})
}

function yjjdcx(){
	$("#mainPage").html("");
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度查询</div>"+  
			"</div>"+
			"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
			"<div class='spinner'>"+
			"<div class='bounce1'></div>"+
			"<div class='bounce2'></div>"+
			"<div class='bounce3'></div>"+
			"</div>"+
			"</div>"+
	"</div>");
	var jdcxurl ="/ipad/performmance/browse.page";
	var body ="";
	$.get(wsHost+jdcxurl,callbackInfor);

	function callbackInfor(json){
		var obj = $.evalJSON(json);
		for(var i=0;i<obj.result.length;i++){

			if(obj.result[i].managerName=="汇总" || obj.result[i].managerName=="总计"){

				body=body+"<tr><th>"+obj.result[i].name+"</th>"+
				"<th>"+obj.result[i].managerName+"</th>"+
				"<th>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</th>"+
				"<th>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</th>"+
				"<th>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</th>"+
				"<th>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</th>"+
				"<th>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</th>"+
				"<th>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</th>"+
				"<th>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</th>"+
				"<th>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</th>"+
				"<th>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</th>"+
				"<th>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</th>"+
				"<th>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</th>"+
				"<th>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</th></tr>";

			}else{

				body=body+"<tr><td>"+obj.result[i].name+"</td>"+
				"<td>"+obj.result[i].managerName+"</td>"+
				"<td>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</td>"+
				"<td>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</td>"+
				"<td>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</td>"+
				"<td>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</td>"+
				"<td>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</td>"+
				"<td>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</td>"+
				"<td>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</td>"+
				"<td>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</td>"+
				"<td>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</td>"+
				"<td>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</td>"+
				"<td>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</td>"+
				"<td>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</td></tr>";

			}

		}
		var head ="<tr>"+
		"<th>管辖行:</th>"+
		"<th>客户经理:</th>"+
		"<th>拜访数:</th>"+
		"<th>申请数:</th>"+
		"<th>申请拒绝数:</th>"+
		"<th>征信数:</th>"+
		"<th>征信拒绝数:</th>"+
		"<th>实调数:</th>"+
		"<th>报告数:</th>"+
		"<th>内审数:</th>"+
		"<th>上会数:</th>"+
		"<th>通过数:</th>"+
		"<th>签约数:</th>"+
		"<th>放款数:</th></tr>";

		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度查询</div>"+  
				"<div class='content' >"+ 
				"<p style='margin-bottom:10px;margin-top:10px;'>"+
				"<span style='float:left; margin-top:10px; margin-bottom:10px; margin-left:30px;'>开始日期:&nbsp;<input type ='date' id='satrtDate'/></span>"+
				"<span style='float:left; margin-top:10px; margin-bottom:10px;'>结束日期:&nbsp;<input type ='date' id='endDate'/></span>"+
				"<input type='button' style='margin-bottom:10px; margin-top:10px;' class='btn btn-large btn-primary next' value='筛选' id='sure'/></p>" +
				"<table id='sslb' class='cpTable jjTable' style='text-align:center;'>"+

				head+body+
				"</table>"+
				"<p><input type='button' class='btn btn-large btn-primary' value='修改业绩进度' id = 'save' onclick='yjjdxg()' />"+
				"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show(); 

		$("#sure").click(function(){
			$.ajax({
				url:wsHost+jdcxurl,
				type: "GET",
				dataType:'json',
				data:{
					startdate:$("#satrtDate").val(),
					enddate:$("#endDate").val(),
				},
				success: function (json){
					var obj = $.evalJSON(json);
					var booo="";
					for(var i=0;i<obj.result.length;i++){

						if(obj.result[i].managerName=="小计" || obj.result[i].managerName=="汇总"){

							booo=booo+"<tr><th>"+obj.result[i].name+"</th>"+
							"<th>"+obj.result[i].managerName+"</th>"+
							"<th>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</th>"+
							"<th>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</th>"+
							"<th>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</th>"+
							"<th>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</th>"+
							"<th>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</th>"+
							"<th>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</th>"+
							"<th>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</th>"+
							"<th>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</th>"+
							"<th>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</th>"+
							"<th>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</th>"+
							"<th>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</th>"+
							"<th>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</th></tr>";

						}else{

							booo=booo+"<tr><td>"+obj.result[i].name+"</td>"+
							"<td>"+obj.result[i].managerName+"</td>"+
							"<td>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</td>"+
							"<td>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</td>"+
							"<td>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</td>"+
							"<td>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</td>"+
							"<td>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</td>"+
							"<td>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</td>"+
							"<td>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</td>"+
							"<td>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</td>"+
							"<td>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</td>"+
							"<td>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</td>"+
							"<td>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</td>"+
							"<td>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</td></tr>";

						}

					}
					$("#sslb").html(head+booo);
				}
			})

		})
	}
}
function yjjdxg(){
	var	managerList=window.sessionStorage.getItem("managerList");
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度修改</div>"+  
			"<div class='content' >"+ 
			"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+
			"<tr>"+ 
			"<th style='width:100px;'>指定日期</th>"+  
			"<td><input class='addinput' type ='date' id='changeDate'/></td>"+
			"<th style='width:100px;'>客户经理</th>"+  
			"<td><select id ='manager_id_s' name='manager_id' >"+"<option value = '0'>请选择</option>"
			+managerList+
			"</select></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>拜访数</th>"+  
			"<td><input type='text' class='addinput' id='visitcount' name='visitcount' value='0' onfocus='onfocuss' onblur=alert('qqqqq')/></td>"+
			"<th style='width:100px;'>申请数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='applycount' name='applycount'/></td>"+
			"<th style='width:100px;'>申请拒绝数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='applyrefuse' name='applyrefuse'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>征信数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='creditcount' name='creditcount'/></td>"+
			"<th style='width:100px;'>征询拒绝数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='creditrefuse' name='creditrefuse'/></td>"+
			"<th style='width:100px;'>实调数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='realycount' name='realycount'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>报告数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='reportcount' name='reportcount'/></td>"+
			"<th style='width:100px;'>内审数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='internalcount' name='internalcount'/></td>"+
			"<th style='width:100px;'>上会数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='meetingcout' name='meetingcout'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>通过数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='passcount' name='passcount'/></td>"+
			"<th style='width:100px;'>签约数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='signcount' name='signcount'/></td>"+
			"<th style='width:100px;'>放款数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='givemoneycount' name='givemoneycount' /></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' id = 'save' />"+
			"<input type='button' class='btn btn-large' value='返回' onclick='yjjdcx()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();  
	$("#save").click(function (){
		var yjjdurl="/ipad/performmance/performUpdate.json";
		var managerId = $("#manager_id").val();
		var changedate = $("#changedate").val();
		$.ajax({
			url:wsHost+yjjdurl,
			type: "GET",
			dataType:'json',
			data:{
				userId:window.sessionStorage.getItem("userId"),
				visitcount:$("#visitcount").val(),
				applycount:$("#applycount").val(),
				applyrefuse:$("#applyrefuse").val(),
				creditcount:$("#creditcount").val(),
				creditrefuse:$("#creditrefuse").val(),
				realycount:$("#realycount").val(),
				reportcount:$("#reportcount").val(),
				internalcount:$("#internalcount").val(),
				meetingcout:$("#meetingcout").val(),
				passcount:$("#passcount").val(),
				signcount:$("#signcount").val(),
				givemoneycount:$("#givemoneycount").val(),
				manager_id:$("#manager_id_s").val(),
				changedate:$("#changeDate").val(),
			},
			success: function (json){
				var obj = $.evalJSON(json);
//				alert(obj.mess);
				window.wxc.xcConfirm(obj.mess, "success");
			}
		})

	})
	$("#manager_id_s").on("change",function(){
		var managerId = $("#manager_id_s").val();
		var changedate = $("#changeDate").val();
		if(changedate==null||changedate==""){
//			alert("请先选择修改日期！");
			window.wxc.xcConfirm("请先选择修改日期", "info");
			yjjdxg();
		}else{
			var xgjdurl ="/ipad/performmance/performselect.json"
				$.ajax({
					url : wsHost+xgjdurl,
					type : "get",
					dataType:'json',
					data : {"managerId":managerId,"changedate":changedate},
					success : function(data) {
						if(data!="null"){
							var obj = jQuery.parseJSON(data);
							$("#visitcount").val(obj.visitcount);
							$("#applycount").val(obj.applycount);
							$("#applyrefuse").val(obj.applyrefuse);
							$("#creditcount").val(obj.creditcount);
							$("#creditrefuse").val(obj.creditrefuse);
							$("#realycount").val(obj.realycount);
							$("#reportcount").val(obj.reportcount);
							$("#internalcount").val(obj.internalcount);
							$("#meetingcout").val(obj.meetingcout);
							$("#passcount").val(obj.passcount);
							$("#signcount").val(obj.signcount);
							$("#givemoneycount").val(obj.givemoneycount);
						}else{
							$("#visitcount").val("0");
							$("#applycount").val("0");
							$("#applyrefuse").val("0");
							$("#creditcount").val("0");
							$("#creditrefuse").val("0");
							$("#realycount").val("0");
							$("#reportcount").val("0");
							$("#internalcount").val("0");
							$("#meetingcout").val("0");
							$("#passcount").val("0");
							$("#signcount").val("0");
							$("#givemoneycount").val("0");
						}
					}
				});
		}
	});
}

function pxjhlb(){
	var pxjhlburl="/ipad/retraining/browse.page";
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>培训目标</th>"+  
	"<th>培训内容</th>"+
	"<th>培训方式</th>"+
	"<th>培训地点</th>"+
	"<th>培训时间</th>"+
	"<th>培训实施人</th>"+
	"<th>是否废弃</th>"+
	"</tr>";
	var tmp="";
	var result=[];
	var page=1;
	var j=1;
	$.get(wsHost+pxjhlburl,peixunjihuacallbackInfor);
	function peixunjihuacallbackInfor(json){
		var obj = $.evalJSON(json);
		for(var i =0;i<obj.result.length;i++){
			if(obj.result[i].whetherAbandoned=="false"){
				obj.result[i].whetherAbandoned="否";
			}else if(obj.result[i].whetherAbandoned=="true"){
				obj.result[i].whetherAbandoned="是";
			}
			tmp += "<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].id+"@"+obj.result[i].createdBy+"'/></span></td>"+
			"<td>"+obj.result[i].trainingObjective+"</td>"+
			"<td>"+obj.result[i].trainingContent+"</td>"+
			"<td>"+obj.result[i].trainingMethod+"</td>" +
			"<td>"+obj.result[i].trainingLocation+"</td>" +
			"<td>"+obj.result[i].trainingTime.split(/\s/g)[0]+"</td>" +
			"<td>"+obj.result[i].trainingPeople+"</td>" +
			"<td>"+obj.result[i].whetherAbandoned+"</td>" +
			"</tr>";

			if((i+1)%5==0){
				result[j]=tmp;
				tmp="";
				j++;
			}
		}
		result[j]=tmp;
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>计划管理-培训计划</div>"+ 
				"<div class='content'>"+
				"<table class='cpTable' id='pxll' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+
				"<p>" +
				"<input type='button' class='btn btn-large btn-primary' value='创建' onclick = 'cjpxjh()'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='删除' id = 'delete'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();

		$("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#pxll").html(head+result[page]);
			}else{
//				alert("当前已经是最后一页");
				window.wxc.xcConfirm("当前已经是最后一页", "info");
				page=page-1;
			}
		})
		$("#delete").click(function(){
			var deleteurl="/ipad/retraining/delete.json";
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			if ($("input[type='radio']").is(':checked')) {
				$.ajax({
					url:wsHost+deleteurl,
					dateType:'json',
					type:'GET',
					data:{
						id:values[0],
					},			
					success:function (json){
						var obj = $.evalJSON(json);
//						alert(obj.mess);
						window.wxc.xcConfirm(obj.mess, "info");
						pxjhlb();
					}
				})
			}else{
//				alert("请选择一行");
				window.wxc.xcConfirm("请选择一行", "warning");
			}
		})
		$("#syy").click(function(){
			page=page-1;
			if(result[page]){
				$("#pxll").html(head+result[page]);
			}else{
//				alert("当前已经是第一页");
				window.wxc.xcConfirm("当前已经是第一页", "info");
				page = page+1;
			}
		})
	}
}

function cjpxjh(){

	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>计划管理-培训计划-创建</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' id='pxll' style='text-align:center;'>"+
			"<tr><th colspan='4'>创建培训计划</th></tr>"+
			"<tr>"+
			"<td>培训目标:</td>"+
			"<td><input type='text' class='addinput' value='' id='trainingObjective' name='trainingObjective'/>"+
			"</td>"+
			"<td>培训方式:</td>"+
			"<td><input type='text' class='addinput' value='' id='trainingMethod' name='trainingMethod'/>"+
			"</td>"+
			"</tr>"+
			"<tr>"+
			"<td>培训地点:</td>"+
			"<td><input type='text' class='addinput' value='' id='trainingLocation' name='trainingLocation'/>"+
			"</td>"+
			"<td>培训时间:</td>"+
			"<td><input type='date' class='addinput' value='' id='trainingTime' name='trainingTime'/>"+
			"</td>"+
			"</tr>"+
			"<tr>"+
			"<td>实施人:</td>"+
			"<td><input type='text' class='addinput' value='' id='trainingPeople' name='trainingPeople'/>"+
			"</td>"+
			"<td>是否废弃:</td>"+
			"<td><select style='text-align:center;' id ='whetherAbandoned'>"+"<option value = 'false'>否</option>"+
			"<option value = 'true'>是</option></td>"+
			"</tr>"+
			"<tr>"+
			"<td><label id ='reason' for=reason>培训内容:</label></td>"+
			"<td colspan='3'><textarea style='height:80px' name='trainingContent' id='trainingContent' value=''></textarea>" +
			"</td>" +
			"</tr>"+
			"<tr>"+
			"<td><label id ='reason' for=reason>选择客户经理:</label></td>"+
			"<td colspan='3'><textarea style='height:80px' name='sdhcy' id='sdhcy' value='' select_id='' readonly='true'></textarea>" +
			"</td>" +
			"</tr>"+
			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-large btn-primary' value='保存' id = 'cjpxjh2'/>"+
			"<input type='button' class='btn btn-large' value='返回' onclick='pxjhlb()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#sdhcy").click(function(){
		var res={};
		res.select=$("#sdhcy").attr("select_id").split(",");
		cjpxjh2(res);
	})
	$("#cjpxjh2").click(function(){
		var bcpxjhurl = "/ipad/retraining/planinsert.json";
		var deleteManagerIds ="";
		$.ajax({
			url:wsHost+bcpxjhurl,
			dateType:'json',
			type:'GET',
			data:{trainingObjective:$("#trainingObjective").val(),
				trainingMethod:$("#trainingMethod").val(),
				trainingLocation:$("#trainingLocation").val(),
				trainingTimess:$("#trainingTime").val(),
				trainingPeople:$("#trainingPeople").val(),
				whetherAbandoned:$("#whetherAbandoned").val(),
				trainingContent:$("#trainingContent").val(),
				newAddManagerIds:$("#sdhcy").attr("select_id"),
				deleteManagerIds:deleteManagerIds,
				userId:window.sessionStorage.getItem("userId"),
			},			
			success:function (json){
				var obj = $.evalJSON(json);
				alert(obj.mess);
				window.wxc.xcConfirm(obj.mess, "success");
				pxjhlb();
			}
		})

	})
}

function cjpxjh2(res){
	var khjlurl="/ipad/retraining/managerInfoi.json";
	$.get(wsHost+khjlurl,managercallbackInfor);
	function managercallbackInfor(json){
		var obj = $.evalJSON(json);
		var list="";
		for(var i = 0;i<obj.manager.length;i++){
			list=list+"<span class='khjl'><label onclick='checkBox2(this,\"sdhcy\")' class='checkbox'><input class='selectmanager' type='checkbox' id='checkbox'  value='"+obj.manager[i].ID+"'/>"+obj.manager[i].DISPLAY_NAME+"</label></span>";

		}
		$("#text").html("<div class='display-div sdhtz'>"+
				"<div class='dialog-head'>"+
				"<h4>选择客户经理</h4>"+
				"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
				"<input type='text' style='margin:13px 40px;' placeholder='搜索客户经理' onkeyup='search(this,\"khjl\")'/>"+                         
				"</div>"+
				"<div class='dialog-contents'>"+
				"<p>" +
				"<span class='khjl'><label onclick='checkBox3(this,\"sdhcy\")' class='checkbox'><input type='checkbox' id='checkbox'  value=''/>全选</label></span>" +
				list+
				"</p>" +
				"</div>"+
				"<div class='dialog-bottom'>"+
				"<button type='button' class='btn btn-success' onclick='setSdhcy(),hide_dcts()' id='huoqu'>确定</button>"+
				"<button type='button' class='btn' onclick='hide_dcts()'>返回</button>"+
				"</div>"+
		"</div><!-- /display-div -->");
		var boxes = $("input.selectmanager");  
		var labels = $(".checkbox");  
		for(var i=0;i<boxes.length;i++){
			for(var j=0;j<res.select.length;j++){
				if(boxes[i].value==res.select[j]){
					boxes[i].setAttribute("checked","checked");
					labels[i+1].setAttribute("class","checkbox checkbox_checked");
				}
			}
		}
		$("#text").animate({top:"0px"},"500");
	}	
}