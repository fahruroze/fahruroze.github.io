


$('.page-scroll').on('click', function(e) 
{
	//ambil isi href
 	var tujuan = $(this).attr('href');
 	//ambil elemen terkait
	 var elemenTujuan = $(tujuan);

	//pindahkan scroll 
 	$('html , body').animate({
  	scrollTop: elemenTujuan.offset().top - 50
 	}, 1000, 'easeInOutExpo');

	 e.preventDefault();
});﻿



//PARALLAX

//About
$(window).on('load', function() {
	$('.p1').addClass('pmuncul');
	$('.p2').addClass('pmuncul');
	
	});



	$(window).scroll(function()
{
	var wScroll = $(this).scrollTop();

		//jumbotron
		$('.jumbotron img').css({
		 'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});

		$('.jumbotron h1').css({
		 'transform' : 'translate(0px, '+ wScroll/1 +'%)'
		});

		$('.jumbotron p').css({
		 'transform' : 'translate(0px, '+ wScroll/0.5 +'%)'
		});

//PORTFOLIO
	if(wScroll > $('.portfolio').offset().top -500 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');		  
			}, 400 * (i+1));
		});	



		//
	}

});






 
