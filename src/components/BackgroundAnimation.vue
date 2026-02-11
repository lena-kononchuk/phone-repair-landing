<template>
  <div ref="containerRef" class="fixed inset-0"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)

let camera, scene, renderer, raycaster
let parentTransform, sphereInter
let animationId = null

const pointer = new THREE.Vector2()
const radius = 100
let theta = 0

const init = () => {
  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  // Camera
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )

  // Raycaster
  raycaster = new THREE.Raycaster()
  raycaster.params.Line.threshold = 3

  // Sphere for intersections
  // const geometry = new THREE.SphereGeometry(5)
  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

  // sphereInter = new THREE.Mesh(geometry, material)
  // sphereInter.visible = false
  // scene.add(sphereInter)

  // Line geometry
  const lineGeometry = new THREE.BufferGeometry()
  const points = []

  const point = new THREE.Vector3()
  const direction = new THREE.Vector3()

  for (let i = 0; i < 50; i++) {
    direction.x += Math.random() - 0.5
    direction.y += Math.random() - 0.5
    direction.z += Math.random() - 0.5
    direction.normalize().multiplyScalar(10)

    point.add(direction)
    points.push(point.x, point.y, point.z)
  }

  lineGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(points, 3)
  )

  // Parent transform
  parentTransform = new THREE.Object3D()

  for (let i = 0; i < 50; i++) {
    const lineMaterial = new THREE.LineBasicMaterial({
      color: Math.random() * 0xffffff
    })

    const object =
      Math.random() > 0.5
        ? new THREE.Line(lineGeometry, lineMaterial)
        : new THREE.LineSegments(lineGeometry, lineMaterial)

    object.position.set(
      Math.random() * 400 - 200,
      Math.random() * 400 - 200,
      Math.random() * 400 - 200
    )

    object.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    )

    const scale = Math.random() + 0.5
    object.scale.set(scale, scale, scale)

    parentTransform.add(object)
  }

  scene.add(parentTransform)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  containerRef.value.appendChild(renderer.domElement)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  render()
}

const render = () => {
  theta += 0.1

  camera.position.x =
    radius * Math.sin(THREE.MathUtils.degToRad(theta))
  camera.position.y =
    radius * Math.sin(THREE.MathUtils.degToRad(theta))
  camera.position.z =
    radius * Math.cos(THREE.MathUtils.degToRad(theta))

  camera.lookAt(scene.position)
  camera.updateMatrixWorld()

  raycaster.setFromCamera(pointer, camera)

  const intersects = raycaster.intersectObjects(
    parentTransform.children,
    true
  )

  // if (intersects.length > 0) {
  //   sphereInter.visible = true
  //   sphereInter.position.copy(intersects[0].point)
  // } else {
  //   sphereInter.visible = false
  // }

  renderer.render(scene, camera)
}

const onPointerMove = (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
}

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  init()
  animate()

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>
