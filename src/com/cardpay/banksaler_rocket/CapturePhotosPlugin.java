package com.cardpay.banksaler_rocket;

import java.io.File;

import org.json.JSONArray;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;

public class CapturePhotosPlugin extends Plugin{
	private String callbackIDs="";
	String strImgPath;
	@Override
	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {
		callbackIDs=arg2;
		try {
			getpucture();
			PluginResult r=new PluginResult(PluginResult.Status.OK, "false");	
			r.setKeepCallback(true);
			System.out.println(r.getMessage());
			return r;
		} catch (Exception e) {
			return new PluginResult(PluginResult.Status.ERROR, "error");
		}
	}

	
	public void getpucture(){
		
		
	Intent imageCaptureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
	strImgPath = Environment.getExternalStorageDirectory()
			.toString() + "/pccredit/";// 存放照片的文件夹
	String fileName =  System.currentTimeMillis() + ".jpg";// 照片命名
	File out = new File(strImgPath);
	if (!out.exists()) {
		out.mkdirs();
	}
	out = new File(strImgPath, fileName);
	strImgPath = strImgPath + fileName;// 该照片的绝对路径
	Uri uri = Uri.fromFile(out);
	imageCaptureIntent.putExtra(MediaStore.EXTRA_OUTPUT, uri);
	imageCaptureIntent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 1);
	this.ctx.startActivityForResult(this,imageCaptureIntent,11);
	}
	
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent intent) {
		 if(requestCode==11){
	           if(resultCode == Activity.RESULT_OK){
	              //返回时调用
	              Log.e("test", strImgPath); 
	              this.success(new PluginResult(PluginResult.Status.OK, strImgPath), callbackIDs);
	           }
	       }else{
	    	   super.onActivityResult(requestCode, resultCode, intent);
	       }
	}
}
