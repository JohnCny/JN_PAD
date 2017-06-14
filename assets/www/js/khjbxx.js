
//个人信息
function grxx_add(addIntopiece){
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
								"<td style='width:110px;'>申请人性别</td>"+         
								"<td id='sex'>" +
									"<label onclick='checkRadio(this)' class='radio'><input type='radio' name='sex' resu='女'/>女</label>" +
									"<label onclick='checkRadio(this)' class='radio'><input type='radio' name='sex' resu='男'/>男</laabel>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>婚姻状况</td>"+         
								"<td>" +
									"<select id='marriage'>" +
										"<option>已婚</option>" +
										"<option>未婚</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>户籍所在地</td>"+          
								"<td><input type='text' id='domicileplace'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>户籍详细地址</td>"+  
								"<td><input type='text' class='long' id='domicileinfo'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>家庭住址</td>"+    
								"<td><input type='text' class='long' id='fmallyliveplace'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>最高学位学历</td>"+           
								"<td>" +
									"<select id='education'>" +
										"<option>博士及以上</option>" +
										"<option>硕士</option>" +
										"<option>本科</option>" +
										"<option>大专</option>" +
										"<option>高中及以下</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>固定电话</td>"+    
								"<td><input type='text' id='telephone'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>移动电话</td>"+    
								"<td><input type='text' id='mobilephone'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
  
  $("#save").click(function(){
	  var sex='';
	  if ($("input[type='radio']").is(':checked')) {
		 sex= $('input[name="sex"]:checked').attr("resu");
	  }
	  var person = {
			  sex:sex,
			  marriage:$("#marriage").val(),
			  domicileplace:$("#domicileplace").val(),
			  domicileinfo:$("#domicileinfo").val(),
			  fmallyliveplace:$("#fmallyliveplace").val(),
			  education:$("#education").val(),
			  telephone:$("#telephone").val(),
			  mobilephone:$("#mobilephone").val(),
			  customerId:addIntopiece.customerId
	  };
	  var insertgrurl="/ipad/customerIntopiece/insertgr.json";
	  $.ajax({
			url:wsHost+insertgrurl,
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
function grxx_edit(addIntopiece){
	var selectgr="/ipad/customerIntopiece/selectgr.json";
	 $.ajax({
			url:wsHost+selectgr,
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
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:110px;'>申请人性别</td>"+         
                                "<td>" +obj.custp.sex+
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>婚姻状况</td>"+         
                                "<td>" +obj.custp.marriage+
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>户籍所在地</td>"+          
                                "<td><input type='text' value='"+obj.custp.domicileplace+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>户籍详细地址</td>"+  
                                "<td><input type='text' class='long' value='"+obj.custp.domicileinfo+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭住址</td>"+    
                                "<td><input type='text' class='long' value='"+obj.custp.fmallyliveplace+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>最高学位学历</td>"+           
                                "<td>" +obj.custp.education+
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>固定电话</td>"+    
                                "<td><input type='text' value='"+obj.custp.telephone+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>移动电话</td>"+    
                                "<td><input type='text' value='"+obj.custp.mobilephone+"'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
			}
		})
  }
//家庭信息
function jtxx_add(addIntopiece){
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
                                "<td style='width:145px;'>家庭成员</td>"+         
                                "<td><input type='text' id='familyNum'/></td>"+                        
                                "<td>家庭和睦</td>"+          
                                "<td>" +
                                    "<select id='familyHarmony'>" +
                                        "<option>是</option>" +
                                        "<option >否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经济依赖人数</td>"+  
                                "<td><input type='text' id='economicNum'/></td>"+
                                "<td>配偶姓名</td>"+    
                                "<td><input type='text' id='mateName'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶证件号码</td>"+    
                                "<td><input type='text' id='mateCardId'/></td>"+
                                "<td>配偶工作单位</td>"+    
                                "<td><input type='text' id='mateJobAdress'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶年收入</td>"+    
                                "<td><input type='text' id='mateIncome'/></td>"+
                                "<td>配偶电话</td>"+    
                                "<td><input type='text' id='mateTel'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶其他状况说明</td>"+    
                                "<td><input type='text' id='mateOtherInfo'/></td>"+
                                "<td>子女工作状态</td>"+    
                                "<td><input type='text' id='childJob'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>子女教育状态</td>"+    
                                "<td colspan='3'><input type='text' id='childEducation'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<table class='cpTable no-border bottom-content'>"+
                    "<tr>"+
                        "<td>父亲姓名</td>"+    
                        "<td><input type='text' id='fatherName'/></td>"+
                        "<td>父亲籍贯</td>"+    
                        "<td><input type='text' id='fatherDomicile'/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>父亲年龄</td>"+    
                        "<td><input type='text' id='fatherAge'/></td>"+
                        "<td>父亲民族</td>"+    
                        "<td><input type='text' id='fatherMinzu'/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>父亲工作单位</td>"+    
                        "<td><input type='text' id='fatherCompany'/></td>"+
                        "<td>父亲工作地址</td>"+    
                        "<td><input type='text' id='fatherCompanyAddress'/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>父亲年收入</td>"+    
                        "<td><input type='text' id='fatherIncome'/></td>"+
                        "<td>父亲联系方式</td>"+    
                        "<td><input type='text' id='fatherContact'/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                    "<td>父亲毕业院校</td>"+    
                    "<td><input type='text' id='fatherSchool'/></td>"+
                    "<td>父亲学历学位</td>"+    
                    "<td><input type='text' id='fatherEducation'/></td>"+
                    "</tr>"+
                        "</table>"+
                        "<table class='cpTable no-border bottom-content'>"+
                        "<tr>"+
                        "<td>母亲姓名</td>"+    
                        "<td><input type='text' id='motherName'/></td>"+
                        "<td>母亲籍贯</td>"+    
                        "<td><input type='text' id='motherDomicile'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>母亲年龄</td>"+    
                        "<td><input type='text' id='motherAge'/></td>"+
                        "<td>母亲民族</td>"+    
                        "<td><input type='text' id='motherMinzu'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>母亲工作单位</td>"+    
                        "<td><input type='text' id='motherCompany'/></td>"+
                        "<td>父母亲工作地址</td>"+    
                        "<td><input type='text' id='motherCompanyAddress'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>母亲年收入</td>"+    
                        "<td><input type='text' id='motherIncome'/></td>"+
                        "<td>母亲联系方式</td>"+    
                        "<td><input type='text' id='motherContact'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>母亲毕业院校</td>"+    
                        "<td><input type='text' id='motherSchool'/></td>"+
                        "<td>母亲学历学位</td>"+    
                        "<td><input type='text' id='motherEducation'/></td>"+
                        "</tr>"+
                        "</table>"+
                        "<table class='cpTable no-border bottom-content'>"+
                        "<tr>"+
                        "<td>兄弟姐妹姓名</td>"+    
                        "<td><input type='text' id='brotherName'/></td>"+
                        "<td>兄弟姐妹籍贯</td>"+    
                        "<td><input type='text' id='brotherDomicile'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>兄弟姐妹年龄</td>"+    
                        "<td><input type='text' id='brotherAge'/></td>"+
                        "<td>兄弟姐妹民族</td>"+    
                        "<td><input type='text' id='brotherMinzu'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>兄弟姐妹工作单位</td>"+    
                        "<td><input type='text' id='brotherCompany'/></td>"+
                        "<td>兄弟姐妹工作地址</td>"+    
                        "<td><input type='text' id='brotherCompanyAddress'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>兄弟姐妹年收入</td>"+    
                        "<td><input type='text' id='brotherIncome'/></td>"+
                        "<td>兄弟姐妹联系方式</td>"+    
                        "<td><input type='text' id='brotherContact'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>兄弟姐妹毕业院校</td>"+    
                        "<td><input type='text' id='brotherSchool'/></td>"+
                        "<td>兄弟姐妹学历学位</td>"+    
                        "<td><input type='text' id='brotherEducation'/></td>"+
                        "</tr>"+
                        "</table>"+
                       
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
    var family = {
    		familyNum:$("#familyNum").val(),
    		familyHarmony:$("#familyHarmony").val(),
    		economicNum:$("#economicNum").val(),
    		mateName:$("#mateName").val(),
    		mateCardId:$("#mateCardId").val(),
    		mateJobAdress:$("#mateJobAdress").val(),
    		mateIncome:$("#mateIncome").val(),
    		mateTel:$("#mateTel").val(),
    		mateOtherInfo:$("#mateOtherInfo").val(),
    		childJob:$("#childJob").val(),
    		childEducation:$("#childEducation").val(),
    		fatherName:$("#fatherName").val(),
    		fatherDomicile:$("#fatherDomicile").val(),
    		fatherAge:$("#fatherAge").val(),
    		fatherMinzu:$("#fatherMinzu").val(),
    		fatherCompany:$("#fatherCompany").val(),
    		fatherCompanyAddress:$("#fatherCompanyAddress").val(),
    		fatherIncome:$("#fatherIncome").val(),
    		fatherContact:$("#fatherContact").val(),
    		fatherSchool:$("#fatherSchool").val(),
    		fatherEducation:$("#fatherEducation").val(),
    		motherName:$("#motherName").val(),
    		motherDomicile:$("#motherDomicile").val(),
    		motherAge:$("#motherAge").val(),
    		motherMinzu:$("#motherMinzu").val(),
    		motherCompany:$("#motherCompany").val(),
    		motherCompanyAddress:$("#motherCompanyAddress").val(),
    		motherIncome:$("#motherIncome").val(),
    		motherContact:$("#motherContact").val(),
    		motherSchool:$("#motherSchool").val(),
    		motherEducation:$("#motherEducation").val(),
    		brotherName:$("#brotherName").val(),
    		brotherDomicile:$("#brotherDomicile").val(),
    		brotherAge:$("#brotherAge").val(),
    		brotherMinzu:$("#brotherMinzu").val(),
    		brotherCompany:$("#brotherCompany").val(),
    		brotherCompanyAddress:$("#brotherCompanyAddress").val(),
    		brotherIncome:$("#brotherIncome").val(),
    		brotherContact:$("#brotherContact").val(),
    		brotherSchool:$("#brotherSchool").val(),
    		brotherEducation:$("#brotherEducation").val(),
    		customerId:addIntopiece.customerId
	  };
    var insertjturl="/ipad/customerIntopiece/insertjt.json";
	  $.ajax({
			url:wsHost+insertjturl,
			dateType:'json',
			type:'GET',
			data:family,
			success:function (json){
				var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.mess, "info"); 
			}
		})
    })
  }
function jtxx_edit(addIntopiece){
	
	var selectjt="/ipad/customerIntopiece/selectjt.json";
	 $.ajax({
			url:wsHost+selectjt,
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
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px'>家庭成员</td>"+         
                                "<td><input type='text' value='"+obj.cusf.familyNum+"'/></td>"+
                                "<td>家庭和睦</td>"+          
                                "<td>"+obj.cusf.familyHarmony+"</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经济依赖人数</td>"+  
                                "<td><input type='text' value='"+obj.cusf.economicNum+"'/></td>"+
                                "<td>配偶姓名</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateName+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶证件号码</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateCardId+"'/></td>"+
                                "<td>配偶工作单位</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateJobAdress+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶年收入</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateIncome+"'/></td>"+
                                "<td>配偶电话</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateTel+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶其他状况说明</td>"+    
                                "<td><input type='text' value='"+obj.cusf.mateOtherInfo+"'/></td>"+
                                "<td>子女工作状态</td>"+    
                                "<td><input type='text' value='"+obj.cusf.childJob+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>子女教育状态</td>"+    
                                "<td colspan='3'><input type='text' value='"+obj.cusf.childEducation+"'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<table class='cpTable no-border bottom-content'>"+
                        "<tr>"+
                            "<td>父亲姓名</td>"+    
                            "<td><input type='text' id='fatherName' value='"+obj.cusf.fatherName+"'/></td>"+
                            "<td>父亲籍贯</td>"+     
                            "<td><input type='text' id='fatherDomicile' value='"+obj.cusf.fatherDomicile+"'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>父亲年龄</td>"+    
                            "<td><input type='text' id='fatherAge' value='"+obj.cusf.fatherAge+"'/></td>"+
                            "<td>父亲民族</td>"+    
                            "<td><input type='text' id='fatherMinzu' value='"+obj.cusf.fatherMinzu+"'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>父亲工作单位</td>"+    
                            "<td><input type='text' id='fatherCompany' value='"+obj.cusf.fatherCompany+"'/></td>"+
                            "<td>父亲工作地址</td>"+    
                            "<td><input type='text' id='fatherCompanyAddress' value='"+obj.cusf.fatherCompanyAddress+"'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>父亲年收入</td>"+    
                            "<td><input type='text' id='fatherIncome' value='"+obj.cusf.fatherIncome+"'/></td>"+
                            "<td>父亲联系方式</td>"+    
                            "<td><input type='text' id='fatherContact' value='"+obj.cusf.fatherContact+"'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                        "<td>父亲毕业院校</td>"+    
                        "<td><input type='text' id='fatherSchool' value='"+obj.cusf.fatherSchool+"'/></td>"+
                        "<td>父亲学历学位</td>"+    
                        "<td><input type='text' id='fatherEducation' value='"+obj.cusf.fatherEducation+"'/></td>"+
                        "</tr>"+
                            "</table>"+
                            "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+
                            "<td>母亲姓名</td>"+    
                            "<td><input type='text' id='motherName' value='"+obj.cusf.motherName+"'/></td>"+
                            "<td>母亲籍贯</td>"+    
                            "<td><input type='text' id='motherDomicile' value='"+obj.cusf.motherDomicile+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>母亲年龄</td>"+    
                            "<td><input type='text' id='motherAge' value='"+obj.cusf.motherAge+"'/></td>"+
                            "<td>母亲民族</td>"+    
                            "<td><input type='text' id='motherMinzu' value='"+obj.cusf.motherMinzu+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>母亲工作单位</td>"+    
                            "<td><input type='text' id='motherCompany' value='"+obj.cusf.motherCompany+"'/></td>"+
                            "<td>父母亲工作地址</td>"+    
                            "<td><input type='text' id='motherCompanyAddress' value='"+obj.cusf.motherCompanyAddress+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>母亲年收入</td>"+    
                            "<td><input type='text' id='motherIncome' value='"+obj.cusf.motherIncome+"'/></td>"+
                            "<td>母亲联系方式</td>"+    
                            "<td><input type='text' id='motherContact' value='"+obj.cusf.motherContact+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>母亲毕业院校</td>"+    
                            "<td><input type='text' id='motherSchool' value='"+obj.cusf.motherSchool+"'/></td>"+
                            "<td>母亲学历学位</td>"+    
                            "<td><input type='text' id='motherEducation' value='"+obj.cusf.motherEducation+"'/></td>"+
                            "</tr>"+
                            "</table>"+
                            "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+
                            "<td>兄弟姐妹姓名</td>"+    
                            "<td><input type='text' id='brotherName' value='"+obj.cusf.brotherName+"'/></td>"+
                            "<td>兄弟姐妹籍贯</td>"+    
                            "<td><input type='text' id='brotherDomicile' value='"+obj.cusf.brotherDomicile+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>兄弟姐妹年龄</td>"+    
                            "<td><input type='text' id='brotherAge' value='"+obj.cusf.brotherAge+"'/></td>"+
                            "<td>兄弟姐妹民族</td>"+    
                            "<td><input type='text' id='brotherMinzu' value='"+obj.cusf.brotherMinzu+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>兄弟姐妹工作单位</td>"+    
                            "<td><input type='text' id='brotherCompany' value='"+obj.cusf.brotherCompany+"'/></td>"+
                            "<td>兄弟姐妹工作地址</td>"+    
                            "<td><input type='text' id='brotherCompanyAddress' value='"+obj.cusf.brotherCompanyAddress+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>兄弟姐妹年收入</td>"+    
                            "<td><input type='text' id='brotherIncome' value='"+obj.cusf.brotherIncome+"'/></td>"+
                            "<td>兄弟姐妹联系方式</td>"+    
                            "<td><input type='text' id='brotherContact' value='"+obj.cusf.brotherContact+"'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                            "<td>兄弟姐妹毕业院校</td>"+    
                            "<td><input type='text' id='brotherSchool' value='"+obj.cusf.brotherSchool+"'/></td>"+
                            "<td>兄弟姐妹学历学位</td>"+    
                            "<td><input type='text' id='brotherEducation' value='"+obj.cusf.brotherEducation+"'/></td>"+
                            "</tr>"+
                            "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
			}
		})
			
  }
