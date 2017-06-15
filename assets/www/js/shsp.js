//审核审批
function myshsp(){
	var userType = window.sessionStorage.getItem("userType");
	var shspshow;
	var show1 = "<div class='box shspp1' onclick='cysdrw()'><img src='images/shsp1.png'/>" +                            
	"<span>进件初审</span>"+
	"</div>"+
	"<div class='box shspp1' onclick='sdjy()'><img src='images/shsp2.png'/>" +
	"<span>审贷决议</span>"+
	"</div>";
	var show2 = "<div class='box shspp1' onclick='buzhangsp()'><img src='images/shsp3.png'/>" +
	"<span>小微负责人审批</span>"+
	"</div>"+
	"<div class='box shspp1' onclick='lsywbfzrsp()'><img src='images/shsp4.png'/>" +
	"<span>零售业务部负责人审批</span>"+
	"</div>"+
	"<div class='box shspp1' onclick='hzsp()'><img src='images/shsp5.png'/>" +
	"<span>行长审批</span>"+
	"</div>";
	if(Number(userType)!=1){
		shspshow = show1+show2;
	}else{
		shspshow=show1;
	}
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>审核审批</div>"+  
			"<div class='content'>" +
			shspshow+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//进件初审
function cysdrw(){
	var sdrwurl= "/ipad/intopieces/csBrowse.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
	"<th></th>"+                 
	"<th>客户名称</th>"+  
	"<th>申请金额</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>申请时间</th>"+
	"<th>节点名称</th>"+ 
	"</tr>"
	$.ajax({
		url:wsHost+sdrwurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
			nextNodeName:"进件初审",
		},
		success: function (json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){
				if(obj.items[i].cardType=="0"){
					obj.items[i].cardType="身份证";
				}else if(obj.items[i].cardType=="1"){
					obj.items[i].cardType="军官证";
				}else if(obj.items[i].cardType=="2"){
					obj.items[i].cardType="护照";
				}else if(obj.items[i].cardType=="3"){
					obj.items[i].cardType="香港身份证";
				}else if(obj.items[i].cardType=="4"){
					obj.items[i].cardType="澳门身份证";
				}else if(obj.items[i].cardType=="5"){
					obj.items[i].cardType="台湾身份证";
				}
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}

				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].productId+"@"+
				obj.items[i].applyQuota+"@"+obj.items[i].customerId+"@"+obj.items[i].id+
				"@"+obj.items[i].status+"@"+obj.items[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].cardType+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].createdTime+"</td>"+			
				"<td>"+obj.items[i].nodeName+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}

			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>进件初审</div>"+  
					"<div class='content' >"+ 
					"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+
					
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='客户详细信息' id ='khxxxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
					"<input type='button' class='btn btn-primary btn-large' value='初审结论' id='csjl'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();   

			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#cslb").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#cslb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "info");
					page = page+1;
				}
			})

			$("#csjl").click(function() {
				if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.appId = values[3];
					res.customerId = values[2];
					res.productId =values[0];
					res.applyQuota = values[1];
					csresult(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xsyxzl").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.customerId = values[2];
					res.productId =values[0];
					res.applicationId =values[3];
					res.currentLoc ="cysdrw()";
					xsyxzl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xszlxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#xszlxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");

					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="cysdrw()";
					xszlxx(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#khxxxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#khxxxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="cysdrw()";
					res.customerId =values[2];
					ckkhqtxxs(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})


		}

	})

}

//影像资料
function xsyxzl(res){
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>影像资料</div>"+  
			"</div>"+
			"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
			"<div class='spinner'>"+
			"<div class='bounce1'></div>"+
			"<div class='bounce2'></div>"+
			"<div class='bounce3'></div>"+
			"</div>"+
			"</div>"+
			"</div>");
	var yxzlurl="/ipad/JnpadImageBrowse/uploadYx.json";
	var obj;
	var id;
	var page = 0;
	var lltpurl;
	$.get(wsHost+yxzlurl,{customerId:res.customerId,productId:res.productId,applicationId:res.applicationId},callbackfunction);
		function  callbackfunction (json){
			obj = $.evalJSON(json);
		var smallimages="";
			for(var i=0;i<obj.imagerList.length;i++){
				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+obj.imagerList[i].id;
				smallimages+="<li class='item'><a href='"+wsHost+lltpurl+"' data-type='image'><img src='"+wsHost+lltpurl+"' alt='' /></a></li>";
			}
			var bigimages="";
//			for(var i=0;i<obj.imagerList.length;i++){
//				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+obj.imagerList[i].id;
//				bigimages+="<li class='item--big'><a href='#'><figure><img src='"+wsHost+lltpurl+"' alt='' />" +
//						" <figcaption class='img-caption'></figcaption></figure></a></li>";
//			}
			
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>影像资料</div>"+
			"<div class='content'>" +
			"<div id='gallery-container' class='plusview'>"+
			"<ul>"+
			smallimages+
			"</ul>"+
//			"<ul class='tems--big'>"+
//			bigimages+
//			"</ul>"+
			"</div>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#imageBrowse").html(
			"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
	);
	
	$(function() {
		$('.plusview').plusview();
	});
	
//	 $(document).ready(function(){
//	     $('#gallery-container').sGallery({
//	        fullScreenEnabled: true
//	      });
//	    });
	 var nStartx, nStarty, nEndx, nEndy;
	 var dist = 100;
	 document.getElementById("gallery-container").addEventListener("touchstart",
	            function (e) {
	                  nStartx = e.targetTouches[0].pageX;
	                  nStarty = e.targetTouches[0].pageY;
	                  console.log("touch start:" + nStartx + "," + nStarty);
	            });
	 document.getElementById("gallery-container").addEventListener("touchend",
	           function (e) {
	                  nEndx = e.changedTouches[0].pageX;
	                  nEndy = e.changedTouches[0].pageY;
	                  console.log("touch end:" + nEndx + "," + nEndy);
	                  if(nEndx-nStartx>dist)   //向右滑动
	                  {
	                     //执行逻辑
	                	  $("#syy").click();
	                  }
	                  else if(nStartx-nEndx>dist) //向左滑动
	                  {
	                     //执行逻辑
	                	  $("#xyy").click();
	                  }
	 });
//	$("#ckyt").click(function(){
//		var values=$("#ckyt").val();
//		var xx="查看原图";
//		var xxx="查看小图";
//		if(values==xx){
//			
//		$("#imageBrowse").html(
//				"<img id ='images' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
//		);
//		$("#ckyt").val("查看小图");
//		}else if(values==xxx){
//			$("#imageBrowse").html(
//					"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
//			);
//			$("#ckyt").val("查看原图");
//		}
//	})
//	
//	$("#syy").click(function(){
//		
//		page=page-1; 
//		if(page>=0){
//			id=obj.imagerList[page].id
//			lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
//			$("#imageBrowse").html(
//					"<img id ='images' style='text-align:center' width='500px' src='"+wsHost+lltpurl+"' alt=''/>"
//			);
//		}else{
////			alert("当前已经是第一页");
//			window.wxc.xcConfirm("当前已经是第一页", "info");
//			page = page+1;
//		}
//	})
//	
//	$("#xyy").click(function(){
//		
//		page=page+1; 
//		if(page<obj.size){
//			id=obj.imagerList[page].id
//			lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
//			$("#imageBrowse").html(
//					"<img id ='images' width='500px' height='500px'  src='"+wsHost+lltpurl+"' alt=''/>"
//			);
//		}else{
////			alert("当前已经是最后一页");
//			window.wxc.xcConfirm("当前已经是最后一页", "info");
//			page = page-1;
//		}
//	});
	
		}
