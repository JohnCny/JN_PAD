  
//审核审批
function myshsp(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>审核审批</div>"+  
                    "<div class='content'>" +
                        "<div class='box shsp1' onclick='cysdrw()'>" +                            
                            "<span>查阅审贷任务</span>"+
                        "</div>"+
                        "<div class='box shsp2' onclick='shspjj()'>" +
                            "<span>审核审批进件</span>"+
                        "</div>"+
                     "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//查阅审贷任务
function cysdrw(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>查阅审贷任务</div>"+  
                    "<div class='content'>" +                        
                        "<table class='cpTable jjTable' style='text-align:center;'>"+
                            "<tr>"+                         
                                "<th></th>"+                 
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                                "<th>产品名称</th>"+
                                "<th>申请额度</th>"+
                                "<th>案件提交时间</th>"+
                                "<th>确认截止时间</th>"+
                                "<th>审核截止时间</th>"+ 
                                "<th>申请客户经理</th>"+ 
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><span class='radio'><input type='radio'/></span></td>"+
                                "<td>王军忠</td>"+
                                "<td>32045668926469</td>"+
                                "<td>集群通</td>"+
                                "<td>50000</td>"+
                                "<td>2016-04-05</td>"+
                                "<td>2016-05-05</td>"+
                                "<td>2016-06-05</td>"+
                                "<td>杨景琳</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary btn-large' value='查看' onclick='sdrwxx()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
function sdrwxx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='cysdrw()'/>查阅审贷任务</div>"+  
					"<div class='content'>" +
						"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
							"<tr>"+                        
								"<th colspan='4'>审核审批任务信息</th>"+  
							"</tr>"+
							"<tr>"+    
								"<td style='width:25%'>案件提交时间：<span>2016-04-05</span></td>"+
								"<td style='width:25%'>确认截止时间：<span>2016-05-05</span></td>"+
								"<td style='width:25%'>审核截止时间：<span>2016-06-05</span></td>"+
								"<td style='width:25%'>申请客户经理：<span>杨景琳</span></td>"+
							"</tr>"+  
						"</table>"+
						"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批客户基本信息
							"<tr>"+                        
								"<th colspan='4'>审核审批客户基本信息</th>"+  
							"</tr>"+
							"<tr>"+    
								"<td style='width:25%'>客户名称：<span>王军忠</span></td>"+
								"<td style='width:25%'>证件号码：<span>32045668926469</span></td>"+
								"<td style='width:25%'>产品名称：<span>集群通</span></td>"+
								"<td style='width:25%'>申请额度：<span>50000</span></td>"+ 
							"</tr>"+
							"<tr>"+    
								"<td>进件机构：<span>销售部</span></td>"+
								"<td>进件区域：<span>钟楼区</span></td>"+
								"<td>行业：<span>餐饮业</span></td>"+
								"<td>客户经理：<span>杨景琳</span></td>"+
							"</tr>"+  
						"</table>"+
						"<p>" +
							"<input type='button' class='btn btn-primary btn-large' value='接受' onclick='cysdrw()'/>" +
							"<input type='button' class='btn btn-large' value='拒绝' onclick='cysdrw()'/>" +
							"<input type='button' class='btn btn-large' value='不予理睬' onclick='cysdrw()'/>" +
						"</p>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();    
    
}
//审核审批进件
function shspjj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#jjsp").html("<div class='title'>" +
            		    "<img src='images/back.png' onclick='myshsp()'/>审核审批进件" +
                        "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='searchTR(this)'/>" +
            		"</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1'>选择进件</div>"+
                            "<div class='step2'>调阅客户信息</div>"+
                            "<div class='step2'>填写审核信息</div>"+
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='dykhxx()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content' style='padding-top:5px;'>"+
                            "<table class='cpTable jjTable' style='text-align:center;margin-top:0;'>"+
                                "<tr>"+                         
                                    "<th></th>"+                 
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                    "<th>产品名称</th>"+
                                    "<th>申请额度</th>"+
                                    "<th>案件提交时间</th>"+
                                    "<th>确认截止时间</th>"+
                                    "<th>审核截止时间</th>"+ 
                                    "<th>申请客户经理</th>"+ 
                                "</tr>"+
                                "<tr onclick='check(this)' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>王军忠</td>"+
                                    "<td>32045668926469</td>"+
                                    "<td>集群通</td>"+
                                    "<td>50000</td>"+
                                    "<td>2016-04-05</td>"+
                                    "<td>2016-05-05</td>"+
                                    "<td>2016-06-05</td>"+
                                    "<td>杨景琳</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#jjsp").show();    
}
//调阅客户信息
function dykhxx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='shspjj()'/>审核审批进件</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='shspjj()'>王军忠</div>"+
                            "<div class='step3'>调阅客户信息</div>"+
                            "<div class='step2'>填写审核信息</div>"+                  
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='txshxx()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<ul class='tab tab2'>" +
                                "<li class='active' onclick='changeTab(this,\"khjbxx\")'>客户基本信息</li>" +
                                "<li onclick='changeTab(this,\"zcfzb\");myzcfzb();'>资产负债表</li>" +
                                "<li onclick='changeTab(this,\"syb\");mysyb();'>损益表</li>" +
                                "<li onclick='changeTab(this,\"xjlb\");myxjlb();'>现金流表</li>" +
                                "<li onclick='changeTab(this,\"sdhjy\");mysdhjy();'>审贷会决议</li>" +
                            "</ul>"+
                            "<div class='tabDIV' id='khjbxx'>" +//客户基本信息
                                "<table class='cpTable'>"+//个人信息
                                    "<tr>"+                        
                                        "<th>个人信息" +
                                            "<img src='images/add.png' class='zk' style='display:none;' onclick='zd(this,\"grxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"grxx\")'/>" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable khjbxx' id='grxx'>"+//个人信息
                                    "<tr>"+    
                                        "<td style='width:33.3%'>申请人性别：<span>男</span></td>"+
                                        "<td style='width:33.3%'>婚姻状况：<span>已婚</span></td>"+
                                        "<td style='width:33.3%'>户籍所在地：<span>山西省太原市</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>户籍详细地址：<span>太原市柏杨树北二巷3栋3单元22号</span></td>"+
                                        "<td colspan='2'>家庭住址：<span>太原市万柏林区卧虎山公路钢中路口裕丰惠泽园10号楼-3单元-604</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>最高学位学历：<span>本科</span></td>"+
                                        "<td>固定电话：<span>123455</span></td>"+
                                        "<td>移动电话：<span>15535178821</span></td>"+
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable'>"+//家庭信息
                                    "<tr>"+                        
                                        "<th>家庭信息"+ 
                                            "<img src='images/add.png' class='zk' onclick='zd(this,\"jtxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"jtxx\")' style='display:none;' />" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+ 
                                "<table class='cpTable khjbxx' id='jtxx' style='display:none;'>"+//家庭信息
                                    "<tr>"+    
                                        "<td style='width:33.3%'>家庭成员：<span>3</span></td>"+
                                        "<td style='width:33.3%'>家庭和睦：<span>是</span></td>"+
                                        "<td style='width:33.3%'>经济依赖人数：<span>3</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>配偶姓名：<span>阎育强</span></td>"+
                                        "<td>配偶证件号码：<span>320404198002356125</span></td>"+
                                        "<td>配偶工作单位：<span></span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>配偶年收入：<span>328916元</span></td>"+
                                        "<td>配偶电话：<span>13327466941</span></td>"+
                                        "<td>配偶其他状况说明：<span></span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>子女工作状态：<span></span></td>"+
                                        "<td colspan='2'>子女教育状态：<span></span></td>"+
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable'>"+//居住信息
                                    "<tr>"+                        
                                        "<th>居住信息"+  
                                            "<img src='images/add.png' class='zk' onclick='zd(this,\"jzxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"jzxx\")' style='display:none;'/>" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+ 
                                "<table class='cpTable khjbxx' id='jzxx' style='display:none;'>"+//居住信息
                                    "<tr>"+    
                                        "<td style='width:33.3%'>居住类型：<span>自有</span></td>"+
                                        "<td style='width:33.3%'>住房装修情况：<span>好</span></td>"+
                                        "<td style='width:33.3%'>住房面积：<span>89.43㎡</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>住房格局：<span>两室一厅</span></td>"+
                                        "<td>居住起始年月：<span>2014-04-14</span></td>"+
                                        "<td>是否按揭：<span>否</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td colspan='3'>居住场所调查方式：<span>现场调查</span></td>"+
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable'>"+//房产信息
                                    "<tr>"+                        
                                        "<th>房产信息"+ 
                                            "<img src='images/add.png' class='zk' onclick='zd(this,\"fcxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"fcxx\")' style='display:none;'/>" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable khjbxx' id='fcxx' style='display:none;'>"+//房产信息
                                    "<tr>"+    
                                        "<td rowspan='3' style='width:10px;'>1</td>"+
                                        "<td colspan='2'>房产地址：<span>太原市万柏林区卧虎山公路钢中路口裕丰惠泽园10号楼-3单元-604</span></td>"+
                                        "<td>面积：<span>89.43㎡</span></td>"+
                                        "<td>购买日期：<span>2014-04-13</span></td>"+
                                    "</tr>"+
                                    "<tr>"+    
                                        "<td>购买价格：<span>306566元</span></td>"+
                                        "<td>现值（公允值）：<span>250000</span></td>"+
                                        "<td>购置方式：<span>现金</span></td>"+
                                        "<td>备注：<span></span></td>"+
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable'>"+//车产信息
                                    "<tr>"+                        
                                        "<th>车产信息"+  
                                            "<img src='images/add.png' class='zk' onclick='zd(this,\"ccxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"ccxx\")' style='display:none;'/>" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable khjbxx' id='ccxx' style='display:none;'>"+//车产信息
                                    "<tr>"+    
                                        "<td style='width:10px;'>1</td>"+
                                        "<td>汽车车型：<span>别克君越</span></td>"+
                                        "<td>汽车车牌号：<span>苏D89898</span></td>"+
                                        "<td>购买日期：<span>2015-10-10</span></td>"+
                                        "<td>购买价格：<span>30万</span></td>"+
                                        "<td>现值（公允值）：<span>25万</span></td>"+
                                        "<td>购置方式：<span>现金</span></td>"+
                                        "<td>备注：<span></span></td>"+
                                    "</tr>"+
                                "</table>"+
                                "<table class='cpTable'>"+//联系人信息
                                    "<tr>"+                        
                                        "<th>联系人信息"+
                                            "<img src='images/add.png' class='zk' onclick='zd(this,\"lxrxx\")'/>" +
                                            "<img src='images/del.png' class='zd' onclick='zd(this,\"lxrxx\")' style='display:none;'/>" +
                                        "</th>"+  
                                    "</tr>"+
                                "</table>"+  
                                "<table class='cpTable khjbxx' id='lxrxx' style='display:none;'>"+//联系人信息
                                    "<tr>"+    
                                        "<td style='width:10px;'>1</td>"+
                                        "<td>联系人姓名：<span>李丽</span></td>"+
                                        "<td>与客户关系：<span>合伙人</span></td>"+
                                        "<td>联系人电话：<span>123456789</span></td>"+
                                    "</tr>"+
                                "</table>"+
                            "</div>"+
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            "<div class='tabDIV' id='zcfzb' style='display:none;'>" +
                                //资产负债表zcfzb.js
                            "</div>"+
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            "<div class='tabDIV' id='syb' style='display:none;'>" +
                                //损益表syb.js
                            "</div>"+
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            "<div class='tabDIV' id='xjlb' style='display:none;'>" +
                                //现金流表xjlb.js
                            "</div>"+
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            "<div class='tabDIV' id='sdhjy' style='display:none;'>" +
                                //审贷会决议zcfzb.js
                            "</div>"+  
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
function zd(obj,id){//折叠表格
    if($("#"+id).css("display")=="none"){
        $("#"+id).show();
        $(obj).parent().find(".zd").show();
        $(obj).hide();
    }
    else{
        $("#"+id).hide();
        $(obj).parent().find(".zk").show();
        $(obj).hide();
    }
}
//填写审核信息
function txshxx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='dykhxx()'/>审核审批进件</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='shspjj()'>王军忠</div>"+
							"<div class='step3' onclick='dykhxx()'>调阅客户信息</div>"+
							"<div class='step3'>填写审核信息</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='提交' onclick=''/>"+
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table class='cpTable'>"+   
								"<tr>"+                        
									"<th>填写审核信息</th>"+  
								"</tr>"+
							"</table>"+
							"<table class='cpTable khjbxx'>"+  
								"<tr>"+                             
									"<td>客户索引号：<span>001</span></td>"+                      
									"<td>进件银行：<span>济南农商行</span></td>"+                     
									"<td>进件机构：<span>总行</span></td>"+                       
									"<td>拟授信额度：<span>50000</span></td>"+   
								"</tr>"+
								"<tr>"+               
									"<td>客户经理：<span>杨景琳</span></td>"+            
									"<td>审核人：<span>杨景琳</span></td>"+                      
									"<td colspan='2'>审批人：<span>杨景琳</span></td>"+ 
								"</tr>"+
								"<tr>"+          
									"<td colspan='4'>审核结论："+ 
										"<label onclick='checkRadio(this);$(\"#tg\").show();$(\"#jj\").hide();' class='radio'><input type='radio' name='radio'/>通过</label>" +
										"<label onclick='checkRadio(this);$(\"#jj\").show();$(\"#tg\").hide();' class='radio'><input type='radio' name='radio'/>拒绝</label>" +
										"<label onclick='checkRadio(this);$(\"#jj\").show();$(\"#tg\").hide();' class='radio'><input type='radio' name='radio'/>补充调查建议</label>" +
									"</td>"+
								"</tr>"+
							"</table>"+
							"<table class='cpTable khjbxx' id='tg' style='display:none;margin-top:-22px;'>"+  
								"<tr>"+                             
									"<td style='width:110px;'>授信额度</td>"+    
									"<td><input type='text'/></td>"+
								"</tr>"+
								"<tr>"+     
									"<td>风险等级</td>"+    
									"<td><select><option>一级</option><option>二级</option><option>三级</option></select></td>"+
								"</tr>"+
								"<tr>"+                             
									"<td>描述</td>"+    
									"<td><textarea style='margin-left:10px;'></textarea></td>"+
								"</tr>"+
							"</table>"+
							"<table class='cpTable khjbxx' id='jj' style='display:none;margin-top:-22px;'>"+  
								"<tr>"+                             
									"<td style='width:110px;'>风险点提示</td>"+    
									"<td><input type='text'/></td>"+
								"</tr>"+
								"<tr>"+                             
									"<td>描述</td>"+    
									"<td><textarea style='margin-left:10px;'></textarea></td>"+
								"</tr>"+
							"</table>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}