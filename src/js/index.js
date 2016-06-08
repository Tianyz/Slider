$(function(){
    var $slider_wrap = $('#sliderWrap'),
        $slider = $('#sliderList'),
        $slider_list = $('#sliderList'),
        $slider_items = $('.sliderItem'),
        slider_len = $slider_items.length,
        cur_index = 0,
        next_index = 1;

    // $slider_wrap.css({'position': 'relative'});
    //
    // $slider_items.each(function(index){
    //
    //     if(index != cur_index){
    //         $(this).hide();
    //
    //         return this;
    //     }
    //
    // });

    // $('#btn').on('click', function(){
    //     $slider_items.eq(0).fadeOut();
    // });

    var slider = new $.slider({
        slider_wrap_id: 'sliderWrap',
        slider_items_class: 'sliderItem',
    });

    slider.init().autoSlide();
    // slider.init();

    // var index = 0;
    // 
    // $('#btn').on('click', function(){
    //     slider.slideTo(++index);
    // });
    //
    // $('#btn_2').on('click', function(){
    //     slider.slideTo(1);
    // });
});
