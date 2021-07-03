var scene,  //场景 加物体 
    camera, // 摄像机
    renderer; // 渲染器



window.onload = function() {
  // 导演 拍出来
  // 每次拍戏的基本工作
  scene = new THREE.Scene();
  // 命名空间 new Vue 不污染全局  
  // static 

  camera = new THREE.PerspectiveCamera(90, 
    document.body.clientWidth/document.body.clientHeight,
    0.1,
    1000);
  camera.position.set(0, 0, 0.5);
  // scene.add()
  // webgl  渲染3D 加速
  // 拍完片要放映
  renderer =  new THREE.WebGLRenderer();
  renderer.setSize(
    document.body.clientWidth,
    document.body.clientHeight
  );
  document
    .getElementById('container')
    .appendChild(renderer.domElement);
  
  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  // 3D canvas webgl 
  useFang(); // 房 10 行

  loop(); // 
}

function useFang() {
  var materials = [];
  var texture_left = new THREE.TextureLoader().load( './images/scene_left.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_left} ) );
  var texture_right = new THREE.TextureLoader().load( './images/scene_right.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_right} ) );

  var texture_top = new THREE.TextureLoader().load( './images/scene_top.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_top} ) );

  var texture_bottom = new THREE.TextureLoader().load( './images/scene_bottom.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_bottom} ) );

  var texture_front = new THREE.TextureLoader().load( './images/scene_front.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_front} ) );

  var texture_back = new THREE.TextureLoader().load( './images/scene_back.jpeg' );
  materials.push( new THREE.MeshBasicMaterial( { map: texture_back} ) );
  // 正方体 + 四面装饰一下 
  var box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),  //形状
    materials // 材质
  )
  box.geometry.scale(1, 1, -1)
  scene.add(box)
}

function loop() {
  // 1 60 
  requestAnimationFrame(loop)
  renderer.render(scene, camera);
}