//	})
}
////影像资料
//function xsyxzl(res){
//	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>影像资料</div>"+  
//			"</div>"+
//			"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
//			"<div class='spinner'>"+
//			"<div class='bounce1'></div>"+
//			"<div class='bounce2'></div>"+
//			"<div class='bounce3'></div>"+
//			"</div>"+
//			"</div>"+
//	"</div>");
//	var yxzlurl="/ipad/JnpadImageBrowse/uploadYx.json";
//	var obj;
//	var id;
//	var page = 0;
//	var lltpurl;
////	$.ajax({
////		url:wsHost+yxzlurl,
////		type: "GET",
////		dataType:'json',
////		data:{
////			customerId:res.customerId,
////		},
////		success: 
//	$.get(wsHost+yxzlurl,{customerId:res.customerId,productId:res.productId,applicationId:res.applicationId},callbackfunction);
//	function  callbackfunction (json){
//		obj = $.evalJSON(json);
//		id=obj.imagerList[0].id;
//		lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
//		
//		
//		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>影像资料</div>"+
//				"<div class='content'>" +
//				"<div class='tabplace' id='imageBrowse' style='text-align:center;margin:0 auto;'>图片加载中..." +
//				"</div>"+
//				"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
//				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
//				"<input type='button' class='btn btn-large btn-primary' value='查看原图' id = 'ckyt'/>"+
//				"<input type='button' class='btn btn-large' value='返回' ondblclick='"+res.currentLoc+" /></p>"+
//		"</div>");
//		$(".right").hide();
//		$("#mainPage").show();
//		$("#imageBrowse").html(
//				"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
//		);
//		
//		var nStartx, nStarty, nEndx, nEndy;
//		var dist = 100;
//		document.getElementById("imageBrowse").addEventListener("touchstart",
//				function (e) {
//			nStartx = e.targetTouches[0].pageX;
//			nStarty = e.targetTouches[0].pageY;
//			console.log("touch start:" + nStartx + "," + nStarty);
//		});
//		document.getElementById("imageBrowse").addEventListener("touchend",
//				function (e) {
//			nEndx = e.changedTouches[0].pageX;
//			nEndy = e.changedTouches[0].pageY;
//			console.log("touch end:" + nEndx + "," + nEndy);
//			if(nEndx-nStartx>dist)   //向右滑动
//			{
//				//执行逻辑
//				$("#syy").click();
//			}
//			else if(nStartx-nEndx>dist) //向左滑动
//			{
//				//执行逻辑
//				$("#xyy").click();
//			}
//		});
//		$("#ckyt").click(function(){
//			var values=$("#ckyt").val();
//			var xx="查看原图";
//			var xxx="查看小图";
//			if(values==xx){
//				
//				$("#imageBrowse").html(
//						"<img id ='images' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
//				);
//				$("#ckyt").val("查看小图");
//			}else if(values==xxx){
//				$("#imageBrowse").html(
//						"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
//				);
//				$("#ckyt").val("查看原图");
//			}
//		})
//		
//		$("#syy").click(function(){
//			
//			page=page-1; 
//			if(page>=0){
//				id=obj.imagerList[page].id
//				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
//				$("#imageBrowse").html(
//						"<img id ='images' style='text-align:center' width='500px' src='"+wsHost+lltpurl+"' alt=''/>"
//				);
//			}else{
////			alert("当前已经是第一页");
//				window.wxc.xcConfirm("当前已经是第一页", "info");
//				page = page+1;
//			}
//		})
//		
//		$("#xyy").click(function(){
//			
//			page=page+1; 
//			if(page<obj.size){
//				id=obj.imagerList[page].id
//				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
//				$("#imageBrowse").html(
//						"<img id ='images' width='500px' height='500px'  src='"+wsHost+lltpurl+"' alt=''/>"
//				);
//			}else{
////			alert("当前已经是最后一页");
//				window.wxc.xcConfirm("当前已经是最后一页", "info");
//				page = page-1;
//			}
//		});
//		
//	}
////	})
//}
//显示调查模板
function xszlxx(res){
	var dcmburl="/ipad/product/browerModel.json";
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>调查模板</div>"+  
			"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
			"<div class='spinner'>"+
			"<div class='bounce1'></div>"+
			"<div class='bounce2'></div>"+
			"<div class='bounce3'></div>"+
			"</div>"+
			"</div>"+
			"</div>");
	$.ajax({
		url:wsHost+dcmburl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		success: function (json){
			var obj = $.evalJSON(json);
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+res.currentLoc+"'/>调查模板</div>"+  
					"<div class='content'>" +
					"<div class='tabplace'>"+
					"<ul class='tab' >"+
					"<li name='tab2' id ='jyb' style='background:#22a5d9;'>建议</li>"+
					"<li name='tab2' id ='jbzkb'>基本状况</li>"+
					"<li name='tab2' id = 'zcfzb'>资产负债</li>"+
					"<li name='tab2' id = 'bzlrb'>标准利润</li>"+
					"<li name='tab2' id = 'xjlb'>现金流</li>"+
					"<li name='tab2' id = 'jcb'>交叉</li>"+
					"<li name='tab2' id = 'gzb'>固资</li>"+
					"<li name='tab2' id = 'yfysb'>应付预收</li>"+
					"<li name='tab2' id = 'ysyfb'>应收预付</li>"+
					"<li name='tab2' id = 'jueyb'>决议表</li>"+
					"<li name='tab2' id = 'ddtjy'>抵贷通经营表</li>"+
					"<li name='tab2' id = 'ddtxf'>抵贷通消费表</li>"+
					"</ul></div>"+
					"<div id = 'resultshow'>"+
					obj.tableContentjyb+
					"</div>"+
					"<p><input type='button' class='btn btn-large' value='返回' onclick='"+res.currentLoc+"'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			//建议表
			$("#jyb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentjyb);
			})

			//基本状况
			$("#jbzkb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentjbzkb);
			})

			//资产负债
			$("#zcfzb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentzcfzb);
			})

			//标准利润
			$("#bzlrb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentbzlrb);
			})

			//现金流
			$("#xjlb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentxjlb);
			})

			//交叉
			$("#jcb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentxjXb);
			})

			//固资
			$("#gzb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentxgzb);
			})

			//应付预收
			$("#yfysb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentyfysb);
			})

			//应收预付
			$("#ysyfb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentysyfb);
			})

			//决议表
			$("#jueyb").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentjueyb);
			})
			//抵贷通经营
			$("#ddtjy").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentddtjy);
			})
			//抵贷通消费
			$("#ddtxf").click(function(){
				change(this);
				$("#resultshow").html(obj.tableContentddtxf);
			})
		},
		error:function(json){
			var obj = $.evalJSON(json);
//			alert(obj.mess);
			window.wxc.xcConfirm(obj.mess, "error");
		}
		
	})
	function change(own){
		$("li[name='tab2']").css("background","#bfbfbf");
		own.style.background="#22a5d9";
	}
}
//初审结论
function csresult(res){
	var tjjlurl = "/ipad/intopieces/updateAll.json";
	var csjlurl = "/ipad/intopieces/csInfo.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+csjlurl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		cache:false,
		success: function (json){
			var obj = $.evalJSON(json);
			var	managerList=window.sessionStorage.getItem("managerList");
			var sddd="";
			if(obj.evaResult!=null){
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td>"+obj.evaResult.result+"</td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td>"+obj.evaResult.money+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td>"+obj.evaResult.cname+"</td>"+
				"<th>身份证号：</th>"+
				"<td>"+obj.evaResult.cardNo+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td>"+obj.evaResult.sex+"</td>"+
				"<th>经营状况得分：</th>"+
				"<td>"+obj.evaResult.busScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td>"+obj.evaResult.habScore+"</td>"+
				"<th>生存状况得分：</th>"+
				"<td>"+obj.evaResult.liveScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td>"+obj.evaResult.payAbli+"</td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td>"+obj.evaResult.project+"</td>"+
				"</tr>";
			}else{
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td></td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td></td>"+
				"<th>身份证号：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td></td>"+
				"<th>经营状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td></td>"+
				"<th>生存状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td></td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td></td>"+
				"</tr>";
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='cysdrw()'/>进件初审结论</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>评估结果</th>"+  
					"</tr>"+
					sddd+
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.prodCreditRange+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+obj.producAttribute.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><select id ='cyuser1'>"+"<option value = '0'>请选择</option>"
					+managerList+
					"</select></td>"+
					"<th>参与审批人：</th>"+
					"<td><select id ='cyuser2'>"+"<option value = '0'>请选择</option>"
					+managerList+
					"</select></td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><select id ='fduser'>"+"<option value = '0'>请选择</option>"
					+managerList+
					"</select></td>"+
					"<th>期限：</th>"+
					"<td><select>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save'/>" +
					"<input type='button' class='btn btn-large' value='返回' onclick='cysdrw()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				var number =/^\d+$/;
				var sxfw= $("#sxqj").val();
				var sxed= $("#sxed").val();
				var s = sxfw.split("-");
				var decisionRate= $("#decisionRate").val();
				var lilv=/^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/;
				var lilv2=/^[1-9][0-9]*$/;
				if((Number(sxed)>=Number(s[0])&&Number(sxed)<=Number(s[1])&&number.test(sxed)&&$("#auditresult").val()=="APPROVE")||$("#auditresult").val()!="APPROVE"){
					if(lilv.test(decisionRate)||lilv2.test(decisionRate)){
					$("#save").attr('disabled',"true");
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							cyUser1:$("#cyuser1").val(),
							cyUser2:$("#cyuser2").val(),
							fdUser:$("#fduser").val(),
							auditType:"1",
							decisionRate:$("#decisionRate").val(),//利率
							productId:obj.customerApplicationInfo.productId,
							serialNumber:obj.customerApplicationInfo.serialNumber,
							customerId:obj.customerApplicationInfo.customerId,
							id:res.appId,
							status:$("#auditresult").val(),
							decisionAmount:sxed,
							custManagerId:obj.customerInfor.userId,
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
						},
						success:function(json){
							var mes = $.evalJSON(json);
//							alert(mes.message);
							window.wxc.xcConfirm(mes.message, "success");
							cysdrw();
						}
					})
					}else{
						window.wxc.xcConfirm("请输入正确的利率", "warning");
					}
				}else{
//					alert("请输入正确的授信金额");
					window.wxc.xcConfirm("请输入正确的授信金额", "warning");
				}
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(11)").show();
					$("tr:eq(14)").hide();
//					if($("input[name=decision_amount]").val() == ""){
//					$("input[name='decision_amount']").after("<label class='error myerror' generated='true' >金额不能为空</label>");   
//					}
//					if($("input[name=decision_rate]").val() == ""){

//					$("input[name='decision_rate']").after("<label class='error myerror'generated='true' >利率不能为空</label>");   
//					}
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(11)").hide();
					$("tr:eq(14)").show();
//					if($("textarea[name=decision_refusereason]").val() == ""){
//					$("textarea[name='decision_refusereason']").after("<label class='error myerror' generated='true' >拒绝原因不能为空</label>");   
//					}
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(11)").hide();
					$("tr:eq(14)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});
//			})
		},
		error: function(){
//			alert("请求超时");
			window.wxc.xcConfirm("请求超时", "error");
		}
	})
}
function managerList(){
	var khjlxxlurl = "/ipad/intopieces/managerInfoi.json";
	var opin="";
	$.ajax({
		url:wsHost+khjlxxlurl,
		dateType:'json',
		type:'GET',
		async:false,
		success:function (json){
			var obj = $.evalJSON(json);
			opin=obj.manager;
		}
	})
	return opin;
}

