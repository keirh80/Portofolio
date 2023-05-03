const w = window.innerWidth/50;
const h = window.innerHeight/50;

for (i=0; i<w; i++) {
	var row = document.createElement('div')
	row.classList.add('row')
	for (j=0; j<h; j++) {
		var cell = document.createElement('div')
		cell.classList.add('cell')
		row.appendChild(cell)
	}
	document.getElementById('background').appendChild(row)
}

window.addEventListener('resize', (e)=> {
	var nw = window.innerWidth/50;
	var nh = window.innerHeight/50;

	var cw = document.getElementsByClassName('row').length
	var ch = document.getElementsByClassName('cell')/cw

	if (nw<cw) {
		for (i=0; i<(cw-nw); i++) {
			document.getElementsByClassName('row')[0].remove()
		}
	}
	if (nw>cw) {
		var row = document.createElement('div')
		row.classList.add('row')
		for (i=0; i<nh; i++) {
			var cell = document.createElement('div')
			cell.classList.add('cell')
			row.appendChild(cell)
		}
		document.getElementById('background').appendChild(row)
	}

	if (nh<ch) {
		var rows = document.getElementsByClassName('row')
		for (i=0; i<rows.length; i++) {
			var row = rows[i]
			var cells = row.getElementsByClassName('cell')
			for (j=0; j<cells.length; j++) {
				cells.remove()
			}
		}
	}
	if (nh>ch) {
		var rows = document.getElementsByClassName('row')
		for (i=0; i<rows.length; i++) {
			var row = rows[i]
			var cell = document.createElement('div')
			cell.classList.add('cell')
			row.appendChild(cell)
		}
	}


})