var d = document;

function conversao() {
	let txtUnicode = d.getElementById('txtUnicode').value;
	let areaRes = document.getElementById('resConver');

	let i = 0;
	let num = txtUnicode.length;

	resetar();
	if (tipoConversao() == 'Unicode') {
		let str = txtUnicode.split('');
		
		for (i = 0; i != num; i++) {
			let unicode = str[i].charCodeAt(0);

			if (str[i] != ' ') {
				areaRes.innerHTML += `${str[i]} > ${unicode}<br/>`;
			} else {
				areaRes.innerHTML += `espaço > ${unicode}<br/>`;
			}
		}
	} else if (tipoConversao() == 'Texto') {
		let nbr = txtUnicode.split(' ');

		for (i = 0; i < nbr.length; i++) {
			if (!isNaN(nbr[i])) {
				let unicode = String.fromCharCode(nbr[i]);

				if (nbr[i] != 32) {
					let span = document.createElement('span');
					let span2 = document.createElement('span');
					let br = document.createElement('br');
					
					span.textContent = nbr[i] + ' > ';
					span2.textContent = unicode;
					span2.style.color = 'red';
					
					areaRes.appendChild(span);
					areaRes.appendChild(span2);
					areaRes.appendChild(br);
				} else {
					let span = document.createElement('span');
					let span2 = document.createElement('span');
					let br = document.createElement('br');
					
					span.textContent = nbr[i] + ' > ';
					span2.textContent = 'espaço';
					span2.style.color = 'red';
					
					areaRes.appendChild(span);
					areaRes.appendChild(span2);
					areaRes.appendChild(br);
				}
			} else {
				alert('insira números');
			}
		}
	}
}

function resetar() {
	let areaRes = document.getElementById('resConver');
	areaRes.innerHTML = '';
}

function tipoConversao() {
	let select = d.getElementById('selTipo');
	let selectValue = select.options[select.selectedIndex].value;

	return selectValue;
}