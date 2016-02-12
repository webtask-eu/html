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

	});

})(jQuery);