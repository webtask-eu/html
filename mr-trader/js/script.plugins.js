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
							navigation : true,
							navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

						});

					}

				});	
							
			}

        /* ------------------------------------------------
				End of Owl carousel
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

	/*---------------------------------------------------
		article select
	---------------------------------------------------*/

	$(".article-form__select").styler();

	$(".article-btn_profile").click(function(){
		$(this).toggleClass("article-btn_profile-active");
		$(".article-btn-profile__menu").toggleClass("article-btn-profile__menu-active");
	});

	$(".article-btn_edit-link").click(function(){
		$(".article-btn_edit-link").toggleClass("article-btn_edit-active");
		$(".article-btn_edit-drop").toggleClass("article-btn_drop-active");
	});

})(jQuery);