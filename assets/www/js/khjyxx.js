
//企业基本信息
function qyjbxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                            "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                            "<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>企业名称</td>"+          
								"<td><input type='text' id='companyName'/></td>"+
								"<td>组织类型</td>"+  
								"<td><input type='text' id='organizationPattern'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>法人代表</td>"+    
								"<td><input type='text' id='representative'/></td>"+
								"<td>实际控制人</td>"+    
								"<td><input type='text' id='realControl'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>股东股份情况</td>"+    
								"<td><input type='text' id='stockSituation'/></td>"+
								"<td>营业执照</td>"+           
								"<td>" +
									"<select id='businessLicense'>" +
										"<option>有</option>" +
										"<option>无</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>经营起始时间</td>"+    
								"<td><input type='date' id='beginDate'/></td>"+
								"<td>经营年限</td>"+    
								"<td><input type='text' id='plantingYear'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>地址</td>"+    
								"<td><input type='text' class='long' id='adress'/></td>"+
								"<td>电话</td>"+    
								"<td><input type='text' id='telephone'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
  $("#save").click(function(){
	  if($("#companyName").val()==""){
  		  window.wxc.xcConfirm("企业名称不能为空", "info"); 
  		  return;
  	  }
  	  if($("#representative").val()==""){
  		  window.wxc.xcConfirm("法人代表不能为空", "info"); 
  		 return;
  	  }
  	  if($("#realControl").val()==""){
  		  window.wxc.xcConfirm("实际控制人不能为空", "info"); 
  		 return;
  	  }
  	  if($("#adress").val()==""){
  		  window.wxc.xcConfirm("地址不能为空", "info"); 
  		 return;
  	  }
	  var person = {
			  companyName:$("#companyName").val(),
			  organizationPattern:$("#organizationPattern").val(),
			  representative:$("#representative").val(),
			  realControl:$("#realControl").val(),
			  stockSituation:$("#stockSituation").val(),
			  businessLicense:$("#businessLicense").val(),
			  beginDate:$("#beginDate").val(),
			  plantingYear:$("#plantingYear").val(),
			  adress:$("#adress").val(),
			  telephone:$("#telephone").val(),
			  customerId:addIntopiece.customerId
	  };
	  var insertqyxxurl="/ipad/customerIntopiece/insertqyxx.json";
	  $.ajax({
			url:wsHost+insertqyxxurl,
			dateType:'json',
			type:'GET',
			data:person,
			success:function (json){
				var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
  })
}
function qyjbxx_edit(addIntopiece){
	var selectqyxx="/ipad/customerIntopiece/selectqyxx.json";
	 $.ajax({
			url:wsHost+selectqyxx,
			dateType:'json',
			type:'GET',
			data:{customerId:addIntopiece.customerId},
			success:function (json){
				var obj = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
						"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:110px;'>企业名称</td>"+          
                                "<td><input type='text' id='companyName' value='"+obj.company.companyName+"'/></td>"+
                                "<td>组织类型</td>"+  
                                "<td><input type='text' id='organizationPattern' value='"+obj.company.organizationPattern+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>法人代表</td>"+    
                                "<td><input type='text' id='representative' value='"+obj.company.representative+"'/></td>"+
                                "<td>实际控制人</td>"+    
                                "<td><input type='text' id='realControl' value='"+obj.company.realControl+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>股东股份情况</td>"+    
                                "<td><input type='text' id='stockSituation' value='"+obj.company.stockSituation+"'/></td>"+
                                "<td>营业执照</td>"+           
                                "<td><input type='text' id='businessLicense' value='"+obj.company.businessLicense+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经营起始时间</td>"+    
                                "<td><input type='date' id='beginDate' value='"+formatDate(obj.company.beginDate)+"'/></td>"+
                                "<td>经营年限</td>"+    
                                "<td><input type='text' id='plantingYear' value='"+obj.company.plantingYear+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>地址</td>"+    
                                "<td><input type='text' id='adress' class='long' value='"+obj.company.adress+"'/></td>"+
                                "<td>电话</td>"+    
                                "<td><input type='text' id='telephone' value='"+obj.company.telephone+"'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
  	  if($("#companyName").val()==""){
  		  window.wxc.xcConfirm("企业名称不能为空", "info"); 
  		  return;
  	  }
  	  if($("#representative").val()==""){
  		  window.wxc.xcConfirm("法人代表不能为空", "info"); 
  		 return;
  	  }
  	  if($("#realControl").val()==""){
  		  window.wxc.xcConfirm("实际控制人不能为空", "info"); 
  		 return;
  	  }
  	  if($("#adress").val()==""){
  		  window.wxc.xcConfirm("地址不能为空", "info"); 
  		 return;
  	  }
  	  var person = {
  			  companyName:$("#companyName").val(),
  			  organizationPattern:$("#organizationPattern").val(),
  			  representative:$("#representative").val(),
  			  realControl:$("#realControl").val(),
  			  stockSituation:$("#stockSituation").val(),
  			  businessLicense:$("#businessLicense").val(),
  			  beginDate:$("#beginDate").val(),
  			  plantingYear:$("#plantingYear").val(),
  			  adress:$("#adress").val(),
  			  telephone:$("#telephone").val(),
  			  customerId:addIntopiece.customerId
  	  };
  	  var insertqyxxurl="/ipad/customerIntopiece/insertqyxx.json";
  	  $.ajax({
  			url:wsHost+insertqyxxurl,
  			dateType:'json',
  			type:'GET',
  			data:person,
  			success:function (json){
  				var obj = $.evalJSON(json);
  					window.wxc.xcConfirm(obj.mess, "info"); 
  			}
  		})
    })
		}
	 })
  }
