;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Owl carousel
		------------------------------------------------ */

			if($('.owl-carousel').length){

				$('.owl-carousel').each(function(){

					var $this = $(this);

					if($this.hasClass('full_width')){

						$this.owlCarousel({

							navigation : true, // Show next and prev buttons
							slideSpeed : 300,
							paginationSpeed : 400,
							singleItem:true

						});

					}
					else{

						var desktop = $this.attr('data-desktop'),
							large = $this.attr('data-large'),
							medium = $this.attr('data-medium'),
							small = $this.attr('data-small'),
							extraSmall = $this.attr('data-extra-small');

						$this.owlCarousel({

							itemsCustom : [
								[0, extraSmall],
								[480, small],
								[768, medium],
								[992, large],
								[1200, desktop]
							],
							navigation : true

						});

					}

				});

			}

        /* ------------------------------------------------
				End of Owl carousel
		------------------------------------------------ */

		/* ------------------------------------------------
				customSelect
		------------------------------------------------ */

			if($(".custom_select").length){

				$(".custom_select").customSelect();

			}

        /* ------------------------------------------------
				End of customSelect
		------------------------------------------------ */

		/* ------------------------------------------------
				Arcticmodal
		------------------------------------------------ */

			$(".arcticmodal").on("click",function(){

				var modal = $(this).attr("data-modal");

				$(modal).arcticmodal();

			});

			if($('#more_news').length){

				setTimeout(function(){

					$('#more_news').arcticmodal();

				},1000);

			}

        /* ------------------------------------------------
				End of Arcticmodal
		------------------------------------------------ */

		/* ------------------------------------------------
				Counter-Up-master  add 00.02.16
		------------------------------------------------ */

			if($('.counter').length){

				$('.counter').counterUp({
	                delay: 10,
	                time: 2000
	            });

			}

        /* ------------------------------------------------
				End Counter-Up-master
		------------------------------------------------ */

		/* ------------------------------------------------
				jQueryFormStyler  add 20.02.16
		------------------------------------------------ */

			if($('.form_styler').length){

				$('.form_styler').styler({
                    selectSearch: true
                });

			}

        /* ------------------------------------------------
				End jQueryFormStyler
		------------------------------------------------ */

		/* ------------------------------------------------
				Сountdown
		------------------------------------------------ */

			if($('.countdown_box').length){

				$('.countdown_box').each(function(){

					var $this = $(this),
						date = $this.attr('data-date');

					$($this).countdown(date, function(event) {

				     var $this = $(this).html(event.strftime(

				      '<div class="countdown alignright">'
				      +'<div class="clock"><p>%D</p><span>Дней</span></div>'
				      +'<div class="clock"><p>%H</p><span>часов</span></div>'
				      +'<div class="clock"><p>%M</p><span>минут</span></div>'
				      +'</div>'
				      ));
				    });

				});

		    }

		/* ------------------------------------------------
				End of the Countdown
		------------------------------------------------ */

		/* ------------------------------------------------
				customSelect
		------------------------------------------------ */

			if($(".date_to").length){

				$('.date_to').inputmask();

			}

			if($(".number_card").length){

				$('.number_card ').inputmask();

			}

        /* ------------------------------------------------
				End of customSelect
		------------------------------------------------ */


	});

	$(window).load(function(){

		/* ------------------------------------------------
				Table switch
		------------------------------------------------ */
            jQuery(function tableSwitch(){
                $('.table_button').click(function() {
                    $(this).toggleClass('active');
                    if( $(this).hasClass('active')){
                        $(this).parent('.table_description').next().hide(500);
                        $(this).parent('.table_description').css({'margin-bottom' : '5px'});
                    }else{
                        $(this).parent('.table_description').next().show(500);
                        $(this).parent('.table_description').css({'margin-bottom' : '0px'});
                    }
                });
            });

        /* ------------------------------------------------
				End of Table switch
		------------------------------------------------ */

		/* ------------------------------------------------
				Color Picker
		------------------------------------------------ */

			if($(".colorSelector").length){

				$(".colorSelector").each(function(){
					var $this = $(this),
						color = $this.attr('data-bg');

					$this.css({
						"background-color": color
					}).next().val(color);

					$this.ColorPicker({
						color: color,
						onSubmit: function(hsb, hex, rgb, el) {
							$(el).css({
								"background-color": "#"+hex
							});
							$(el).next().val('#'+hex);
							$(el).ColorPickerHide();
						},
						onShow: function(colpkr){
							$(colpkr).fadeIn(500);
							return false;
						},
						onHide: function(colpkr){
							$(colpkr).fadeOut(500);
							return false;
						},
					});
				});

			}

        /* ------------------------------------------------
				End of Color Picker
		------------------------------------------------ */

		/* ------------------------------------------------
			WebRating
		------------------------------------------------ */

			if($('#rateYo').length){

			  $("#rateYo").rateYo({
			    rating 		: 4,
			    starWidth	: "18px",
			    normalFill	: "#dedfe0",
			    ratedFill	:  "#f2ba00"
			  });

			}

		/* ------------------------------------------------
			End of the webRating
		------------------------------------------------ */

	});

})(jQuery);