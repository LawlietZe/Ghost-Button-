   $(function(){
   	$('.link .button').hover(function(){
   		var title = $('.link .button').attr('data');
      $('.tip em').text(title);
      $('.tip').css('opacity',1);
      var pos = $(this).position().left+20;
      var dis = ($('.tip').outerWidth()-$(this).outerWidth())/2;
      var l = pos - dis;
      $('.tip').css({'left':l+'px'}).animate({'top':145,'opacity':1});
   	},function(){
       $('.tip').animate({'top':100,'opacity':0},500);   
   	})
   })