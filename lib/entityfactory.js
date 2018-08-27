function EntityFactory(){
	const loader=new THREE.TextureLoader();

	this.createMesh=async(category)=>{
		const texture= await loader.load(`assets/${category}.gif`);
		const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
		const material = new THREE.MeshBasicMaterial( { map: texture } );
		return new THREE.Mesh(
			geometry,
			material
		);
	}

	this.createSprite=async (category)=>{
		const spriteMap = await loader.load(`assets/${category}.jpg`);
		spriteMap.repeat.set(1/30,1);
		spriteMap.needsUpdate=true;
		const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
			map: spriteMap
		}));
		sprite.frame=1;
		sprite.animate=()=>{
			if (sprite.frame == 30){
	            sprite.frame = 1
	            spriteMap.offset.x = sprite.frame/30;    
	        }
	        else{
	            spriteMap.offset.x = sprite.frame/30;
	            sprite.frame +=1;
	        }
		}
		return sprite;
	}
}
