var PollAdd = (function(){
	var URL = {
		voteAdd:"/microapp/tss/vote/saveVote.action"
	};
	var Template = "../tpl/poll-list.html";

	/*var getInvolved = function(param,success,error){
		ajaxModel.getData(URL.involved,param).then(success,error);
	};*/
	function getInvolved(param,success,error){
		ajaxModel.getData(URL.involved,param).then(success,error);
	};

	function render(data,renderFun){
		$.get(Template,function(tpl){
			var html = Handlebars.compile(tpl)(data);
			renderFun(html)
		});
	}

	
	return {
		getInvolved:getInvolved,
		render:render
	}
})();

Handlebars.registerHelper("equal", function (attr, expect, options) {
	console.log(attr)
	return attr === expect ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("pollState", function (state, options) {
	return state === 1 ? "未投":"已投"
});


 	