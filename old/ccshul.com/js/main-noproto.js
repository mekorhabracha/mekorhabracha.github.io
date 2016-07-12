var activeId = '';
function swapImg(id, on) {
	p = document.getElementById(id+'_div');
	im = document.getElementById(id+'_but');
	if(on) {
		if(p.hasClass('active')) activeId = id;
		else{
			p.addClass('active');
			im.src='images/buttons/thumb'+id+'-1.png';
		}
	}else{
		if(id != activeId){
			p.className = '';
			im.src='images/buttons/thumb'+id+'-0.png';
		}
	}
}