import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'

document.addEventListener('DOMContentLoaded', () => {
    initThree()
})

function initThree() {
    const model = document.querySelector('.model');

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FFFFFF')
    scene.position.set(0, -30, 0)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // !
    camera.position.set(-130, 80, 50)

    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    model.appendChild(renderer.domElement)

    {
        const loader = new GLTFLoader()
        loader.load('',
            (gltf) => {
                scene.add(gltf.scene)
            },
            (error) => {
                console.log('Error:' + error);
            })
    } 

    {
        const light = new THREE.AmbientLight(0xeeeeee)
        scene.add(light)
    }

    {
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.autoRotateSpeed = 3
        controls.enableDamping = true
        controls.maxDistance = 300
    }

    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
    animate()




}