//车产信息
function ccxx_add(addIntopiece){
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
    						"<table id='ccxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>汽车车型</th>"+
                                    "<th>汽车车牌号</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
                                    "<td><input type='text' class='addinput' id='carVersion1'/></td>"+
    								"<td><input type='text' class='addinput' id='carNumber1'/></td>"+
    								"<td><input type='date' class='addinput' id='monetaryDate1'/></td>"+
    								"<td><input type='text' class='addinput' id='monetaryAmount1'/></td>"+
    								"<td><input type='text' class='addinput' id='currentAmount1'/></td>"+
    								"<td>" +
    								"<select id='getWay1'>" +
                                    "<option>全款</option>"+
                                    "<option>按揭</option>"+
                                "</select>" +
                                    "</td>"+
    								"<td><input type='text' class='addinput'　id='otherInfo1'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"ccxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"ccxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
					"</div>");
	$(".right").hide();
	$("#mainPage").show();
	 $("#save").click(function(){
		    var ccxxurl="/ipad/customerIntopiece/insertcc.json";
		    var num= $('#ccxx tr').length-1;
		    for(var i=1;i<=num;i++){
		    	  $.ajax({
		  			url:wsHost+ccxxurl,
		  			dateType:'json',
		  			type:'GET',
		  			data:{
		  	    		customerId:addIntopiece.customerId,
		  	    		carVersion:$("#carVersion"+i).val(),
		  				carNumber:$("#carNumber"+i).val(),
		  				monetaryDate:$("#monetaryDate"+i).val(),
		  		    	monetaryAmount:$("#monetaryAmount"+i).val(),
		  		    	currentAmount:$("#currentAmount"+i).val(),
		  		    	getWay:$("#getWay"+i).val(),
		  		    	otherInfo:$("#otherInfo"+i).val()
		  					},
		  			success:function (json){
		  				var obj = $.evalJSON(json);
		  					window.wxc.xcConfirm(obj.mess, "info"); 
		  			}
		  		})
		    }
		})
}
function ccxx_edit(addIntopiece){
	var ccurl="/ipad/customerIntopiece/selectcc.json";
	var ccinfo="";
	$.ajax({
		url:wsHost+ccurl,
		dateType:'json',
		type:'GET',
		data:{customerId:addIntopiece.customerId},
		success:function (json){
			var obj = $.evalJSON(json);
			for(var i=0;i<obj.customercar.length;i++){
				ccinfo=ccinfo+    
				"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.customercar[i].id+"'/>"+"</span></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercar[i].carVersion+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercar[i].carNumber+"'/></td>"+
				"<td><input type='date' class='addinput' value='"+obj.customercar[i].monetaryDate+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercar[i].monetaryAmount+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercar[i].currentAmount+"'/></td>"+
				"<td>" +
				obj.customercar[i].getWay+
				"</td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercar[i].otherInfo+"'/></td>"+
			"</tr>";
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
                            "<table id='ccxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>汽车车型</th>"+
                                    "<th>汽车车牌号</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                ccinfo+
                            "</table>"+
                            "<p><input type='button' class='btn btn-primary btn-large' value='删除' id='delete' /></p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#delete").click(function(){
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value");
			var deletetpurl ="/ipad/customerIntopiece/deleteInfo.json";
			$.ajax({
				url:wsHost+deletetpurl,
				type: "GET",
				dataType:'json',
				data:{
					id:values,
					tables:"customerinformation_cc",
				},
				cache:false,
				success: function (json){
					var obj = $.evalJSON(json);
//					alert(obj.mess);
					window.wxc.xcConfirm(obj.mess, "success");
					ccxx_edit(addIntopiece);
				}
			})  

		}else{
//			alert("请选择一行");
			window.wxc.xcConfirm("请选择一行", "warning");
		}

	})
		}
		})
}
//房产信息
function fcxx_add(addIntopiece){
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
    						"<table id='fcxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>房产地址</th>"+
                                    "<th>面积</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
    								"<td><input type='text' class='addinput' id='houseAddress1'/></td>"+
    								"<td><input type='text' class='addinput' id='houseArea1'/></td>"+
    								"<td><input type='date' class='addinput' id='monetaryDate1'/></td>"+
    								"<td><input type='text' class='addinput' id='monetaryAmount1'/></td>"+
    								"<td><input type='text' class='addinput' id='currentAmount1'/></td>"+
    								"<td>" +
                                        "<select id='getWay1'>" +
                                            "<option>全款</option>"+
                                            "<option>按揭</option>"+
                                        "</select>" +
                                    "</td>"+
    								"<td><input type='text' class='addinput' id='otherInfo1'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"fcxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"fcxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
    var fcxxurl="/ipad/customerIntopiece/insertfc.json";
    var num= $('#fcxx tr').length-1;
    for(var i=1;i<=num;i++){
    	  $.ajax({
  			url:wsHost+fcxxurl,
  			dateType:'json',
  			type:'GET',
  			data:{
  	    		customerId:addIntopiece.customerId,
  	    		houseAddress:$("#houseAddress"+i).val(),
  	    		houseArea:$("#houseArea"+i).val(),
  	    		monetaryDate:$("#monetaryDate"+i).val(),
  	    		monetaryAmount:$("#monetaryAmount"+i).val(),
  	    		currentAmount:$("#currentAmount"+i).val(),
  	    		getWay:$("#getWay"+i).val(),
  	    		otherInfo:$("#otherInfo"+i).val()
  					},
  			success:function (json){
  				var obj = $.evalJSON(json);
  					window.wxc.xcConfirm(obj.mess, "info"); 
  			}
  		})
    }
})
  }
