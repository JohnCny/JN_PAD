
//我的首页
function mywdsy(){
	window.scrollTo(0,0);//滚动条回到顶端
	alert("取数："+window.sessionStorage.getItem("userId"));

	var get = crud.dom.factory("GET");
	wsCustManager ="/ipad/user/findSysUserMsg.json";
	var url = wsCustManager+"?userId="+window.sessionStorage.getItem("userId");
	get.doGet(url,initCustManagerContentCallback,"加载客户经理信息失败！");
	function initCustManagerContentCallback(json){
		var objs = $.evalJSON(json);
		alert(json);
		var content = "<div class='title'>我的首页</div>"+  
		"<div class='content'>" +
		"<div class='user-info'>" +
		"<img src='images/sq.jpg'/>"+
		"<p class='h2'>客户经理信息</p>"+
		"<p>姓名："+objs.result.name+"</p>"+
		"<p>性别："+objs.result.sex+"</p>"+
		"<p>年龄："+objs.result.age+"</p>"+
		"<p>所属银行："+objs.result.org+"</p>"+
		"<p>客户经理编号："+objs.result.externalId+"</p>"+
		"<p>职位：客户经理</p>"+
		"<p>授信权限：50万</p>"+
		"<p>放款总额：100万</p>"+
		"</div>"+
		"<div class='box wdsy1' onclick='mycpgl()'><img src='images/clkh.png'/><span>产品查询</span></div>"+
		"<div class='box wdsy2' onclick='khjjxx();pie()'><img src='images/khjjxx.png'/><span>客户进件信息</span></div>"+
		"<div class='box wdsy3' onclick='khyyzk()'><img src='images/khyyzk.png'/><span>客户运营状况</span></div>"+
		"<div class='box wdsy4' onclick='tz()'><img src='images/tz.png'/><span>通知</span></div>"+
		"<div class='box wdsy5' onclick='edpggj()'><img src='images/jljlxx.png'/><span>额度评估工具</span></div>"+                           
		"<div class='box wdsy5' onclick='wzxx()'><img src='images/jljlxx.png'/><span>位置信息</span></div>"+                           
		"</div>"
		$("#mainPage").html(content);
	}

	/*$("#mainPage").html("<div class='title'>我的首页</div>"+  
                        "<div class='content'>" +
                            "<div class='user-info'>" +
                                "<img src='images/sq.jpg'/>"+
                                "<p class='h2'>客户经理信息</p>"+
                                "<p>姓名：杨景琳</p>"+
                                "<p>性别：女</p>"+
                                "<p>年龄：36岁</p>"+
                                "<p>所属银行：济南农商行总行</p>"+
                                "<p>客户经理编号：01010419</p>"+
                                "<p>职位：客户经理主管</p>"+
                                "<p>授信权限：50万</p>"+
                                "<p>放款总额：100万</p>"+
                            "</div>"+
                            "<div class='box wdsy1' onclick='mycpgl()'><img src='images/clkh.png'/><span>产品查询</span></div>"+
                            "<div class='box wdsy2' onclick='khjjxx();pie()'><img src='images/khjjxx.png'/><span>客户进件信息</span></div>"+
                            "<div class='box wdsy3' onclick='khyyzk()'><img src='images/khyyzk.png'/><span>客户运营状况</span></div>"+
                            "<div class='box wdsy4' onclick='tz()'><img src='images/tz.png'/><span>通知</span></div>"+
                            "<div class='box wdsy5' onclick='edpggj()'><img src='images/jljlxx.png'/><span>额度评估工具</span></div>"+                           
                        "</div>");*/
	$(".right").hide();
	$("#mainPage").show();
}
//客户进件信息
function khjjxx(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户进件信息</div>"+  
			"<div class='content'>" +
			"<div id='ex_1' class='zingchart'></div>"+ 
			"<div class='ban'></div>"+
			"<p>" +
			"<input type='button' class='tab-button' style='margin-left:40px;' value='补充进件' onclick='bcjj()'/>" +
			"<input type='button' class='tab-button' value='拒绝进件' onclick='jjjj()'/>" +
			"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function pie() {
	// example one data
	var ex1 = {                         
			"type": "pie",
			"legend":{},
			"backgroundColor":"#fff",
			"series": [
			           {   
			        	   "backgroundColor":"#e62163","text": "拒绝进件数量  "+10,"values": [10]
			           },
			           {   
			        	   "backgroundColor":"#4e74c0","text": "审核通过数量  "+60,"values": [60]
			           }
			           ]
	};
	// render example one
	$('#ex_1').zingchart({
		data:ex1
	}); 
}
//客户进件信息-补充进件
function bcjj(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-补充进件</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>接受</th>"+
			"<th>拒绝</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td><img src='images/success.png'/></td>"+
			"<td></td>"+
			"<td><input type='button' class='btn btn-warning' value='是'/></td>"+
			"</tr>"+
			"<tr>"+    
			"<td>2</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td><img src='images/wrong.png'/></td>"+
			"<td><input type='button' class='btn btn-warning' value='是'/></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   

//客户进件信息-拒绝进件
function jjjj(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-拒绝进件</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>接受</th>"+
			"<th>拒绝</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td><img src='images/success.png'/></td>"+
			"<td></td>"+
			"</tr>"+
			"<tr>"+    
			"<td>2</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td><img src='images/wrong.png'/></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   
//客户运营状况
function khyyzk(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户运营状况</div>"+  
			"<div class='content' style='width:70%;margin:0 auto;'>" +
			"<div class='span3' style='background:#f86817;'>客户授信余额总额<br/><span>1000万</span></div>"+
			"<div class='span3' style='background:#e93c3f;'>客户授信用信总额<br/><span>1000万</span></div>"+
			"<div class='span3' style='background:#67cdcc;'>客户逾期余额总额<br/><span>1000万</span></div>"+
			"<div class='span2' style='background:#046589;'>逾期客户数<br/><span>100</span></div>"+
			"<div class='span2' style='background:#d6bf00;'>核销客户数<br/><span>500</span></div>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//我的足迹
function wdzj(){
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>杨景琳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010419</div>"+  
			"<div class='content'>" +
			"<div class='map'>地图</div>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}

//通知
function tz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>通知</div>"+  
			"<div class='content'>" +
			"<table class='cpTable' style='width:100%;height:85%;position:fixed;top:100px;bottom:0;text-align:center;'>"+
			"<tr>"+                             
			"<td style='width:33.3%;' onclick='sdhtz()'>" +
			"<img src='images/sdh.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>审贷会通知</span>" +
			"</td>"+                           
			"<td style='width:33.3%;' onclick='pxtz()'>" +
			"<img src='images/px.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>培训通知</span>" +
			"</td>"+                      
			"<td style='width:33.3%;' onclick='fpjjtz()'>" +
			"<img src='images/fpjj.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>分配进件通知</span>" +
			"</td>"+
			"</tr>"+
			"<tr>"+                         
			"<td onclick='fxsxtz()'>" +
			"<img src='images/fxsx.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>风险事项通知</span>" +
			"</td>"+                    
			"<td onclick='bcdctz()'>" +
			"<img src='images/bcdc.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>补充调查通知</span>" +
			"</td>"+                  
			"<td onclick='jjjjtz()'>" +
			"<img src='images/jjjj.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>拒绝进件通知</span>" +
			"</td>"+ 
			"</tr>"+
			"<tr>"+                         
			"<td onclick='cskhtz()'>" +
			"<img src='images/cs.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>催收客户通知</span>" +
			"</td>"+                    
			"<td onclick='khzlbgtz()'>" +
			"<img src='images/khzlbg.png'/><br/><span class='tongzhi'>10</span><br/>" +
			"<span class='tz_message'>客户资料变更通知</span>" +
			"</td>"+                  
			"<td></td>"+ 
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//通知-审贷会通知
function sdhtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-审贷会通知</div>"+  
			"<div class='content' style='margin-top:146px;'>" +
			"<div class='rcap' onclick='show_sdhtz()'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>2015-06-12 13:00<br/>~<br/>2015-06-12 14:00</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>王军忠进件002316审贷会</p>" +
			"<p class='cyz'>参与者</p>" +
			"<p class='cyzxm'>王旭、朱远炎、宋辰、谭文华</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>江苏省常州市九州环宇505</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+
			"<div class='rcap' onclick='show_sdhtz()'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>2015-06-13 13:00<br/>~<br/>2015-06-13 14:00</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>王军忠进件02356561审贷会</p>" +
			"<p class='cyz'>参与者</p>" +
			"<p class='cyzxm'>王旭、朱远炎</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>江苏省常州市九州环宇505</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+
			/*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                       
                                "<th></th>"+           
                                "<th style='width:25%;'>审贷会时间</th>"+          
                                "<th>审贷会地点</th>"+       
                                "<th>审贷会进件提示</th>"+   
                            "</tr>"+
                            "<tr onclick='check(this)'>"+       
                                "<td><span class='radio'><input type='radio'/></span></td>"+              
                                "<td>2015-06-12</td>"+          
                                "<td>综合部</td>"+          
                                "<td></td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+       
                                "<td><span class='radio'><input type='radio'/></span></td>"+              
                                "<td>2015-06-15</td>"+          
                                "<td>综合部</td>"+          
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p>" +
                            "<button class='success-button'><img src='images/yes.png'/> 确认</button>" +
                            "<button class='error-button'><img src='images/no.png'/> 拒绝</button>" +
                        "</p>" +*/
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function show_sdhtz(){
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>王军忠进件02356561审贷会</h4>"+
			"<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12 13:00</span></div>"+
			"<div>结束时间<br/><span>2015-06-12 14:00</span></div>"+
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>创建人</p>"+
			"<p class='cy'>管理员</p>"+
			"<p>参与者</p>"+
			"<p class='cy'>王旭、朱远炎、宋辰、谭文华</p>"+
			"<p>地点</p>"+
			"<p class='cy'>江苏省常州市九州环宇505</p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div><!-- /display-div -->");
	$("#text").animate({top:"0px"},"500");
}
//通知-培训通知
function pxtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-培训通知</div>"+  
			"<div class='content' style='margin-top:146px;'>" +
			"<div class='rcap' onclick='show_pxtz()'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>2015-06-12<br/>~<br/>2015-06-13</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>客户经理业务培训</p>" +
			"<p class='cyz'>参与者</p>" +
			"<p class='cyzxm'>王旭、朱远炎、宋辰、谭文华</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>江苏省常州市九州环宇505</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+   
			/*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>培训目标</th>"+
                                "<th>培训方式</th>"+
                                "<th>培训时间</th>"+
                                "<th>考核方式</th>"+
                                "<th>客户经理确认</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+*/
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function show_pxtz(){
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>客户经理业务培训</h4>"+
			"<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12</span></div>"+
			"<div>结束时间<br/><span>2015-06-13</span></div>"+
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>创建人：<span class='cy'>管理员</span></p>"+
			"<p>参与者：<span class='cy'>王旭、朱远炎、宋辰、谭文华</span></p>"+
			"<p>地点：<span class='cy'>江苏省常州市九州环宇505</span></p>"+
			"<p>培训方式：<span class='cy'>上课</span></p>"+
			"<p>考核方式：<span class='cy'>笔试</span></p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div><!-- /display-div -->");
	$("#text").animate({top:"0px"},"500");
}
//通知-分配进件通知
function fpjjtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-分配进件通知</div>"+  
			"<div class='content' style='margin-top:146px;'>" +
			"<div class='rcap' onclick='show_fpjjtz()'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>2015-06-12<br/>13:00:58</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>王军忠 / 00023</p>" +
			"<p class='cyz'>分配人</p>" +
			"<p class='cyzxm'>管理员</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>济南农商行</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+   
			/*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>接受</th>"+
                                "<th>拒绝</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+*/
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function show_fpjjtz(){
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>王军忠 / 00023</h4>"+
			"<div style='width:80%'>分配时间<br/><span>2015-06-12&nbsp;&nbsp;&nbsp;&nbsp;13:00:58</span></div>"+                           
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>分配人</p>"+
			"<p class='cy'>管理员</p>"+
			"<p>客户所属银行</p>"+
			"<p class='cy'>济南农商行</p>"+
			"<p>变更维护计划</p>"+
			"<p class='cy'>否</p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div><!-- /display-div -->");
	$("#text").animate({top:"0px"},"500");
}
//通知-风险事项通知
function fxsxtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-风险事项通知</div>"+  
			"<div class='content'>" +
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>风险事项描述</th>"+
			"<th>是否变更维护计划</th>"+
			"<th>是否变更工作计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//通知-催收客户通知
function cskhtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-催收客户通知</div>"+  
			"<div class='content'>" +
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                        
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>产品标识</th>"+
			"<th>逾期金额</th>"+
			"<th>逾期期数</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//通知-客户资料变更通知
function khzlbgtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-客户资料变更通知</div>"+  
			"<div class='content'>" +
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                        
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>产品标识</th>"+
			"<th>变更项</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}

//额度评估工具
function edpggj(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>额度评估工具</div>"+  
			"<div class='content'>" +
			"<table class='cpTable'>"+  
			"<tr>"+                     
			"<th colspan='2'>"+
			"客户：<input type='text'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
			"证件号码：<input type='text'/>"+
			"</th>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th style='width:180px;'>住房情况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1' value='A11'/>自置房屋(无贷款)</label>" +
			"<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1' value='B7'/>自置房屋(有贷款)</label>" +
			"<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1' value='C5'/>与父母同住</label>" +
			"<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1' value='D4'/>租房</label>" +
			"<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1' value='E0'/>无房</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>金融资产情况（我行）</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio2\")' class='checkbox'><input type='radio' name='radio2' value='A7'/>20万以上</label>" +
			"<label onclick='checkBox(this,\"radio2\")' class='checkbox'><input type='radio' name='radio2' value='B4'/>20万以下</label>" +
			"<label onclick='checkBox(this,\"radio2\")' class='checkbox'><input type='radio' name='radio2' value='C0'/>无</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>大件消费品拥有情况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='A5'/>完全产权车</label>" +
			"<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='B2'/>贷款购车</label>" +
			"<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='C0'/>无</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>单位性质</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='A16'/>机关/事业单位</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='B14'/>国有</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='C13'/>独资</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='D10'/>合资</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='E6'/>股份制</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='F8'/>私营</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='G4'/>其他</label>" +
			"<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='H0'/>失业无社会救济</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>现工作单位工龄</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='A3'/>10年以上</label>" +
			"<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='B2'/>5-10年</label>" +
			"<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='C1'/>1-5年</label>" +
			"<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='D0'/>一年以下</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>在现址居住时间</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='A7'/>6年以上</label>" +
			"<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='B5'/>2-6年</label>" +
			"<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='C2'/>2年以下</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>婚姻状况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='A8'/>已婚有子女</label>" +
			"<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='B5'/>已婚无子女</label>" +
			"<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='C3'/>未婚</label>" +
			"<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='D4'/>离婚</label>" +
			"<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='E5'/>再婚</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>户籍情况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='A5'/>本地户口</label>" +
			"<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='B4'/>本地农户</label>" +
			"<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='C2'/>外地户口</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>教育程度</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='A5'/>硕士及以上</label>" +
			"<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='B4'/>本科</label>" +
			"<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='C3'/>大专</label>" +
			"<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='D1'/>高中及中专</label>" +
			"<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='E0'/>初中及以下</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>职业资格证书拥有情况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='A5'/>高级</label>" +
			"<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='B4'/>中级</label>" +
			"<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='C3'/>初级</label>" +
			"<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='D1'/>其他</label>" +
			"<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='E0'/>无</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>职称</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='A5'/>高级</label>" +
			"<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='B4'/>中级</label>" +
			"<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='C3'/>初级</label>" +
			"<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='D1'/>其他</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>年龄</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='A3'/>18-30岁</label>" +
			"<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='B5'/>30-45岁</label>" +
			"<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='C4'/>45-55岁</label>" +
			"<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='D2'/>55岁以上</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>健康情况</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='A10'/>良好</label>" +
			"<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='B5'/>一般</label>" +
			"<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='C0'/>差</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+  
			"</tr>"+
			"<tr>"+                             
			"<th>公共记录</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='A20'/>无</label>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='B-5'/>拖欠记录</label>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='C-7'/>不良诉讼记录</label>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='D-20'/>治安处罚记录</label>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='E-40'/>犯罪记录</label>" +
			"<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='F0'/>未确认</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>职务</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='A10'/>厅局级及以上(公务员)</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='B7'/>处级(公务员)</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='C5'/>科级(公务员)</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='D3'/>一般干部(公务员)</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='E5'/>企业负责人</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='F3'/>中高层管理人员</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='G1'/>一般管理人员</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='H4'/>私营业主</label>" +
			"<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='I0'/>一般员工</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>个人月收入（税前）</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='A26'/>1万元以上</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='B22'/>0.8-1万元</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='C18'/>0.5-0.8万元</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='D12'/>0.3-0.5万元</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='E7'/>0.1-0.3万元</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='F5'/>0.1万元以下</label>" +
			"<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='G0'/>无</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>债务收入比</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='A17'/>0</label>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='B13'/>0-15%</label>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='C10'/>15-25%</label>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='D7'/>26-35%</label>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='E2'/>36-49%</label>" +
			"<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='F0'/>>50%</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>赡养人口</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='A5'/>无</label>" +
			"<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='B4'/>1人</label>" +
			"<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='C3'/>2人</label>" +
			"<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='D2'/>3人</label>" +
			"<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='E0'/>3人以上</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>推荐人</th>"+         
			"<td>" +
			"<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='A3'/>本公司员工推荐</label>" +
			"<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='B2'/>其他中介推荐</label>" +
			"<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='C5'/>银行推荐</label>" +
			"<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='D1'/>已担保客户推荐</label>" +
			"<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='E0'/>无</label>" +
			"<font class='dj'></font><font class='score'>0</font>"+
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>客户经理主观印象</th>"+         
			"<td>" +
			"<input type='text' onchange='qh(this)'/><font color='gray'>最高15分<font class='score'>0</font></font>" +
			"</td>"+ 
			"</tr>"+
			"<tr>"+                             
			"<th>客户单月可支配收入</th>"+         
			"<td>" +
			"<input type='text' onchange='jyed1(this)'/><font id='ed2'>1000000</font>" +
			"</td>"+
			"</tr>"+
			"<tr>"+                             
			"<th>是否属于超优客户</th>"+         
			"<td>" +
			"<input type='text' onchange='jyed2(this)'/><font color='gray'>“是”填“1”，“否”填“0”</font><font id='ed3'>500000</font>" +
			"</td>"+
			"</tr>"+
			"</table>"+
			"<table class='cpTable' style='margin-top:-20px;'>"+ 
			"<tr>"+    
			"<td style='width:33%;background:#fcd357;border:none;color:#fff;'>总分<font class='pf' id='zf'>0</font></td>"+
			"<td style='width:33%;background:#f49857;border:none;color:#fff;'>评分等级<font class='pf' id='pfdj'>B</font><font id='ed1'>20000</font></td>"+
			"<td style='background:#f26d6e;border:none;color:#fff;'>建议额度<font class='pf' id='jyed'>0</font></td>"+   
			"</tr>"+
			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-large btn-primary' value='确定'/>"+  
			"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();

}


function wzxx(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>位置信息</div>"+  
			"</div>"+
			"<div class='content' id='allmap' style='height:580px;margin:0 auto;'></div>"+
			"<div class='content' style ='margin:0 auto;'><p  align='center'>" +
			"<select id ='user'>"+"<option value = '0'>请选择客户经理</option>"+
			"<option value = 'bde2c4d855150a0a015515236b48001a'>杜宇航</option>"+
			"<option value = 'bde2c4d855150a0a0155152c4a8a002e'>许亚鹏</option>"+
			"<option value = 'bde2c4d855150a0a015515300d4f0037'>赵文杰</option>"+
			"<option value = 'bde2c4d855150a0a01551539249d0043'>王文涓</option>"+
			"<option value = 'bde2c4d855150a0a0155152acc820028'>卢曼</option>"+
			"<option value = 'ff80808154564c840154565d19b6001a'>温健</option>"+
			"</select>"+
			"<input type='button' id='ckkhjlwz' class='btn btn-large btn-primary' value='查看客户经理位置'/>"+  
			"<input type='button' id='fswdwz' class='btn btn-large btn-primary' value='发送我的位置'/>"+  
			"<input type='button' class='btn btn-large' value='返回' onclick='mywdsy()'/>"+  
			"</p></div>"
	);
	$(".right").hide();
	$("#mainPage").show();
	startGetLocation();

	$("#ckkhjlwz").click(function(){
		var userId = $("#user").val();
		var gxwzUrl = "/ipad/intopieces/selectLocation.json";

		$.ajax({
			url:wsHost+gxwzUrl,
			dateType:'json',
			type:'GET',
			//是否异步		
//			async:false,
			data:{
				userId:userId,
			},
			success:function (json){
				var obj = $.evalJSON(json);
				if(obj.success=="true"){
					managerLocation(obj);
					
				}else if(obj.success=="false"){
					
					alert("该客户经理位置信息不存在");
				}else{
					
					alert("未知错误");
				}
			}

		})
	})
	$("#fswdwz").click(function(){
		var gxwzUrl = "/ipad/intopieces/updateLocation.json";
		var userId = window.sessionStorage.getItem("userId");
		$.ajax({
			url:wsHost+gxwzUrl,
			dateType:'json',
			type:'GET',
			//是否异步		
//			async:false,
			data:{
				lat:lat,
				lon:lon,
				userId:userId,
			},
			success:function (json){
				var obj = $.evalJSON(json);
				alert(obj.message);
			}

		})
	})
}
var lon;
var lat;

