function getGPS(){
	var khjlxxlurl = "/ipad/intopieces/managerInfoi.json";
	var opin=window.sessionStorage.getItem("managerList");
	var userType=window.sessionStorage.getItem("userType");
	var body =	"<select id ='user'>"+"<option value = '0'>请选择客户经理</option>"+
	opin+
	"</select>"+
	"<input type='button' id='ckkhjlwz' class='btn btn-primary btn-large' value='查看客户经理位置'/>";
	if(userType==1){
		body="";
	}

	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>位置信息</div>"+  
			"</div>"+
			"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
			"<div class='spinner'>"+
			"<div class='bounce1'></div>"+
			"<div class='bounce2'></div>"+
			"<div class='bounce3'></div>"+
			"</div>"+
			"</div>"+
			"<div class='content' style ='margin:0 auto;'><p align='center'>" +
			body+
			"<input type='button' id='fswdwz' class='btn btn btn-primary btn-large' value='发送我的位置'/>"+  
			"<input type='button' id='ddddd' class='btn btn btn-primary btn-large' value='刷新'/>"+  
			"<input type='button' class='btn btn-large'  value='返回' onclick='mywdsy()'/>"+  
			"</p></div>"
	);
	$(".right").hide();
	$("#mainPage").show();
	getGPSLocation();
	$("#ddddd").click(function(){
		lon="";
		lat="";
		getGPS();
	})
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
					Message.showNotify("点击地图上的marker可以在百度地图中查看更详细的信息",3000);
					$("#allmap").removeClass("contents").addClass("content");
					$("#allmap").html("");
					var map = new BMap.Map("allmap"); 
					map.setMaxZoom(15);
					map.setMinZoom(4);
					map.enableScrollWheelZoom(); 
					for(var i=0;i<obj.size;i++){
						var lonnn = obj.LocationInfoForm[i].longitude; 
						var lattt = obj.LocationInfoForm[i].latitude; 
						var updatetime=obj.LocationInfoForm[i].updateTime;
						var userName=obj.LocationInfoForm[i].userName;
						var point = new BMap.Point(""+lonnn+"",""+lattt+""); 
						
//						translateCallback = function ( point){ 
//						BMap.Convertor.translate(point, 0, callback);
//						var callback = function(result){
//							var obj = $.evalJSON(json);
//							var point = new BMap.Point(""+obj.lonnn+"",""+obj.lattt+"");
							var marker  = new BMap.Marker(point); 
							map.centerAndZoom(point,12); 
							map.addOverlay(marker); 
							var label = new BMap.Label(userName+":"+updatetime,{offset:new BMap.Size(20,-10)});
							marker.setLabel(label);

//							map.setCenter(point); 
//							}      

//							BMap.Convertor.translate(point,0,translateCallback);  
							showInformation(marker,updatetime,lonnn,lattt,map,userName);
//						}
					}
				}else if(obj.success=="false"){

//					alert("该客户经理位置信息不存在");
					window.wxc.xcConfirm("该客户经理位置信息不存在", "info");
				}else{

//					alert("未知错误");
					window.wxc.xcConfirm("未知错误", "error");
				}


			}

		})
	})
	$("#fswdwz").click(function(){
		
		if(lon!=""&&lat!=""){
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
//					alert(obj.message);
					window.wxc.xcConfirm(obj.message, "info");
					lon="";
					lat="";
				}

			})
//		}
		}else{
			window.wxc.xcConfirm("位置信息为空，等待获取位置信息", "info");
		}
	})
}


