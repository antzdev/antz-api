function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 0.6;
			loader.load(`assets/${name}.${type}`,(spriteMap)=>{;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				sprite.scale.set(8, 8, 8);
				const spriteAnimation = new SpriteAnimationFactory(sprite, 10, 1, 10, 75 );
				sprite.update=()=>{
					spriteAnimation.update();
				}
				resolve(sprite);
			});
		});
	}
}