//企业业务信息
function qyywxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
						"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>主要业务范围</td>"+          
								"<td><input type='text' id='businessLine'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>主要经营模式</td>"+  
								"<td><input type='text' id='businessModel'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>组织架构</td>"+    
								"<td><input type='text' id='orgainizationalStructrue'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>业务流程</td>"+    
								"<td><input type='text' id='businessProcess'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
$("#save").click(function(){
	  if($("#businessLine").val()==""){
  		  window.wxc.xcConfirm("主要业务范围不能为空", "info"); 
  		  return;
  	  }
  	 
	  var person = {
			  businessLine:$("#businessLine").val(),
			  businessModel:$("#businessModel").val(),
			  orgainizationalStructrue:$("#orgainizationalStructrue").val(),
			  businessProcess:$("#businessProcess").val(),
			  customerId:addIntopiece.customerId
	  };
	  var insertqyywurl="/ipad/customerIntopiece/insertqyyw.json";
	  $.ajax({
			url:wsHost+insertqyywurl,
			dateType:'json',
			type:'GET',
			data:person,
			success:function (json){
				var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
})
}
function qyywxx_edit(addIntopiece){
	var selectqyyw="/ipad/customerIntopiece/selectqyyw.json";
	 $.ajax({
			url:wsHost+selectqyyw,
			dateType:'json',
			type:'GET',
			data:{customerId:addIntopiece.customerId},
			success:function (json){
				var obj = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
						"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
                        "<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>主要业务范围</td>"+          
								"<td><input type='text' id='businessLine' value='"+obj.business.businessLine+"'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>主要经营模式</td>"+  
								"<td><input type='text' id='businessModel' value='"+obj.business.businessModel+"'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>组织架构</td>"+    
								"<td><input type='text' id='orgainizationalStructrue' value='"+obj.business.orgainizationalStructrue+"'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>业务流程</td>"+    
								"<td><input type='text' id='businessProcess' value='"+obj.business.businessProcess+"'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
$("#save").click(function(){
	  if($("#businessLine").val()==""){
		  window.wxc.xcConfirm("主要业务范围不能为空", "info"); 
		  return;
	  }
	 
	  var person = {
			  businessLine:$("#businessLine").val(),
			  businessModel:$("#businessModel").val(),
			  orgainizationalStructrue:$("#orgainizationalStructrue").val(),
			  businessProcess:$("#businessProcess").val(),
			  customerId:addIntopiece.customerId
	  };
	  var insertqyywurl="/ipad/customerIntopiece/insertqyyw.json";
	  $.ajax({
			url:wsHost+insertqyywurl,
			dateType:'json',
			type:'GET',
			data:person,
			success:function (json){
				var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
})
			}
	 })
}
//企业店铺信息
function qydpxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:150px;'>营业场所类型</td>"+          
                                "<td>" +
                                    "<select id='operationType'>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+         
                            "<tr>"+                                             
                                "<td>装修情况</td>"+          
                                "<td>" +
                                    "<select id='decorateSituation'>" +
                                        "<option>好</option>" +
                                        "<option>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text' id='houseArea'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select id='housePattern'>" +
                                        "<option>一室一厅</option>" +
                                        "<option>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date' id='beginDate'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td>" +
                                    "<select id='methods'>" +
                                        "<option>现场调查</option>" +
                                        "<option>外围调查</option>" +
                                        "<option>未调查</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
    	if($("#beginDate").val()==""){
  		  window.wxc.xcConfirm("启用起始年月", "info"); 
  		  return;
  	  }
  	  var person = {
  			operationType:$("#operationType").val(),
  			decorateSituation:$("#decorateSituation").val(),
  			houseArea:$("#houseArea").val(),
  			housePattern:$("#housePattern").val(),
  			beginDate:$("#beginDate").val(),
  			methods:$("#methods").val(),
  			  customerId:addIntopiece.customerId
  	  };
  	  var insertqydpurl="/ipad/customerIntopiece/insertqydp.json";
  	  $.ajax({
  			url:wsHost+insertqydpurl,
  			dateType:'json',
  			type:'GET',
  			data:person,
  			success:function (json){
  				var obj = $.evalJSON(json);
  					window.wxc.xcConfirm(obj.mess, "info"); 
  			}
  		})
  })
  }
function qydpxx_edit(addIntopiece){
	var selectqydp="/ipad/customerIntopiece/selectqydp.json";
	 $.ajax({
			url:wsHost+selectqydp,
			dateType:'json',
			type:'GET',
			data:{customerId:addIntopiece.customerId},
			success:function (json){
				var obj = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
                        "<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:150px;'>营业场所类型</td>"+          
                                "<td><input type='text' id='operationType' value='"+obj.dianpu.operationType+"'/></td>"+
                            "</tr>"+  
                            "<tr>"+                                                    
                                "<td>装修情况</td>"+          
                                "<td><input type='text' id='decorateSituation' value='"+obj.dianpu.decorateSituation+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>店铺面积</td>"+  
                                "<td><input type='text' id='houseArea' value='"+obj.dianpu.houseArea+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>店铺格局</td>"+    
                                "<td><input type='text' id='housePattern' value='"+obj.dianpu.housePattern+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date' id='beginDate' value='"+formatDate(obj.dianpu.beginDate)+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td><input type='text' id='methods' value='"+obj.dianpu.methods+"'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
    	if($("#beginDate").val()==""){
  		  window.wxc.xcConfirm("启用起始年月", "info"); 
  		  return;
  	  }
  	  var person = {
  			operationType:$("#operationType").val(),
  			decorateSituation:$("#decorateSituation").val(),
  			houseArea:$("#houseArea").val(),
  			housePattern:$("#housePattern").val(),
  			beginDate:$("#beginDate").val(),
  			methods:$("#methods").val(),
  			  customerId:addIntopiece.customerId
  	  };
  	  var insertqydpurl="/ipad/customerIntopiece/insertqydp.json";
  	  $.ajax({
  			url:wsHost+insertqydpurl,
  			dateType:'json',
  			type:'GET',
  			data:person,
  			success:function (json){
  				var obj = $.evalJSON(json);
  					window.wxc.xcConfirm(obj.mess, "info"); 
  			}
  		})
  })
			}})
  }
