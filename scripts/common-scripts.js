
;(function($){
	$(function(){
        
        if($('#home-slider').length){
            $('#home-slider').slick({
                dots: true,
                arrows:true,
                autoplay:true,
                autoplaySpeed:5000,
                infinite: true,
                //navigation:false,
                speed: 1000,
                slidesToShow:3,
                slidesToScroll: 1,
                prevArrow: '#slider-controller .prev',
                nextArrow: '#slider-controller .next',
            });
        }
        
        if($('#our-puple-slider').length){
            $('#our-puple-slider').slick({
                dots: true,
                arrows:true,
                autoplay:true,
                autoplaySpeed:5000,
                infinite: true,
                //navigation:false,
                speed: 1000,
                slidesToShow:3,
                slidesToScroll: 1,
                prevArrow: '#our-puple-slider-controller .prev',
                nextArrow: '#our-puple-slider-controller .next',
            });
        }
        
        if($('#our-thoughts-slider').length){
            $('#our-thoughts-slider').slick({
                dots: true,
                arrows:true,
                autoplay:true,
                autoplaySpeed:5000,
                infinite: true,
                //navigation:false,
                speed: 1000,
                slidesToShow:3,
                slidesToScroll: 1,
                prevArrow: '#our-puple-slider-controller .prev',
                nextArrow: '#our-puple-slider-controller .next',
            });
        }
        
        
        if ($(".animate").length){

            var $animation_elements = $('.animate');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        } 
        
        
        
	});// End ready function.
    
    

})(jQuery);
