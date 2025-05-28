// 1) Imports
import * as THREE        from 'three';
import { PLYLoader }     from 'three/examples/jsm/loaders/PLYLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 2) Scene, camera, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

const container = document.getElementById('container');
const progressBar = document.getElementById('progress-bar');
const camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);
camera.position.set(0,0,2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight, false);
renderer.setScissorTest(true);
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

function resizeRendererToDisplaySize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (renderer.domElement.width !== width || renderer.domElement.height !== height) {
        renderer.setSize(width, height, false);
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function loadPLYFile(file) {
    if (currentPoints) {
        scene.remove(currentPoints);
    }
    progressBar.style.display = 'block';
    progressBar.value = 0;
    progressBar.max = 100;
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
        centerCameraOnPoints(currentPoints);
        progressBar.style.display = 'none';
    };
    reader.onprogress = function(e) {
        if (e.lengthComputable) {
            progressBar.value = (e.loaded / e.total) * 100;
        }
    };
    reader.onloadend = function() {
        progressBar.style.display = 'none';
    };
    reader.readAsArrayBuffer(file);
}

function centerCameraOnPoints(points) {
    const box = new THREE.Box3().setFromObject(points);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / Math.sin(fov / 2));
    camera.position.set(center.x, center.y, center.z + cameraZ);
    camera.lookAt(center);
    controls.target.copy(center);
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
        centerCameraOnPoints(currentPoints);
        progressBar.style.display = 'none';
    },
    xhr => {
        if (xhr.lengthComputable) {
            progressBar.style.display = 'block';
            progressBar.value = (xhr.loaded / xhr.total) * 100;
        }
    },
    err => {
        progressBar.style.display = 'none';
        console.error('PLY load error', err);
    }
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
    resizeRendererToDisplaySize();
});

// 7) Animate
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    resizeRendererToDisplaySize();
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setViewport(0, 0, width, height);
    renderer.setScissor(0, 0, width, height);
    renderer.render(scene, camera);
}
animate();
