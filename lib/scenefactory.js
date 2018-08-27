function SceneFactory(){
	const scenes=[];
	this.create=function(id){
		
		const cameraFactory = new CameraFactory();
		const camera = cameraFactory.create();

		const entityFactory = new EntityFactory();
		const entity = entityFactory.create("crate");

		const nativeScene=new THREE.Scene();
		nativeScene.add(entity);

		const renderer = new THREE.WebGLRenderer({
							antialias: true
						 });
		
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		const scene = new Scene(
			scene,
			camera,
			renderer
		);

		scenes.push(scene);

		return scene;
	}
}
