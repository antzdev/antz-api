module.exports={
	run: function(modules){
		const THREE = modules.THREE;
  		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	    camera.position.z = 1;
	 
	    scene = new THREE.Scene();
	 
	    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	    material = new THREE.MeshNormalMaterial();
	 
	    mesh = new THREE.Mesh( geometry, material );
	    scene.add( mesh );
	 
	    renderer = new THREE.WebGLRenderer( { antialias: true } );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild( renderer.domElement );
	}
}