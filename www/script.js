$(document).scroll(function(){
  $('#menu-bar').toggleClass('scrolling', $(document).scrollTop() > $('#menu').offset().top);
  
});

$(document).ready(function(){
		var div1 = $("#cb-one");
		var div2 = $("#cb-two");
		var div3 = $("#cb-three");
		var position1 = div1.position();
		var position2 = div2.position();
		var position3 = div3.position();
		
		$('#one').click(function () 
		{
			$('html, body').animate({
            scrollTop: (position1.top)
        }, 800);
		
		//$('html,body').animate({
        //scrollTop: $("#cb-three").offset().top + 200},800);
		
		//$(document).scrollTop($('#cb-three').offset().top);
		//$(document).scrollTo('#cb-three');
		
        // return false;
		});
		
		$('#two').click(function () {
			$('html, body').animate({
            scrollTop: (position2.top)
        }, 800);
        // return false;
		});
		
		$('#three').click(function () {
			$('html, body').animate({
            scrollTop: (position3.top)
        }, 800);
        // return false;
		});
		
		//$('.custom-list-circle').mouseenter(function(){
		//	$(this).fadeTo('fast', 0.7);
		//});
		
		//$('.custom-list-circle').mouseleave(function(){
		//	$(this).fadeTo('fast', 0.2);
		//});
});


		