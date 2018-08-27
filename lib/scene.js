function Scene(_nativeScene, _camera, _renderer){

	this.renderer = _renderer;
	this.camera=_camera;
	this.nativeScene = _nativeScene;

	const thisScene=this;

	this.render=function(){
		requestAnimationFrame(thisScene.render);
		thisScene.renderer.render(thisScene.nativeScene, thisScene.camera);
	}
}