function teacherList(){
	var khjlxxlurl = "/ipad/intopieces/teacherInfo.json";
	var opin="";
	$.ajax({
		url:wsHost+khjlxxlurl,
		dateType:'json',
		type:'GET',
		async:false,
		success:function (json){
			var obj = $.evalJSON(json);
			opin=obj.manager;
		}
	})
	return opin;
	
	
}
//审贷决议
function sdjy(){
	var sdrwurl= "/ipad/intopieces/csBrowse.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>客户名称</th>"+  
	"<th>申请金额</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>申请时间</th>"+
	"<th>节点名称</th>"+ 
	"</tr>";
	$.ajax({
		url:wsHost+sdrwurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
			nextNodeName:"审贷决议"
		},
		success: function (json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){

				if(obj.items[i].cardType=="0"){
					obj.items[i].cardType="身份证";
				}else if(obj.items[i].cardType=="1"){
					obj.items[i].cardType="军官证";
				}else if(obj.items[i].cardType=="2"){
					obj.items[i].cardType="护照";
				}else if(obj.items[i].cardType=="3"){
					obj.items[i].cardType="香港身份证";
				}else if(obj.items[i].cardType=="4"){
					obj.items[i].cardType="澳门身份证";
				}else if(obj.items[i].cardType=="5"){
					obj.items[i].cardType="台湾身份证";
				}
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}

				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].productId+"@"+
				obj.items[i].applyQuota+"@"+obj.items[i].customerId+"@"+obj.items[i].id+
				"@"+obj.items[i].status+"@"+obj.items[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].cardType+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].createdTime+"</td>"+			
				"<td>"+obj.items[i].nodeName+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}

			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>审贷决议</div>"+  
					"<div class='content'>" +                        
					"<table id='sdlb' class='cpTable jjTable' style='text-align:center;'>"+
					
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='客户详细信息' id ='khxxxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
					"<input type='button' class='btn btn-primary btn-large' value='审贷结论' id='jyjl'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();   

			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#sdlb").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "warning");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#sdlb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "warning");
					page = page+1;
				}
			})

			$("#jyjl").click(function() {
				if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.appId = values[3];
					res.customerId = values[2];
					res.productId =values[0];
					res.applyQuota = values[1];
					xssdjy(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xsyxzl").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.customerId = values[2];
					res.productId =values[0];
					res.applicationId =values[3];
					res.currentLoc ="sdjy()";
					xsyxzl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#khxxxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#khxxxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="sdjy()";
					res.customerId =values[2];
					ckkhqtxxs(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xszlxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#xszlxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");

					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="sdjy()";
					xszlxx(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})

		}

	})

}


//显示审贷决议
function xssdjy(res){

	var sdjyurl = "/ipad/intopieces/sdjy.json";
	var tjjlurl = "/ipad/intopieces/updateAll.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+sdjyurl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		cache:false,
		success: function (json){  
			var obj = $.evalJSON(json);
			var opin =window.sessionStorage.getItem("managerList");
			var teacher=teacherList();
			var productList=obj.productList;
			var list="";
			for(var i = 0;i<productList.length;i++){
				if($.trim(productList[i].productName)!=$.trim(obj.producAttribute.productName)){
					list =list+"<option value = '"+productList[i].id+"'>"+productList[i].productName+"</option>";
				}
			}
			var sddd="";
			if(obj.evaResult!=null){
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td>"+obj.evaResult.result+"</td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td>"+obj.evaResult.money+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td>"+obj.evaResult.cname+"</td>"+
				"<th>身份证号：</th>"+
				"<td>"+obj.evaResult.cardNo+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td>"+obj.evaResult.sex+"</td>"+
				"<th>经营状况得分：</th>"+
				"<td>"+obj.evaResult.busScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td>"+obj.evaResult.habScore+"</td>"+
				"<th>生存状况得分：</th>"+
				"<td>"+obj.evaResult.liveScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td>"+obj.evaResult.payAbli+"</td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td>"+obj.evaResult.project+"</td>"+
				"</tr>";
			}else{
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td></td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td></td>"+
				"<th>身份证号：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td></td>"+
				"<th>经营状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td></td>"+
				"<th>生存状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td></td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td></td>"+
				"</tr>";
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='sdjy()'/>审贷决议结论</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>评估结果</th>"+  
					"</tr>"+
					sddd+
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.prodCreditRange+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+obj.producAttribute.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>初审额度：</th>"+
					"<td><input type='text'  name='decision_amount' value = '"+obj.appManagerAuditLog.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog.userId_3+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审议结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"<th>变更产品名称</th>"+
					"<td><select id ='xxggcp'><option value = ''>"+obj.producAttribute.productName+"</option>" +
					list+
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><select id ='cyuser1'>"+"<option value = '0'>请选择</option>"
					+opin+
					"</select></td>"+
					"<th>参与审批人：</th>"+
					"<td><select id ='cyuser2'>"+"<option value = '0'>请选择</option>"
					+opin+
					"</select></td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><select id ='fduser'>"+"<option value = '0'>请选择</option>"
					+opin+
					"</select></td>"+
					"<th>期限：</th>"+
					"<td><select id ='decisionTerm'>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>审批老师：</th>"+
					"<td><select id ='sdUser'>"+"<option value = '0'>请选择</option>"
					+teacher+
					"</select></td>"+
					"<th>还款方式：</th>"+
					"<td><select id ='hkfs'>"+"<option value = '01'>定期结息，到期日利随本清</option>"+
					"<option value = '02'>定期结息，按合同约定分期还本</option>"+
					"<option value = '03'>等额本息</option>"+
					"<option value = '04'>等额本金</option>"+
					"<option value = '05'>利随本清</option>"+
					"<option value = '06'>其他还款方法</option>"+
					"</select></td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu' id='beizhu'></textarea>" +
					"</td>" +
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save' />" +
					"<input type='button' class='btn btn-primary btn-large' value='上传审贷会纪要' id='upload' />" +
					"<input type='button' class='btn btn-large' value='返回' onclick='sdjy()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				var number =/^\d+$/;
				var sxfw= $("#sxqj").val();
				var sxed= $("#sxed").val();
				var s = sxfw.split("-");
				var decisionRate= $("#decisionRate").val();
				var lilv=/^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/;
				var lilv2=/^[1-9][0-9]*$/;
				if((Number(sxed)>=Number(s[0])&&Number(sxed)<=Number(s[1])&&number.test(sxed)&&$("#auditresult").val()=="APPROVE")||$("#auditresult").val()!="APPROVE"){
					if(lilv.test(decisionRate)||lilv2.test(decisionRate)){
					$("#save").attr('disabled',"true");
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							proodId:$("#xxggcp").val(),
							qixian:$("#qixian").val(),
							cyUser1:$("#cyuser1").val(),
							cyUser2:$("#cyuser2").val(),
							fdUser:$("#fduser").val(),
							beiZhu:$("#beizhu").val(),
							decisionTerm:$("#decisionTerm").val(),
							hkfs:$("#hkfs").val(),
							sdUser:$("#sdUser").val(),
							auditType:"2",
							decisionRate:$("#decisionRate").val(),
							productId:obj.customerApplicationInfo.productId,
							serialNumber:obj.customerApplicationInfo.serialNumber,
							customerId:obj.customerApplicationInfo.customerId,
							id:res.appId,
							status:$("#auditresult").val(),
							decisionAmount:$("#sxed").val(),
							custManagerId:obj.custManagerId,
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
						},
						success:function(json){
							var mes = $.evalJSON(json);
//							alert(mes.message);
							window.wxc.xcConfirm(mes.message, "success");
							sdjy();
						}


					})
					}else{
						window.wxc.xcConfirm("请输入正确的利率", "warning");
					}
				}else{
//					alert("请输入正确的授信金额");
					window.wxc.xcConfirm("请输入正确的授信金额", "warning");
				}
			})
			
			$("#upload").click(function (){
				scsdhjy(res);
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(15)").show();
					$("tr:eq(20)").hide();
					if($("input[name=decision_amount]").val() == ""){
						$("input[name='decision_amount']").after("<label class='error myerror' generated='true' >金额不能为空</label>");   
					}
					if($("input[name=decision_rate]").val() == ""){
						$("input[name='decision_rate']").after("<label class='error myerror'generated='true' >利率不能为空</label>");   
					}
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(15)").hide();
					$("tr:eq(20)").show();
					if($("textarea[name=decision_refusereason]").val() == ""){
						$("textarea[name='decision_refusereason']").after("<label class='error myerror' generated='true' >拒绝原因不能为空</label>");   
					}
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(15)").hide();
					$("tr:eq(20)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});

		},
		error: function(){
//			alert("请求超时");
			window.wxc.xcConfirm("请求超时", "error");
		}
	})
}

//上传审贷会纪要
function scsdhjy(res){
	
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='newUsers1'><img src='images/back.png'/>上传审贷会纪要</div>"+  
			"<div class='content' style='text-align:center;'>" + 
								"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
									"<tr>"+    
										"<th style='width:40px;'>序号</th>"+ 
										"<th>文件路径</th>"+
										"<th>操作</th>"+
									"</tr>"+
									"<tr>"+  
										"<td>1</td>"+
										"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");' value='选择文件'/></td>"+
										"<td><img src='images/ugc_icon_type_photo.png' id ='takepucture'/></td>"+
