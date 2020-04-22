
$(function () {

	gnb();






	function gnb() {
		// navigation
		function chk() {
			if (sub == 1) {
				$('.gnb ul li ul').show();
			} else {
				$('.gnb ul li ul').hide();
			}
		}
		$('.gnb').mouseover(function() {
			setTimeout(chk, 0);
			sub = 1;
			$(this).addClass('active');
			$(this).closest('.gnb').addClass('active');
		});
		$('.gnb').mouseout(function() {
			setTimeout(chk, 0);
			sub = 0;
			$('.gnb ul li').removeClass('active');
			$(this).removeClass('active');
		});
		$('.gnb').focusout(function() {
			setTimeout(chk, 0);
			sub = 0;
			$('.gnb ul li').removeClass('active');
			$(this).removeClass('active');
		});
		$('.gnb ul li a').focus(function() {
			setTimeout(chk, 0);
			sub = 1;
			$(this).parent().addClass('active');
			$(this).closest('.gnb').addClass('active');
		});
		$('.gnb ul li a').blur(function() {
			setTimeout(chk, 0);
			sub = 0;
			$('.gnb ul li').removeClass('active');
		});
		$('.lnb ul > li > a').click(function() {
			$(this).closest('.container').find('.lnb').removeClass('active');
			$(this).closest('.lnb').addClass('active');
		});
		$('.snb a').click(function() {
			$(this).closest('.container').find('.lnb').removeClass('active');
			$(this).closest('.lnb').removeClass('active');
		});
		$('.snb').mouseleave(function() {
			$(this).closest('.container').find('.lnb').removeClass('active');
			$(this).closest('.lnb').removeClass('active');
		});
		$('.depth1').click(function(e){
			e.preventDefault();
		});
	}





	// accordion
	$(document).on('click','.accordion-title', function() {
		// accordion Q&A
		var accoItem = $(this).closest('.accordion-item');
		if (accoItem.hasClass('active')) {
			accoItem.removeClass('active');
		} else {
			accoItem.addClass('active');
		}
		// accordion my minwon
		var accoItemSingle = $(this).closest('.accordion-item-single');
		if (accoItemSingle.hasClass('active')) {
			accoItemSingle.removeClass('active');
		} else {
			accoItemSingle.addClass('active');
		}
	});





	//open layer
	$('body').on('click','.show-btn', function(){
		var $pop = $('.'+$(this).attr('name'));
		$pop.toggle();
	});





	// calendar
	$('.date_area').each(function(){
		var $this = $(this),
			$openBtn = $this.find('.date-input>button'),
			$targetCal = $this.find('.calendar_area');

		$openBtn.click(function(){
			$('body').find('.date_area').removeClass('open');
        	$('body').find('.calendar_area').hide();
			$this.toggleClass('open');
			$targetCal.show();
		});

		$('body').click(function(e){
			if (!$('.date_area.open').has(e.target).length) {
				$this.removeClass('open');
				$('.calendar_area').hide();
			}
		});
	});
	$('.calendar_area').each(function(){
		var $monBtn = $(this).find('.show_month'),
			$calBtn = $(this).find('.show_calendar'),
			$calView = $(this).find('.calendar_view'),
			$monView = $(this).find('.month_view');

		$monBtn.click(function(){
			$calView.hide();
			$monView.show();
		});

		$calBtn.click(function(){
			$calView.show();
			$monView.hide();
		});
	})





	// 주소창
	$(document).on('click','.open_addressmap', function() {
		window.open("./주소팝업.html", "주소검색", "width=1120, height=563, toolbar=no, menubar=no, scrollbars=no, resizable=no" );
	});
	$(document).on('click','.open_address', function() {
		window.open("./주소팝업2.html", "주소검색", "width=560, height=584, toolbar=no, menubar=no, scrollbars=no, resizable=no" );
	});





	// 사용자추가 옵션 드랍다운
	$(document).on('click','.custom-dropdown .select', function() {
		$('.custom-dropdown').removeClass('active');
		$(this).closest('.custom-dropdown').addClass('active');
		$('.dropdown-menu').hide();
		$(this).closest('.custom-dropdown').find('.dropdown-menu').show();
	});
	// 사용자추가 옵션 드랍다운 - 바탕 클릭시
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass('custom-dropdown')) {
			$('.dropdown-menu').hide();
		}
	});
	// 사용자추가 옵션 드랍다운 - 항목 클릭시
	$(document).on('click','.dropdown-menu li', function() {
		$(this).closest('.custom-dropdown').find('li').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.custom-dropdown').removeClass('active');
		$(this).closest('.dropdown-menu').hide();
		$(this).closest('.custom-dropdown').find('.select span').text($(this).text());
		$(this).closest('.custom-dropdown').find('input').attr('value', $(this).attr('id'));
	});
	// 사용자추가 옵션 드랍다운 - 추가된 항목 삭제
	$(document).on('click','.custom-dropdown .dropdown-menu li button', function() {
		var currentItem = $(this).closest('.custom-dropdown').find('.select span').text();
		var delItem = $(this).closest('li').text();
		if (currentItem ==delItem ) {
			$(this).closest('.custom-dropdown').find('.select span').text('선택');
			$(this).closest('li').remove();
		} else {
			$(this).closest('li').remove();
		}
	});
	// 사용자추가 옵션 드랍다운 - 추가 입력박스 보이기
	$(document).on('click','.addOption .addManual', function() {
		$(this).closest('.addOption').addClass('active');
	});
	// 사용자추가 옵션 드랍다운 - 추가 버튼
	$(document).on('click','.addOption .itemAdd', function() {

		if (!$(this).closest('.itembox').find('input').val()) {
			$(this).closest('.itembox').find('input').attr('placeholder', '항목 입력 필요');
		} else {
			var addItems = $(this).closest('.itembox').find('input').val();
			$(this).closest('.addOption').find('.dropdown-menu').append('<li>'+ addItems +'<button type="button"></button></li>');
			$(this).closest('.itembox').find('input').val('');
		}
	});
	// 사용자추가 옵션 드랍다운 - 취소버튼
	$(document).on('click','.addOption .itemAddCancel', function() {
		$(this).closest('.addOption').removeClass('active');
		$(this).closest('.itembox').find('input').val('');
	});


});//


