
$(function(){
	WeddingTimer();
	var timer = setInterval(WeddingTimer,1000);
});

function WeddingTimer (){
	var targetDate = new Date(2025,11,7,11,0,0);
	var nowDate = new Date();
	var diff = Number(targetDate) - Number(nowDate);

	var day = Math.floor(diff / (1000*60*60*24));
	var hour = Math.floor((diff / (1000*60*60))%24);
	var min = Math.floor((diff / (1000*60))%60);
	var sec = Math.floor(diff / 1000%60);
	$("#Day").html(String(day));
	$("#Day_2").html(String(day));
	$("#Hour").html(String(hour).padStart(2,"0"));
	$("#Min").html(String(min).padStart(2,"0"));
	$("#Sec").html(String(sec).padStart(2,"0"));
}

