var GpsToBd09llPlugin = function() {
};
//TakePhotoPlugin.prototype.startActivity = function(success, error, testData1) {
//    return PhoneGap.exec(success, error, 'TakePhotoPlugin', // java类名，plugins.xml中注册的名字
//    'startActivity', // action，Java方法中用来匹配的字段
//    [ testData1 ] // params 传递的参数，Array形式
//    );
//};
GpsToBd09llPlugin.prototype = {
	startActivity:function(success, error, testData1,actions) {
		PhoneGap.exec(success, error, 'GpsToBd09llPlugin', // java类名，plugins.xml中注册的名字
			    actions, // action，Java方法中用来匹配的字段
			    [testData1] // params 传递的参数，Array形式
			    );
	}
};
PhoneGap.addConstructor(function() {
    // 如果不支持window.plugins,则创建并设置
    PhoneGap.addPlugin('GpsToBd09llPlugin', new GpsToBd09llPlugin());
});