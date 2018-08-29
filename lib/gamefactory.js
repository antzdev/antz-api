function GameFactory(){
	this.create=async function(){
		const loader = new THREE.GLTFLoader();
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.gammaOutput = true;
        
		return new Promise((resolve)=>
    		loader.load('game.gltf',(game)=> {
        	    camera.lookAt(game.scene.position);
        	    const rendering={
        			domElement: renderer.domElement,
        			render: ()=>{
        				requestAnimationFrame(rendering.render);
        				renderer.render(game.scene, game.camera);
        			},
        			reset: ()=>{
        				game.camera.aspect=(window.innerWidth/window.innerHeight);
        				game.camera.updateProjectionMatrix();
        				renderer.setSize(window.innerWidth,window.innerHeight);
        			}
        		};
        	    resolve(rendering);
        	});
	    });
	}
}