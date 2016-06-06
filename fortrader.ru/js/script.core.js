;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.jqueryExtend();
			self.checkSubmenu();
			self.headerInfo();
			self.footerList();
			self.additionalMenuItem();
			self.additionalMenuOpen();
			self.additionalMenuClose();
			self.tabsBox.init();
			self.firstOpenNewsList();
			self.newsList();
			self.buttonSlider();
			self.headerList();
			self.siteList();
			self.goUpAnimate();
			self.goUp();
			self.nextButtonHover();
			self.dropdoun();
			self.optionsBox();
			self.tablQuotesSlider.init();
			self.moreTools();
			self.getCode();

			/**  add 00.02.16   **/
			self.dropdounRequirements();

		},

		windowLoad: function(){

			var self = this;

			self.digitalWatch();

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);


		},

		windowScroll: function(){

			var self = this;

			self.goUp();
		},

		windowResize: function(){

			var self = this;

			self.additionalMenuItem();

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);
		},


		jqueryExtend: function(){

			$.fn.extend({

				/**
				** Custom select
				**/

				customSelect : function(){

					// template
					var template = "<div class='active_option open_select'><div class='inner'></div><i class='fa fa-angle-down'></i></div><ul class='options_list dropDown'></ul>";

					return this.each(function(){

						var $this = $(this);

						$this.prepend(template);

						var active = $this.children('.active_option'),
							activeInner = active.children('.inner'),
							list = $this.children('.options_list'),
							select = $this.children('select').hide(),
							options = select.children('option');

						active.on('click', function(){

							active.add(list).toggleClass('opened');

						});

						activeInner.text(
							select.children('option[selected]').val() ?
							select.children('option[selected]').val() :
							options.eq(0).val()
						);

						options.each(function(){

							var template = $('<li></li>'),
								val = $(this).val();

							template.html('<a href="javascript:;">' + val + '</a>');

							list.append(template);

						});

						list.on("click", "li", function(){

							var vl = $(this).text();
								activeInner.text(vl);
								select.val(vl);

							$(this).addClass('active').siblings().removeClass('active');

							if(!Core.TRANSITIONSUPPORTED){

								$(this).closest('.dropDown').add(active).removeClass("active");

							}else{

								$(this).closest(list).add(active).removeClass("opened");

							}

							$('.dropDown,.active_option').removeClass('opened');

						});

						$(document).on('click', function(event){

							if(!$(event.target).closest('.custom_select').length){

								$('.dropDown,.active_option').removeClass('opened');

							}

						});

					});

				},

			});
		},


		/**
		**	Additional Menu width and open
		**/

		additionalMenuWidth : function(){

		    var searchFormWidth = $('.search_box').width(),
		    	menuWidh = searchFormWidth + 59;

		    $(".additional_menu").width(menuWidh);

		},



		/**
		**	Add class if li has submenu
		**/

		checkSubmenu : function(){

			$(".main_menu>li").each(function(){

				var $this = $(this);

				if ($this.is(':has(ul)')){

					$this.addClass('has_submenu');

				};

			});

		},


		additionalMenuOpen : function(){


			$('.additional_menu_box button').on('click',function(){

		    	$(this).toggleClass('active');
		    	$(".additional_menu").toggleClass('active');

		    });

		    if($('.touch').length || $(window).width()<768) {

				$('nav li').each(function(){

					if($(">ul", this)[0]){

						$(">a", this).toggle(


							function(){
								$(this).parent().toggleClass('active');
								$(this).next("ul").slideToggle();
								return false;
							},
							function(){
								window.location.href = $(this).attr("href");
							}
						);

					}

				});

		    }

		},


		additionalMenuClose : function(){

			$(document).click(function(event) {

				if ($(event.target).closest(".additional_menu_box").length) return;
				$(".additional_menu").removeClass('active');
				event.stopPropagation();

			});

			$(document).click(function(event) {

				if ($(event.target).closest("li.has_submenu").length) return;
				$("li.has_submenu>a").removeClass('active');
				$("li.has_submenu>a").next("ul").slideUp();
				event.stopPropagation();

			});

		},

		additionalMenuItem : function(){

			var navWrapWidth = $(".nav_wrap").width(),
				fullWidth = navWrapWidth - 162,
				itemWidth = 0,
				navWidth;

			if(!$('.nav_wrap').hasClass("responsive_menu") && $(window).width()<767){

				$(".additional_menu>li").each(function(){


					$(this).appendTo(".main_menu");

				});

				$(".main_menu>li").each(function(){

					var $this = $(this);

					if ($(this).is(':has(ul)')){

						$this.addClass('has_submenu');

					};

					$(this).appendTo(".additional_menu");

				});

				$('.nav_wrap').addClass("responsive_menu clearfix");

			}
			else if($(window).width()>768){

				$('.nav_wrap').removeClass("responsive_menu clearfix")

				$("nav").css({"width":"auto"});

				$(".additional_menu>li").each(function(){

					$(this).appendTo(".main_menu");

				});

				$(".main_menu>li").each(function(){

					var $this = $(this);

					itemWidth += $(this).width();

					if(itemWidth > fullWidth){

						$this.appendTo(".additional_menu");

					}

				});

				setTimeout(function(){

					navWidth = $(".main_menu").width();

					$("nav").width(navWidth +59);

				},100);

			}

		},

		/**
		**	Tabs
		**/

		tabsBox : {

			init : function(){

				var self = this;

				self.indexTab();
				self.createAccordionTitle();
				self.events();
				
			},

			indexTab: function(){

				var self = this;

				$('.tabs_box').each(function(){

					var tabsBox = $(this),
						tabsItem = tabsBox.find('.tabs_contant>div'),
						tabsListItem = tabsBox.find('.tabs_list>li');

					for (var i = 0; i <= tabsListItem.length -1; i++){

						var id = "tabs_id_" + (i+1);

						$(tabsListItem[i]).attr('data-id', id);
						$(tabsItem[i]).addClass(id);

					}

				});

			},

			createAccordionTitle: function(){

				var self = this;

				$('.tabs_box.accordion_tabs').each(function(){

					var tabsBox = $(this),
						tabsList = tabsBox.find('.tabs_list'),
						tabsContainer = tabsBox.find('.tabs_contant'),
						tabsContainerItem = tabsContainer.children('div'),
						tabsListItem = tabsList.find('li');

					for (var i = 0; i <= tabsListItem.length - 1; i++) {
						
						var text = $(tabsListItem[i]).text(),
							id = $(tabsListItem[i]).attr('data-id'),
							tamplate = "<h6 class='accordion_title'>" + text + "</h6>";
						
						tabsContainer.find('.' +id).before(tamplate);
						
					}

				});

			},

			events: function(){

				$('.tabs_list>li').on('click',function(){

					var $this = $(this),
						tab = $this.closest('.tabs_box'),
						id = $this.attr('data-id');

					$this.addClass('active').siblings().removeClass('active');
					
					tab.find('.' +id).addClass('active').show().siblings('div').removeClass('active').hide();
					
					tab.find('.' +id)
						.prev('.accordion_title')
						.addClass('active')
						.siblings('.accordion_title')
						.removeClass('active');

				});

				$('.tabs_box').on('click', '.accordion_title', function(){

					$(this).addClass('active').siblings('.accordion_title').removeClass('active');
					$(this).next().slideDown().siblings('div').slideUp();

				});
				
			},

		},


		/**
		**	News List Slider
		**/

		firstOpenNewsList : function(){

			if(('.news_slider').length){

				$('.news_slider .news_list>li:nth-child(6),.news_slider .news_list>li:nth-child(2),.news_slider .news_list>li:nth-child(3),.news_slider .news_list>li:nth-child(4),.news_slider .news_list>li:nth-child(5)').addClass('active');

			}
		},

		newsList : function(){

			$('.slider_nav_prev').on('click',function(){

				var parent = $(this).parents('.news_slider'),
					firstItem = parent.find('.news_list>li.active').index(),
					showItem = parent.find(".news_list>li.active").eq(0).prev();

				if(firstItem == 0){return false}

				parent.find(".news_list>li.active").eq(4).slideUp(300).removeClass("active");

				showItem.slideDown(300).addClass('active');

			});

			$('.slider_nav_next').on('click',function(){

				var parent = $(this).parents('.news_slider'),
					last = parent.find('.news_list>li:last').index(),
					lastActive = parent.find(".news_list>li.active").eq(4).index(),
					showItem = parent.find(".news_list>li.active").eq(4).next();

				if(last == lastActive){return false}


				parent.find(".news_list>li.active").eq(0).slideUp(300).removeClass("active");;

				showItem.slideDown(300).addClass('active');

			});

		},



		/**
		**	Nav Buttons
		**/

		buttonSlider : function(){

			$('.nav_buttons>*').on('click',function(event){

				var parent = $(this).parents('.turn_box'),
					turn = $(this).parents('.turn_box').find('.turn_content'),
					owl = parent.find(".owl-carousel");

				if($(this).hasClass('prev_btn')){

					owl.trigger('owl.prev');
					event.preventDefault();

				}
				else if($(this).hasClass('next_btn')){

					owl.trigger('owl.next');
					event.preventDefault();

				}
				else if($(this).hasClass('turn_btn')){

					turn.slideToggle(500);
					$(this).toggleClass("active");
					event.preventDefault();
				}

			});

		},


		/**
		**	Header list open on responsive
		**/

		headerList : function(){

			$('.header_list_btn').on('click',function(){

				$(this).toggleClass('active');
				$('.header_list').toggleClass('active');

			});

			$(document).click(function(event) {

				if ($(event.target).closest(".header_list,.header_list_btn").length) return;
				$(".header_list").removeClass('active');
				$(".header_list_btn").removeClass('active');
				event.stopPropagation();

			});

		},


		/**
		**	Site List accordion
		**/

		siteList : function(){

			if($('.site_list').length){

				$(".site_list>h5").on('click',function(){

					var windowWidth = $(window).width(),
						$this = $(this);

					if(windowWidth>992){
						return false;
					}
					else{

						$this.toggleClass('active');
						$this.next("ul").slideToggle();
					}
				});
			}

		},


		/**
		**	Footer List accordion
		**/

		footerList : function(){

			$(".list_box>h6").on('click',function(){

				var windowWidth = $(window).width(),
					$this = $(this);

				if(windowWidth>767){
					return false;
				}
				else{

					$this.toggleClass('active');
					$this.next("ul").stop().slideToggle();
				}

			});

		},


		/**
		**	Header info box tabs
		**/

		headerInfo : function(){

			$(".quotes_box>.header_info_title").addClass("active").next().addClass('active');

			$('.header_info_title').on("click",function(){

				var $this = $(this),
					parent = $this.parent();

				$this.addClass('active')
					 .next()
					 .addClass('active')
					 .parent()
					 .siblings()
					 .find('.header_info_title')
					 .removeClass('active')
					 .next()
					 .removeClass('active');
			});

		},



		/**
		**	Go Up button
		**/


		goUp : function(){

			var windowHeight = $(window).height(),
				windowScroll = $(window).scrollTop();

			if(windowScroll>windowHeight/2){

				$('#go_up').addClass('active');

			}
			else{

				$('#go_up').removeClass('active');

			}

		},

		goUpAnimate :function(){

			$('#go_up').on('click',function () {

				if($.browser.safari){

					$('body').animate( { scrollTop: 0 }, 1100 );

				}else{

					$('html,body').animate( { scrollTop: 0}, 1100 );

				}

				return false;

			});

		},



		/**
		**	Next button hover
		**/

		nextButtonHover : function(){

			$('.next_btn').hover(

					function(){
						$('.materials_box').addClass('active');
					},

					function(){
						$('.materials_box').removeClass('active');
					}
				);
		},


		/**
		**	Digital Watch
		**/

		digitalWatch : function() {

		    if($("#digital_watch").length){

			    var self = this;
			    var date = new Date();
			    var hours = date.getHours();
			    var minutes = date.getMinutes();
			    var seconds = date.getSeconds();
			    if (hours < 10) hours = "0" + hours;
			    if (minutes < 10) minutes = "0" + minutes;
			    if (seconds < 10) seconds = "0" + seconds;
			    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
			    setTimeout(function(){
			    	self.digitalWatch();
			    },1000);

		    }

		},


		/**
		**	Dropdoun
		**/

		dropdoun : function(){

			$('.dropdown_btn').on("click",function(e){

				e.preventDefault();

				$(this).toggleClass('active').next().toggleClass('active');
			});

			$(document).on('click', function(event){

				if(!$(event.target).closest('.dropdown_box').length){

					$('.dropdoun, .dropdown_btn').removeClass('active');

				}

			});

		},


		/**
		**	Dropdoun
		**/

		optionsBox : function(){

			$(".turn_box").on("click",".options_btn",function(){

				var $this = $(this),
					parent = $this.closest(".turn_box");

				$this.toggleClass("active");
				parent.find('.options_box').toggleClass("opened");

			});

			$(document).on("click",function(){

				if(!$(event.target).closest('.options_box,.options_btn').length){

					$('.options_box').removeClass('opened');
					$('.options_btn').removeClass('active');

				}

			});

		},


		/**
		**	Dropdoun
		**/

		tablQuotesSlider : {

			init: function(){

				var self = this;

				self.ww = $(window);
				self.table = $('.tabl_quotes table');
				self.tableNav = $('.tabl_quotes_nav');
				self.nav = $('tabl_quotes_nav');
				self.itemWidth;
				self.itemQt = self.table.attr('data-item') ? self.table.attr('data-item') : 4;

				$('.tabl_quotes tr').addClass('tabl_quotes_item');

				self.createBtn();
				self.WidthSlideItem();
				self.moveSlider();

				$(window).on("resize", function(){

					self.WidthSlideItem();

				});



			},

			WidthSlideItem: function(){

				var self = this,
					wrapBox = $('.tabl_quotes').parents('.tabs_contant').length ? $('.tabl_quotes').parents('.tabs_contant').width() : $('.tabl_quotes').width();

				self.itemWidth = wrapBox/self.itemQt;

				if(self.ww.width() < 992){

					$('.tabl_quotes tr').width(self.itemWidth);

				}

				self.table.each(function(){

						var $this = $(this),
							qItem = $(this).find("tbody>tr").length;
						$(this).width(qItem*self.itemWidth +1);

				});


			},

			createBtn : function(){

				var self = this;

				self.table.each(function(){

					var $this = $(this),
					template = '<div class="tabl_quotes_nav clearfix"><button class="prev disable"><i class="fa fa-angle-left"></i></button><button class="next"><i class="fa fa-angle-right"></i></button></div>',
						qItem = $this.find("tbody>tr").length;

					if(qItem > self.itemQt){
						$this.closest('.turn_content').prepend(template);
					}

				});

			},

			moveSlider : function(){

				var self = this;

				$('body').on("click",".tabl_quotes_nav>*:not(.process)",function(){

					if($(this).hasClass('disable')) return false;

					var $this = $(this),
						wrapSlider = $this.closest('.turn_content').find('.tabl_quotes'),
						slider = wrapSlider.find('table'),
						sliderWidth = slider.width(),
						wrapOffset = wrapSlider.offset().left,
						sliderOffset = slider.offset().left,
						lastOffset = wrapSlider.width() - slider.width(),
						position = wrapOffset - sliderOffset,
						prevItem = - position + self.itemWidth,
						nextItem = - position - self.itemWidth;


					if($this.hasClass("next")){

						$this.addClass('process');
						slider.css({
							'left' : nextItem
						});
						setTimeout(function(){
							$this.removeClass('process');
						},500);

						$this.siblings().removeClass('disable');

						if((nextItem - self.itemWidth) < lastOffset){

							$this.addClass('disable');

						}

					}
					else{

						$this.addClass('process');
						slider.css({
							'left' : prevItem
						});
						setTimeout(function(){
							$this.removeClass('process');
						},500);

						$this.siblings().removeClass('disable');

						if((prevItem + self.itemWidth) > 0 ){

							$this.addClass('disable');

						}

					}

				});

			},

		},


		/**
		**	More Tools
		**/

		moreTools : function(){

			$('.more_tools_btn').on('click','a', function(){

				$(this).toggleClass('active');
				$(this).parent().next('.more_tools_box').slideToggle();

			});

		},


		/**
		**	More Tools
		**/

		getCode : function(){

			$(".agreement_box").on("click","label", function(){

				var input = $(this).parent().find('input'),
					button = $(this).parents('.get_code_box').find('.edition_btn'),
					box = $(this).parents('.get_code_box').find('.get_code');

				if(!input.is(':checked')){

					box.slideDown();
					button.removeClass('disabled');

				}
				else{

					box.slideUp();
					button.addClass('disabled');

				}

			});

		},

		/**
		**	Dropdoun Requirements  add 00.02.16
		**/

		dropdounRequirements : function(){

			$('.requirements_dropdown_button').on("click",function(){

				$(this).parent('.requirements_dropdown').toggleClass('active').next().slideToggle();

			});


		},


	}


	$(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

	$(window).scroll(function(){

		Core.windowScroll();

	});

	$(window).on("resize",function(){

		Core.windowResize();

	});


	var newBox         = $('.news_top_box'),
		dropdownNews   = $('.dropdown_news'),
		linkNewsBtns = $('.link_news_btns'),
		linkNewsBox  = $('.link_news_box');

	if(newBox.length || linkNewsBtns.length){
		newBox.on("click", function(){
			$(this).toggleClass('active').next(dropdownNews).slideToggle();
		});
		linkNewsBtns.on("click", function(){
			$(this).toggleClass('active').next(linkNewsBox).slideToggle();
		});
	}



})(jQuery);



		/* ------------------------------------------------
		FILTER ON CLICK AND CHANGE POSITION START
		------------------------------------------------ */

				//скрипт  считывает сколько ширина скрола / старт

				var scrollWidth;
				function detectScrollBarWidth(){
					var div = document.createElement('div');
					div.className = "detect_scroll_width";
					document.body.appendChild(div);
					scrollWidth = div.offsetWidth - div.clientWidth;
					document.body.removeChild(div);
				}
				detectScrollBarWidth();

				//скрипт  считывает сколько ширина скрола / конец

				// скрипт переставляет блок на определенной ширине в другой блок / старт
				var drop  = $('.dropdown_news'),
				    share = $('.date_with_share_box');

				function filterPosition(){
		          var bodyWidth = $(window).width();
		          if(bodyWidth + scrollWidth <= 479 && $('body').hasClass('filterPosition')){
		            $('.link_news_container').before($('.btn_red'));
		            $('body').removeClass('filterPosition');
		          }
		          else if(bodyWidth + scrollWidth > 479 && !$('body').hasClass('filterPosition')){
		            $(".last_news_title").append($('.btn_red'));
		            $('body').addClass('filterPosition');
		          }
		        } 
		        filterPosition();
				$(window).on('resize',function(){
			        setTimeout(function(){
		            	filterPosition();
		            },200);
	            });

				// скрипт переставляет блок на определенной ширине в другой блок / конец


		/* ------------------------------------------------
		FILTER ON CLICK AND CHANGE POSITION END
		------------------------------------------------ */