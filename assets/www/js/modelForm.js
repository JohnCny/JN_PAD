function modelinput(){
	
	var modelbody= "<div class='title' id='mjjgl2'><img src='images/back.png' onclick='mykhgl()'/>四维授信评估模型</div>"+  
	"<div class='content'>" +
		"<table class='cpTable jjTable' border='1' bordercolor='#CCCCCC'>"+
		"<tr>"+                        
		"<th colspan='6'>基本信息</th>"+  
		"</tr>"+
		"<tr>"+
       "<th id='xm'>姓名</th>"+
       "<td><input type='text' name='cname' id ='cname' value='' /></td>"+
       "<th  id='sfz'>身份证号</th>"+
       "<td><input type='text' name='cardNo' id ='cardNo' value='' /></td>"+
		"</td>"+
       "<th  id='hjsz'>户籍所在地</th>"+
       "<td><input type='text' name='domicileLocation' id ='domicileLocation' value='' /></td>"+
      
		"<tr>"+
       "<th  id='xxdz'>详细地址</th>"+
       "<td><input type='text' name='address' id ='address' value='' /></td>"+
       "<th  id='dh'>电话</th>"+
       "<td><input type='text' name='phoneNo' id ='phoneNo' value='' /></td>"+
		"</td>"+
       "<th  id='posfz'>配偶身份证号</th>"+
       "<td><input type='text' name='spouseIdNo' id ='spouseIdNo' value='' /></td>"+
       "<tr>"+
       "<th  id='qydz'>店铺/企业地址</th>"+
       "<td><input type='text' name='companyAddress' id ='companyAddress' value='' /></td>"+
       "<th  id='sshy'>所属行业</th>"+
       "<td colspan='3'><input type='text' name='industry' id ='industry' value='' /></td>"+
		"</td>"+ 
		"<tr>"+                        
		"<th colspan='6'>评估信息</th>"+  
		"</tr>"+
		"<tr>"+
		   "<th  >模型类型</th>"+ 
        "<td colspan='5'>"+
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='CREDIT_CPY'/>信用-企业主模型</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='CREDIT_INDI'/>信用-受薪者模型</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='WARR_CPY'/>担保-企业主模型</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='WARR_INDI'/>担保-受薪者模型</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='COLLE_CPY'/>抵押-企业主模型</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='modelType' resu='COLLE_INDI'/>抵押-受薪者模型</label>" +
		   "</td>"+
		"</tr>"+
		"<tr>"+   
       "<th  >申请贷款金额(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='applyAmount' id ='applyAmount'   value=''/></td>"+
       
       "<th  >贷款用途</th>"+ 
       "<td>"+
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='loanUse' resu='0'/>消费</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='loanUse' resu='1'/>经营</label>" +
		  "</td>"+
		"</td>"+
		   "<th  >性别</th>"+
        "<td>"+
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='sex' resu='0'/>男</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='sex' resu='1'/>女</label>" +
		   "</td>"+
		"<tr>"+
        "<th  >最高学位学历</th>"+
        "<td>"+
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='education' resu='0'/>初中及以下</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='education' resu='1'/>高中及技校</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='education' resu='2'/>大学及以上</label>" +
		   "</td>"+
		   
		   "<th  >户籍所在地</th>"+
        "<td>"+
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='residence' resu='0'/>本地</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='residence' resu='1'/>本省外地</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='residence' resu='2'/>省外</label>" +
		  "</td>"+
		"</td>"+
		  "<th  >子女教育状况</th>"+
       "<td>"+
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='childrenEducation' resu='0'/>无子女</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='childrenEducation' resu='1'/>上学</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='childrenEducation' resu='2'/>学龄前</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='childrenEducation' resu='3'/>工作</label>" +
		 "</td>"+
		"<tr>"+   
		   "<th  >年龄</th>"+
        "<td><input type='text' class='rinpstynum' name='age' id ='age' value=''/></td>"+
        
        "<th  >婚姻状况</th>"+
        "<td>"+
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='marriage' resu='0'/>已婚</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='marriage' resu='1'/>未婚</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='marriage' resu='2'/>离婚</label>" +
        "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='marriage' resu='3'/>再婚</label>" +
		  " </td>"+
		"</td>"+
		
		
		
		
       "<th  >自有房产数量</th>"+
       "<td><input type='text' class='rinpstynum'  name='ownedPropertyQuantity' id ='ownedPropertyQuantity'   value=''/></td>"+
       "<tr>"+
       "<th  >按揭房产数量</th>"+
       "<td><input type='text' class='rinpstynum' name='mortgagePropertyQuantity'   id ='mortgagePropertyQuantity' value=''/></td>"+
       
       "<th  >按揭贷款余额(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='mortgateBalance' id ='mortgateBalance'  value=''/></td>"+
		"</td>"+
		
		
       "<th  >自有车辆数量</th>"+
       "<td><input type='text' class='rinpstynum'  name='ownedCarsQuantity' id ='ownedCarsQuantity'   value=''/></td>"+
       
		"<tr>"+
       "<th  >业务年限</th>"+
       "<td><input type='text' class='rinpstynum' name='businessYears'   id ='businessYears' value=''/></td>"+
       
       "<th  >信用状况</th>"+
       "<td>"+
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='credit' resu='1'/>正常</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='credit' resu='2'/>不正常</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='credit' resu='3'/>无记录</label>" +
       "</td>"+
       "<th  >信用逾期次数</th>"+
       "<td><input type='text' class='rinpstynum'  name='creditCardOverdueCount' id ='creditCardOverdueCount'   value=''/></td>"+
       
		"<tr>"+
       "<th  >贷款逾期次数</th>"+
       "<td><input type='text' class='rinpstynum' name='loanOverdueCount'   id ='loanOverdueCount' value=''/></td>"+
       
       "<th  >贷款余额(元)</th>"+
       "<td><input type='text' class='rinpsty' name='loanBalance'   id ='loanBalance' value=''/></td>"+
		"</td>"+
		
		
       "<th  >担保余额(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='mortgageRemaining' id ='mortgageRemaining'   value=''/></td>"+
       
		"<tr>"+
       "<th  >经济上依赖的人数</th>"+
       "<td><input type='text' class='rinpstynum' name='numOfEconomicDependence'   id ='numOfEconomicDependence' value=''/></td>"+
       
       "<th  >流动资产(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='liquidAssents'   id ='liquidAssents' value=''/></td>"+
		"</td>"+
		
		
       "<th  >存货(元)</th>"+
       "<td><input type='text' class='rinpsty'   name='stock' id ='stock'   value=''/></td>"+
       
		"<tr>"+
       "<th  >固定资产(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='fixedAssents'   id ='fixedAssents' value=''/></td>"+
       
       "<th  >短期负债(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='shortTermLiabilities'   id ='shortTermLiabilities' value=''/></td>"+
		"</td>"+
		
		
       "<th  >负债总计(元)</th>"+
       "<td><input type='text' class='rinpsty'   name='totalLiabilities' id ='totalLiabilities'   value=''/></td>"+
       
		"<tr>"+
       "<th  >资产总计(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='totalAssents'   id ='totalAssents' value=''/></td>"+
       
       "<th  >所有者权益(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='ownersEquity'   id ='ownersEquity' value=''/></td>"+
		"</td>"+
		
		
       "<th  >主营业务收入(元)</th>"+
       "<td><input type='text' class='rinpsty'   name='annualIncome' id ='annualIncome'   value=''/></td>"+
       
		"<tr>"+
       "<th  >其他工作年收入(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='otherIncome'   id ='otherIncome' value=''/></td>"+
       
       "<th  >配偶年收入(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='spouseIncome'   id ='spouseIncome' value=''/></td>"+
		"</td>"+
		
		
       "<th  >私人用途分期付款(元)</th>"+
       "<td><input type='text' class='rinpsty'   name='paymentByPrivateUse' id ='paymentByPrivateUse'   value=''/></td>"+
       
	    "<tr>"+
       "<th  >年可支配收入(元)</th>"+
       "<td><input type='text' class='rinpsty'  name='annualDisposableCapital'   id ='annualDisposableCapital' value=''/></td>"+
       
       "<th  >抵质押物品种类</th>"+
       "<td>"+
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='articleCategory' resu='0'/>商业房产</label>" +
       "<label onclick='checkBoxModel(this)' class='checkbox'><input type='radio' name='articleCategory' resu='1'/>住宅</label>" +
		  "</td>"+
       "<th  >抵押物估值(元)</th>"+
       "<td><input type='text' class='rinpsty' name='collateralValuation' id ='collateralValuation' value=''/></td>"+
		"</td>"+
  "</table>"+
  "<p>" +
	"<input type='button' class='btn btn-large btn-primary' value='确定' id='sure'/>"+
	"<input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/></p>"+
  "</div>";
		$("#mainPage").html(modelbody);
		$("#sure").click(function(){
			var modelFormData={};
			if($("#applyAmount").val()=="")  {
				  window.wxc.xcConfirm("申请贷款金额不能为空","warning")
				  return;
			}
			modelFormData.applyAmount=$("#applyAmount").val();
			var loanUse= $('input[name="loanUse"]:checked').attr("resu");
			if(loanUse==""||loanUse==undefined) {
				  window.wxc.xcConfirm("贷款用途不能为空","warning")
				  return;
			}
			modelFormData.loanUse=loanUse;
			var sex= $('input[name="sex"]:checked').attr("resu");
			if(sex==""||sex==undefined) {
				  window.wxc.xcConfirm("性别不能为空","warning")
				  return;
			}
			modelFormData.sex=sex;
			if($("#age").val()=="") {
				  window.wxc.xcConfirm("年龄不能为空","warning")
				  return;
			}
			modelFormData.age=$("#age").val();
			var education= $('input[name="education"]:checked').attr("resu");
			if(education==""||education==undefined) {
				  window.wxc.xcConfirm("最高学历学位不能为空","warning")
				  return;
			}
			modelFormData.education=education;
			var residence= $('input[name="residence"]:checked').attr("resu");
			if(residence==""||residence==undefined) {
				  window.wxc.xcConfirm("户籍所在地不能为空","warning")
				  return;
			}
			modelFormData.residence=residence;
			var marriage= $('input[name="marriage"]:checked').attr("resu");
			if(marriage==""||marriage==undefined) {
				  window.wxc.xcConfirm("婚姻状况不能为空","warning")
				  return;
			}
			modelFormData.marriage=marriage;
			var childrenEducation= $('input[name="childrenEducation"]:checked').attr("resu");
			if(childrenEducation==""||childrenEducation==undefined) {
				  window.wxc.xcConfirm("子女教育情况不能为空","warning")
				  return;
			}
			modelFormData.childrenEducation=childrenEducation;
			if($("#ownedPropertyQuantity").val()=="") {
				 window.wxc.xcConfirm("自有房产数量不能为空","warning")
				 return;
			}
			modelFormData.ownedPropertyQuantity=$("#ownedPropertyQuantity").val();
			if($("#mortgagePropertyQuantity").val()=="") {
				  window.wxc.xcConfirm("按揭房产数量不能为空","warning")
				  return;
			}
			modelFormData.mortgagePropertyQuantity=$("#mortgagePropertyQuantity").val();
			if($("#mortgateBalance").val()=="") {
				  window.wxc.xcConfirm("按揭贷款余额不能为空","warning")
				  return;
			}
			modelFormData.mortgateBalance=$("#mortgateBalance").val();
			if($("#ownedCarsQuantity").val()=="") {
				  window.wxc.xcConfirm("自有车辆数量不能为空","warning")
				  return;
			}
			modelFormData.ownedCarsQuantity=$("#ownedCarsQuantity").val();
			if($("#businessYears").val()=="") {
				  window.wxc.xcConfirm("业务年限不能为空","warning")
				  return;
			}
			modelFormData.businessYears=$("#businessYears").val();
			var credit= $('input[name="credit"]:checked').attr("resu");
			if(credit==""||credit==undefined) {
				  window.wxc.xcConfirm("信用状况不能为空","warning")
				  return;
			}
			modelFormData.credit=credit;
			if($("#creditCardOverdueCount").val()=="") {
				window.wxc.xcConfirm("信用逾期次数不能为空","warning")
				return;
			}
			modelFormData.creditCardOverdueCount=$("#creditCardOverdueCount").val();
			if($("#loanOverdueCount").val()=="") {
				window.wxc.xcConfirm("贷款逾期次数不能为空","warning")
				return;
			}
			modelFormData.loanOverdueCount=$("#loanOverdueCount").val();
			if($("#loanBalance").val()=="") {
				window.wxc.xcConfirm("贷款余额不能为空","warning")
				return;
			}
			modelFormData.loanBalance=$("#loanBalance").val();
			if($("#mortgageRemaining").val()=="") {
				window.wxc.xcConfirm("担保余额不能为空","warning")
				return;
			}
			modelFormData.mortgageRemaining=$("#mortgageRemaining").val();
			if($("#numOfEconomicDependence").val()=="") {
				window.wxc.xcConfirm("经济上依赖的人数不能为空","warning") 
				return;
			}
			modelFormData.numOfEconomicDependence=$("#numOfEconomicDependence").val();
			if($("#liquidAssents").val()=="") {
				window.wxc.xcConfirm("流动资产不能为空","warning")
				return;
			}
			modelFormData.liquidAssents=$("#liquidAssents").val();
			if($("#stock").val()=="") {
				window.wxc.xcConfirm("存货不能为空","warning")
				return;
			}
			modelFormData.stock=$("#stock").val();
			if($("#fixedAssents").val()=="") {
				window.wxc.xcConfirm("固定资产不能为空","warning")
				return;
			}
			modelFormData.fixedAssents=$("#fixedAssents").val();
			if($("#shortTermLiabilities").val()=="") {
				window.wxc.xcConfirm("短期负债不能为空","warning")
				return;
			}
			modelFormData.shortTermLiabilities=$("#shortTermLiabilities").val();
			if($("#totalLiabilities").val()=="") {
				window.wxc.xcConfirm("负债总计不能为空","warning")
				return;
			}
			modelFormData.totalLiabilities=$("#totalLiabilities").val();
			if($("#totalAssents").val()=="") {
				window.wxc.xcConfirm("资产总计不能为空","warning")
				return;
			}
			modelFormData.totalAssents=$("#totalAssents").val();
			if($("#ownersEquity").val()=="") {
				window.wxc.xcConfirm("所有者权益不能为空","warning")
				return;
			}
			modelFormData.ownersEquity=$("#ownersEquity").val();
			if($("#annualIncome").val()=="") {
				window.wxc.xcConfirm("主营业务收入不能为空","warning")
				return;
			}
			modelFormData.annualIncome=$("#annualIncome").val();
			if($("#otherIncome").val()=="") {
				window.wxc.xcConfirm("其他工作年收入不能为空","warning")
				return;
			}
			modelFormData.otherIncome=$("#otherIncome").val();
			if($("#spouseIncome").val()=="") {
				window.wxc.xcConfirm("配偶年收入不能为空","warning")
				return;
			}
			modelFormData.spouseIncome=$("#spouseIncome").val();
			if($("#paymentByPrivateUse").val()=="") {
				window.wxc.xcConfirm("私人用途分期付款不能为空","warning")
				return;
			}
			modelFormData.paymentByPrivateUse=$("#paymentByPrivateUse").val();
			if($("#annualDisposableCapital").val()=="") {
				window.wxc.xcConfirm("年可支配收入不能为空","warning")
				return;
			}
			modelFormData.annualDisposableCapital=$("#annualDisposableCapital").val();
			var articleCategory= $('input[name="articleCategory"]:checked').attr("resu");
			if(articleCategory==""||articleCategory==undefined) {
				window.wxc.xcConfirm("抵质押物品种类不能为空","warning")
				return;
			}
			modelFormData.articleCategory=articleCategory;
			if($("#collateralValuation").val()=="") {
				window.wxc.xcConfirm("抵押物估值不能为空","warning")
				return;
			}
			modelFormData.collateralValuation=$("#collateralValuation").val();
			if($("#cname").val()=="") {
				window.wxc.xcConfirm("姓名不能为空","warning")
				return;
			}
			modelFormData.cname=$("#cname").val();
			if($("#cardNo").val()=="") {
				window.wxc.xcConfirm("身份证号不能为空","warning")
				return;
			}
			modelFormData.cardNo=$("#cardNo").val();
			var modelType= $('input[name="modelType"]:checked').attr("resu");
			if(modelType==""||modelType==undefined) {
				window.wxc.xcConfirm("模型类型不能为空","warning")
				return;
			}
			modelFormData.address=$("#address").val();
			modelFormData.domicileLocation=$("#domicileLocation").val();
			modelFormData.phoneNo=$("#phoneNo").val();
			modelFormData.spouseIdNo=$("#spouseIdNo").val();
			modelFormData.companyAddress=$("#companyAddress").val();
			modelFormData.industry=$("#industry").val();
			modelFormData.modelType=modelType;
			modelFormData.userId=window.sessionStorage.getItem("userId");
			modelFormData.userType=window.sessionStorage.getItem("userType");
			modelFormData.userName=window.sessionStorage.getItem("displayName");
			var modelUrl="/ipad/modelForm/insertresult.json";
			$.ajax({
		        url:wsHost + modelUrl,
		        type: "GET",
		        dataType:'json',
		        data:modelFormData,
		        success: function (json) {
		        	var objs = $.evalJSON(json);
		        	if(objs.issuccess){
		        		window.wxc.xcConfirm("建议授信额度为："+objs.evaresult.money+"元","success");
		        	}else{
		        		window.wxc.xcConfirm(objs.mess,"success");
		        	}
		        }
			})
		})

		$(document).ready(function() {
			
		$(".rinpsty").live("keydown",function(e){
				
				$(this).moneyFormat();
				
			});

		$(".rinpstynum").live("keydown",function(e){
			
			$(this).numFormat();
			
		});
			
		});
		$.fn.extend({
			moneyFormat : function () {
				return this.each(function () {
					$(this).keyup(function () {
						var reg = /^\d*\.?\d{0,2}$/,
						reg2 = /(?:\d*\.\d{0,2}|\d+)/,
						reg3 = /[^.0-9]+/;
						var _val = $(this).val(),
						isPlus = /^-/.test(_val),
						_val = isPlus ? _val.substr(1) : _val;
						if (!reg.test(_val)) {
							_val = _val.replace(reg3, "").match(reg2);
							_val = _val == null ? "" : _val[0];
							$(this).val(isPlus ? ("-" + _val) : _val);
						}
					}).blur(function () {
						var reg1 = /^\d+$/,
						reg2 = /^\.\d{0,2}$/,
						reg3 = /^\d+\.\d{0,2}$/,
						reg4 = /^0+(?:[1-9]\d*|0)\.\d{0,2}$/,
						reg5 = /^0+((?:[1-9]\d*|0)\.\d{0,2})$/;
						var _val = $(this).val(),
						isPlus = /^-/.test(_val),
						_val = isPlus ? _val.substr(1) : _val;
						if (reg1.test(_val)) {
							_val = _val + ".00";
						}
						if (reg4.test(_val)) {
							_val = _val.replace(reg5, "$1");
						}
						if (reg2.test(_val)) {
							_val = "0" + _val;
						}
						if (reg3.test(_val)) {
							var len = _val.length - _val.indexOf(".") - 1,
							str = "";
							for (var i = 0; i < 2 - len; i++) {
								str += "0";
							}
							_val += str;
						}
						$(this).val(isPlus ? ("-" + _val) : _val);
					});
				});
			}
		});
		$.fn.extend({
			numFormat : function () {
				return this.each(function () {
					$(this).keyup(function () {
						var reg = /^\d+$/;
						var _val = $(this).val();
						if (reg.test(_val)) {
							_val = _val
						}else{
							
							_val = ""
						}
						$(this).val(_val);
					}).blur(function () {
						var reg1 = /^\d+$/;
						if (reg1.test(_val)) {
							_val = _val ;
						}else{
							
							_val = ""
						}
					
						$(this).val(_val);
					});
				});
			}
		});
}
function getModelResult(){
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head =	"<tr>"+  
	"<th></th>"+
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>评估结果</th>"+
	"<th>评估额度</th>"+
	"<th>评估时间</th>"+
	"<th>拒绝原因</th>"+
	"<th>所属客户经理</th>"+
	"</tr>"; 
	var modelselectUrl="/ipad/modelForm/selectresult.json";
	$.ajax({
        url:wsHost + modelselectUrl,
        type: "GET",
        dataType:'json',
        data:{
        	userId:window.sessionStorage.getItem("userId"),
			userType:window.sessionStorage.getItem("userType")
        },
        success: function (json) {
        	var obj = $.evalJSON(json);
        	
        	for(var i = 0;i<obj.result.length;i++){
        		tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value=''/>"+"</span></td>"+  
				"<td>"+obj.result[i].cname+"</td>"+
				"<td>"+obj.result[i].cardNo+"</td>"+
				"<td>"+obj.result[i].result+"</td>"+
				"<td>"+obj.result[i].money+"</td>"+
				"<td>"+formatDate(obj.result[i].createdTime)+"</td>"+
				"<td>"+obj.result[i].refuseReason+"</td>"+
				"<td>"+obj.result[i].userName+"</td>"+
				"</tr>"
				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
        	}
        	result[j]=tmp;
        	window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' id='backtop'　onclick='mykhgl()'/>模型评估结果查询</div>"+  
					"<div class='content'>"+
					"<table class='cpTable' id = 'cslb' style='text-align:center;'>"+
					head +result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large'' value='返回' id='backdown' onclick='mykhgl()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
        	
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#cslb").html(head+result[page]);
				}else{
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#cslb").html(head+result[page]);
				}else{
					window.wxc.xcConfirm("当前已经是第一页", "info");
					page = page+1;
				}
			})
        }
	})
}