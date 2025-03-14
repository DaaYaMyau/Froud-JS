import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'

document.addEventListener('DOMContentLoaded', () => {
    //if _screen flex 
        initThree('.ThreeD_Bottle', '3D/bottle.glb', [0, 0.3, 0.3]);
        initThree('.ThreeD_Broccoli', '3D/broccoli.glb', [0, 0, 0.7]);
        initThree('.ThreeD_Apple', '3D/delicious_red_apple.glb', [3, 10, 5]);
        initThree('.ThreeD_Garlic', '3D/garlic_game_ready__2k_pbr.glb', [0, 9, 6]);
        initThree('.ThreeD_Limon', '3D/lemon.glb', [0, 9, 8]);
        initThree('.ThreeD_Cabbage', '3D/napa_cabbage.glb', [1, 1, 4]);
        initThree('.ThreeD_Pineapple', '3D/pineapple.glb', [2, 4, 1]);
        initThree('.ThreeD_Pumpkin', '3D/pumpkin.glb', [0, 2, 150]);
        initThree('.ThreeD_Strawberry', '3D/strawberry (2).glb', [0, 2, 55]);
        initThree('.ThreeD_Orange', '3D/mandarin_scan.glb', [1, 20, 7]);
        initThree('.ThreeD_Orange', '3D/mandarin_scan.glb', [0, 0, 0]);
})

function initThree(Class, modell, position) {
    const class_Event = document.querySelector(Class);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FFFFFF'); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = ;
    camera.position.set(...position);
   
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.LinearToneMapping; 
    renderer.toneMappingExposure = 1; 
    class_Event.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); 
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); 
    directionalLight.position.set(1, 1, 1); 
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let model = null;
    
    loader.load(
        modell, 
        (gltf) => {
            model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(1, 1, 1);
            scene.add(model);
        },
        undefined,
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    )

    {
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.autoRotateSpeed = 7
        controls.enableDamping = true
        controls.minDistance = 0.3
        controls.maxDistance = 200
    }

    function animate() {
        requestAnimationFrame(animate)
                if (model) {
            model.rotation.y += 0.001; 
            // model.rotation.x -= 0.001; 
            model.rotation.z -= 0.001;
        }
        renderer.render(scene, camera)
    }
    
    animate();

    window.addEventListener('resize', onWindowResize)

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

}