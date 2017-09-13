package com.cardpay.banksaler_rocket;

import java.io.File;

import org.json.JSONArray;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

import android.content.ContentResolver;
import android.content.Intent;
import android.net.Uri;
import android.provider.MediaStore;
import android.text.TextUtils;

public class DeletePhoto extends Plugin{

	@Override
	public PluginResult execute(String arg0, JSONArray arg1, String arg2) {
	
		String path = arg0; //获取到的图片完整路径（例子）
		System.out.println("删除图片路径："+path);
		if(!TextUtils.isEmpty(path)){
//		Uri uri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
//		ContentResolver mContentResolver = ctx.getContentResolver();
//		String where = MediaStore.Images.Media.DATA + "='" + path + "'";
//		//删除图片
//		mContentResolver.delete(uri, where, null);
//			File file = new File(path);
			String[] files=path.split("/");
			String fileName=files[files.length-1];
//			System.out.println("图片名称："+fileName);
			String filepath="/storage/emulated/0/"+fileName;
			File file2 = new File(filepath);
			Intent intent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
			if(file2.exists()){
				file2.delete();
				Uri uris = Uri.fromFile(file2);
				intent.setData(uris);
				ctx.sendBroadcast(intent);
			}
//			if(file.exists()){
//				file.delete();
//				Uri uris = Uri.fromFile(file);
//				intent.setData(uris);
//				ctx.sendBroadcast(intent);
//			}
		return new PluginResult(PluginResult.Status.OK, "删除成功");
		}
		return new PluginResult(PluginResult.Status.ERROR, "图片路径为空");
	}

}
