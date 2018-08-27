function Scene(_nativeScene, _camera, _renderer){
	this.renderer = _renderer;
	this.camera=_camera;
	this.nativeScene = _nativeScene;
	this.render=function(){
		requestAnimationFrame(this.render);
		this.renderer.render(this.nativeScene, this.camera);
	}
}