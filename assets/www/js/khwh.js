//客户维护-客户资料查询
function khzlcx(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户管理-客户资料查询</div>"+  
                    "<div class='content' style='height:280px;padding-top:80px;background:url(images/book.jpg) no-repeat center center;'>" +
                        "<p>客户姓名:<input type='text' id ='customerName'/></p>"+
                        "<p>证件类型:<select><option>身份证</option></select></p>"+
                        "<p>证件号码:<input type='text' id ='cardId'/></p>"+
                        "<p><input type='button' id = 'select' class='btn btn-large btn-primary' value='查询'/></p>" +
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    
    $("#select").click(function() {
    	
    	var customerName = $("#customerName").val();
    	var cardId = $("#cardId").val();
    	if(customerName!=""||cardId!=""){
    		var objs={};
    		objs.customerName=customerName;
    		objs.cardId=cardId;
    		khcx(objs);
    	}else{
    	alert("请填入姓名和证件号码中至少一种");
    	}
    })
}
//客户维护-客户资料查询-查询
function khcx(objs){
var obj = null;
var wsLoginUrl = "/ipad/product/selectCustomerInfoByCardId.json"+"?cardId="+objs.cardId;
$.ajax({
    url:wsHost + wsLoginUrl,
    type: "GET",
    dataType:'json',
    success: function (json) {
    	obj = $.evalJSON(json);
    }
})
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khzlcx()'/>客户管理-客户资料查询</div>"+  
                    "<div class='content'>" +
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='2' id ='top'> &nbsp;&nbsp;&nbsp;&nbsp;32045056659885166</td>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<td style='width:25%;'>贷款进度</td>"+          
                                "<td>审核中</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>还款状态</td>"+  
                                "<td>已放款</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='客户资料查询' onclick=''/></p>" +
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
	document.getElementById("top").innerHTML =obj.chinese_name;
}

//客户维护-客户维护计划
function khwhjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护计划</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>产品标识</th>"+
                                "<th>贷款金额</th>"+
                                "<th>还款状态</th>"+
                                "<th>贷款余额</th>"+
                                "<th style='width:15%;'>维护方式</th>"+
                                "<th style='width:15%;'>维护目标</th>"+
                                "<th style='width:15%;'>维护时间</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td>还款中</td>"+
                                "<td>50000</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
//客户维护-客户维护日志
function khwhrz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护日志</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>维护方式</th>"+
                                "<th>维护时间</th>"+
                                "<th>实施效果</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>2015-12-12</td>"+
                                "<td></td>"+
                                "<td><input type='button' onclick='khwhjh()' class='btn btn-warning' value='是'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<textarea placeholder='客户维护实施描述' style='height:15em;'></textarea>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
//客户维护-客户催收日志
function khcsrz(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护-客户催收日志</div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>催收方式</th>"+
                                "<th>催收时间</th>"+
                                "<th>实施效果</th>"+
                                "<th>承诺还款金额</th>"+
                                "<th>承诺还款时间</th>"+
                                "<th>是否变更催收计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td>电话</td>"+
                                "<td>2015-12-12</td>"+
                                "<td></td>"+
                                "<td>3000</td>"+
                                "<td>2015-12-12</td>"+
                                "<td><input type='button' onclick='bgcsjh()' class='btn btn-warning' value='是'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<textarea placeholder='客户催收实施描述' style='height:15em;'></textarea>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   
//变更催收计划
function bgcsjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>杨景琳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010419</div>"+ 
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
                                "<th>催收方式</th>"+
                                "<th>催收目标</th>"+
                                "<th>催收时间</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td>3000</td>"+
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }   