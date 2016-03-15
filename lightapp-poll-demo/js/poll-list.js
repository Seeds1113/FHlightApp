var PollList = (function(){
	var URL = {
		involved:"/microapp/tss/vote/queryInvolvedVote.action",
		createdVote:"/microapp/tss/vote/queryCreatedVote.action",
		deleteVote:"/microapp/tss/vote/deleteVoteById.action"
	};
	var Template = {
		involved:"../tpl/involvedList.html",
		createdVote:"../tpl/createdVoteList.html"
	}

	/*var getInvolved = function(param,success,error){
		ajaxModel.getData(URL.involved,param).then(success,error);
	};*/
	function getInvolved(param,success,error){
		ajaxModel.getData(URL.involved,param).then(success,error);
	};
	function getCreatedVote(param,success,error){
		ajaxModel.getData(URL.createdVote,param).then(success,error);
	};

	function renderInvolved(data,renderFun){
		$.get(Template.involved,function(tpl){
			var html = Handlebars.compile(tpl)(data);
			renderFun(html)
		});
	}
	function renderCreatedVote(data,renderFun){
		$.get(Template.createdVote,function(tpl){
			var html = Handlebars.compile(tpl)(data);
			renderFun(html)
		});
	}

	function deleteCard(param,success,error){
		ajaxModel.getData(URL.deleteVote,param).then(success,error);
	}

	
	return {
		getInvolved:getInvolved,
		getCreatedVote:getCreatedVote,
		renderInvolved:renderInvolved,
		renderCreatedVote:renderCreatedVote,
		deleteCard:deleteCard
	}
})();

Handlebars.registerHelper("equal", function (attr, expect, options) {
	return attr === expect ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("pollState", function (state, options) {
	return state === 1 ? "未投":"已投"
});


 	