function CameraFactory(){
	this.create=function(){
		const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 400;
		return camera;
	}
}
