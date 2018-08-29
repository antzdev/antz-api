function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 0.6;
			loader.load(`assets/${name}.${type}`,(spriteTexture)=>{;
				const material=new THREE.SpriteMaterial({map: spriteTexture});
				const sprite = new THREE.Sprite(material);
				sprite.scale.set(8, 8, 8);
				const spriteAnimation = new SpriteAnimationFactory(spriteTexture, 100, 1, 100, 75);
				sprite.update=()=>{
					spriteAnimation.update(1000);
				}
				resolve(sprite);
			});
		});
	}
}
