start()
$(window).on('scroll',function(){
	start()

})
function start(){
	$('.cover img').each(function(){
		var $node = $(this)
		if( isShow($node) ){
			setTimeout(function(){
				loadImg($node)
			},500)   //为了展示效果
			
		}
	})
}

function isShow($node){
	return $node.offset().top <= $(window).height()+$(window).scrollTop()
}
function loadImg($img){
	$img.attr('src',$img.attr('data-src'))
}