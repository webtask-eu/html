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

			if($('.select_type1').length){

				$('.select_type1').styler();

			}
			
			if($('.select_type2').length){

				$('.select_type2').styler();

			}

			if($('.currency_filter_change_value').length){
				$('.currency_filter_change_value').styler();
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
		/* ------------------------------------------------
				ionRangeSlider
		------------------------------------------------ */

		if($(".range_slider1").length){

			$(".range_slider1").ionRangeSlider({
				 type: "single",
				  grid: true,
			    values: [" ", " ", " ", " "]
			});
		}
		/* ------------------------------------------------
				End of ionRangeSlider
		------------------------------------------------ */

		/* ------------------------------------------------
				End of ionRangeSlider
		------------------------------------------------ */
		if($(".clock2").length){
            var i = new Date().getTime() + 36000000; //in seconds 1s = 1000
            $('.clock2').countdown(i, {elapse: false})
                .on('update.countdown', function(event) {
                  var $this = $(this);

                $this.html(event.strftime('<p class="event_waiting_txt1 black">%H:%M<span class="seconds">:%S</span></p>'));

            });
		}
		/* ------------------------------------------------
				End of ionRangeSlider
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
						color = $this.attr('data-bg'),
						inputShow = $this.closest('.informer_setings').find('input[type="text"]');

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

							if($(el).closest('.informer_setings').length){

								inputShow.val(hex);
								// $(el).next().val('#'+hex);

							}
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

			$('.informer_setings input[type="text"]').on('change', function(){

				var inputVal = $(this).val(),
					ColorPicker = $(this).closest('.informer_setings').find('.colorSelector');

				ColorPicker.ColorPickerSetColor(inputVal);
				ColorPicker.css({
								"background-color": "#"+inputVal
							});

			});

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

		/* ------------------------------------------------
			Checkbox
		-------------------------------------------------*/

			$(".informer-news__checkbox").styler();

		/* ------------------------------------------------
			End of the Checkbox
		-------------------------------------------------*/

		/* -----------------------------------------------
			Radio buttons
		-------------------------------------------------*/

			$(".informer-calendar__time-radio").styler();

		/* -----------------------------------------------
			End of the Radio buttons
		------------------------------------------------*/

		/*-----------------------------------------------
			Inside select
		------------------------------------------------*/

			$(".inside-form__select").styler();

		/*-----------------------------------------------
			End of the Inside select
		------------------------------------------------*/

		/*-----------------------------------------------
			Inside checkbox
		------------------------------------------------*/

			$(".inside-form__checkbox").styler();

		/*-----------------------------------------------
			Calendar select
		------------------------------------------------*/

			$(".calendar-header__select").styler();

		/*-----------------------------------------------
			End of the Calendar select
		------------------------------------------------*/

		/*-----------------------------------------------
			Converter select
		------------------------------------------------*/

			$(".js_fx-sb-select").styler({
				singleSelectzIndex: '0'
			});

		/*-----------------------------------------------
			End of the Converter select
		------------------------------------------------*/

		/*-----------------------------------------------
			Mobile footer list
		------------------------------------------------*/

			(function() {
				var width = $(window).width();
				if( width < 480) {
					$(".fx_footer-mob-list").css({display: "none"});
					$(".fx_footer-mob-btn").click(function(){
						$(this).next(".fx_footer-mob-list").slideToggle();
						$(this).find(".fx_ic-drop").toggleClass("fx_ic-drop-active");
					});
				}
			}());

		/*----------------------------------------------
			End of the Mobile footer list
		-----------------------------------------------*/

		/*----------------------------------------------
			Mobile menu
		-----------------------------------------------*/

			$(".fx_mob-menu").click(function() {
				$(this).toggleClass("fx_mob-menu-active");
				$(".fx_menu").slideToggle();
			});

		/*----------------------------------------------
			End of the Mobile menu
		-----------------------------------------------*/

		/*----------------------------------------------
			Scrolling style
		-----------------------------------------------*/

		$(".js_scrolling").jScrollPane();

		/*----------------------------------------------
			End scrolling style
		-----------------------------------------------*/

    $(".select-custom").styler();

		/*----------------------------------------------
			Tabs graphic
		-----------------------------------------------*/

			$(".fx-graph__content").not(":first").hide();
		$(".fx-graph__tab").click(function() {
			$(".fx-graph__tab").removeClass("fx-graph__tab-active").eq($(this).index()).addClass("fx-graph__tab-active");
			$(".fx-graph__content").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("fx-graph__tab-active");

		});

		/*----------------------------------------------
			End tabs graphic
		-----------------------------------------------*/

		/*----------------------------------------------
			Btn show more
		-----------------------------------------------*/

		$(".pf_more").on("click", function() {
			$(this).closest(".pf_read-more").hide();
			$(".pf_text-overflow").css({"maxHeight": "100%"});
		});

		/*----------------------------------------------
			End btn show more
		-----------------------------------------------*/

		/*----------------------------------------------
			Radio button
		-----------------------------------------------*/

		$(".pf_radio").styler();

		/*----------------------------------------------
			End Radio button
		-----------------------------------------------*/

		$(".pf_reviews-add").click(function() {
			$(".pf_reviews-wr").slideToggle();
		});

		/*----------------------------------------------
			Toggle btns graph
		-----------------------------------------------*/

		$(".contrtoller__item").on("click", function(e) {
			e.preventDefault();
			$(".contrtoller__item").removeClass("contrtoller__item--active").eq($(this).index()).addClass("contrtoller__item--active");
		}).eq(2).addClass("contrtoller__item--active");

		/*----------------------------------------------
			End Toggle btns graph
		-----------------------------------------------*/

		/*----------------------------------------------
			Accordion
		-----------------------------------------------*/

		var accordion = new handorgel(document.querySelector('.fx_accordion'), {
			multiSelectable: false
		});

		/*----------------------------------------------
			End Accordion
		-----------------------------------------------*/

		if($(document).width() <= 767) {
			$(".wide_scroll").removeClass("js_scrolling");
		}


})(jQuery);