
import * as THREE from 'three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 7;

const geometry = new THREE.BoxGeometry(3, 2, 2);
const material = new THREE.MeshBasicMaterial({color: 0xffcc99});
const house = new THREE.Mesh(geometry, material);
house.position.y = 1;
scene.add(house);

const roofGeometry = new THREE.ConeGeometry(2.2, 1.5, 4);
const roofMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 2.7;
roof.rotation.y = Math.PI / 4;
scene.add(roof);

const doorGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 32);
const doorMaterial = new THREE.MeshBasicMaterial({color: 0x8b4513});
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(0, 0.6, 1.1);
scene.add(door);

const windowGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.1);
const windowMaterial = new THREE.MeshBasicMaterial({color: 0x00ffff});

const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
window1.position.set(-1, 1.3, 1.1);
scene.add(window1);

const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
window2.position.set(1, 1.3, 1.1);
scene.add(window2);

const light = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(light);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