//										"<td><img src='images/ugc_icon_type_photo.png' onclick='capturePhoto(\"fcz_sheet1\",\"img\",\"imageuri\");'/></td>"+
									"</tr>"+
								"</table>"+
								"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
								"</p>"+
								"<p>" +
								"<input type='button' class='btn btn-primary btn-large' value='确定' id='sure' />" +
								"<input type='button' class='btn btn-primary btn-large' value='查看已上传列表' id='ysctplb' />" +
								"<input type='button' class='btn btn-large' value='返回' id='back'/>" +
								"</p>"+
							"</div>");
	  $(".right").hide();
	  $("#mainPage").show();
	  $("#sure").click(function(){
		  window.wxc.xcConfirm("是否开始上传影像资料","confirm",{onOk:sckss});
		  function sckss(){
		  var num= $('#qtyxzl tr').length;
		  show_upload(0);
		  for(var i=0;i<num;i++){
		 var fileURI = document.getElementsByName("imageuri")[i].getAttribute("uri");
		 var j=i+1;
		 var fileName = $("#qtyxzl_sheet"+j).val();
		 var options = new FileUploadOptions();  
		    options.fileKey = "file";  
		    options.fileName = fileName; 
		    options.mimeType = "multipart/form-data";  
		    options.chunkedMode = false;  
		    ft = new FileTransfer();  
		    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+res.productId+"&customerId="+res.customerId+"&fileName="+options.fileName+"&applicationId="+res.appId);  
		    $("#uploadInfo").html("正在上传第"+(i+1)+"张，请稍后...");
		    ft.upload(fileURI,uploadUrl,uploadSuccesss, uploadFaileds, options); 
		  }
		  }
	  })
	  $("#ysctplb").click(function(){
		  ckysctplb(res);
	  })
	  $("#back").click(function(){
		  xssdjy(res);
	  })
	  $("#newUsers1").click(function(){
		  xssdjy(res);
	  })
	  
	  /** 
	   * 上传成功回调. 
	   * @param r 
	   */ 
	  function uploadSuccesss(r) { 
	  	var obj = $.evalJSON(r.response);
//	  	hide_upload();
	  	if(obj.success==false){
	  	if(obj.message=="001"){
//	  		alert("调查模板不一致！导入失败！");
	  		$("#uploadInfo").html("调查模板不一致！导入失败！");
	  		 $("#diss").attr('disabled',false);
	  		 $("#sure").attr('disabled',false);
	  	}else{
//	  		alert("导入失败！");
	  		$("#uploadInfo").html("导入失败！");
	  		 $("#diss").attr('disabled',false);
	      $("#sure").attr('disabled',false);
	  	}
	  	}else{
//	  		alert("导入成功！");
	  		$("#uploadInfo").html("导入成功！");
	  		 $("#diss").attr('disabled',false);
	  		 $("#sure").attr('disabled',false);
	  	}
	  	 clearProcess();
	  }  

	  /** 
	   * 上传失败回调. 
	   * @param error 
	   */  
	  function uploadFaileds(error) {  
//	  	hide_upload();
//	      alert('文件上传失败'); 
	      $("#uploadInfo").html("导入失败！");
	      $("#diss").attr('disabled',false);
	      $("#sure").attr('disabled',false);
	      clearProcess();  
	      
	  } 
}

//查看已上传图片列表
function ckysctplb(res){
	var ysctpurl ="/ipad/JnpadImageBrowse/uploadYx.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>文件名</th>"+  
	"<th>产品名称</th>"+
	"<th>客户名称</th>"+
	"<th>上传时间</th>"+
	"</tr>";
	$.get(wsHost+ysctpurl,{customerId:res.customerId,productId:res.productId,applicationId:res.appId},callbackfunction);
	function  callbackfunction (json){
		obj = $.evalJSON(json);
		for(var i = 0;i<obj.imagerList.length;i++){
			
			tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.imagerList[i].id+"@"+
			obj.imagerList[i].applicationId+"'/>"+"</span></td>"+  
			"<td>"+obj.imagerList[i].attachment+"</td>"+
			"<td>"+obj.imagerList[i].productName+"</td>"+
			"<td>"+obj.imagerList[i].customerName+"</td>"+
			"<td>"+obj.imagerList[i].createdTime+"</td></tr>"

			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
		}

		result[j]=tmp;

		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' id='backs'/>已上传图片列表</div>"+  
				"<div class='content'>" +                        
				"<table id='bzsplb' class='cpTable jjTable' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+
				"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='查看' id = 'browse'/>"+
				"<input type='button' class='btn btn-primary btn-large' value='删除' id='delete' />" +
				"<input type='button' class='btn btn-large' value='返回' id='backk'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();  
		$("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#bzsplb").html(head+result[page]);
			}else{
//				alert("当前已经是最后一页");
				window.wxc.xcConfirm("当前已经是最后一页", "info");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#bzsplb").html(head+result[page]);
			}else{
//				alert("当前已经是第一页");
				window.wxc.xcConfirm("当前已经是第一页", "info");
				page = page+1;
			}
		})
		$("#browse").click(function(){
			if ($("input[type='radio']").is(':checked')) {

				var values =$('input[name="checkbox"]:checked').attr("value").split("@");
				res.imageId=values[0];
				res.back="ckysctplb";
				browseimage(res);
			}else{
//				alert("请选择一行");
				window.wxc.xcConfirm("请选择一行", "warning");
			}	
		})
		$("#backk").click(function(){
			scsdhjy(res);
		})
		$("#backs").click(function(){
			scsdhjy(res);
			
		})
		  $("#delete").click(function(){
			  if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var deletetpurl ="/ipad/JnpadImageBrowse/deleteImage.json";
					  $.ajax({
							url:wsHost+deletetpurl,
							type: "GET",
							dataType:'json',
							data:{
								imageId:values[0],
							},
							cache:false,
							success: function (json){
								var obj = $.evalJSON(json);
//								alert(obj.mess);
								window.wxc.xcConfirm(obj.mess, "success");
								ckysctplb(res);
							}
					  })  
					
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			  
	  })
	}
}

//部长审批
function buzhangsp(){
	var sdrwurl= "/ipad/intopieces/csBrowse.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>客户名称</th>"+  
	"<th>申请金额</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>申请时间</th>"+
	"<th>节点名称</th>"+ 
	"</tr>";
	$.ajax({
		url:wsHost+sdrwurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
			nextNodeName:"小微负责人审批",
		},
		success: function (json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){
				if(obj.items[i].cardType=="0"){
					obj.items[i].cardType="身份证";
				}else if(obj.items[i].cardType=="1"){
					obj.items[i].cardType="军官证";
				}else if(obj.items[i].cardType=="2"){
					obj.items[i].cardType="护照";
				}else if(obj.items[i].cardType=="3"){
					obj.items[i].cardType="香港身份证";
				}else if(obj.items[i].cardType=="4"){
					obj.items[i].cardType="澳门身份证";
				}else if(obj.items[i].cardType=="5"){
					obj.items[i].cardType="台湾身份证";
				}
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}

				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].productId+"@"+
				obj.items[i].applyQuota+"@"+obj.items[i].customerId+"@"+obj.items[i].id+
				"@"+obj.items[i].status+"@"+obj.items[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].cardType+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].createdTime+"</td>"+			
				"<td>"+obj.items[i].nodeName+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}

			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>小微负责人审批</div>"+  
					"<div class='content'>" +                        
					"<table id='bzsplb' class='cpTable jjTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='客户详细信息' id ='khxxxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
					"<input type='button' class='btn btn-primary btn-large' value='审批结论' id='csjl'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();   

			$("#khxxxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#khxxxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="buzhangsp()";
					res.customerId =values[2];
					ckkhqtxxs(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#bzsplb").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#bzsplb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "info");
					page = page+1;
				}
			})

			$("#csjl").click(function() {
				if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var res ={};
					res.appId = values[3];
					res.customerId = values[2];
					res.productId =values[0];
					res.applyQuota = values[1];
					bzspjl(res)
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xsyxzl").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.customerId = values[2];
					res.productId =values[0];
					res.applicationId =values[3];
					res.currentLoc ="buzhangsp()";
					xsyxzl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xszlxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#xszlxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");

					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="buzhangsp()";
					xszlxx(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
		}

	})

}

