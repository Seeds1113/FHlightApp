var Mplus = {
	//3.7.3 获取当前地理位置接口
	getLocation : function(success,fail){
		alert("getLocation");
		mplus.getLocation({
		    success: function (res) {
		    	alert(1);
		    	success && success(res);
		        // var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        // var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        // var speed = res.speed; // 速度，以米/每秒计
		        // var accuracy = res.accuracy; // 位置精度
			},
			fail: function (res) {
				alert(2);
			    fail && fail(res);
			}
		});
	},
	previewImage : function(current,urls){
        mplus.previewImage({
            current: current, // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        });
    }

}