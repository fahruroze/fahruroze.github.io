/* //event saat diklik

 	$('.page-scroll').on('click', function(e){
 	
 //ambil isi href
 	var tujuan = $(this).attr('href');

 // ambil element terkait
 	var elemenTujuan = $(tujuan);

 	//pindahkan scroll
 	$('html,body').animate({
 		scrollTop: elemenTujuan.offset().top - 50
 	});
 	

 	 e.preventDefault();

 });

*/

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});﻿
 