function startGetLocation(){

	if(supportsGeoLocation()){ 
		alert("你的浏览器支持 GeoLocation."); 
		getLocation();
	}else{ 
		alert("不支持 GeoLocation.");
		mywdsy();
	} 

}

//检测浏览器是否支持HTML5 
function supportsGeoLocation(){ 
	return !!navigator.geolocation; 
}   
//单次位置请求执行的函数              
function getLocation(){ 
	navigator.geolocation.getCurrentPosition(mapIt,locationError); 
} 
//定位成功时，执行的函数 
function mapIt(position){  
	lon = position.coords.longitude; 
	lat = position.coords.latitude; 

//	alert("您位置的经度是："+lon+" 纬度是："+lat); 
	var map = new BMap.Map("allmap"); 
	var point = new BMap.Point(""+lon+"",""+lat+""); 
	map.centerAndZoom(point,19); 
	var gc = new BMap.Geocoder(); 
	translateCallback = function (point){ 
		var marker = new BMap.Marker(point); 
		map.addOverlay(marker); 
		map.setCenter(point); 
		gc.getLocation(point, function(rs){ 
			var addComp = rs.addressComponents; 
			if(addComp.province!==addComp.city){ 
				var sContent = 
					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>";} 
			else{ 
				var sContent = 
					"<div id = 'point' value ='"+lon+"@"+lat+"'><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+ addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>"; 
			} 
			var infoWindow = new BMap.InfoWindow(sContent); 
			map.openInfoWindow(infoWindow,point); 
		});  
	}                     
	BMap.Convertor.translate(point,0,translateCallback); 
} 
//定位失败时，执行的函数 
function locationError(error) 
{ 
	switch(error.code) 
	{ 
	case error.PERMISSION_DENIED: 
		alert("无法完成定位请求"); 
		break; 
	case error.POSITION_UNAVAILABLE: 
		alert("位置信息不可用"); 
		break; 
	case error.TIMEOUT: 
		alert("请求超时"); 
		break; 
	case error.UNKNOWN_ERROR: 
		alert("位置错误发生了"); 
		break; 
	} 
} 

function managerLocation(obj){
	
	var lon = obj.LocationInfoForm.longitude; 
	var lat = obj.LocationInfoForm.latitude; 
	var map = new BMap.Map("allmap"); 
	var point = new BMap.Point(""+lon+"",""+lat+""); 
	map.centerAndZoom(point,19); 
	var gc = new BMap.Geocoder(); 
	translateCallback = function (point){ 
		var marker = new BMap.Marker(point); 
		map.addOverlay(marker); 
		map.setCenter(point); 
		gc.getLocation(point, function(rs){ 
			var addComp = rs.addressComponents; 
			if(addComp.province!==addComp.city){ 
				var sContent = 
					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+obj.LocationInfoForm.userName+obj.LocationInfoForm.updateTime+"的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>";} 
			else{ 
				var sContent = 
					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+obj.LocationInfoForm.userName+obj.LocationInfoForm.updateTime+"的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+ addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>"; 
			} 
			var infoWindow = new BMap.InfoWindow(sContent); 
			map.openInfoWindow(infoWindow,point); 
		});  
	}                     
	BMap.Convertor.translate(point,0,translateCallback);  
}
