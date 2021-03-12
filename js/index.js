$(function(){
    $('.tabs-panels .tabs li').on('click',function(){
        var $panel = $(this).closest('.tabs-panels');
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        //finds what to replace
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300,showNextPanel);

        //show the next panel
        function showNextPanel(){
            $(this).removeClass('active');
            $('#'+panelToShow).slideDown(300, function(){
                $(this).addClass('active');
            });
        }
    });
});