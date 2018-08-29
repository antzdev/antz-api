function EntityFactory(){
	const loader=new THREE.TextureLoader();
	this.create=async (name, type)=>{
		return new Promise((resolve)=>{
			const frames = 60;
			loader.load(`assets/${name}.${type}`,(spriteMap)=>{;
				const material=new THREE.SpriteMaterial({map: spriteMap});
				const sprite = new THREE.Sprite(material);
				
				sprite.frame=1;
				
				spriteMap.repeat.set(0.05,0.05);
				// spriteMap.needsUpdate=true;

				sprite.scale.set(8, 8, 8);
				sprite.update=()=>{
					// if (sprite.frame == frames){
			  //           sprite.frame = 1
			  //           spriteMap.offset.x = sprite.frame/frames;    
			  //       }
			  //       else{
			  //           spriteMap.offset.x = sprite.frame/frames;
			  //           sprite.frame +=1;
			  //       }
				}
				resolve(sprite);
			});
		});
	}
}
