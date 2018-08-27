function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (category)=>{
		return new Promise((resolve)=>{
			loader.load(`assets/${category}.png`, (spriteMap)=>{;
				spriteMap.repeat.set(1/30,1);
				spriteMap.needsUpdate=true;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				sprite.frame=1;
				sprite.scale.set(8, 8, 8);
				sprite.update=()=>{
					if (sprite.frame == 30){
			            sprite.frame = 1
			            spriteMap.offset.x = sprite.frame/30;    
			        }
			        else{
			            spriteMap.offset.x = sprite.frame/30;
			            sprite.frame +=1;
			        }
				}
				resolve(sprite);
			});
		});
	}
}
