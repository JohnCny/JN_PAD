//新建进件
function myjjgl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>进件管理</div>"+  
					"<div class='content'>" +
					    "<div class='jjstep'>" +
    					    "<div class='step1'>选择产品</div>"+
                            "<div class='step2'>选择客户</div>"+
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='myjjgl2()'/>"+
					    "</div><div class='line'></div>"+
	                    "<div class='bottom-content' style='padding-top:5px;'>"+
    						"<table class='cpTable' style='text-align:center;margin-top:0;'>"+
                                "<tr>"+                         
                                    "<th></th>"+                 
                                    "<th>产品名称</th>"+  
                                    "<th>产品类别</th>"+
                                    "<th>产品授信区间</th>"+
                                    "<th>产品期限</th>"+
                                    "<th>产品利率</th>"+ 
                                "</tr>"+
                                "<tr onclick='check(this)'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>集群通</td>"+
                                    "<td>经营贷款</td>"+
                                    "<td>5000元—500万元</td>"+
                                    "<td>2018-01-01</td>"+
                                    "<td>8%</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>繁星通</td>"+
                                    "<td>经营贷款</td>"+
                                    "<td>5000元—500万元</td>"+
                                    "<td>2018-01-01</td>"+
                                    "<td>8%</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>信薪通</td>"+
                                    "<td>消费贷款</td>"+
                                    "<td>5000元—100万元</td>"+
                                    "<td>2018-01-01</td>"+
                                    "<td>8%</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>个税通</td>"+
                                    "<td>消费贷款</td>"+
                                    "<td>5000元—100万元</td>"+
                                    "<td>2018-01-01</td>"+
                                    "<td>8%</td>"+
                                "</tr>"+
                                "<tr onclick='check(this)'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>税信通</td>"+
                                    "<td>经营性贷款</td>"+
                                    "<td>5000元—100万元</td>"+
                                    "<td>2018-01-01</td>"+
                                    "<td>8%</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();    
}
function myjjgl2(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>" +
            		    "<img src='images/back.png' onclick='myjjgl()'/>进件管理" +
                        "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='searchTR(this)'/>" +
            		"</div>"+  
					"<div class='content'>" +
    					"<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3'>选择客户</div>"+
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='newUser1()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content' style='padding-top:5px;'>"+
    						"<table class='cpTable' style='text-align:center;margin-top:0;'>"+
                                "<tr>"+                         
                                    "<th></th>"+                 
                                    "<th>客户名称</th>"+  
                                    "<th>证件号码</th>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>刘丽云 </td>"+
                                    "<td>140104197306081725</td>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>张大军 </td>"+
                                    "<td>142602197408020057</td>"+
                                "</tr>"+
                                "<tr onclick='check(this);' class='search'>"+    
                                    "<td><span class='radio'><input type='radio'/></span></td>"+
                                    "<td>许建军 </td>"+
                                    "<td>140302197602102816</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
    
}
//新建进件
function newUser1(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myjjgl2()'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3'>选择资料类型</div>"+
                            "<div class='step2'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<div class='box jjgl' onclick='khxxzlcj()' style='margin-left:400px;margin-right:50px;display:inline-block;'>" +
                                "<img src='images/xxzl.png'/>" +
                                "<span>客户信息资料采集</span>"+
                            "</div>"+
                            "<div class='box jjgl' onclick='khyxzlcj()' style='float:none;display:inline-block;'>" +
                                "<img src='images/yxzl.png'/>" +
                                "<span>客户影像资料采集</span>"+
                            "</div>"+
						"</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
}

