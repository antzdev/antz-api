function SceneFactory(sceneConfig){

	this.create=async function(){
		
		const scene=new THREE.Scene();
		const cameraFactory = new CameraFactory();
		const entityFactory = new EntityFactory();
		const camera = cameraFactory.create();

		const entities=[];
		for(const entityConfig of sceneConfig.entities){
			const entity = await entityFactory.create(entityConfig.name, entityConfig.type);
			scene.add(entity);
			entities.push(entity);
		};

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		camera.lookAt(scene.position);

		const rendering= {
			domElement: renderer.domElement,
			render: ()=>{
				for(const entity of entities){
					entity.update();
				};
				requestAnimationFrame(rendering.render);
				renderer.render(scene, camera);
			},
			reset: ()=>{
				camera.aspect=(window.innerWidth/window.innerHeight);
				camera.updateProjectionMatrix();
				renderer.setSize(window.innerWidth,window.innerHeight);
			}
		};
		return rendering;
	}
}
