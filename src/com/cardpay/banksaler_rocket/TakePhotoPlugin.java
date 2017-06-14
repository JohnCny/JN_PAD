package com.cardpay.banksaler_rocket;


import java.io.File;

import org.json.JSONArray;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ContentUris;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.util.Log;

@SuppressLint("HandlerLeak")
public class TakePhotoPlugin extends Plugin{
	private String callbackIDs="";
	public PluginResult execute(String action, JSONArray filePath, String callbackID) {
		callbackIDs=callbackID;
		try {
			if(action.equals("select")){
				startselect();
			}
			PluginResult r=new PluginResult(PluginResult.Status.OK, "false");	
			r.setKeepCallback(true);
			System.out.println(r.getMessage());
			return r;
		} catch (Exception e) {
			return new PluginResult(PluginResult.Status.ERROR, "error");
		}
	}

//	private  Handler handler = new Handler(){
//		@Override
//		public void handleMessage(Message msg) {
//			if (msg == null) {
//				return;
//			}
//			switch (msg.what) {
//			case 1:
////				System.out.println("6699");
////				Intent imageCaptureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
////				strImgPath = Environment.getExternalStorageDirectory()
////						.toString() + "/dlion/";// 存放照片的文件夹
////				String fileName =  System.currentTimeMillis() + ".jpg";// 照片命名
////				File out = new File(strImgPath);
////				if (!out.exists()) {
////					out.mkdirs();
////				}
////				out = new File(strImgPath, fileName);
////				strImgPath = strImgPath + fileName;// 该照片的绝对路径
////				Uri uri = Uri.fromFile(out);
////				imageCaptureIntent.putExtra(MediaStore.EXTRA_OUTPUT, uri);
////				imageCaptureIntent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 1);
//				Intent intent = new Intent(Intent.ACTION_PICK,android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
//				intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,"image/*");
//				ctx.startActivityForResult(intent, 1);
//				break;
//			}
//		};
//	};


	
	
	@SuppressLint("InlinedApi")
	public String startselect(){
		
		if (Build.VERSION.SDK_INT < 19) {
			System.out.println("<19");
			Intent intent = new Intent();
			intent.setType("image/*");
			intent.setAction(Intent.ACTION_GET_CONTENT);
			//由于startActivityForResult()的第二个参数"requestCode"为常量，
			//个人喜好把常量用一个类全部装起来，不知道各位大神对这种做法有异议没？
			this.ctx.startActivityForResult(this,intent, 11);
		} else {
			System.out.println(">19");
			Intent intent = new Intent();
			intent.setType("image/*");
			//由于Intent.ACTION_OPEN_DOCUMENT的版本是4.4以上的内容
			//所以注意这个方法的最上面添加了@SuppressLint("InlinedApi")
			//如果客户使用的不是4.4以上的版本，因为前面有判断，所以根本不会走else，
			//也就不会出现任何因为这句代码引发的错误
			intent.setAction(Intent.ACTION_OPEN_DOCUMENT);
			this.ctx.startActivityForResult(this,intent,11);
		}
		return "OK";
		
	}
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent intent) {
		 if(requestCode==11){
	           if(resultCode == Activity.RESULT_OK){
	              //返回时调用
	        	  Uri uri = intent.getData();
	        	  String path = getPath(ctx,uri);
	              Log.e("test", path); 
	              this.success(new PluginResult(PluginResult.Status.OK, path), callbackIDs);
	           }
	       }else{
	    	   super.onActivityResult(requestCode, resultCode, intent);
	       }
	}