//客户信息资料采集
function khxxzlcj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='message1' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户基本信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>个人信息<span class='label label-success'>已录入</span></td>"+             
                                    "<td>房产信息<span class='label label-success'>已录入</span></td>"+
                                    "<td>家庭信息<span class='label label-success'>已录入</span></td>"+ 
                                    "<td>车产信息<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>联系人信息<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>居住信息<span class='label label-success'>已录入</span></td>"+
                                "</tr>"+
                                "<tr>"+       
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='grxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='grxx_edit()'/>" +
                                    "</td>"+         
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fcxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fcxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jtxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='ccxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='ccxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lxrxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lxrxx_edit()'/>" +
                                    "</td>"+   
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jzxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jzxx_edit()'/>" +
                                    "</td>"+
                                "</tr>"+                           
                            "</table>"+
                            "<table id='message2' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='5'>客户经营信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>企业基本信息<span class='label label-success'>已录入</span></td>"+             
                                    "<td>企业业务信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>企业店铺信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>企业开户信息<span class='label label-success'>已录入</span></td>"+            
                                    "<td>其他信息<span class='label label-success'>已录入</span></td>"+     
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyjbxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyjbxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyywxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyywxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qydpxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qydpxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qykhxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qykhxx_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyqtxx_edit()'/>" +
                                    "</td>"+
                                "</tr>"+
                            "</table>"+
                            "<table id='message3' class='cpTable'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户财务信息</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td rowspan='2'>资产负债表</td>"+              
                                    "<td>资产状况<span class='label label-success'>已录入</span></td>"+                  
                                    "<td>负债情况<span class='label label-success'>已录入</span></td>"+             
                                    "<td>权益状况<span class='label label-important'>未录入</span></td>"+             
                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zczk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zczk_edit()'/>" +
                                    "</td>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fzqk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fzqk_edit()'/>" +
                                    "</td>"+								
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='qyzk_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='qyzk_edit()'/>" +
                                    "</td>"+															
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zcfzqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zcfzqtxx_edit()'/>" +
                                    "</td>"+           
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+   								
                                    "<td rowspan='2'>损益表</td>"+              
                                    "<td>利润表简表<span class='label label-important'>未录入</span></td>"+                  
                                    "<td>利润表标准表<span class='label label-important'>未录入</span></td>"+             
                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+                 
                                    "<td></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+
                                "<tr>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lrbjb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lrbjb_edit()'/>" +
                                    "</td>"+
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='lrbbzb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='lrbbzb_edit()'/>" +
                                    "</td>"+								
    								"<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='syqtxx_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='syqtxx_edit()'/>" +
                                    "</td>"+           
                                    "<td></td>"+            
                                    "<td></td>"+ 
                                "</tr>"+	
                                "<tr>"+          
                                    "<td>现金流表<span class='label label-important'>未录入</span></td>"+            
                                    "<td>点货单<span class='label label-success'>已录入</span></td>"+            
                                    "<td>固定资产清单<span class='label label-success'>已录入</span></td>"+        
                                    "<td>应收预付清单<span class='label label-important'>未录入</span></td>"+      
                                    "<td>应付预收清单<span class='label label-important'>未录入</span></td>"+      
                                    "<td>负债项目明细清单<span class='label label-important'>未录入</span></td>"+   
                                "</tr>"+
                                "<tr>"+  
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='xjlb_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='xjlb_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='dhd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='dhd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='gdzcqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='gdzcqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='ysyfqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='ysyfqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='yfysqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='yfysqd_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fzxmmxqd_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fzxmmxqd_edit()'/>" +
                                    "</td>"+
                                "</tr>"+
                            "</table>"+ 
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}

//客户影像资料采集
function khyxzlcj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>影像资料采集</div>"+  
                    "<div class='content' style='text-align:center;'>" +  
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
                            "<div class='step3'>选择信息类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='message1' class='cpTable' style='margin-top:20px;'>"+
                                "<tr>"+                             
                                    "<th colspan='6'>客户影像资料</th>"+ 
                                "</tr>"+
                                "<tr>"+                             
                                    "<td>房产证<span class='label label-success'>已录入</span></td>"+             
                                    "<td>结婚证<span class='label label-success'>已录入</span></td>"+
                                    "<td>征信报告<span class='label label-important'>未录入</span></td>"+ 
                                    "<td>银行流水<span class='label label-important'>未录入</span></td>"+            
                                    "<td>其他影像资料<span class='label label-success'>已录入</span></td>"+
                                "</tr>"+
                                "<tr>"+       
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='fcz_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='fcz_edit()'/>" +
                                    "</td>"+         
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='jhz_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='jhz_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='zxbg_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='zxbg_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                        "<input type='button' class='btn' value='添加' onclick='yhls_add()'/>" +
                                        "<input type='button' class='btn' value='查看' onclick='yhls_edit()'/>" +
                                    "</td>"+
                                    "<td>" +
                                    "<input type='button' class='btn' value='添加' onclick='qtyxzl_add()'/>" +
                                    "<input type='button' class='btn' value='查看' onclick='qtyxzl_edit()'/>" +
                                "</td>"+
                                "</tr>"+                           
                            "</table>"+ 
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}