//显示部长审批结论页面
function bzspjl(res){



	var sdjyurl = "/ipad/intopieces/bzsp.json";
	var tjjlurl = "/ipad/intopieces/updateAll.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+sdjyurl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		cache:false,
		success: function (json){
			var obj = $.evalJSON(json);
			var productList=obj.productList;
			var list="";
			for(var i = 0;i<productList.length;i++){
				if($.trim(productList[i].productName)!=$.trim(obj.producAttribute.productName)){
					list =list+"<option value = '"+productList[i].id+"'>"+productList[i].productName+"</option>";
				}
			}
			if(obj.appManagerAuditLog2.hkfs=="01"){
				obj.appManagerAuditLog2.hkfs="定期结息，到期日利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="02"){
				obj.appManagerAuditLog2.hkfs="定期结息，按合同约定分期还本";
			}else if(obj.appManagerAuditLog2.hkfs=="03"){
				obj.appManagerAuditLog2.hkfs="等额本息";
			}else if(obj.appManagerAuditLog2.hkfs=="04"){
				obj.appManagerAuditLog2.hkfs="等额本金";
			}else if(obj.appManagerAuditLog2.hkfs=="05"){
				obj.appManagerAuditLog2.hkfs="利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="06"){
				obj.appManagerAuditLog2.hkfs="其他还款方法";
			}
			var sddd="";
			if(obj.evaResult!=null){
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td>"+obj.evaResult.result+"</td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td>"+obj.evaResult.money+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td>"+obj.evaResult.cname+"</td>"+
				"<th>身份证号：</th>"+
				"<td>"+obj.evaResult.cardNo+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td>"+obj.evaResult.sex+"</td>"+
				"<th>经营状况得分：</th>"+
				"<td>"+obj.evaResult.busScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td>"+obj.evaResult.habScore+"</td>"+
				"<th>生存状况得分：</th>"+
				"<td>"+obj.evaResult.liveScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td>"+obj.evaResult.payAbli+"</td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td>"+obj.evaResult.project+"</td>"+
				"</tr>";
			}else{
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td></td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td></td>"+
				"<th>身份证号：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td></td>"+
				"<th>经营状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td></td>"+
				"<th>生存状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td></td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td></td>"+
				"</tr>";
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='buzhangsp()'/>部长审批</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>评估结果</th>"+  
					"</tr>"+
					sddd+
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.prodCreditRange+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+obj.producAttribute.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>初审额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog1.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog1.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_3+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog2.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog2.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_3+"' readonly ='true'>"+
					"</td>"+
					"<th>审贷老师:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_4+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.qx+"' readonly ='true'>"+
					"</td>"+
					"<th>还款方式:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.hkfs+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog2.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审核结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审批结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"<th>变更产品名称</th>"+
					"<td><select id ='xxggcp' name = 'status'><option value = ''>"+obj.producAttribute.productName+"</option>" +
					list+
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限：</th>"+
					"<td><select id ='decisionTerm'>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label id ='beizhuzz' for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu' id='beizhu'></textarea>" +
					"</td>" +
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save' />" +
					"<input type='button' class='btn btn-large' value='返回' onclick='buzhangsp()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				var number =/^\d+$/;
				var sxfw= $("#sxqj").val();
				var sxed= $("#sxed").val();
				var s = sxfw.split("-");
				var decisionRate= $("#decisionRate").val();
				var lilv=/^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/;
				var lilv2=/^[1-9][0-9]*$/;
				if((Number(sxed)>=Number(s[0])&&Number(sxed)<=Number(s[1])&&number.test(sxed)&&$("#auditresult").val()=="APPROVE")||$("#auditresult").val()!="APPROVE"){
					if(lilv.test(decisionRate)||lilv2.test(decisionRate)){
					$("#save").attr('disabled',"true");
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							proodId:$("#xxggcp").val(),
							beiZhu:$("#beizhu").val(),
							decisionTerm:$("#decisionTerm").val(),
							auditType:"3",
							decisionRate:$("#decisionRate").val(),
							productId:obj.customerApplicationInfo.productId,
							serialNumber:obj.customerApplicationInfo.serialNumber,
							customerId:obj.customerApplicationInfo.customerId,
							id:res.appId,
							status:$("#auditresult").val(),
							decisionAmount:$("#sxed").val(),
							custManagerId:obj.custManagerId,
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
						},
						success:function(json){
							var mes = $.evalJSON(json);
//							alert(mes.message);
							window.wxc.xcConfirm(mes.message, "success");
							buzhangsp();
						}


					})
					}else{
						window.wxc.xcConfirm("请输入正确的利率", "warning");
					}
				}else{
//					alert("请输入正确的授信金额");
					window.wxc.xcConfirm("请输入正确的授信金额", "warning");
				}
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(21)").show();
					$("tr:eq(24)").hide();
					if($("input[name=decision_amount]").val() == ""){
						$("input[name='decision_amount']").after("<label class='error myerror' generated='true' >金额不能为空</label>");   
					}
					if($("input[name=decision_rate]").val() == ""){
						$("input[name='decision_rate']").after("<label class='error myerror'generated='true' >利率不能为空</label>");   
					}
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(21)").hide();
					$("tr:eq(24)").show();
					if($("textarea[name=decision_refusereason]").val() == ""){
						$("textarea[name='decision_refusereason']").after("<label class='error myerror' generated='true' >拒绝原因不能为空</label>");   
					}
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(21)").hide();
					$("tr:eq(24)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});

		},
		error: function(){
//			alert("请求超时");
			window.wxc.xcConfirm("请求超时", "error");
		}
	})


}


//零售业务部负责人
function lsywbfzrsp(){
	var sdrwurl= "/ipad/intopieces/csBrowse.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>客户名称</th>"+  
	"<th>申请金额</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>申请时间</th>"+
	"<th>节点名称</th>"+ 
	"</tr>";
	$.ajax({
		url:wsHost+sdrwurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
			nextNodeName:"零售业务部负责人审批",
		},
		success: function (json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){

				if(obj.items[i].cardType=="0"){
					obj.items[i].cardType="身份证";
				}else if(obj.items[i].cardType=="1"){
					obj.items[i].cardType="军官证";
				}else if(obj.items[i].cardType=="2"){
					obj.items[i].cardType="护照";
				}else if(obj.items[i].cardType=="3"){
					obj.items[i].cardType="香港身份证";
				}else if(obj.items[i].cardType=="4"){
					obj.items[i].cardType="澳门身份证";
				}else if(obj.items[i].cardType=="5"){
					obj.items[i].cardType="台湾身份证";
				}
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}

				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].productId+"@"+
				obj.items[i].applyQuota+"@"+obj.items[i].customerId+"@"+obj.items[i].id+
				"@"+obj.items[i].status+"@"+obj.items[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].cardType+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].createdTime+"</td>"+			
				"<td>"+obj.items[i].nodeName+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}

			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>零售业务部负责人审批</div>"+  
					"<div class='content'>" +                        
					"<table id='lsywlb' class='cpTable jjTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='客户详细信息' id ='khxxxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
					"<input type='button' class='btn btn-primary btn-large' value='审批结论' id='jyjl'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();   

			$("#khxxxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#khxxxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="lsywbfzrsp()";
					res.customerId =values[2];
					ckkhqtxxs(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#lsywlb").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "warning");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#lsywlb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "warning");
					page = page+1;
				}
			})

			$("#jyjl").click(function() {
				if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var res ={};
					res.appId = values[3];
					res.customerId = values[2];
					res.productId =values[0];
					res.applyQuota = values[1];
					lsbywfzr(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})

			$("#xszlxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#xszlxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");

					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="lsywbfzrsp()";
					xszlxx(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			
			$("#xsyxzl").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.customerId = values[2];
					res.productId =values[0];
					res.applicationId =values[3];
					res.currentLoc ="lsywbfzrsp()";
					xsyxzl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
		}

	})

}


//显示零售部负责人论页面
function lsbywfzr(res){


	var sdjyurl = "/ipad/intopieces/lsbfzr.json";
	var tjjlurl = "/ipad/intopieces/updateAll.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+sdjyurl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		cache:false,
		success: function (json){
			var obj = $.evalJSON(json);
//			var	opin=managerList();
			var productList=obj.productList;
			var list="";
			for(var i = 0;i<productList.length;i++){
				if($.trim(productList[i].productName)!=$.trim(obj.producAttribute.productName)){
					list =list+"<option value = '"+productList[i].id+"'>"+productList[i].productName+"</option>";
				}
			}
			if(obj.appManagerAuditLog2.hkfs=="01"){
				obj.appManagerAuditLog2.hkfs="定期结息，到期日利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="02"){
				obj.appManagerAuditLog2.hkfs="定期结息，按合同约定分期还本";
			}else if(obj.appManagerAuditLog2.hkfs=="03"){
				obj.appManagerAuditLog2.hkfs="等额本息";
			}else if(obj.appManagerAuditLog2.hkfs=="04"){
				obj.appManagerAuditLog2.hkfs="等额本金";
			}else if(obj.appManagerAuditLog2.hkfs=="05"){
				obj.appManagerAuditLog2.hkfs="利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="06"){
				obj.appManagerAuditLog2.hkfs="其他还款方法";
			}
			var sddd="";
			if(obj.evaResult!=null){
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td>"+obj.evaResult.result+"</td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td>"+obj.evaResult.money+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td>"+obj.evaResult.cname+"</td>"+
				"<th>身份证号：</th>"+
				"<td>"+obj.evaResult.cardNo+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td>"+obj.evaResult.sex+"</td>"+
				"<th>经营状况得分：</th>"+
				"<td>"+obj.evaResult.busScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td>"+obj.evaResult.habScore+"</td>"+
				"<th>生存状况得分：</th>"+
				"<td>"+obj.evaResult.liveScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td>"+obj.evaResult.payAbli+"</td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td>"+obj.evaResult.project+"</td>"+
				"</tr>";
			}else{
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td></td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td></td>"+
				"<th>身份证号：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td></td>"+
				"<th>经营状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td></td>"+
				"<th>生存状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td></td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td></td>"+
				"</tr>";
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='lsywbfzrsp()'/>零售业务部负责人审批</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>评估结果</th>"+  
					"</tr>"+
					sddd+
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.prodCreditRange+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+obj.producAttribute.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>初审额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog1.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog1.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_3+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog2.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog2.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_3+"' readonly ='true'>"+
					"</td>"+
					"<th>审贷老师:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_4+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.qx+"' readonly ='true'>"+
					"</td>"+
					"<th>还款方式:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.hkfs+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog2.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>小微负责人结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog3.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog3.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog3.qx+"' readonly ='true'>"+
					"</td>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog3.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审核结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审批结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"<th>变更产品名称</th>"+
					"<td><select id ='xxggcp' name = 'status'><option value = ''>"+obj.producAttribute.productName+"</option>" +
					list+
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu' id ='beizhu'></textarea>" +
					"</td>" +
					"<th>期限：</th>"+
					"<td><select id='decisionTerm'>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save' />" +
					"<input type='button' class='btn btn-large' value='返回' onclick='lsywbfzrsp()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				var number =/^\d+$/;
				var sxfw= $("#sxqj").val();
				var sxed= $("#sxed").val();
				var s = sxfw.split("-");
				var decisionRate= $("#decisionRate").val();
				var lilv=/^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/;
				var lilv2=/^[1-9][0-9]*$/;
				if((Number(sxed)>=Number(s[0])&&Number(sxed)<=Number(s[1])&&number.test(sxed)&&$("#auditresult").val()=="APPROVE")||$("#auditresult").val()!="APPROVE"){
					if(lilv.test(decisionRate)||lilv2.test(decisionRate)){
					$("#save").attr('disabled',"true");
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							proodId:$("#xxggcp").val(),
							beiZhu:$("#beizhu").val(),
							decisionTerm:$("#decisionTerm").val(),
							auditType:"4",
							decisionRate:$("#decisionRate").val(),
							productId:obj.customerApplicationInfo.productId,
							serialNumber:obj.customerApplicationInfo.serialNumber,
							customerId:obj.customerApplicationInfo.customerId,
							id:res.appId,
							status:$("#auditresult").val(),
							decisionAmount:$("#sxed").val(),
							custManagerId:obj.custManagerId,
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
						},
						success:function(json){
							var mes = $.evalJSON(json);
//							alert(mes.message);
							window.wxc.xcConfirm(mes.message, "success");
							lsywbfzrsp();
						}


					})
					}else{
						window.wxc.xcConfirm("请输入正确的利率", "warning");
					}
				}else{
//					alert("请输入正确的授信金额");
					window.wxc.xcConfirm("请输入正确的授信金额", "warning");
				}
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(24)").show();
					$("tr:eq(26)").hide();
					if($("input[name=decision_amount]").val() == ""){
						$("input[name='decision_amount']").after("<label class='error myerror' generated='true' >金额不能为空</label>");   
					}
					if($("input[name=decision_rate]").val() == ""){
						$("input[name='decision_rate']").after("<label class='error myerror'generated='true' >利率不能为空</label>");   
					}
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(24)").hide();
					$("tr:eq(26)").show();
					if($("textarea[name=decision_refusereason]").val() == ""){
						$("textarea[name='decision_refusereason']").after("<label class='error myerror' generated='true' >拒绝原因不能为空</label>");   
					}
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(24)").hide();
					$("tr:eq(26)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});

		},
		error: function(){
//			alert("请求超时");
			window.wxc.xcConfirm("请求超时", "error");
		}
	})


}

