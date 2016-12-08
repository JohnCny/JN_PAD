package com.cardpay.banksaler_rocket;

import java.util.LinkedHashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;


public class CoordinateTranslatePlugin extends Plugin{

	@Override
	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {
		try {

			Map<String,Object> result = new LinkedHashMap<String,Object>();
			// sourceLatLng待转换坐标  
			System.out.println("00");
			double lon=Double.parseDouble(arg1.getJSONObject(0).get("lon").toString());
			double lat=Double.parseDouble(arg1.getJSONObject(0).get("lat").toString());
			System.out.println("11");
			Gps location =gcj02_To_Bd09(lat,lon);
			System.out.println("22");
			result.put("lon", location.getWgLon());
			result.put("lat", location.getWgLat());
			String json=location.getWgLat()+"@"+location.getWgLon();
			System.out.println(json);
			return new PluginResult(PluginResult.Status.OK, json);	
		} catch (Exception e) {
			return new PluginResult(PluginResult.Status.ERROR, "error");
		}
	}




	public static final String BAIDU_LBS_TYPE = "bd09ll";

	public static double pi = 3.1415926535897932384626;
	public static double a = 6378245.0;
	public static double ee = 0.00669342162296594323;

	public static Gps gcj02_To_Bd09(double gg_lat, double gg_lon) {
		double x = gg_lon, y = gg_lat;
		double z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi);
		double theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi);
		double bd_lon = z * Math.cos(theta) + 0.0065;
		double bd_lat = z * Math.sin(theta) + 0.006;
		return new Gps(bd_lat, bd_lon);
	}

}
