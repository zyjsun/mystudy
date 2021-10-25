import React, { useRef, useEffect } from "react";
import './index.css'
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  Mesh,
  DirectionalLight,
  // MeshBasicMaterial, // 不反射光
  MeshPhongMaterial // 反射光
} from 'three'

const HelloThreejs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (canvasRef.current) {
      // 创建渲染器
      const renderer = new WebGLRenderer({ canvas: canvasRef.current })
      // 创建镜头
      const camera = new PerspectiveCamera(75, 2, 0.1, 5)
      // 创建场景
      const scene = new Scene()
      // 创建几何体
      const geometry = new BoxGeometry(1, 1, 1)
      // 创建材质
      const material1 = new MeshPhongMaterial({ color: 0x44aa88 })
      const material2 = new MeshPhongMaterial({ color: 0xc50d0d })
      const material3 = new MeshPhongMaterial({ color: 0x439b20a })

      // 创建网格
      const cube1 = new Mesh(geometry, material1)
      cube1.position.x = -2
      const cube2 = new Mesh(geometry, material2)
      cube2.position.x = 0
      const cube3 = new Mesh(geometry, material3)
      cube3.position.x = 2
      const cubes = [cube1, cube2, cube3]
      scene.add(cube1)
      scene.add(cube2)
      scene.add(cube3)

      // 创建光源
      const light = new DirectionalLight(0xFFFFFF, 1)
      light.position.set(-1, 2, 4)
      scene.add(light)

      // 设置透视镜头的Z轴距离
      camera.position.z = 2

      // 渲染器根据场景，透视镜头来渲染画面，并将该画面内容填充到 DOM 的 canvas 元素中
      renderer.render(scene, camera)

      // 添加自动旋转动画
      const render = (time: number) => {
        time = time * 0.001
        // cube.rotation.x = time
        // cube.rotation.y = time
        const canvas = renderer.domElement //获取canvas
        camera.aspect = canvas.clientWidth / canvas.clientHeight //设置镜头宽高比
        camera.updateProjectionMatrix() //通知镜头更新视锥
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
        cubes.map(cube => {
          cube.rotation.x = time
          cube.rotation.y = time
        })
        renderer.render(scene, camera)
        window.requestAnimationFrame(render)
      }

      window.requestAnimationFrame(render)
    }
  }, [canvasRef])


  return (
    <canvas ref={canvasRef} className="full-screen" />
  )
}

export default HelloThreejs