//企业开户信息
function qykhxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
						"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='khxx' class='cpTable' style='text-align:center;'>"+
								"<tr>"+      
									"<th style='width:40px;'>序号</th>"+  
									"<th>开户行</th>"+          
									"<th>账号</th>"+
								"</tr>"+
								"<tr>"+                          
									"<td>1</td>"+                   
									"<td><input type='text' id='openBank1'/></td>"+  
									"<td><input type='text' class='addinput' id='accuont1'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"khxx\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"khxx\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
  $("#save").click(function(){
      var qykhurl="/ipad/customerIntopiece/insertqykh.json";
      var num= $('#khxx tr').length-1;
      for(var i=1;i<=num;i++){
    	  if($("#openBank"+i).val()==""){
      		window.wxc.xcConfirm("第"+i+"行开户行不能为空", "info");
      		return;
      	}
      	if($("#accuont"+i).val()==""){
      		window.wxc.xcConfirm("第"+i+"行账号不能为空", "info");
      		return;
      	}
      	  $.ajax({
    			url:wsHost+qykhurl,
    			dateType:'json',
    			type:'GET',
    			data:{
    	    		customerId:addIntopiece.customerId,
    	    		openBank:$("#openBank"+i).val(),
    	    		accuont:$("#accuont"+i).val()
    					},
    			success:function (json){
    				var obj = $.evalJSON(json);
    					window.wxc.xcConfirm(obj.mess, "info"); 
    			}
    		})
      }
  })
}
function qykhxx_edit(addIntopiece){
	var fcurl="/ipad/customerIntopiece/selectqykh.json";
	var khinfo="";
	$.ajax({
		url:wsHost+fcurl,
		dateType:'json',
		type:'GET',
		data:{customerId:addIntopiece.customerId},
		success:function (json){
			var obj = $.evalJSON(json);
			for(var i=0;i<obj.kaihu.length;i++){
				khinfo=khinfo+    
				"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.kaihu[i].id+"@"+obj.kaihu[i].openBank+"@"+obj.kaihu[i].accuont+"'/>"+"</span></td>"+
				"<td><input type='text' readonly='true' class='addinput' value='"+obj.kaihu[i].openBank+"'/></td>"+
				"<td><input type='text' readonly='true' class='addinput' value='"+obj.kaihu[i].accuont+"'/></td>";
			}
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='khxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+      
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>开户行</th>"+          
                                    "<th>账号</th>"+
                                "</tr>"+
                                khinfo+
                            "</table>"+
                            "<p><input type='button' class='btn btn-primary btn-large' value='修改' id='update' />"+
                            "<input type='button' class='btn btn-primary btn-large' value='删除' id='delete' /></p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#update").click(function(){
    	if ($("input[type='radio']").is(':checked')) {
    		var values =$('input[name="checkbox"]:checked').attr("value").split("@");
    		qykhxx_update(addIntopiece,values);
    	}else{
//    		alert("请选择一行");
    		window.wxc.xcConfirm("请选择一行", "warning");
    	}
    })
    $("#delete").click(function(){
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			var deletetpurl ="/ipad/customerIntopiece/deleteInfo.json";
			$.ajax({
				url:wsHost+deletetpurl,
				type: "GET",
				dataType:'json',
				data:{
					id:values[0],
					tables:"customerinformation_qykh",
				},
				cache:false,
				success: function (json){
					var obj = $.evalJSON(json);
//					alert(obj.mess);
					window.wxc.xcConfirm(obj.mess, "success");
					lxrxx_edit(addIntopiece);
				}
			})  

		}else{
//			alert("请选择一行");
			window.wxc.xcConfirm("请选择一行", "warning");
		}

	})
		}})
  }