function fcxx_edit(addIntopiece){
	var fcurl="/ipad/customerIntopiece/selectfc.json";
	var fcinfo="";
	$.ajax({
		url:wsHost+fcurl,
		dateType:'json',
		type:'GET',
		data:{customerId:addIntopiece.customerId},
		success:function (json){
			var obj = $.evalJSON(json);
			for(var i=0;i<obj.customerhouse.length;i++){
				fcinfo=fcinfo+    
				"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.customerhouse[i].id+"'/>"+"</span></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customerhouse[i].houseAddress+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customerhouse[i].houseArea+"'/></td>"+
				"<td><input type='date' class='addinput' value='"+obj.customerhouse[i].monetaryDate+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customerhouse[i].monetaryAmount+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customerhouse[i].currentAmount+"'/></td>"+
				"<td>" +
				obj.customerhouse[i].getWay+
				"</td>"+
				"<td><input type='text' class='addinput' value='"+obj.customerhouse[i].otherInfo+"'/></td>"+
			"</tr>";
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
							"<table id='fcxx' class='cpTable' style='text-align:center;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>房产地址</th>"+
									"<th>面积</th>"+
									"<th>购买日期</th>"+
									"<th>购买价格</th>"+
									"<th>现值（公允值）</th>"+
									"<th>购置方式</th>"+
									"<th>备注</th>"+
								"</tr>"+
								fcinfo+
							"</table>"+
							"<p><input type='button' class='btn btn-primary btn-large' value='删除' id='delete' /></p>"+
						"</div>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
$("#delete").click(function(){
	if ($("input[type='radio']").is(':checked')) {

		var values =$('input[name="checkbox"]:checked').attr("value");
		var deletetpurl ="/ipad/customerIntopiece/deleteInfo.json";
		$.ajax({
			url:wsHost+deletetpurl,
			type: "GET",
			dataType:'json',
			data:{
				id:values,
				tables:"customerinformation_fc",
			},
			cache:false,
			success: function (json){
				var obj = $.evalJSON(json);
//				alert(obj.mess);
				window.wxc.xcConfirm(obj.mess, "success");
				fcxx_edit(addIntopiece);
			}
		})  

	}else{
//		alert("请选择一行");
		window.wxc.xcConfirm("请选择一行", "warning");
	}

})

		}
		})
		
}
//联系人信息
function lxrxx_add(addIntopiece){
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
                            "<table class='cpTable' id='lxrxx' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+                 
                                    "<th>联系人姓名</th>"+                   
                                    "<th>与客户关系</th>"+   
                                    "<th>联系人电话</th>"+  
                                "</tr>"+  
                                "<tr>"+  
                                    "<td>1</td>"+
                                    "<td><input type='text' value='' id='contactName1'/></td>"+
                                    "<td><input type='text' value='' id='relation1'/></td>"+
                                    "<td><input type='text' value='' id='contactTel1'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"lxrxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"lxrxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#save").click(function(){
        var lxrxxurl="/ipad/customerIntopiece/insertlxr.json";
        var num= $('#lxrxx tr').length-1;
        for(var i=1;i<=num;i++){
        	  $.ajax({
      			url:wsHost+lxrxxurl,
      			dateType:'json',
      			type:'GET',
      			data:{
      	    		customerId:addIntopiece.customerId,
      	    		contactName:$("#contactName"+i).val(),
      	    		contactTel:$("#contactTel"+i).val(),
      	    		relation:$("#relation"+i).val(),
      					},
      			success:function (json){
      				var obj = $.evalJSON(json);
      					window.wxc.xcConfirm(obj.mess, "info"); 
      			}
      		})
        }
    })
  }
