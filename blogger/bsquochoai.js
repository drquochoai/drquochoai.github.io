$(function(){
    $('.bsslickThumb').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><</button>',
      nextArrow: '<button type="button" class="slick-next">></button>'
      });
		$('.bsslickLeftRight').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
          vertical:true,
      prevArrow: '<button type="button" class="slick-prev"><</button>',
      nextArrow: '<button type="button" class="slick-next">></button>'
      });
//My component bootstrap
$(".tabVertical ul").removeClass("nav-tabs").addClass("nav-pills col-sm-4 nav-stacked")
$(".tabVertical .tab-content").addClass("col-sm-8")

  

})