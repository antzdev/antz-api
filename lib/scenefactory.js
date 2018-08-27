function SceneFactory(){
	const scenes=[];
	this.create=function(id, entityConfig){
		
		const cameraFactory = new CameraFactory();
		const camera = cameraFactory.create();
		
		const nativeScene=new THREE.Scene();

		const entityFactory = new EntityFactory();
		for(const config of entityConfig){
			const method=`create${config.type}`;
			const entity = entityFactory[method](config.name);
			nativeScene.add(entity);
		};

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		const scene = new Scene(
			nativeScene,
			camera,
			renderer
		);

		scenes.push({
			id,
			scene
		});

		return scene;
	}
}
