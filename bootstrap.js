const utils = new Utils();
utils.loadClientScript(document,"https://cdnjs.cloudflare.com/ajax/libs/three.js/95/three.min.js",()=>{
	const gameFactory=new GameFactory();
	gameFactory.create().then((game)=>{
		document.body.appendChild(game.domElement);
		window.addEventListener('resize',()=>{
			game.reset();
		},false);
		game.render();
	});
});
