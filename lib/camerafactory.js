function CameraFactory(){
	this.create=()=>{
		const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
		camera.position.x = -13;
		camera.position.y = 10;
		camera.position.z = 17.7;	
		return camera;
	}
}
