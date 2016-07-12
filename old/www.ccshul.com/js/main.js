var activeId = '';
function swapImg(id, on) {
	p  = $(id+'_div');
	im = $(id+'_but');
	if ( on ) {
		if (p.hasClassName('active')) activeId = id;
		else {
			p.addClassName('active');
			im.src='images/buttons/thumb'+id+'-1.png';
		}
	} else {
		if ( id != activeId ) {
			p.removeClassName('active');
			im.src='images/buttons/thumb'+id+'-0.png';
		}
	}
}