function qykhxx_update(addIntopiece,val){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='qykhxx_edit("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
						"<div class='content'>"+
						"<p><input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/></p>"+
							"<table class='cpTable no-border bottom-cont'>"+   
								"<tr>"+                             
									"<td style='width:110px;'>联系人姓名</td>"+         
									"<td><input type='text' class='long' id='openBank' value='"+val[1]+"'/></td>"+
								"</tr>"+
								"<tr>"+                             
									"<td>与客户关系</td>"+         
									"<td><input type='text' class='long' id='accuont' value='"+val[2]+"'/></td>"+
								"</tr>"+
							"</table>"+
						"</div>");
	  $(".right").hide();
	  $("#mainPage").show();
	  $("#save").click(function(){
		    var ccxxurl="/ipad/customerIntopiece/updateqykh.json";
		    if($("#openBank").val()==""){
	      		window.wxc.xcConfirm("开户行不能为空", "info");
	      		return;
	      	}
	      	if($("#accuont").val()==""){
	      		window.wxc.xcConfirm("账号不能为空", "info");
	      		return;
	      	}
		    	  $.ajax({
		  			url:wsHost+ccxxurl,
		  			dateType:'json',
		  			type:'GET',
		  			data:{
		  	    		id:val[0],
		  				customerId:addIntopiece.customerId,
		  				openBank:$("#openBank").val(),
		  				accuont:$("#accuont").val()
		  					},
		  			success:function (json){
		  				var obj = $.evalJSON(json);
		  					window.wxc.xcConfirm(obj.mess, "info"); 
		  			}
		  		})
		})
}
//企业其他信息
function qyqtxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                    "<div class='jjstep'>" +
                    "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                    "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                    "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                    "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                    "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
                        "</div><div class='line'></div>"+
                        "<textarea placeholder='请在文本框内记录相关情况'  class='bottom-content' style='width:95%;margin-left:2.5%;margin-top:20px;height:25em;' id='otherInfo'></textarea>"+
                        
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
    	  var person = {
    			otherInfo:$("#otherInfo").val(),
    			customerId:addIntopiece.customerId
    	  };
    	  var insertqydpurl="/ipad/customerIntopiece/insertqydp.json";
    	  $.ajax({
    			url:wsHost+insertqydpurl,
    			dateType:'json',
    			type:'GET',
    			data:person,
    			success:function (json){
    				var obj = $.evalJSON(json);
    					window.wxc.xcConfirm(obj.mess, "info"); 
    			}
    		})
    })
    }
