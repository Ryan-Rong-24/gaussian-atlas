// 1) Imports
import * as THREE        from 'three';
import { PLYLoader }     from 'three/examples/jsm/loaders/PLYLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 2) Scene, camera, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

const container = document.getElementById('container');
const camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);
camera.position.set(0,0,2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// 3) OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 4) Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1,1,1);
scene.add(light);

// 5) PLYLoader and point cloud handling
const loader = new PLYLoader();
let currentPoints = null;

function loadPLYFile(file) {
    // Remove existing point cloud if any
    if (currentPoints) {
        scene.remove(currentPoints);
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const geometry = loader.parse(e.target.result);
        geometry.computeVertexNormals();
        const mat = new THREE.PointsMaterial({
            size: 0.005,
            vertexColors: geometry.hasAttribute('color')
        });
        currentPoints = new THREE.Points(geometry, mat);
        scene.add(currentPoints);

        // Center the camera on the new point cloud
        const box = new THREE.Box3().setFromObject(currentPoints);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
        camera.position.set(center.x, center.y, center.z + cameraZ);
        camera.lookAt(center);
        controls.target.copy(center);
    };
    reader.readAsArrayBuffer(file);
}

// Load default PLY file
loader.load(
    'models/point_cloud.ply',
    geometry => {
        geometry.computeVertexNormals();
        const mat = new THREE.PointsMaterial({
            size: 0.005,
            vertexColors: geometry.hasAttribute('color')
        });
        currentPoints = new THREE.Points(geometry, mat);
        scene.add(currentPoints);
    },
    xhr => console.log((xhr.loaded/xhr.total*100).toFixed(1) + '% loaded'),
    err => console.error('PLY load error', err)
);

// Handle file upload
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        loadPLYFile(file);
    }
});

// 6) Handle resize
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

// 7) Animate
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