var locationlock=true;
function getGPSLocation(){
	//调用插件开始定位
//	if(locationlock){
	locationlock=false;
	window.plugins.GetLocationOffline.startActivity(getGPSLocationSuccess,getGPSLocationError,"","get");
//	}else{
//		window.wxc.xcConfirm("请等待当前位置获取完成", "info");
//	}
	//成功回调函数
	function getGPSLocationSuccess(position){
		locationlock=true;
		$("#allmap").removeClass("contents").addClass("content");
		$("#allmap").html("");
		lon=position.Longitude;
		lat=position.Latitude;
		var map = new BMap.Map("allmap"); 
		var points = new BMap.Point(""+lon+"",""+lat+""); 
		map.centerAndZoom(points,12); 
		var gc = new BMap.Geocoder(); 
		var marker = new BMap.Marker(points);
		var infoWindow;
		map.addOverlay(marker); 
		map.setCenter(points); 
		map.setMaxZoom(15);
		map.setMinZoom(4);
		var sContent = 
			"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>当前GPS定位结果是：</h4>" +  
			"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>无法从网络获取地址信息,请根据地图marker辨别位置</p>" +  
			"</div>"; 
		var infoWindow = new BMap.InfoWindow(sContent); 
		map.openInfoWindow(infoWindow,points); 
		marker.addEventListener("click", function () {  
			window.wxc.xcConfirm("是否在百度地图中查看详细位置", "confirm",{onOk:function(){
				window.location.href="bdapp://map/marker?location="+lat+","+lon+"&title=您当前的位置&content=makeamarker&traffic=on";
				}});
		}); 
		window.plugins.GetLocationOffline.startActivity(null,null,"","stop");
	}
	//错误回调函数
	function getGPSLocationError(position){
		locationlock=false;
		$("#allmap").html("");
		$("#allmap").removeClass("content").addClass("contents");
		$("#allmap").html("<div class='spinner'>"+position+"</div>");
	}
}
var pushlon="";
var pushlat="";
var locationlock2=true;
function pushposition(){
	if(locationlock2){
	locationlock2=false;
	window.plugins.GetLocationOffline.startActivity(getsuccess,null,"","get");
	}
	function getsuccess(position){
		locationlock2=true;
		var gxwzUrl = "/ipad/intopieces/updateLocation.json";
		var userId = window.sessionStorage.getItem("userId");
		pushlon=position.Longitude;
		pushlat=position.Latitude;
//		window.plugins.GetLocationOffline.startActivity(null,null,"","stop");
			$.ajax({
				url:wsHost+gxwzUrl,
				dateType:'json',
				type:'GET',
				//是否异步		
				//async:false,
				data:{
					lat:pushlat,
					lon:pushlon,
					userId:userId,
				},
				success:function (json){
					var obj = $.evalJSON(json);
//					window.wxc.xcConfirm(obj.message, "info");
					pushlon="";
					pushlat="";
				}

			})
	}
}
	//-----------------------------------基站定位----------------------------------------
	function getBLS(){
		var khjlxxlurl = "/ipad/intopieces/managerInfoi.json";
		var opin=window.sessionStorage.getItem("managerList");
		var userType=window.sessionStorage.getItem("userType");
		var body =	"<select id ='user'>"+"<option value = '0'>请选择客户经理</option>"+
		opin+
		"</select>"+
		"<input type='button' id='ckkhjlwz' class='btn btn-primary btn-large' value='查看客户经理位置'/>";
		if(userType==1){
			body="";
		}

		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>位置信息</div>"+  
				"</div>"+
				"<div class='contents' id='allmap'  style='text-align:center;height:580px;margin:auto auto;'>" +
				"<div class='spinner'>"+
				"<div class='bounce1'></div>"+
				"<div class='bounce2'></div>"+
				"<div class='bounce3'></div>"+
				"</div>"+
				"</div>"+
				"<div class='content' style ='margin:0 auto;'><p align='center'>" +
				body+
				"<input type='button' id='fswdwz' class='btn btn btn-primary btn-large' value='发送我的位置'/>"+  
				"<input type='button' id='ddddd' class='btn btn btn-primary btn-large' value='刷新'/>"+  
				"<input type='button' class='btn btn-large'  value='返回' onclick='mywdsy()'/>"+  
				"</p></div>"
		);
		$(".right").hide();
		$("#mainPage").show();
		getBLSLocation();
		$("#ddddd").click(function(){
			lon="";
			lat="";
			getBLS();
		})
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
						Message.showNotify("点击地图上的marker可以在百度地图中查看更详细的信息",3000);
						$("#allmap").removeClass("contents").addClass("content");
						$("#allmap").html("");
						var map = new BMap.Map("allmap"); 
						map.setMaxZoom(15);
						map.setMinZoom(4);
						map.enableScrollWheelZoom(); 
						for(var i=0;i<obj.size;i++){
							var lonnn = obj.LocationInfoForm[i].longitude; 
							var lattt = obj.LocationInfoForm[i].latitude; 
							var updatetime=obj.LocationInfoForm[i].updateTime;
							var userName=obj.LocationInfoForm[i].userName;
							var point = new BMap.Point(""+lonnn+"",""+lattt+""); 
							
//							translateCallback = function ( point){ 
//							BMap.Convertor.translate(point, 0, callback);
//							var callback = function(result){
//								var obj = $.evalJSON(json);
//								var point = new BMap.Point(""+obj.lonnn+"",""+obj.lattt+"");
								var marker  = new BMap.Marker(point); 
								map.centerAndZoom(point,12); 
								map.addOverlay(marker); 
								var label = new BMap.Label(userName+":"+updatetime,{offset:new BMap.Size(20,-10)});
								marker.setLabel(label);

//								map.setCenter(point); 
//								}      

//								BMap.Convertor.translate(point,0,translateCallback);  
								showInformation(marker,updatetime,lonnn,lattt,map,userName);
//							}
						}
					}else if(obj.success=="false"){

//						alert("该客户经理位置信息不存在");
						window.wxc.xcConfirm("该客户经理位置信息不存在", "info");
					}else{

//						alert("未知错误");
						window.wxc.xcConfirm("未知错误", "error");
					}


				}

			})
		})
		$("#fswdwz").click(function(){
			
			if(lon!=""&&lat!=""){
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
//						alert(obj.message);
						window.wxc.xcConfirm(obj.message, "info");
						lon="";
						lat="";
					}

				})
