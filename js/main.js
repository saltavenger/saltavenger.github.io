function mkAccordion(obj){
	$(obj).siblings('.detailsInfo').slideToggle();
	if($(obj).children('p').text() === '+'){
		$(obj).children('p').text('-');
	}
	else{
		$(obj).children('p').text('+');
	}
}

function readToggle(obj){
	if($(obj).children('a').text() === "Read More +"){
		$(obj).prev('.bodyText').addClass('expanded');
		$(obj).children('a').text('Read Less -');
	}
	else{
		$(obj).prev('.bodyText').removeClass('expanded');
		$(obj).children('a').text('Read More +');
	}
}

$(document).ready(function(){
	$('.detailsTitle').click(function(){
		mkAccordion(this);
	});
	$('.readToggle').click(function(){
		readToggle(this);
	});
});