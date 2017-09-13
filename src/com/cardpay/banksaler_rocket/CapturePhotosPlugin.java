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

public class CapturePhotosPlugin extends Plugin{
	private String callbackIDs="";
	String strImgPath;
	Object customername=null;
	PluginResult r=new PluginResult(PluginResult.Status.OK, "false");
	@Override
	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {
		callbackIDs=arg2;
		try {
			customername=arg1.get(0);
			r.setKeepCallback(true);
			getpucture(customername);
			System.out.println(r.getMessage());
			return r;
		} catch (Exception e) {
			return new PluginResult(PluginResult.Status.ERROR, "error");
		}
	}

	
	public void getpucture( Object object){
		
		if(object==null||object==""){
			object="default";
		}
	Intent imageCaptureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
	strImgPath = Environment.getExternalStorageDirectory()
			.toString() + "/pccredit/"+object+"/";// 存放照片的文件夹
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
//	              Log.i("图片路径", strImgPath); 
//	              Log.v("图片URI", intent+""); 
	              
//	              try {
//	                  MediaStore.Images.Media.insertImage(ctx.getContentResolver(),
//	                          new File(strImgPath).getAbsolutePath(), strImgPath.split("/")[0], null);
//	              } catch (FileNotFoundException e) {
//	                  e.printStackTrace();
//	              }
	         	ctx.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(new File(strImgPath))));
	         	this.success(new PluginResult(PluginResult.Status.OK, strImgPath), callbackIDs);
	           }
	       }else{
	    	   super.onActivityResult(requestCode, resultCode, intent);
	       }
	}
}
