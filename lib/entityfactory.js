function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 0.6;
			loader.load(`assets/${name}.${type}`,(spriteMap)=>{;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				
				sprite.frame = 0.01;
				
				spriteMap.repeat.set(0.01,1);
				spriteMap.needsUpdate=true;

				sprite.scale.set(8, 8, 8);
				sprite.update=()=>{
					if (sprite.frame >= frames){
						sprite.frame=0.01;
			            spriteMap.offset.x = sprite.frame;
			        }
			        else{
			            spriteMap.offset.x += sprite.frame;
			            sprite.frame +=0.01;
			        }
				}
				resolve(sprite);
			});
		});
	}
}
