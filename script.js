$(function(){

    $('#top-btn').click(function(){
        $('html, body').animate({
            'scrollTop':0
        },500);
    });

    $('.scroll').click(function(){
        var position=$('#scroll-jump').offset().top-65;
        $('html, body').animate({
            'scrollTop':position
        },500);
    });
    
    $('.scroll').click(function(){
        $('.menuicon-wrapper').fadeOut();
    });

    $('.login-show').click(function(){
        $('#login-modal').fadeIn();
    });

    $('.signup-show').click(function(){
        $('#signup-modal').fadeIn();
    });

    $('.menu-icon').click(function(){
        $('.menuicon-wrapper').fadeIn();
    });

    $('.menuicon-close').click(function(){
        $('.menuicon-wrapper').slideUp();
    });

    $('.close-modal').click(function(){
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
    });

    $('.lesson-hover').hover(
        function() {
          $(this).find('.text-contents').addClass('text-active');
        },
        function() {
          $(this).find('.text-contents').removeClass('text-active');
        }
    );

    $('.faq-list-item').click(function(){
        var $answer=$(this).find('.answer');
        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        }else{
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });

});