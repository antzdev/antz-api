function SceneFactory(sceneConfig){

	this.create=async function(id){
		
		const scene=new THREE.Scene();
		const cameraFactory = new CameraFactory();
		const camera = cameraFactory.create();

		const entityFactory = new EntityFactory(sceneConfig.entities);
		const entities=[];
		for(const config of entityConfig){
			const entity = await entityFactory.create(config.name);
			scene.add(entity);
			entities.push(entity);
		};

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		camera.lookAt(scene.position);

		return {
			render: ()=>{
				for(const entity of entities){
					entity.update();
				};
				requestAnimationFrame(render);
				renderer.render(scene, camera);
			}
		};
	}
}
