import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'

document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM загружен!");

    const container = document.querySelector('.ThreeD_Bottle');
    console.log("🔍 Найден ли div?", container);

    if (container) {
        // Проверим размеры контейнера
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        console.log("Размеры контейнера:", width, height, window.getComputedStyle(container).display);

        if (width > 0 && height > 0) {
            initThree();
        } else {
            console.error("❌ Контейнер имеет нулевые размеры!");
        }
    } else {
        console.error("❌ div.ThreeD_Bottle не найден!");
    }
});

function initThree() {
    const container = document.querySelector('.ThreeD_Bottle');
    if (!container) {
        console.error("Div ThreeD_Bottle не найден!");
        return;
    }

    // Сделаем div видимым перед рендерингом
    container.style.display = "block";

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0075F2');

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let model = null;

    loader.load(
        '3D/bottle.glb',
        (gltf) => {
            model = gltf.scene;
            model.position.set(0, -0.15, 0);
            model.scale.set(1, 1, 1);
            scene.add(model);
        },
        undefined,
        (error) => {
            console.error('Ошибка загрузки модели:', error);
        }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 7;
    controls.enableDamping = true;
    controls.minDistance = 0.3;
    controls.maxDistance = 200;

    function animate() {
        requestAnimationFrame(animate);
        if (model) {
            model.rotation.y += 0.001;
            model.rotation.z -= 0.001;
        }
        renderer.render(scene, camera);
    }
    
    animate();

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}