function qyqtxx_edit(addIntopiece){
	var selectqydp="/ipad/customerIntopiece/selectqydp.json";
	 $.ajax({
			url:wsHost+selectqydp,
			dateType:'json',
			type:'GET',
			data:{customerId:addIntopiece.customerId},
			success:function (json){
				var obj = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
                        "<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
                        "</div><div class='line'></div>"+
                        "<textarea placeholder='请在文本框内记录相关情况' id='otherInfo' class='bottom-content' style='width:95%;margin-left:2.5%;margin-top:20px;height:25em;'>"+obj.dianpu.otherInfo+"</textarea>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
  	  var person = {
  			otherInfo:$("#otherInfo").val(),
  			customerId:addIntopiece.customerId
  	  };
  	  var insertqydpurl="/ipad/customerIntopiece/insertqydp.json";
  	  $.ajax({
  			url:wsHost+insertqydpurl,
  			dateType:'json',
  			type:'GET',
  			data:person,
  			success:function (json){
  				var obj = $.evalJSON(json);
  					window.wxc.xcConfirm(obj.mess, "info"); 
  			}
  		})
  })
			}})
    }

//工薪类信息
function khgxxx_add(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
						"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
                        "<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
                        "<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>工作单位</td>"+          
								"<td><input class='long' type='text' id='jobAddress'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>工作年限</td>"+  
								"<td><input type='text' id='jobYears'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>工资水平</td>"+    
								"<td><input type='text' id='jobAmount'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>职级</td>"+    
								"<td><input type='text' id='rank'/></td>"+
							"</tr>"+
							"<tr>"+                             
							"<td>公积金缴存额</td>"+    
							"<td><input type='text' id='accumulation'/></td>"+
							"</tr>"+
							"<tr>"+                             
							"<td>公积金缴存年限</td>"+    
							"<td><input type='text' id='accumulationYears'/></td>"+
							"</tr>"+
							"<tr>"+                             
							"<td>社保缴存基数</td>"+    
							"<td><input type='text' id='social'/></td>"+
							"</tr>"+
							"<tr>"+                             
							"<td>社保缴存年限</td>"+    
							"<td><input type='text' id='socialYears'/></td>"+
							"</tr>"+
							"<tr>"+                             
							"<td>单位性质</td>"+    
							"<td><input type='text' id='unitProperty'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
$("#save").click(function(){
	  if($("#businessLine").val()==""){
  		  window.wxc.xcConfirm("主要业务范围不能为空", "info"); 
  		  return;
  	  }
  	 
	  var person = {
			  jobAddress:$("#jobAddress").val(),
			  jobYears:$("#jobYears").val(),
			  jobAmount:$("#jobAmount").val(),
			  rank:$("#rank").val(),
			  accumulation:$("#accumulation").val(),
			  accumulationYears:$("#accumulationYears").val(),
			  social:$("#social").val(),
			  socialYears:$("#socialYears").val(),
			  unitProperty:$("#unitProperty").val(),
			  customerId:addIntopiece.customerId
	  };
	  var insertqyywurl="/ipad/customerIntopiece/insertgxxx.json";
	  $.ajax({
			url:wsHost+insertqyywurl,
			dateType:'json',
			type:'GET',
			data:person,
			success:function (json){
				var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
})
}
//工薪类信息
function khgxxx_edit(addIntopiece){
	var selectqydp="/ipad/customerIntopiece/selectgxxx.json";
	 $.ajax({
			url:wsHost+selectqydp,
			dateType:'json',
			type:'GET',
			data:{customerId:addIntopiece.customerId},
			success:function (json){
				var obj = $.evalJSON(json);
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'/>进件管理</div>"+  
			"<div class='content'>"+
			"<div class='jjstep'>" +
			"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
			"<div class='step3' onclick='myjjgl2("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>"+addIntopiece.chineseName+"</div>"+
			"<div class='step3' onclick='newUser1("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>信息资料采集</div>"+
			"<div class='step3' onclick='khxxzlcj("+ JSON.stringify(addIntopiece).replace(/"/g, '&quot;') +")'>客户信息类型</div>"+
			"<div class='step3'>信息录入</div>"+
			"<input type='button' class='btn btn-large btn-primary next' value='保存' id='save'/>"+
			"</div><div class='line'></div>"+
			"<table class='cpTable no-border bottom-content'>"+
			"<tr>"+                             
			"<td style='width:110px;'>工作单位</td>"+          
			"<td><input type='text' class='long' id='jobAddress' value='"+obj.gxxx.jobAddress+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>工作年限</td>"+  
			"<td><input type='text' id='jobYears' value='"+obj.gxxx.jobYears+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>工资水平</td>"+    
			"<td><input type='text' id='jobAmount' value='"+obj.gxxx.jobAmount+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>职级</td>"+    
			"<td><input type='text' id='rank' value='"+obj.gxxx.rank+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>公积金缴存额</td>"+    
			"<td><input type='text' id='accumulation' value='"+obj.gxxx.accumulation+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>公积金缴存年限</td>"+    
			"<td><input type='text' id='accumulationYears' value='"+obj.gxxx.accumulationYears+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>社保缴存基数</td>"+    
			"<td><input type='text' id='social' value='"+obj.gxxx.social+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>社保缴存年限</td>"+    
			"<td><input type='text' id='socialYears' value='"+obj.gxxx.socialYears+"'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<td>单位性质</td>"+    
			"<td><input type='text' id='unitProperty' value='"+obj.gxxx.unitProperty+"'/></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#save").click(function(){
		if($("#businessLine").val()==""){
			window.wxc.xcConfirm("主要业务范围不能为空", "info"); 
			return;
		}
		
		var person = {
				jobAddress:$("#jobAddress").val(),
				jobYears:$("#jobYears").val(),
				jobAmount:$("#jobAmount").val(),
				rank:$("#rank").val(),
				accumulation:$("#accumulation").val(),
				accumulationYears:$("#accumulationYears").val(),
				social:$("#social").val(),
				socialYears:$("#socialYears").val(),
				unitProperty:$("#unitProperty").val(),
				customerId:addIntopiece.customerId
		};
		var insertqyywurl="/ipad/customerIntopiece/insertgxxx.json";
		$.ajax({
			url:wsHost+insertqyywurl,
			dateType:'json',
			type:'GET',
			data:person,
			success:function (json){
				var obj = $.evalJSON(json);
				window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
	})
			}
			})
}