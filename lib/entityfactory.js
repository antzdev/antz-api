function EntityFactory(){
	this.create=function(category){
		const texture=new THREE.TextureLoader().load(`assets/${category}.gif`);
		const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
		const material = new THREE.MeshBasicMaterial( { map: texture } );
		return new THREE.Mesh(
			geometry,
			material
		);
	}
}