//行长审批
function hzsp(){
	var sdrwurl= "/ipad/intopieces/csBrowse.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>客户名称</th>"+  
	"<th>申请金额</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>申请时间</th>"+
	"<th>节点名称</th>"+ 
	"</tr>";
	$.ajax({
		url:wsHost+sdrwurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
			nextNodeName:"行长审批",
		},
		success: function (json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){

				if(obj.items[i].cardType=="0"){
					obj.items[i].cardType="身份证";
				}else if(obj.items[i].cardType=="1"){
					obj.items[i].cardType="军官证";
				}else if(obj.items[i].cardType=="2"){
					obj.items[i].cardType="护照";
				}else if(obj.items[i].cardType=="3"){
					obj.items[i].cardType="香港身份证";
				}else if(obj.items[i].cardType=="4"){
					obj.items[i].cardType="澳门身份证";
				}else if(obj.items[i].cardType=="5"){
					obj.items[i].cardType="台湾身份证";
				}
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}

				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].productId+"@"+
				obj.items[i].applyQuota+"@"+obj.items[i].customerId+"@"+obj.items[i].id+
				"@"+obj.items[i].status+"@"+obj.items[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].cardType+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].createdTime+"</td>"+			
				"<td>"+obj.items[i].nodeName+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}

			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>行长审批</div>"+  
					"<div class='content'>" +                        
					"<table id='hzsplb' class='cpTable jjTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='客户详细信息' id ='khxxxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
					"<input type='button' class='btn btn-primary btn-large' value='审批结论' id='jyjl'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();   

			$("#khxxxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#khxxxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="hzsp()";
					res.customerId =values[2];
					ckkhqtxxs(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#hzsplb").html(head+result[page]);
				}else{
//					alert("当前已经是最后一页");
					window.wxc.xcConfirm("当前已经是最后一页", "info");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#hzsplb").html(head+result[page]);
				}else{
//					alert("当前已经是第一页");
					window.wxc.xcConfirm("当前已经是第一页", "info");
					page = page+1;
				}
			})

			$("#jyjl").click(function() {
				if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					
					var res ={};
					res.appId = values[3];
					res.customerId = values[2];
					res.productId =values[0];
					res.applyQuota = values[1];
					hzspjl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})

			$("#xszlxx").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					$("#xszlxx").attr('disabled',"true");
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");

					var appId = values[3];
					var res={};
					res.appId = appId;
					res.currentLoc ="hzsp()";
					xszlxx(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
			$("#xsyxzl").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var res ={};
					res.customerId = values[2];
					res.productId =values[0];
					res.applicationId =values[3];
					res.currentLoc ="hzsp()";
					xsyxzl(res);
				}else{
//					alert("请选择一行");
					window.wxc.xcConfirm("请选择一行", "warning");
				}
			})
		}

	})

}

