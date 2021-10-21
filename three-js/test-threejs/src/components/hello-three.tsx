import React, { useRef, useEffect } from "react";
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
      const material = new MeshPhongMaterial({ color: 0x44aa88 })
      // 创建网格
      const cube = new Mesh(geometry, material)
      scene.add(cube)

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
        cube.rotation.x = time
        cube.rotation.y = time
        renderer.render(scene, camera)
        window.requestAnimationFrame(render)
      }

      window.requestAnimationFrame(render)
    }
  }, [canvasRef])


  return (
    <canvas ref={canvasRef} />
  )
}

export default HelloThreejs
