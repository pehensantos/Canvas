quadrado = document.getElementById('quadrado');
quadrado.style.position = 'absolute';
posicaoInicial = quadrado.style.left = '0px';

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowRight'){
		let posicaoAtual = parseInt(quadrado.style.left) || 0;

		let novaPosicao = posicaoAtual + 10;

		quadrado.style.left = novaPosicao + 'px';
	}
})

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowLeft'){
		let posicaoAtual = parseInt(quadrado.style.left) || 0;

		let novaPosicao = posicaoAtual - 10;
		
		quadrado.style.left = novaPosicao + 'px';
	}
})

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowDown'){
		let posicaoAtual = parseInt(quadrado.style.top) || 0;

		let novaPosicao = posicaoAtual + 10;
		
		quadrado.style.top = novaPosicao + 'px';
	}
})

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp'){
		let posicaoAtual = parseInt(quadrado.style.top) || 0;

		let novaPosicao = posicaoAtual - 10;
		
		quadrado.style.top = novaPosicao + 'px';
	}
})