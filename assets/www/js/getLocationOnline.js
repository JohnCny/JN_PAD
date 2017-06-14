function locationOnline(){
	var config = { enableHighAccuracy: true, maximumAge:0 ,timeout:15000}; 
	navigator.geolocation.getCurrentPosition(getlocationsucc,getlocationerr,config); 

	function getlocationsucc(position){
		var locationpoint={};
		locationpoint.lon = position.coords.longitude; 
		locationpoint.lat = position.coords.latitude; 
		function translateCallback (point){ 
			var pointss=point.split("@");
			$("#allmap").html("");
			$("#allmap").removeClass("contents").addClass("content");
			lon=pointss[1];
			lat=pointss[0];
			var map = new BMap.Map("allmap"); 
			var points = new BMap.Point(""+lon+"",""+lat+""); 
			map.centerAndZoom(points,12); 
			map.setMaxZoom(15);
			map.setMinZoom(4);
			var gc = new BMap.Geocoder(); 
			var marker = new BMap.Marker(points);
			var infoWindow;
			map.addOverlay(marker); 
			map.setCenter(points); 
			var sContent = 
				"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>无法从网络获取地址信息,请根据地图marker辨别位置</p>" +  
				"</div>";
			gc.getLocation(points, function(rs){ 
				var addComp = rs.addressComponents; 
				if(addComp.province!==addComp.city){ 
					sContent = 
						"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
						"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
						"</div>";
				}else{ 
					sContent = 
						"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
						"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+ addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
						"</div>"; 
				} 
			});  
			var infoWindow = new BMap.InfoWindow(sContent); 
			map.openInfoWindow(infoWindow,points); 
			marker.addEventListener("click", function () {  
				window.wxc.xcConfirm("是否在百度地图中查看详细位置", "confirm",{onOk:function(){
					window.location.href="bdapp://map/marker?location="+lat+","+lon+"&title=您当前的位置&content=makeamarker&traffic=on";
					}});
			}); 
		}                     
		//BMap.Convertor.translate(point,0,translateCallback); 
		window.plugins.GpsToBd09llPlugin.startActivity(translateCallback,translateErro,locationpoint,"");
		function translateErro(){
			window.wxc.xcConfirm("坐标转换出错", "error");
		}
	}
	function getlocationerr(erro){
alert(error.code);
		switch(error.code) 
		{ 
		case error.PERMISSION_DENIED: 
			$("#allmap").html("");
			$("#allmap").removeClass("contents").addClass("content");
			$("#allmap").html("<div class='spinner'>无法完成定位请求</div>");
			break; 
		case error.POSITION_UNAVAILABLE: 
			$("#allmap").html("");
			$("#allmap").removeClass("contents").addClass("content");
			$("#allmap").html("<div class='spinner'>获取当前位置信息失败，请检查网络连接和位置权限</div>");
			break; 
		case error.TIMEOUT: 
			$("#allmap").html("");
			$("#allmap").removeClass("contents").addClass("content");
			$("#allmap").html("<div class='spinner'>获取当前位置信息超时</div>");
			break; 
		case error.UNKNOWN_ERROR: 
			$("#allmap").html("");
			$("#allmap").removeClass("contents").addClass("content");
			$("#allmap").html("<div class='spinner'>未知错误发生了</div>");
			break; 
		} 
	}
}

function getonlinepush(){
	var config = { enableHighAccuracy: true, maximumAge:0 ,timeout:15000}; 
	navigator.geolocation.getCurrentPosition(getlocationsuc,getlocationerr,config); 
	function getlocationsuc(position){  
		var locationpoint={};
		locationpoint.lon = position.coords.longitude; 
		locationpoint.lat = position.coords.latitude; 
		window.plugins.GpsToBd09llPlugin.startActivity(translateCallbacks,wrong,locationpoint);
		var gxwzUrl = "/ipad/intopieces/updateLocation.json";
		var userId = window.sessionStorage.getItem("userId");
		function translateCallbacks(point){
			var pointss=point.split("@");
			pushlon=pointss[1];
			pushlat=pointss[0];
			$.ajax({
				url:wsHost+gxwzUrl,
				dateType:'json',
				type:'GET',
				//是否异步		
				//			async:false,
				data:{
					lat:pushlat,
					lon:pushlon,
					userId:userId,
				},
				success:function (json){
					var obj = $.evalJSON(json);
					window.wxc.xcConfirm(obj.message, "info");
					lat="";
					lon="";
				}

			})

		}
	}
}
function sleep(n) {

    var start = new Date().getTime();

    while(true)  if(new Date().getTime()-start > n) break;

    }