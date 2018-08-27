function Scene(_nativeScene, _camera, _renderer, entities){

	this.renderer = _renderer;
	this.camera=_camera;
	this.nativeScene = _nativeScene;

	const thisScene=this;

	this.render=()=>{
		for(const entity of entities){
			entity.update();
		};
		requestAnimationFrame(thisScene.render);
		thisScene.renderer.render(thisScene.nativeScene, thisScene.camera);
	}
}