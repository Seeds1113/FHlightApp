(function(){
	$.ajaxSetup({
		cache: false,
		error:function(jqXHR, textStatus, errorMsg){
			console.log( '发送AJAX请求到"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg ); 
		},
		data:{
			// "_": new Date().getTime()
			/*sessionId:"mobileark%23829cc4f6-8b16-4bab-8704-ffc49256f49a",
			reqSource:"client"*/
		}
	});
	var defUrl = "?sessionId=mobileark%23829cc4f6-8b16-4bab-8704-ffc49256f49a&reqSource=client"
	var ajaxModel = {
		/**
		 * [cacheAjaxObject description]
		 * @param  {[type]} ajaxUrl [后端接口地址]
		 * @param  {[type]} params  [参数]
		 * @param  {[type]} type    [GET or POST]
		 * @param  {[type]} custom  [ajax 更多参数配置项]
		 * @return {[type]}         [返回一个ajax对象]]
		 */
		ajaxObject: function(ajaxUrl, params, type, custom) {
			ajaxUrl += defUrl;
			var ajaxParams = {
					url: ajaxUrl,
					type: type || 'GET',
					dataType: 'json',
					data: params
				},
				ajaxObject;
			$.extend(ajaxParams,custom);
			ajaxObject = $.ajax(ajaxParams);

			return ajaxObject;
		},
		getData: function(ajaxUrl, params, custom){
			var ajaxObject = this.ajaxObject(ajaxUrl, params, 'GET', custom);
			return ajaxObject;
		},
		postData: function(ajaxUrl, params, custom){
			var ajaxObject = this.ajaxObject(ajaxUrl, params, 'POST', custom);
			return ajaxObject;
		}
	}
	return window.ajaxModel = ajaxModel;
})()