//			}
			}else{
				window.wxc.xcConfirm("位置信息为空，等待获取位置信息", "info");
			}
		})
	}
	function getBLSLocation(){
		//调用插件开始定位
		window.plugins.LBS_locationPlugin.startActivity(getBLSLocationSuccess,getBLSLocationError,"","get");
		function getBLSLocationSuccess(position){
			$("#allmap").removeClass("contents").addClass("content");
			$("#allmap").html("");
			lon=position.Longitude;
			lat=position.Latitude;
			var map = new BMap.Map("allmap"); 
			var points = new BMap.Point(""+lon+"",""+lat+""); 
			map.centerAndZoom(points,12); 
			var gc = new BMap.Geocoder(); 
			var marker = new BMap.Marker(points);
			var infoWindow;
			map.addOverlay(marker); 
			map.setCenter(points); 
			map.setMaxZoom(15);
			map.setMinZoom(4);
			var sContent = 
				"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>当前"+position.locationClass+"果是：</h4>" +  
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+position.address+"</p>" +  
				"</div>"; 
			var infoWindow = new BMap.InfoWindow(sContent); 
			map.openInfoWindow(infoWindow,points); 
			marker.addEventListener("click", function () {  
				window.wxc.xcConfirm("是否在百度地图中查看详细位置", "confirm",{onOk:function(){
					window.location.href="bdapp://map/marker?location="+lat+","+lon+"&title=您当前的位置&content=makeamarker&traffic=on";
					}});
			}); 
			//关掉GPS
			if(position.locationClass=="GPS定位结果"){
				window.plugins.LBS_locationPlugin.startActivity(null,null,"","stop");
			}
		}
		//错误回调函数
		function getBLSLocationError(position){
			$("#allmap").html("");
			$("#allmap").removeClass("content").addClass("contents");
			$("#allmap").html("<div class='spinner'>"+position+"</div>");
		}
	}