function SceneFactory(){
	const scenes=[];
	this.create=async function(id, entityConfig){
		
		const cameraFactory = new CameraFactory();
		const camera = cameraFactory.create();
		
		const nativeScene=new THREE.Scene();

		const entityFactory = new EntityFactory();
		const entities=[];
		for(const config of entityConfig){
			const method=`create${config.type}`;
			const entity = await entityFactory[method](config.name);
			nativeScene.add(entity);
			entities.add(entity);
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

		return scene;
	}
}
