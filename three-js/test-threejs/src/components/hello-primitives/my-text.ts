import {
  Font,
  FontLoader,
  Mesh,
  Object3D,
  TextBufferGometry
} from 'three'
import { createMaterial } from './index'
//加载字体数据
const loadFont: (url: string) => Promise<Font> = (url) => {
  const loader = new FontLoader()
  return new Promise((resolve, reject: (error: ErrorEvent) => void) => {
    loader.load(url, resolve, undefined, reject)
  })
}

const createText = async () => {
  let url = 'https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json'

  const font = await loadFont(url) //异步加载 字体数据
  const geometry = new TextBufferGometry('Hello three.js', {
    font: font,
    size: 3.0,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.3,
    bevelSegments: 5
  })
  const mesh = new Mesh(geometry, createMaterial())
  geometry.computeBoundingBox()
  geometry.boundingBox?.getCenter(mesh.position).multiplyScalar(-1)
  const text = new Object3D()
  text.add(mesh)
  return text

}

export default createText