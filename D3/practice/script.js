var vectors = [];

// Add event listener to monitor cursor accelerometer values
window.addEventListener('devicemotion', function(event) {
    var acceleration = event.accelerationIncludingGravity;
    var x = acceleration.x;
    var y = acceleration.y;
    var z = acceleration.z;
    // console.log(x, y, z);
    vectors.push(new THREE.Vector3(x, y, z)); // Add vector to array
});
// Generate sample vectors

// Replace with cursor accelerometer values
// var x = cursorAccelerometerValueX;
// var y = cursorAccelerometerValueY;
// var z = cursorAccelerometerValueZ;
// vectors.push(new THREE.Vector3(x, y, z)); // Add vector to array



// Setup the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create axes labels
var fontLoader = new THREE.FontLoader();
fontLoader.load('fonts/helvetiker_regular.typeface.json', function(font) {
    var xLabelGeometry = new THREE.TextGeometry('X', {
        font: font,
        size: 0.5,
        height: 0.1
    });
    var xLabelMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var xLabelMesh = new THREE.Mesh(xLabelGeometry, xLabelMaterial);
    xLabelMesh.position.set(1, 0, 0);
    scene.add(xLabelMesh);

    var yLabelGeometry = new THREE.TextGeometry('Y', {
        font: font,
        size: 0.5,
        height: 0.1
    });
    var yLabelMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var yLabelMesh = new THREE.Mesh(yLabelGeometry, yLabelMaterial);
    yLabelMesh.position.set(0, 1, 0);
    scene.add(yLabelMesh);

    var zLabelGeometry = new THREE.TextGeometry('Z', {
        font: font,
        size: 0.5,
        height: 0.1
    });
    var zLabelMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var zLabelMesh = new THREE.Mesh(zLabelGeometry, zLabelMaterial);
    zLabelMesh.position.set(0, 0, 1);
    scene.add(zLabelMesh);
});

// Create an arrow to represent the vector
var origin = new THREE.Vector3(0, 0, 0);
var hex = 0xff0000;
var arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(), origin, 0, hex);
scene.add(arrowHelper);

// Camera position
camera.position.z = 15;

// Current vector index
var index = 0;

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Update arrow with new vector
    if (index < vectors.length) {
        var vector = vectors[index];
        arrowHelper.setDirection(vector.clone().normalize());
        arrowHelper.setLength(vector.length(), 0.5, 0.3);
        index++;
    } else {
        index = 0; // Reset index to loop the animation
    }

    renderer.render(scene, camera);
}
animate();
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// // Create an arrow to represent the vector
// var origin = new THREE.Vector3(0, 0, 0);
// var hex = 0xff0000;
// var arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(), origin, 0, hex);
// scene.add(arrowHelper);

// // Camera position
// camera.position.z = 15;

// // Current vector index
// var index = 0;

// // Render loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Update arrow with new vector
//     if (index < vectors.length) {
//         var vector = vectors[index];
//         arrowHelper.setDirection(vector.clone().normalize());
//         arrowHelper.setLength(vector.length(), 0.5, 0.3);
//         index++;
//     } else {
//         index = 0; // Reset index to loop the animation
//     }

//     renderer.render(scene, camera);
// }
// animate();