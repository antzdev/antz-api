function SceneFactory(){
	const scenes=[];
	this.create=async function(id, entityConfig){
		
		const nativeScene=new THREE.Scene();
		const cameraFactory = new CameraFactory();
		const camera = cameraFactory.create();

		const entityFactory = new EntityFactory();
		const entities=[];
		for(const config of entityConfig){
			const entity = await entityFactory.create(config.name);
			nativeScene.add(entity);
			entities.push(entity);
		};

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		const scene = new Scene(
			nativeScene,
			camera,
			renderer,
			entities
		);

		scenes.push({
			id,
			scene
		});

		camera.lookAt(nativeScene.position);

		return scene;
	}
}
