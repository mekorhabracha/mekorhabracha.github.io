var activeId = '';
function swapImg(id, on) {
	p = document.getElementById(id+'_div');
	im = document.getElementById(id+'_but');
	if(on) {
		if(p.hasClass('active')) activeId = id;
		else{
			p.addClass('active');
			im.src='/old/www.ccshul.com/images/buttons/thumb'+id+'-1.png';
		}
	}else{
		if(id != activeId){
			p.className = '';
			im.src='/old/www.ccshul.com/images/buttons/thumb'+id+'-0.png';
		}
	}
}