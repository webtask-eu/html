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

	});

})(jQuery);