//	private void sleep()
//	{
//		try
//		{
//			synchronized(synObj)
//			{
//				synObj.wait();
//			}
//		}
//		catch (InterruptedException e)
//		{
//			e.printStackTrace();
//		}
//	}
//
//	private void weakup()
//	{
//		synchronized(synObj)
//		{
//			synObj.notify();
//		}
//	}

	@SuppressLint("NewApi")
	public String getPath(final Context context, final Uri uri) {

		final boolean isKitKat = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;

		// DocumentProvider
		if (isKitKat && DocumentsContract.isDocumentUri(context, uri)) {
			// ExternalStorageProvider
			if (isExternalStorageDocument(uri)) {
				final String docId = DocumentsContract.getDocumentId(uri);
				final String[] split = docId.split(":");
				final String type = split[0];

				if ("primary".equalsIgnoreCase(type)) {
					return Environment.getExternalStorageDirectory() + "/"
							+ split[1];
				}

				// TODO handle non-primary volumes
			}
			// DownloadsProvider
			else if (isDownloadsDocument(uri)) {
				final String id = DocumentsContract.getDocumentId(uri);
				final Uri contentUri = ContentUris.withAppendedId(
						Uri.parse("content://downloads/public_downloads"),
						Long.valueOf(id));

				return getDataColumn(context, contentUri, null, null);
			}
			// MediaProvider
			else if (isMediaDocument(uri)) {
				final String docId = DocumentsContract.getDocumentId(uri);
				final String[] split = docId.split(":");
				final String type = split[0];

				Uri contentUri = null;
				if ("image".equals(type)) {
					contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
				} else if ("video".equals(type)) {
					contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
				} else if ("audio".equals(type)) {
					contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
				}

				final String selection = "_id=?";
				final String[] selectionArgs = new String[] { split[1] };

				return getDataColumn(context, contentUri, selection,
						selectionArgs);
			}
		}
		// MediaStore (and general)
		else if ("content".equalsIgnoreCase(uri.getScheme())) {

			// Return the remote address
			if (isGooglePhotosUri(uri))
				return uri.getLastPathSegment();

			return getDataColumn(context, uri, null, null);
		}
		// File
		else if ("file".equalsIgnoreCase(uri.getScheme())) {
			return uri.getPath();
		}

		return null;
	}
	
	
	/**
	 * Get the value of the data column for this Uri. This is useful for
	 * MediaStore Uris, and other file-based ContentProviders.
	 * 
	 * @param context
	 *            The context.
	 * @param uri
	 *            The Uri to query.
	 * @param selection
	 *            (Optional) Filter used in the query.
	 * @param selectionArgs
	 *            (Optional) Selection arguments used in the query.
	 * @return The value of the _data column, which is typically a file path.
	 */
	public String getDataColumn(Context context, Uri uri, String selection,
			String[] selectionArgs) {

		Cursor cursor = null;
		final String column = "_data";
		final String[] projection = { column };

		try {
			cursor = context.getContentResolver().query(uri, projection,
					selection, selectionArgs, null);
			if (cursor != null && cursor.moveToFirst()) {
				final int index = cursor.getColumnIndexOrThrow(column);
				return cursor.getString(index);
			}
		} finally {
			if (cursor != null)
				cursor.close();
		}
		return null;
	}

	/**
	 * @param uri
	 *            The Uri to check.
	 * @return Whether the Uri authority is ExternalStorageProvider.
	 */
	public static boolean isExternalStorageDocument(Uri uri) {
		return "com.android.externalstorage.documents".equals(uri
				.getAuthority());
	}

	/**
	 * @param uri
	 *            The Uri to check.
	 * @return Whether the Uri authority is DownloadsProvider.
	 */
	public static boolean isDownloadsDocument(Uri uri) {
		return "com.android.providers.downloads.documents".equals(uri
				.getAuthority());
	}

	/**
	 * @param uri
	 *            The Uri to check.
	 * @return Whether the Uri authority is MediaProvider.
	 */
	public static boolean isMediaDocument(Uri uri) {
		return "com.android.providers.media.documents".equals(uri
				.getAuthority());
	}

	/**
	 * @param uri
	 *            The Uri to check.
	 * @return Whether the Uri authority is Google Photos.
	 */
	public static boolean isGooglePhotosUri(Uri uri) {
		return "com.google.android.apps.photos.content".equals(uri
				.getAuthority());
	}
}
