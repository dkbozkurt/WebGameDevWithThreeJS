import * as THREE from '../../libs/three126/three.module.js';
import { OrbitControls } from '../../libs/three126/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

        // Creating Perspective Camera
        this.camera = new THREE.PerspectiveCamera(60,
            window.innerWidth/window.innerHeight,
            0.1,
            100);
        // Set camera position
        this.camera.position.set(0,0,4);

        // Scene instance and background color set
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xAAAAAA);

        // For games we need WebGLRenderer
        // antialias to true  to try to reduce the judges along the edges.
        // without set until it`s into true, the app will suffer from judges.
        this.renderer = new THREE.WebGLRenderer({antialias : true});

        // .setPixelRation avoids blurring on retina screens
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.setSize(window.innerWidth,window.innerHeight);
        container.appendChild(this.renderer.domElement);

        // Important for updating / this method will be call 60 times in a sec.
        this.renderer.setAnimationLoop(this.render.bind(this));

        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){

    }
    
	render( ) {   
		this.renderer.render(this.scene,this.camera);
    }
}

export { App };