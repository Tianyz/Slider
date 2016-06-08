/**
 * jQuery plugin banner slider
 *
 * @author Tianyz
 */
(function($) {
    $.extend({
        slider: function(args) {
            this.$slider_wrap = $('#' + args.slider_wrap_id);
            this.$slider_items = $('.' + args.slider_items_class);
            this.slider_len = this.$slider_items.length; // length of slider list
            this.cur_index = 0;
            this.interval_time = (args.interval_time === undefined ? 3000 : args.interval_time);
            this.slider_interval = null;

            $.slider.prototype.init = function() {
                var proto = this;

                proto.$slider_wrap.css({ 'position': 'relative' });

                proto.$slider_items.each(function(index) {
                    if (index != proto.cur_index) {
                        $(this).hide();
                    }

                    $(this).css({
                        position: 'absolute',
                        top: 0,
                    });

                    return this;
                });

                // Insert slider control element
                proto.createSliderController();

                // set event listener
                proto.$slider_wrap.on('mouseenter', function() {
                    window.clearInterval(proto.slider_interval);
                });

                proto.$slider_wrap.on('mouseleave', function() {
                    proto.autoSlide();
                });

                return this;
            };

            $.slider.prototype.autoSlide = function() {
                var proto = this;

                proto.slider_interval = window.setInterval(function() {
                    proto.slideTo(proto.cur_index + 1);
                }, proto.interval_time);

                return this;
            };

            /**
             * slider.prototype.slideTo - display specific index slide
             *
             * @param  {integer} to_index specific index
             * @return {object}  this
             */
            $.slider.prototype.slideTo = function(to_index) {
                var proto = this;

                to_index = proto.getLegalIndex(to_index);

                // no change when slide to index equal current index
                if (to_index == proto.cur_index) {
                    // console.log('No need to change! ');
                    return this;
                }

                // set current item z-index: 2
                proto.$slider_items.eq(proto.cur_index).css({ 'z-index': 2 });

                // set next item z-index: 1
                proto.$slider_items.eq(to_index).css({ 'z-index': 1 }).show();

                // current fadeOut
                proto.$slider_items.eq(proto.cur_index).fadeOut(function() {
                    $(this).css({ 'z-index': '' });
                });

                if (proto.control_button) {
                    proto.control_button.eq(proto.cur_index).removeClass('active');
                    proto.control_button.eq(to_index).addClass('active');
                }

                proto.cur_index = to_index;

                return this;
            };

            /**
             * slider.prototype.createSliderController - description
             *
             * @return {null}
             */
            $.slider.prototype.createSliderController = function() {
                var proto = this;

                $control_wrap = $('<div id="slider_control_wrap"></div>');

                for (var i = 0; i < proto.slider_len; i++) {
                    $control_wrap.append('<div class="control_button"></div>');
                }

                // set style
                $control_wrap.css({
                    'width': 20 * proto.slider_len + 'px',
                    'margin-left': -20 * proto.slider_len / 2 + 'px',
                });

                proto.$slider_wrap.append($control_wrap);

                proto.control_button = $('.control_button');

                proto.control_button.eq(proto.cur_index).addClass('active');

                proto.control_button.on('mouseenter', function() {
                    var index = $(this).index();

                    proto.slideTo(index);
                });
            };

            /**
             * Return legal index witch is between 0 and (slider length - 1)
             *
             * @param   {integer} param_index index to checked
             * @return  {integer}             legal index
             */
            $.slider.prototype.getLegalIndex = function(param_index) {
                var proto = this;

                while (param_index < 0) {
                    param_index += proto.slider_len;
                }

                if (param_index >= proto.slider_len) {
                    param_index %= proto.slider_len;
                }

                return param_index;
            };
        }
    });
})(jQuery);
