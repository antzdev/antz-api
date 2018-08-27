function EntityFactory(entitiesConfig){
	const loader=new THREE.TextureLoader();
	this.create=async (name)=>{
		return new Promise((resolve)=>{
			const entityConfig=entitiesConfig.find((config)=>config.name==name);
			loader.load(`assets/${entityConfig.name}${entityConfig.type}`, (spriteMap)=>{;
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
