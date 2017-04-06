$( document ).ready(function() {
    var card = $('.card');
    var targetGrow = $( ".box" );
    var showPanel = $( ".panel" );
    var counter = $( ".cont-num" );
    var limit = $('.limit');        

    card.click(function(){
        $(this).find( targetGrow ).addClass('grow');
        $(this).find( showPanel ).show();
        $(this).find( limit ).show();
        $('.card').not(this).find( targetGrow ).removeClass('grow');
        $('.card').not(this).find( showPanel ).hide();
        $('.card').not(this).find( limit ).hide();
        $('.card').not(this).addClass('allHide')
    });

    $('.apply').click(function(e){
        e.stopPropagation()
        $(this).parents().eq(1).removeClass('grow');
        $('.panel').hide();
        $('.limit').hide();
        setTimeout(function(){
            $('.card').removeClass('allHide')
        },500);
    });

    $('.sum').click(function(){
        var localLimit = $(this).parents().eq(1).children().eq(0);
        $(this).parent().prev().children().text(function(i, val) {
            if ( val >= 10) {
                    localLimit.addClass('limit-appear');
            }
            else {
                localLimit.removeClass('limit-appear'); 
            }
        });            
        $(this).parent().prev().children()
        .text(function(i, val) {
            if ( val > 9) {
                return 10
            }
            else {
                return val*1+1
            }
        });
        var cls = 'addScale';
        var image = $(this).parents().eq(1).children().eq(1);
        image.addClass(cls);
        setTimeout(function(){
            image.removeClass(cls)
        },200);
    });

    $('.subtract').click(function(){
        var localLimit = $(this).parents().eq(1).children().eq(0);
        $(this).parent().prev().children().text(function(i, val) {
            if ( val <= 0) {
                localLimit.addClass('limit-appear');
            }
            else {
                localLimit.removeClass('limit-appear'); 
            }
        });
        $(this).parent().prev().children()
        .text(function(i, val) {
            if ( val < 1) {
                return 0
            }
            else {
                return val*1-1
            }
        });
        var cls = 'subtractScale';
        var image = $(this).parents().eq(1).children().eq(1);
        image.addClass(cls);
        setTimeout(function(){
            image.removeClass(cls)
        },200);
    });
});