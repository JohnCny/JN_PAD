//我的计划
function mywdjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>计划管理</div>"+  
                    "<div class='content'>" +
                        "<div class='box jhgl' onclick='mykhwhjh()'><img src='images/khwhjh.png' style='margin-left:-15px;'/><span>客户维护计划</span></div>"+
                        "<div class='box jhgl' onclick='khcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
                        "<div class='box jhgl' onclick='pxjh()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
                        "<div class='box jhgl' onclick='gzjh()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>工作计划</span></div>"+                       
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//客户维护计划
function mykhwhjh(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护计划</div>"+ 
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
                                "<th width='10%'>维护方式</th>"+
                                "<th width='10%'>维护目标</th>"+
                                "<th>维护时间</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><span class='label'>还款中</span></td>"+
                                "<td>50000</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><span class='label label-warning'>已逾期</span></td>"+
                                "<td>50000</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><span class='label label-success'>已还款</span></td>"+
                                "<td>50000</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><span class='label label-important'>已拒绝</span></td>"+
                                "<td>50000</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>郝俊芝</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td>100000</td>"+
                                "<td><span class='label label-inverse'>已关闭</span></td>"+
                                "<td>50000</td>"+
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
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>培训计划</div>"+ 
                    "<div class='content'>"+
                        "<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户经理姓名</th>"+
                                "<th>培训目标</th>"+
                                "<th>培训方式</th>"+
                                "<th>培训时间</th>"+
                                "<th>考核方式</th>"+
                                "<th>客户经理确认</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td>李丽</td>"+
                                "<td>微贷知识</td>"+
                                "<td></td>"+
                                "<td>2015-12-12</td>"+
                                "<td>笔试</td>"+
                                "<td><input type='button' class='btn btn-large btn-info' value='确认'/></td>"+
                            "</tr>"+
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