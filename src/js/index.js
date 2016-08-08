$(function() {
    var $slider_wrap = $('#sliderWrap'),
        $slider = $('#sliderList'),
        $slider_list = $('#sliderList'),
        $slider_items = $('.sliderItem'),
        slider_len = $slider_items.length,
        cur_index = 0,
        next_index = 1;

    var slider = new $.slider({
        slider_wrap_id: 'sliderWrap',
        slider_items_class: 'sliderItem',
    });

    slider.init().autoSlide();
});
