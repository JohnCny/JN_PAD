package com.cardpay.banksaler_rocket;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.location.LocationProvider;
import android.os.Bundle;
import android.util.Log;
public class GetLocationOffline extends Plugin{
	LocationManager mylocationManager=null;                                  //位置管理器。要想操作定位相关设备，必须先定义个LocationManager
	private MyLocationListener myListener = new MyLocationListener();        //位置监听，监听位置变化，监听设备开关与状态。
	private static final String TAG="GpsPlugin";
	private JSONObject jsonObj = new JSONObject();
	private PluginResult result = null;
	private Plugin pl = this;
	private String callbackids=null;
	@Override
	public PluginResult execute(String action, JSONArray args, String callbackId) {
		callbackids=callbackId;
		System.out.println("进入GPS定位插件....");
        if (action.equals("get")) {
        	System.out.println("进入action....");
        	ctx.runOnUiThread(new RunnableLoc());
            
        } else if(action.equals("stop")) {
        	mylocationManager.removeUpdates(myListener);
        	result = new PluginResult(PluginResult.Status.OK);
        } else {	
           result = new PluginResult(PluginResult.Status.INVALID_ACTION);
        }
        
        
     // waiting ui thread to finish
// 		while (this.result == null) {
// 			try {
// 				Thread.sleep(100);
// 			} catch (InterruptedException e) {
// 				// ignoring exception, since we have to wait
// 				// ui thread to finish
// 			}
// 		}
        result = new PluginResult(PluginResult.Status.ERROR,"启动GPS定位...");
        result.setKeepCallback(true);
 		return result;
        
	}

	class RunnableLoc implements Runnable{
		@Override
		public void run() {
			// TODO Auto-generated method stub
			mylocationManager = (LocationManager)ctx.getSystemService(Context.LOCATION_SERVICE);
			if(mylocationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)){
				mylocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, myListener);
			}
			else{
				pl.success(new PluginResult(PluginResult.Status.ERROR,"请开启GPS"), callbackids);
			}
		}
	}

	@Override
	public void onDestroy() {
		// TODO Auto-generated method stub
		mylocationManager.removeUpdates(myListener);
		System.exit(0);
		super.onDestroy();
	}
	
	
	public class MyLocationListener implements LocationListener{
		/**
	     *  位置信息变化时触发
	     */
		@Override
		public void onLocationChanged(Location location) {
			// TODO Auto-generated method stub
			try {
				Log.i(TAG, "时间"+location.getTime());
	            Log.i(TAG, "经度"+location.getLongitude());
	            Log.i(TAG, "纬度"+location.getLatitude());
	            Log.i(TAG, "海拔"+location.getAltitude()); 
	            double[] position = wgs2bd(location.getLatitude(),location.getLongitude());
				jsonObj.put("Longitude", position[1]);
				jsonObj.put("Latitude",position[0]);
				jsonObj.put("Time", location.getTime());
				jsonObj.put("Altitude", location.getAltitude());
				pl.success(new PluginResult(PluginResult.Status.OK,jsonObj), callbackids);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		 /**
         * GPS禁用时触发
         */
		@Override
		public void onProviderDisabled(String provider) {
			// TODO Auto-generated method stub
			System.out.println("GPS已禁用");
			pl.success( new PluginResult(PluginResult.Status.ERROR,"GPS已禁用！"),callbackids);
		}
		 /**
         *  GPS开启时触发
         */
		@Override
		public void onProviderEnabled(String provider) {
			// TODO Auto-generated method stub
			System.out.println("正在定位...");
			pl.success( new PluginResult(PluginResult.Status.ERROR,"正在定位..."),callbackids);
		}
		 /**
         *  GPS状态变化时触发
         */
		@Override
		public void onStatusChanged(String provider, int status, Bundle extras) {
			// TODO Auto-generated method stub
			switch (status) {
			//GPS状态为可见时
            case LocationProvider.AVAILABLE:
            	Log.i(TAG, "当前GPS状态为可见状态");
            	pl.success( new PluginResult(PluginResult.Status.ERROR,"当前GPS状态为可见状态"),callbackids);
                break;
            //GPS状态为服务区外时
            case LocationProvider.OUT_OF_SERVICE:
            	Log.i(TAG, "当前GPS状态为服务区外状态");
            	pl.success( new PluginResult(PluginResult.Status.ERROR,"当前GPS状态为服务区外状态"),callbackids);
                break;
            //GPS状态为暂停服务时
            case LocationProvider.TEMPORARILY_UNAVAILABLE:
            	Log.i(TAG, "当前GPS状态为暂停服务状态");
            	pl.success( new PluginResult(PluginResult.Status.ERROR,"当前GPS状态为暂停服务状态"),callbackids);
                break;
            }
		}
		
	}
	
	static double pi = 3.14159265358979324;
	static double a = 6378245.0;
	static double ee = 0.00669342162296594323;
	public final static double x_pi = 3.14159265358979324 * 3000.0 / 180.0;

	public static double[] wgs2bd(double lat, double lon) {
	       double[] wgs2gcj = wgs2gcj(lat, lon);
	       double[] gcj2bd = gcj2bd(wgs2gcj[0], wgs2gcj[1]);
	       return gcj2bd;
	}

	public static double[] gcj2bd(double lat, double lon) {
	       double x = lon, y = lat;
	       double z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
	       double theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
	       double bd_lon = z * Math.cos(theta) + 0.0065;
	       double bd_lat = z * Math.sin(theta) + 0.006;
	       return new double[] { bd_lat, bd_lon };
	}

	public static double[] bd2gcj(double lat, double lon) {
	       double x = lon - 0.0065, y = lat - 0.006;
	       double z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
	       double theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
	       double gg_lon = z * Math.cos(theta);
	       double gg_lat = z * Math.sin(theta);
	       return new double[] { gg_lat, gg_lon };
	}

	public static double[] wgs2gcj(double lat, double lon) {
	       double dLat = transformLat(lon - 105.0, lat - 35.0);
	       double dLon = transformLon(lon - 105.0, lat - 35.0);
	       double radLat = lat / 180.0 * pi;
	       double magic = Math.sin(radLat);
	       magic = 1 - ee * magic * magic;
	       double sqrtMagic = Math.sqrt(magic);
	       dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
	       dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
	       double mgLat = lat + dLat;
	       double mgLon = lon + dLon;
	       double[] loc = { mgLat, mgLon };
	       return loc;
	}

	private static double transformLat(double lat, double lon) {
	       double ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
	       ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
	       ret += (20.0 * Math.sin(lon * pi) + 40.0 * Math.sin(lon / 3.0 * pi)) * 2.0 / 3.0;
	       ret += (160.0 * Math.sin(lon / 12.0 * pi) + 320 * Math.sin(lon * pi  / 30.0)) * 2.0 / 3.0;
	       return ret;
	}

	private static double transformLon(double lat, double lon) {
	       double ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
	       ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
	       ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
	       ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
	       return ret;
	}
}
