package com.cardpay.banksaler_rocket;

import java.util.LinkedHashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.baidu.location.BDLocation;
import com.baidu.location.BDLocationListener;
import com.baidu.location.LocationClient;
import com.baidu.location.LocationClientOption;
import com.baidu.location.LocationClientOption.LocationMode;
import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;


public class CoordinateTranslatePlugin extends Plugin{
//
//	@Override
//	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {
//		try {
//
//			Map<String,Object> result = new LinkedHashMap<String,Object>();
//			// sourceLatLng待转换坐标  
//			System.out.println("00");
//			double lon=Double.parseDouble(arg1.getJSONObject(0).get("lon").toString());
//			double lat=Double.parseDouble(arg1.getJSONObject(0).get("lat").toString());
//			System.out.println("11");
//			Gps location =gcj02_To_Bd09(lat,lon);
//			System.out.println("22");
//			result.put("lon", location.getWgLon());
//			result.put("lat", location.getWgLat());
//			String json=location.getWgLat()+"@"+location.getWgLon();
//			System.out.println(json);
//			return new PluginResult(PluginResult.Status.OK, json);	
//		} catch (Exception e) {
//			return new PluginResult(PluginResult.Status.ERROR, "error");
//		}
//	}
//
//
//
//
//	public static final String BAIDU_LBS_TYPE = "bd09ll";
//
//	public static double pi = 3.1415926535897932384626;
//	public static double a = 6378245.0;
//	public static double ee = 0.00669342162296594323;
//
//	public static Gps gcj02_To_Bd09(double gg_lat, double gg_lon) {
//		double x = gg_lon, y = gg_lat;
//		double z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi);
//		double theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi);
//		double bd_lon = z * Math.cos(theta) + 0.0065;
//		double bd_lat = z * Math.sin(theta) + 0.006;
//		return new Gps(bd_lat, bd_lon);
//	}
//
	
	
	

	private LocationClient mLocationClient = null;
	private MyLocationListenner myListener = new MyLocationListenner();
	private JSONObject jsonObj = new JSONObject(); 
	private PluginResult result = null; 
	
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		System.out.println("百度定位进入插件....");
        if (action.equals("get")) {
        	System.out.println("百度定位进入action....");
        	ctx.runOnUiThread(new RunnableLoc());
            
        } else if(action.equals("stop")) {
        	mLocationClient.stop();
        	result = new PluginResult(PluginResult.Status.OK);
        } else {	
           result = new PluginResult(PluginResult.Status.INVALID_ACTION);
        }
        
        
     // waiting ui thread to finish
 		while (this.result == null) {
 			try {
 				Thread.sleep(100);
 			} catch (InterruptedException e) {
 				// ignoring exception, since we have to wait
 				// ui thread to finish
 			}
 		}
 		
 	
 		return this.result;
        
      
    }
	
	@Override
    public void onDestroy(){
    	if (mLocationClient != null && mLocationClient.isStarted()){
    		mLocationClient.stop();
    		mLocationClient = null;
    		System.out.println("停止...");
    	}
    	super.onDestroy();
    }
	
	
	class RunnableLoc implements Runnable {
				
		public void run() {
			System.out.println("百度定位start....");
			mLocationClient = new LocationClient(ctx);
			System.out.println("百度AK:"+mLocationClient.getAccessKey());
			LocationClientOption option = new LocationClientOption();
			
	        option.setOpenGps(true);
	        option.setCoorType("bd09ll");	
	        option.setIgnoreKillProcess(true);	
	        option.setLocationMode(LocationMode.Hight_Accuracy);
	        option.setProdName("BaiduLoc");							
	        option.setScanSpan(2000);
	        option.setTimeOut(10000);
	        option.setIsNeedAddress(true);
	        option.setIsNeedLocationDescribe(true);
	        mLocationClient.setLocOption(option);
        	mLocationClient.registerLocationListener( myListener );
        	mLocationClient.start();
            mLocationClient.requestLocation();
            
		}

	}
    
    
	public class MyLocationListenner implements BDLocationListener {
			
			public void onReceiveLocation(BDLocation location) {
				if (location == null)
					return;			
				
				try {
					jsonObj.put("Latitude",location.getLatitude());
					jsonObj.put("Longitude", location.getLongitude());
					jsonObj.put("LocType", location.getLocType());
					jsonObj.put("Radius", location.getRadius());
					
					if (location.getLocType() == BDLocation.TypeGpsLocation){
						jsonObj.put("Speed", location.getSpeed());
						jsonObj.put("SatelliteNumber", location.getSatelliteNumber());
					} else if (location.getLocType() == BDLocation.TypeNetWorkLocation){
						jsonObj.put("AddrStr", location.getAddrStr());
					}
					
					result = new PluginResult(PluginResult.Status.OK, jsonObj);
//					onDestroy();
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					result = new PluginResult(PluginResult.Status.JSON_EXCEPTION);	  
				}
				
			}
			
	
			public void onReceivePoi(BDLocation poiLocation) {
				// TODO Auto-generated method stub
				
			}
			
	
		}
	


}
