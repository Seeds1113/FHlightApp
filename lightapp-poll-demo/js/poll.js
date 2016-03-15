var Poll = (function(){
	var URL = {
		getVoteInfo:"/microapp/tss/vote/getVoteById.action",
		voting:"/microapp/tss/vote/voting.action"
	};
	var Template = {
		voteInfo:"../tpl/voteInfo.html"
	}

	function getVoteInfo(param,success,error){
		ajaxModel.getData(URL.getVoteInfo,param).then(success,error);
	}
	function renderVoteInfo(data,renderFun){
		$.get(Template.voteInfo,function(tpl){
			var html = Handlebars.compile(tpl)(data);
			renderFun(html)
		});
	}
	function voting(param,success,error){
		ajaxModel.postData(URL.voting,param).then(success,error);
	}

	return {
		getVoteInfo:getVoteInfo,
		renderVoteInfo:renderVoteInfo,
		voting:voting
	}
})();

Handlebars.registerHelper("ifName", function (value, options) {
	return value ? "记名投票":"不记名投票"
});
Handlebars.registerHelper("timer", function (value, options) {
	return parseDate(value);
});

Handlebars.registerHelper("percent", function (value1, value2) {
	return (value1/value2)+"%";
});

function parseDate(str){
	console.log(str)
	var list = str.split(/[\s]/);
	return list[0];
}
