// 1) Imports
import * as THREE        from 'three';
import { PLYLoader }     from 'three/examples/jsm/loaders/PLYLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 2) Scene, camera, renderer (same as before)
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
camera.position.set(0,0,2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// 3) OrbitControls (now imported)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 4) Light (optional)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1,1,1);
scene.add(light);

// 5) PLYLoader (imported)
const loader = new PLYLoader();
loader.load(
  'models/point_cloud.ply',
  geometry => {
    geometry.computeVertexNormals();
    const mat = new THREE.PointsMaterial({
      size: 0.005,
      vertexColors: geometry.hasAttribute('color')
    });
    scene.add(new THREE.Points(geometry, mat));
  },
  xhr => console.log((xhr.loaded/xhr.total*100).toFixed(1) + '% loaded'),
  err => console.error('PLY load error', err)
);

// 6) Handle resize
window.addEventListener('resize', () => {
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// 7) Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
