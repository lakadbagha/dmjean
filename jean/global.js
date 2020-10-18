		$('#top_text').animate({'top':winH+'px'},1,function(){
			$(this).delay(700).animate({'top':'10px'},1)
		})
		$('#icons_links').css('z-index','2').animate({'top':(winH-100)+'px','opacity':0},1,function(){
			$(this).delay(800).animate({'top':'75px','opacity':1},1,function(){
				$(this).css('z-index','10')
			})
		})
		$('#main_text').animate({'top':winH+'px'},1,function(){
			$(this).delay(700).animate({'top':'75px'},1,function(){
				$('#lang_box li').removeClass('selected');
				_this.addClass('selected');
				$('#main_text li').removeClass('active');
				$('#main_text li[lang="'+thisLang+'"]').addClass('active');
				
				$('#icons_links li').removeClass('active');
				$('#icons_links li[lang="'+thisLang+'"]').addClass('active');
				
			})
		})
	}
	if(thisLang=='more'){
		window.location = "http://www.dmjean.in";
	}
});

function envelopePos(){
	var winH = $(window).height();
	if(winH<800){
		$('#main_stage>.stage').css({'bottom':'-150px'})
		$('#photo_3').css({'bottom':'auto','top':'80px'});
		$('#photo_2').css({'bottom':'auto','top':'100px'});
		$('#lang_box, #link_box').css({'bottom':'165px'});
	}else{
		$('#main_stage>.stage, #photo_3, #photo_2, #lang_box, #link_box').removeAttr('style');
	}
}

$('.header').animate({'opacity':1},1000,function(){
	$('#texture').css('z-index',1);
	$('.header').addClass('step2');
	$(this).animate({'opacity':1},1000,function(){
		$('.header').addClass('step4');
		$(this).animate({'opacity':1},2000,function(){
			$('.header').addClass('step5');
			$(this).animate({'opacity':1},1000,function(){
				$('#envelope').addClass('step1');
				$(this).animate({'opacity':1},1000,function(){
					$('#envelope').addClass('step2');
					$(this).animate({'opacity':1},100,function(){
						$('#paper1').addClass('step1');
						$(this).animate({'opacity':1},600,function(){
							$('#e_cover').addClass('step1');
							$('#site_logo').addClass('step1');
							$('#paper2').addClass('step1');
							$('#main_text').addClass('step1');
							$('#top_text').addClass('step1');

							var url = window.location.href;
							var param = url.split('#');
							if(param[1]=='fa' || param[1]=='en' || param[1]=='ar' || param[1]=='fr' || param[1]=='es'){
								$('#lang_box li[lang="'+param[1]+'"]').click();
							}else{
								$('#lang_box li[lang="en"]').click();
							}
							
							$(this).animate({'opacity':1},1000,function(){
								$('#top_text').css('transition','all 1s ease-in-out')
								$('#icons_links').addClass('step1');
								$('#photo_1,#photo_2,#photo_3').addClass('step1');
								$(this).animate({'opacity':1},1000,function(){
									$("#flowers_1").addClass('step1');
									$(this).animate({'opacity':1},100,function(){
										$("#flowers_2").addClass('step1');
										$(this).animate({'opacity':1},1000,function(){
											$('#lang_box,#link_box').addClass('step1');
											$(this).animate({'opacity':1},1000,function(){
												envelopePos();
											});
										});
									})
								});
							});
						});
					});
				});
			});
		});
	});
});


$('#comment-box .comment-stage .field-box input, #comment-box .comment-stage .field-box textarea').on('focus',function(){
	$(this).parent().addClass('focus');
});
$('#comment-box .comment-stage .field-box input, #comment-box .comment-stage .field-box textarea').on('blur',function(){
	var _val = $.trim($(this).val());
	if(_val=='' || _val==' '){
		$(this).parent().removeClass('focus').removeClass('active');
		$(this).parent().children('input').val('');
	}else{
		$(this).parent().removeClass('focus').addClass('active');
	}
});


$(window).resize(function(){envelopePos();});
