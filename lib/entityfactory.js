function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 60;
			loader.load(`assets/${name}.${type}`,(spriteMap)=>{;
				sprite.frame=1;
				spriteMap.repeat.set(sprite.frame/frames,1);
				spriteMap.needsUpdate=true;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				// sprite.scale.set(8, 8, 8);
				sprite.update=()=>{
					if (sprite.frame == frames){
			            sprite.frame = 1
			            spriteMap.offset.x = sprite.frame/frames;    
			        }
			        else{
			            spriteMap.offset.x = sprite.frame/frames;
			            sprite.frame +=1;
			        }
				}
				resolve(sprite);
			});
		});
	}
}
