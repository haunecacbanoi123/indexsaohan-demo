(function() {

	$(window).on('scroll', function() {
		goTopApp.goTopFunc();
	});

	/*
	1.	go top button
		mobile common
	*/
	var goTopApp = {
		//scroll 100 이하 숨기기
		showGTBtn: 120,
		goTopFunc: function(){
			if ( document.body.scrollTop > this.showGTBtn || document.documentElement.scrollTop > this.showGTBtn ) {
				if(document.getElementById("goTop")) {
					document.getElementById("goTop").style.display = "block";
				}
			} else {
				if(document.getElementById("goTop")) {
					document.getElementById("goTop").style.display = "none";
				}
			}
		}
	}
});


/*
1.	go top button
	mobile common
*/
function topFunc() {
	$("html, body").stop().animate(
		{"scrollTop": 0}, 400
	);
};


/*
2.	menu select
	mobile common
*/
$('.select_tit').on('click', function(){
	var pathName	=	location.pathname;
	var exception	=	'/m/brandEventView.php';

	if(pathName !== exception) {
		if($('.select_opt').is(':visible')) {
			$('.select_opt').slideUp(200);
		}

		if($(this).next().is(':visible')) {
			$(this).next().slideUp(200);
		} else {
			$(this).next().slideDown(200);
		}
	} else {
		$('.select_opt').toggle();
	}
})

/*
3.	brand top menu on/off
	web common(브랜드)
*/
$(".gnb_menu li").on("mouseover", function () {
	$(this).closest("#header").stop().addClass("gnb_open");
	$('#header .gnb_menu > li > ul').stop().fadeIn(400);
});
$(".nav_inner").mouseleave(function () { 
	$(this).closest("#header").stop().removeClass("gnb_open");
	$('#header .gnb_menu > li > ul').stop().hide();
});


/*
4.	개발자도구 금지

$(document).bind('keydown', function(e){
	if(e.keyCode == 123 ){
		e.preventDefault();
		e.returnValue = false;
	}
})
$(document).bind('contextmenu', function(e){
	return false;
})
*/