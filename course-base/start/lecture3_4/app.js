import * as THREE from '../../libs/three126/three.module.js';
import { OrbitControls } from '../../libs/three126/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
        
		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.camera.position.set( 0, 0, 4 );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );

        // Light
        const ambient = new THREE.HemisphereLight(0xFFFFFF,0xBBBBFF,0.3);
        this.scene.add(ambient);
			
        const light = new THREE.DirectionalLight();
        light.position.set(0.2,1,1);
        this.scene.add(light);

		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( this.renderer.domElement );

        this.renderer.setAnimationLoop(this.render.bind(this));

        // Generating mesh steps.
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({color: 0xFF0000}); // If you dont add light mesh will look black!

        this.mesh = new THREE.Mesh(geometry,material);
        this.scene.add(this.mesh);

        // Help us to rotate camera by using mouse, so it rotates the view of the scene.
        const controls = new OrbitControls(this.camera,this.renderer.domElement);
    
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        // This will update scene if the size of the window get changed!
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth,window.innerHeight);
    }
    
	render( ) {   
        this.mesh.rotateY(0.005);
        this.mesh.rotateX(0.005);
		this.renderer.render( this.scene, this.camera );
    }
}

export { App };