//显示行长审批页面
function hzspjl(res){


	var sdjyurl = "/ipad/intopieces/hzspjl.json";
	var tjjlurl = "/ipad/intopieces/updateAll.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+sdjyurl,
		type: "GET",
		dataType:'json',
		data:{
			appId:res.appId,
		},
		cache:false,
		success: function (json){
			var obj = $.evalJSON(json);
//			var	opin=managerList();
			var productList=obj.productList;
			var list="";
			for(var i = 0;i<productList.length;i++){
				if($.trim(productList[i].productName)!=$.trim(obj.producAttribute.productName)){
					list =list+"<option value = '"+productList[i].id+"'>"+productList[i].productName+"</option>";
				}
			}
			if(obj.appManagerAuditLog2.hkfs=="01"){
				obj.appManagerAuditLog2.hkfs="定期结息，到期日利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="02"){
				obj.appManagerAuditLog2.hkfs="定期结息，按合同约定分期还本";
			}else if(obj.appManagerAuditLog2.hkfs=="03"){
				obj.appManagerAuditLog2.hkfs="等额本息";
			}else if(obj.appManagerAuditLog2.hkfs=="04"){
				obj.appManagerAuditLog2.hkfs="等额本金";
			}else if(obj.appManagerAuditLog2.hkfs=="05"){
				obj.appManagerAuditLog2.hkfs="利随本清";
			}else if(obj.appManagerAuditLog2.hkfs=="06"){
				obj.appManagerAuditLog2.hkfs="其他还款方法";
			}
			var sddd="";
			if(obj.evaResult!=null){
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td>"+obj.evaResult.result+"</td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td>"+obj.evaResult.money+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td>"+obj.evaResult.cname+"</td>"+
				"<th>身份证号：</th>"+
				"<td>"+obj.evaResult.cardNo+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td>"+obj.evaResult.sex+"</td>"+
				"<th>经营状况得分：</th>"+
				"<td>"+obj.evaResult.busScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td>"+obj.evaResult.habScore+"</td>"+
				"<th>生存状况得分：</th>"+
				"<td>"+obj.evaResult.liveScore+"</td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td>"+obj.evaResult.payAbli+"</td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td>"+obj.evaResult.project+"</td>"+
				"</tr>";
			}else{
				sddd="<tr>"+
				"<th>评估结果：</th>"+
				"<td></td>"+
				"<th>拟授信额度（万元）：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>姓名：</th>"+
				"<td></td>"+
				"<th>身份证号：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>性别：</th>"+
				"<td></td>"+
				"<th>经营状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>道德品质得分：</th>"+
				"<td></td>"+
				"<th>生存状况得分：</th>"+
				"<td></td>"+
				"</tr>"+
				"<tr>"+
				"<th>还款能力（万元）：</th>"+
				"<td></td>"+
//				"<th>未评估项/总项：</th>"+
//				"<td></td>"+
				"</tr>";
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='hzsp()'/>行长审批结论</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>评估结果</th>"+  
					"</tr>"+
					sddd+
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.prodCreditRange+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+obj.producAttribute.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>初审额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog1.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog1.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog1.userId_3+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog2.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog2.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_1+"' readonly ='true'>"+
					"</td>"+
					"<th>参与审批人：</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_2+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>辅调客户经理:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_3+"' readonly ='true'>"+
					"</td>"+
					"<th>审贷老师:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.userId_4+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.qx+"' readonly ='true'>"+
					"</td>"+
					"<th>还款方式:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog2.hkfs+"' readonly ='true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog2.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>小微负责人结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog3.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog3.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog3.qx+"个月' readonly ='true'>"+
					"</td>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog3.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>零售部业务负责人结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议额度：</th>"+
					"<td><input type='text' name='decision_amount' value = '"+obj.appManagerAuditLog4.examineAmount+"' readonly ='true'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input type='text' name='decision_rate'  value = '"+obj.appManagerAuditLog4.examineLv+"' readonly ='true'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>期限:</th>"+
					"<td><input type='text' value = '"+obj.appManagerAuditLog4.qx+"个月' readonly ='true'>"+
					"</td>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu'  disabled='disabled'>"+obj.appManagerAuditLog4.beiZhu+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审核结论</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审批结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"<th>变更产品名称</th>"+
					"<td><select id ='xxggcp' name = 'status'><option value = ''>"+obj.producAttribute.productName+"</option>" +
					list+
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th><label for=reason>备注:</label></th>"+
					"<td><textarea name='beizhu' id ='beizhu'></textarea>" +
					"</td>" +
					"<th>期限：</th>"+
					"<td><select id='decisionTerm'>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save' />" +
					"<input type='button' class='btn btn-large' value='返回' onclick='hzsp()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				var number =/^\d+$/;
				var sxfw= $("#sxqj").val();
				var sxed= $("#sxed").val();
				var s = sxfw.split("-");
				var decisionRate= $("#decisionRate").val();
				var lilv=/^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/;
				var lilv2=/^[1-9][0-9]*$/;
				if((Number(sxed)>=Number(s[0])&&Number(sxed)<=Number(s[1])&&number.test(sxed)&&$("#auditresult").val()=="APPROVE")||$("#auditresult").val()!="APPROVE"){
					if(lilv.test(decisionRate)||lilv2.test(decisionRate)){
					$("#save").attr('disabled',"true");
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							proodId:$("#xxggcp").val(),
							beiZhu:$("#beizhu").val(),
							decisionTerm:$("#decisionTerm").val(),
							auditType:"5",
							decisionRate:$("#decisionRate").val(),
							productId:obj.customerApplicationInfo.productId,
							serialNumber:obj.customerApplicationInfo.serialNumber,
							customerId:obj.customerApplicationInfo.customerId,
							id:res.appId,
							status:$("#auditresult").val(),
							decisionAmount:$("#sxed").val(),
							custManagerId:obj.custManagerId,
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
						},
						success:function(json){
							var mes = $.evalJSON(json);
//							alert(mes.message);
							window.wxc.xcConfirm(mes.message, "success");
							sdjy();
						}


					})
					}else{
						window.wxc.xcConfirm("请输入正确的利率", "warning");
					}
				}else{
//					alert("请输入正确的授信金额");
					window.wxc.xcConfirm("请输入正确的授信金额", "warning");
				}
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(27)").show();
					$("tr:eq(29)").hide();
					if($("input[name=decision_amount]").val() == ""){
						$("input[name='decision_amount']").after("<label class='error myerror' generated='true' >金额不能为空</label>");   
					}
					if($("input[name=decision_rate]").val() == ""){
						$("input[name='decision_rate']").after("<label class='error myerror'generated='true' >利率不能为空</label>");   
					}
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(27)").hide();
					$("tr:eq(29)").show();
					if($("textarea[name=decision_refusereason]").val() == ""){
						$("textarea[name='decision_refusereason']").after("<label class='error myerror' generated='true' >拒绝原因不能为空</label>");   
					}
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(27)").hide();
					$("tr:eq(29)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});

		},
		error: function(){
//			alert("请求超时");
			window.wxc.xcConfirm("请求超时", "warning");
		}
	})


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
//客户其他信息查看
function ckkhqtxxs(objs){
	var selectall="/ipad/customerIntopiece/selectAll.json";
	$.get(wsHost+selectall,{customerId:objs.customerId},callbackresult);
	function callbackresult(json){
		var obj = $.evalJSON(json);
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='"+objs.currentLoc+"'/>客户详细信息</div>"+  
				"<div class='content'>" +
				"<div class='tabplace'>"+
				"<ul class='tab' >"+
				"<li name='tab2' id ='grxx' style='background:#22a5d9;'>个人信息</li>"+
				"<li name='tab2' id ='fcxx'>房产信息</li>"+
				"<li name='tab2' id = 'jtxx'>家庭信息</li>"+
				"<li name='tab2' id = 'ccxx'>车产信息</li>"+
				"<li name='tab2' id = 'lxrxx'>联系人信息</li>"+
				"<li name='tab2' id = 'jzxx'>居住信息</li>"+
				"<li name='tab2' id = 'qyjbxx'>企业基本信息</li>"+
				"<li name='tab2' id = 'qyywxx'>企业业务信息</li>"+
				"<li name='tab2' id = 'qydpxx'>企业店铺信息</li>"+
				"<li name='tab2' id = 'qykhxx'>企业开户信息</li>"+
				"<li name='tab2' id = 'qtxx'>其他信息</li>"+
				"</ul></div>"+
				"<div id = 'resultshow'>"+
				"<table class='cpTable'>"+
				"<tr>"+                             
				"<td style='width:110px;'>申请人性别</td>"+         
				"<td>" +obj.geren3.sex+
				"</td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>婚姻状况</td>"+         
				"<td>" +obj.geren3.marriage+
				"</td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>户籍所在地</td>"+          
				"<td><input type='text' value='"+obj.geren3.domicileplace+"'/></td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>户籍详细地址</td>"+  
				"<td><input type='text' class='long' value='"+obj.geren3.domicileinfo+"'/></td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>家庭住址</td>"+    
				"<td><input type='text' class='long' value='"+obj.geren3.fmallyliveplace+"'/></td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>最高学位学历</td>"+           
				"<td>" +obj.geren3.education+
				"</td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>固定电话</td>"+    
				"<td><input type='text' value='"+obj.geren3.telephone+"'/></td>"+
				"</tr>"+
				"<tr>"+                             
				"<td>移动电话</td>"+    
				"<td><input type='text' value='"+obj.geren3.mobilephone+"'/></td>"+
				"</tr>"+
				"</table>"+
				"</div>"+
				"<p><input type='button' class='btn btn-large' value='返回' onclick='"+objs.currentLoc+"'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();
		
		var grxx="<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:110px;'>申请人性别</td>"+         
		"<td>" +obj.geren3.sex+
		"</td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>婚姻状况</td>"+         
		"<td>" +obj.geren3.marriage+
		"</td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>户籍所在地</td>"+          
		"<td><input type='text' value='"+obj.geren3.domicileplace+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>户籍详细地址</td>"+  
		"<td><input type='text' class='long' value='"+obj.geren3.domicileinfo+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>家庭住址</td>"+    
		"<td><input type='text' class='long' value='"+obj.geren3.fmallyliveplace+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>最高学位学历</td>"+           
		"<td>" +obj.geren3.education+
		"</td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>固定电话</td>"+    
		"<td><input type='text' value='"+obj.geren3.telephone+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>移动电话</td>"+    
		"<td><input type='text' value='"+obj.geren3.mobilephone+"'/></td>"+
		"</tr>"+
		"</table>";
		
		var jtxx= "<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:145px'>家庭成员</td>"+         
		"<td><input type='text' value='"+obj.jiating3.familyNum+"'/></td>"+
		"<td>家庭和睦</td>"+          
		"<td>"+obj.jiating3.familyHarmony+"</td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>经济依赖人数</td>"+  
		"<td><input type='text' value='"+obj.jiating3.economicNum+"'/></td>"+
		"<td>配偶姓名</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateName+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>配偶证件号码</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateCardId+"'/></td>"+
		"<td>配偶工作单位</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateJobAdress+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>配偶年收入</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateIncome+"'/></td>"+
		"<td>配偶电话</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateTel+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>配偶其他状况说明</td>"+    
		"<td><input type='text' value='"+obj.jiating3.mateOtherInfo+"'/></td>"+
		"<td>子女工作状态</td>"+    
		"<td><input type='text' value='"+obj.jiating3.childJob+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>子女教育状态</td>"+    
		"<td colspan='3'><input type='text' value='"+obj.jiating3.childEducation+"'/></td>"+
		"</tr>"+
        "<tr>"+
            "<td>父亲姓名</td>"+    
            "<td><input type='text' id='fatherName' value='"+obj.jiating3.fatherName+"'/></td>"+
            "<td>父亲籍贯</td>"+     
            "<td><input type='text' id='fatherDomicile' value='"+obj.jiating3.fatherDomicile+"'/></td>"+
        "</tr>"+
        "<tr>"+                             
            "<td>父亲年龄</td>"+    
            "<td><input type='text' id='fatherAge' value='"+obj.jiating3.fatherAge+"'/></td>"+
            "<td>父亲民族</td>"+    
            "<td><input type='text' id='fatherMinzu' value='"+obj.jiating3.fatherMinzu+"'/></td>"+
        "</tr>"+
        "<tr>"+                             
            "<td>父亲工作单位</td>"+    
            "<td><input type='text' id='fatherCompany' value='"+obj.jiating3.fatherCompany+"'/></td>"+
            "<td>父亲工作地址</td>"+    
            "<td><input type='text' id='fatherCompanyAddress' value='"+obj.jiating3.fatherCompanyAddress+"'/></td>"+
        "</tr>"+
        "<tr>"+                             
            "<td>父亲年收入</td>"+    
            "<td><input type='text' id='fatherIncome' value='"+obj.jiating3.fatherIncome+"'/></td>"+
            "<td>父亲联系方式</td>"+    
            "<td><input type='text' id='fatherContact' value='"+obj.jiating3.fatherContact+"'/></td>"+
        "</tr>"+
        "<tr>"+                             
        "<td>父亲毕业院校</td>"+    
        "<td><input type='text' id='fatherSchool' value='"+obj.jiating3.fatherSchool+"'/></td>"+
        "<td>父亲学历学位</td>"+    
        "<td><input type='text' id='fatherEducation' value='"+obj.jiating3.fatherEducation+"'/></td>"+
        "</tr>"+
            "<tr>"+
            "<td>母亲姓名</td>"+    
            "<td><input type='text' id='motherName' value='"+obj.jiating3.motherName+"'/></td>"+
            "<td>母亲籍贯</td>"+    
            "<td><input type='text' id='motherDomicile' value='"+obj.jiating3.motherDomicile+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>母亲年龄</td>"+    
            "<td><input type='text' id='motherAge' value='"+obj.jiating3.motherAge+"'/></td>"+
            "<td>母亲民族</td>"+    
            "<td><input type='text' id='motherMinzu' value='"+obj.jiating3.motherMinzu+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>母亲工作单位</td>"+    
            "<td><input type='text' id='motherCompany' value='"+obj.jiating3.motherCompany+"'/></td>"+
            "<td>父母亲工作地址</td>"+    
            "<td><input type='text' id='motherCompanyAddress' value='"+obj.jiating3.motherCompanyAddress+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>母亲年收入</td>"+    
            "<td><input type='text' id='motherIncome' value='"+obj.jiating3.motherIncome+"'/></td>"+
            "<td>母亲联系方式</td>"+    
            "<td><input type='text' id='motherContact' value='"+obj.jiating3.motherContact+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>母亲毕业院校</td>"+    
            "<td><input type='text' id='motherSchool' value='"+obj.jiating3.motherSchool+"'/></td>"+
            "<td>母亲学历学位</td>"+    
            "<td><input type='text' id='motherEducation' value='"+obj.jiating3.motherEducation+"'/></td>"+
            "</tr>"+
            "<tr>"+
            "<td>兄弟姐妹姓名</td>"+    
            "<td><input type='text' id='brotherName' value='"+obj.jiating3.brotherName+"'/></td>"+
            "<td>兄弟姐妹籍贯</td>"+    
            "<td><input type='text' id='brotherDomicile' value='"+obj.jiating3.brotherDomicile+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>兄弟姐妹年龄</td>"+    
            "<td><input type='text' id='brotherAge' value='"+obj.jiating3.brotherAge+"'/></td>"+
            "<td>兄弟姐妹民族</td>"+    
            "<td><input type='text' id='brotherMinzu' value='"+obj.jiating3.brotherMinzu+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>兄弟姐妹工作单位</td>"+    
            "<td><input type='text' id='brotherCompany' value='"+obj.jiating3.brotherCompany+"'/></td>"+
            "<td>兄弟姐妹工作地址</td>"+    
            "<td><input type='text' id='brotherCompanyAddress' value='"+obj.jiating3.brotherCompanyAddress+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>兄弟姐妹年收入</td>"+    
            "<td><input type='text' id='brotherIncome' value='"+obj.jiating3.brotherIncome+"'/></td>"+
            "<td>兄弟姐妹联系方式</td>"+    
            "<td><input type='text' id='brotherContact' value='"+obj.jiating3.brotherContact+"'/></td>"+
            "</tr>"+
            "<tr>"+                             
            "<td>兄弟姐妹毕业院校</td>"+    
            "<td><input type='text' id='brotherSchool' value='"+obj.jiating3.brotherSchool+"'/></td>"+
            "<td>兄弟姐妹学历学位</td>"+    
            "<td><input type='text' id='brotherEducation' value='"+obj.jiating3.brotherEducation+"'/></td>"+
            "</tr>"+
            "</table>"
		;
		var jzxx="<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:145px;'>居住类型</td>"+         
		"<td><input type='text' value='"+obj.juzhu3.houseClasses+"'/></td>"+              
		"<td>住房装修情况</td>"+          
		"<td><input type='text' value='"+obj.juzhu3.decorateSituation+"'/></td>"+ 
		"</tr>"+
		"<tr>"+                             
		"<td>住房面积</td>"+  
		"<td><input type='text' value='"+obj.juzhu3.houseAera+"'/></td>"+
		"<td>住房格局</td>"+    
		"<td><input type='text' value='"+obj.juzhu3.houseSturcture+"'/></td>"+ 
		"</tr>"+
		"<tr>"+                             
		"<td>居住起始年月</td>"+    
		"<td><input type='text' value='"+obj.juzhu3.beginDate+"'/></td>"+ 
		"<td>是否按揭</td>"+    
		"<td><input type='text' value='"+obj.juzhu3.wetherMortgage+"'/></td>"+ 
		"</tr>"+
		"<tr>"+                             
		"<td>居住场所调查方式</td>"+    
		"<td><input type='text' value='"+obj.juzhu3.surveyWay+"'/></td>"+ 
		"</tr>"+
		"</table>";
		var qyjbxx= "<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:110px;'>企业名称</td>"+          
		"<td><input type='text' value='"+obj.qyxx3.companyName+"'/></td>"+
		"<td>组织类型</td>"+  
		"<td><input type='text' value='"+obj.qyxx3.organizationPattern+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>法人代表</td>"+    
		"<td><input type='text' value='"+obj.qyxx3.representative+"'/></td>"+
		"<td>实际控制人</td>"+    
		"<td><input type='text' value='"+obj.qyxx3.realControl+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>股东股份情况</td>"+    
		"<td><input type='text' value='"+obj.qyxx3.stockSituation+"'/></td>"+
		"<td>营业执照</td>"+           
		"<td><input type='text' value='"+obj.qyxx3.businessLicense+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>经营起始时间</td>"+    
		"<td><input type='date' value='"+obj.qyxx3.beginDate+"'/></td>"+
		"<td>经营年限</td>"+    
		"<td><input type='text' value='"+obj.qyxx3.plantingYear+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>地址</td>"+    
		"<td><input type='text' class='long' value='"+obj.qyxx3.adress+"'/></td>"+
		"<td>电话</td>"+    
		"<td><input type='text' value='"+obj.qyxx3.telephone+"'/></td>"+
		"</tr>"+
		"</table>";
		var qyywxx="<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:110px;'>主要业务范围</td>"+          
		"<td><input type='text' value='"+obj.qyyw3.businessLine+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>主要经营模式</td>"+  
		"<td><input type='text' value='"+obj.qyyw3.businessModel+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>组织架构</td>"+    
		"<td><input type='text' value='"+obj.qyyw3.orgainizationalStructrue+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>业务流程</td>"+    
		"<td><input type='text' value='"+obj.qyyw3.businessProcess+"'/></td>"+
		"</tr>"+
		"</table>";
		var qydpxx="<table class='cpTable'>"+
		"<tr>"+                             
		"<td style='width:150px;'>营业场所类型</td>"+          
		"<td><input type='text' value='"+obj.qydp3.operationType+"'/></td>"+
		"</tr>"+  
		"<tr>"+                                                    
		"<td>装修情况</td>"+          
		"<td><input type='text' value='"+obj.qydp3.decorateSituation+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>住房面积</td>"+  
		"<td><input type='text' value='"+obj.qydp3.houseArea+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>住房格局</td>"+    
		"<td><input type='text' value='"+obj.qydp3.housePattern+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>启用起始年月</td>"+    
		"<td><input type='text' value='"+obj.qydp3.beginDate+"'/></td>"+
		"</tr>"+
		"<tr>"+                             
		"<td>居住场所调查方式</td>"+    
		"<td><input type='text' value='"+obj.qydp3.methods+"'/></td>"+
		"</tr>"+
		"</table>";
		var qtxx="<textarea placeholder='请在文本框内记录相关情况' style='width:95%;margin-left:2.5%;margin-top:20px;height:250px;'>"+obj.qydp3.otherInfo+"</textarea>";
		$("#grxx").click(function(){
			change(this);
			$("#resultshow").html(grxx);
		})
		$("#jtxx").click(function(){
			change(this);
			$("#resultshow").html(jtxx);
		})
		$("#fcxx").click(function(){
		change(this);
		var fcinfo=""
			for(var i=0;i<obj.fangchan3.length;i++){
				fcinfo=fcinfo+"<tr>"+    
				"<td>"+(i+1)+"</td>"+
				"<td><input type='text' class='addinput' value='"+obj.fangchan3[i].houseAddress+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.fangchan3[i].houseArea+"'/></td>"+
				"<td><input type='date' class='addinput' value='"+obj.fangchan3[i].monetaryDate+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.fangchan3[i].monetaryAmount+"'/></td>"+
				"<td><input type='text' class='addinput' value='"+obj.fangchan3[i].currentAmount+"'/></td>"+
				"<td>" +
				obj.fangchan3[i].getWay+
				"</td>"+
				"<td><input type='text' class='addinput' value='"+obj.fangchan3[i].otherInfo+"'/></td>"+
				"</tr>";
			}
		$("#resultshow").html("<table  class='cpTable' style='text-align:center;'>"+
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
				"</table>");
	})
	$("#ccxx").click(function(){
		change(this);
		var ccinfo="";
		for(var i=0;i<obj.chechan3.length;i++){
			ccinfo=ccinfo+"<tr>"+    
			"<td>"+(i+1)+"</td>"+
			"<td><input type='text' class='addinput' value='"+obj.chechan3[i].carVersion+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.chechan3[i].carNumber+"'/></td>"+
			"<td><input type='date' class='addinput' value='"+obj.chechan3[i].monetaryDate+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.chechan3[i].monetaryAmount+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.chechan3[i].currentAmount+"'/></td>"+
			"<td>" +
			obj.chechan3[i].getWay+
			"</td>"+
			"<td><input type='text' class='addinput' value='"+obj.chechan3[i].otherInfo+"'/></td>"+
			"</tr>";
		}
		$("#resultshow").html("<table  class='cpTable' style='text-align:center;'>"+
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
				"</table>");
	})
	$("#lxrxx").click(function(){
		change(this);
		var lxrinfo="";
		for(var i=0;i<obj.lianxiren3.length;i++){
			lxrinfo=lxrinfo+"<tr>"+    
			"<td>"+(i+1)+"</td>"+
			"<td><input type='text' class='addinput' value='"+obj.lianxiren3[i].contactName+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.lianxiren3[i].contactTel+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.lianxiren3[i].relation+"'/></td>";
		}
		$("#resultshow").html("<table class='cpTable'  style='text-align:center;'>"+
				"<tr>"+                             
				"<th style='width:40px;'>序号</th>"+                 
				"<th>联系人姓名</th>"+                   
				"<th>与客户关系</th>"+   
				"<th>联系人电话</th>"+  
				"</tr>"+  
				"<tr>"+  
				lxrinfo+
				"</tr>"+
				"</table>");
	})
	
	$("#jzxx").click(function(){
		change(this);
		$("#resultshow").html(jzxx);
	})
	
	$("#qyjbxx").click(function(){
		change(this);
		$("#resultshow").html(qyjbxx);
	})
	$("#qyywxx").click(function(){
		change(this);
		$("#resultshow").html(qyywxx);
	})
	$("#qydpxx").click(function(){
		change(this);
		$("#resultshow").html(qydpxx);
	})
	$("#qykhxx").click(function(){
		change(this);
		var qykhxx1="";
		for(var i=0;i<obj.kaihu3.length;i++){
			qykhxx1=qykhxx1+"<tr>"+    
			"<td>"+(i+1)+"</td>"+
			"<td><input type='text' class='addinput' value='"+obj.kaihu3[i].openBank+"'/></td>"+
			"<td><input type='text' class='addinput' value='"+obj.kaihu3[i].accuont+"'/></td>";
		}
		$("#resultshow").html("<table id='khxx' class='cpTable' style='text-align:center;'>"+
				"<tr>"+      
				"<th style='width:40px;'>序号</th>"+  
				"<th>开户行</th>"+          
				"<th>账号</th>"+
				"</tr>"+
				qykhxx1+
				"</table>");
	})
	$("#qtxx").click(function(){
		change(this);
		$("#resultshow").html(qtxx);
	})
	}
	
	function change(own){
		$("li[name='tab2']").css("background","#bfbfbf");
		own.style.background="#22a5d9";
	}
}