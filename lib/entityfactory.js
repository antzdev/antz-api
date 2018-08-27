function EntityFactory(){

	this.createMesh=(category)=>{
		const texture=new THREE.TextureLoader().load(`assets/${category}.gif`);
		const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
		const material = new THREE.MeshBasicMaterial( { map: texture } );
		return new THREE.Mesh(
			geometry,
			material
		);
	}

	this.createSprite=(category)=>{
		const spriteMap=new THREE.TextureLoader().load(`assets/${category}.png`);
		const animation = new THREE.TextureAnimator(spriteMap, 10, 1, 10, 75 ); // texture, #horiz, #vert, #total, duration.
		return new THREE.Sprite(new THREE.SpriteMaterial({
			map: animation,
			color: 0xffffff
		}));
	}
}
