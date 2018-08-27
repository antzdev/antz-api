function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 200;
			loader.load(`assets/${name}.${type}`,(spriteMap)=>{;
				spriteMap.repeat.set(1/frames,1);
				spriteMap.needsUpdate=true;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				sprite.frame=1;
				sprite.scale.set(30, 30, 30);
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