function lxrxx_edit(addIntopiece){
	var fcurl="/ipad/customerIntopiece/selectlxr.json";
	var lxrinfo="";
	$.ajax({
		url:wsHost+fcurl,
		dateType:'json',
		type:'GET',
		data:{customerId:addIntopiece.customerId},
		success:function (json){
			var obj = $.evalJSON(json);
			for(var i=0;i<obj.customercontact.length;i++){
				lxrinfo=lxrinfo+    
				"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.customercontact[i].id+"'/>"+"</span></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercontact[i].contactName+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercontact[i].contactTel+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.customercontact[i].relation+"'/></td>";
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
                            "<table class='cpTable' id='lxrxx' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+                 
                                    "<th>联系人姓名</th>"+                   
                                    "<th>与客户关系</th>"+   
                                    "<th>联系人电话</th>"+  
                                "</tr>"+  
                                "<tr>"+  
                                lxrinfo+
                                "</tr>"+
                            "</table>"+
                            "<p><input type='button' class='btn btn-primary btn-large' value='删除' id='delete' /></p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#delete").click(function(){
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value");
			var deletetpurl ="/ipad/customerIntopiece/deleteInfo.json";
			$.ajax({
				url:wsHost+deletetpurl,
				type: "GET",
				dataType:'json',
				data:{
					id:values,
					tables:"customerinformation_lxr",
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
		}
	})
  }
//居住信息
function jzxx_add(addIntopiece){
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
                                "<td style='width:145px'>居住类型</td>"+         
                                "<td>" +
                                    "<select id='houseClasses'>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+                 
                                "<td>住房装修情况</td>"+          
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
                                "<td><input type='text' id='houseAera'/></td>"+
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select id='houseSturcture'>" +
                                        "<option>一室一厅</option>" +
                                        "<option>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住起始年月</td>"+    
                                "<td><input type='date' id='beginDate'/></td>"+
                                "<td>是否按揭</td>"+    
                                "<td>" +
                                    "<select id='wetherMortgage'>" +
                                        "<option>是</option>" +
                                        "<option>否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td colspan='3'>" +
                                    "<select id='surveyWay'>" +
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
        var living = {
        		houseClasses:$("#houseClasses").val(),
        		decorateSituation:$("#decorateSituation").val(),
        		beginDate:$("#beginDate").val(),
        		wetherMortgage:$("#wetherMortgage").val(),
        		surveyWay:$("#surveyWay").val(),
        		houseSturcture:$("#houseSturcture").val(),
        		houseAera:$("#houseAera").val(),
        		customerId:addIntopiece.customerId
    	  };
        var insertjzurl="/ipad/customerIntopiece/insertjz.json";
    	  $.ajax({
    			url:wsHost+insertjzurl,
    			dateType:'json',
    			type:'GET',
    			data:living,
    			success:function (json){
    				var obj = $.evalJSON(json);
    					window.wxc.xcConfirm(obj.mess, "info"); 
    			}
    		})
        })
    
  }
function jzxx_edit(addIntopiece){
	var selectjz="/ipad/customerIntopiece/selectjz.json";
	 $.ajax({
			url:wsHost+selectjz,
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
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px;'>居住类型</td>"+         
                                "<td><input type='text' value='"+obj.living.houseClasses+"'/></td>"+              
                                "<td>住房装修情况</td>"+          
                                "<td><input type='text' value='"+obj.living.decorateSituation+"'/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text' value='"+obj.living.houseAera+"'/></td>"+
                                "<td>住房格局</td>"+    
                                "<td><input type='text' value='"+obj.living.houseSturcture+"'/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住起始年月</td>"+    
                                "<td><input type='text' value='"+obj.living.beginDate+"'/></td>"+ 
                                "<td>是否按揭</td>"+    
                                "<td><input type='text' value='"+obj.living.wetherMortgage+"'/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td><input type='text' value='"+obj.living.surveyWay+"'/></td>"+ 
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
			}
	 })
  }