const utils = new Utils();
utils.loadClientScript(document,"https://cdnjs.cloudflare.com/ajax/libs/three.js/95/three.min.js",()=>{
	const sceneFactory=new SceneFactory();
	sceneFactory.create("scenetest").then((scene)=>{
		document.body.appendChild(scene.renderer.domElement );
		window.addEventListener('resize',()=>{
			scene.camera.aspect=(window.innerWidth/window.innerHeight);
			scene.camera.updateProjectionMatrix();
			scene.renderer.setSize( window.innerWidth, window.innerHeight );
		},false);
		scene.render();
	});
});
