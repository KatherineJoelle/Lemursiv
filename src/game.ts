import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script3 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item"
import Script4 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script5 from "../221ca611-e905-43e8-ab98-f627c4287e74/src/item"
import Script6 from "../f5c1fc52-2cd3-40b2-862a-c6ceaf66aa1e/src/item"
import Script7 from "../37e449e5-9298-41b6-8c9a-a6d12b45bdd2/src/item"
import Script8 from "../96575108-339b-4a4e-9b45-a7ffb3330ecf/src/item"
import Script9 from "../1a7b94e0-ac62-4539-bb08-65f4fc4d66ac/src/item"
import Script10 from "../970e597d-ef00-44d7-8fb3-72179393947e/src/item"
import Script11 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script12 from "../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item"
import Script13 from "../4c3b4f56-9329-4230-9d43-4f94fbf6771d/src/item"
import { SmokeSource, ThrowSmoke } from "./modules/smokeSource";
import { SmokeSystem } from "./modules/smoke";
import {
  swatchZUnselected,
  swatchScale,
  Swatch,
  swatches,
  GrowSwatches
} from './modules/swatches'
import {
  Pixel,
  pixels,
  CheckServer,
  getFromServer,
  wallPixelTransparentMaterial,
  wallPixelColorMaterial
} from './modules/pixels'
import { apiUrl, refreshInterval, swatchColors, wallBlocksX, wallBlocksY, wallWidth, wallHeight, wallPixelZ, wallPixelScale, paletteColor, wallOffsetX, wallOffsetY, blankColor } from "./params";
import { PixelInstance } from './pixelinstance'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

////////////////////////////////////////////////////////////////////////////
//add origin of clouds
////////////////////////////////////////////////////////////////////////////
let box = new Entity()
box.addComponent(new BoxShape)
const transform0 = new Transform({
  position: new Vector3(70, 50, 20),
  scale: new Vector3(30, 30, .001),
  rotation: new Quaternion (1, 0, 0, 1)
})
box.addComponentOrReplace(transform0)

let smokeTexture = new Texture('textures/cloud.png')

const smokeMaterial = new Material()
smokeMaterial.albedoTexture = smokeTexture

smokeMaterial.alphaTest = 0.2
smokeMaterial.alphaTexture = smokeTexture
box.addComponent(smokeMaterial)
box.addComponent(new SmokeSource(0.2))
engine.addEntity(box)

// Initiate cloud systems
engine.addSystem(new ThrowSmoke())
engine.addSystem(new SmokeSystem())

////////////////////////////////////////////////////////////////////////////
//Add static models
////////////////////////////////////////////////////////////////////////////

const ocean = new Entity('ocean')
engine.addEntity(ocean)
ocean.setParent(_scene)
const transformc = new Transform({
  position: new Vector3(64, 0.2, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(.95, .95, .95)
})
ocean.addComponentOrReplace(transformc)
const gltfShape28 = new GLTFShape("models/ocean.glb")
gltfShape28.visible = true
ocean.addComponentOrReplace(gltfShape28)

const terrain = new Entity('terrain')
engine.addEntity(terrain)
terrain.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(64, 0.42188072204589844, 64),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000088214874268, 1, 1.0000088214874268)
})
terrain.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/wholeisland_2.glb")
gltfShape.withCollisions = true
gltfShape.visible = true
terrain.addComponentOrReplace(gltfShape)

////////////////////////////////////////////////////////////////////////////
// Add builder imported items 
////////////////////////////////////////////////////////////////////////////

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape7 = new GLTFShape("models/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape7.withCollisions = true
gltfShape7.visible = true
entity.addComponentOrReplace(gltfShape7)
const transform8 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform8)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape7)
const transform9 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform9)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape7)
const transform10 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform10)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape7)
const transform11 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform11)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape7)
const transform12 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform12)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape7)
const transform13 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform13)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape7)
const transform14 = new Transform({
  position: new Vector3(104, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform14)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape7)
const transform15 = new Transform({
  position: new Vector3(120, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform15)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape7)
const transform16 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform16)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape7)
const transform17 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform17)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape7)
const transform18 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform18)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape7)
const transform19 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform19)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape7)
const transform20 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform20)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape7)
const transform21 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform21)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(104, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform22)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape7)
const transform23 = new Transform({
  position: new Vector3(120, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform23)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape7)
const transform24 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform24)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape7)
const transform25 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform25)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform26)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape7)
const transform27 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform27)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform28)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape7)
const transform29 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform29)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape7)
const transform30 = new Transform({
  position: new Vector3(104, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform30)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape7)
const transform31 = new Transform({
  position: new Vector3(120, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform31)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape7)
const transform32 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform32)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape7)
const transform33 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform33)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape7)
const transform34 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform34)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape7)
const transform35 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform35)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape7)
const transform36 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform36)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape7)
const transform37 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity30.addComponentOrReplace(transform37)

const entity31 = new Entity('entity31')
engine.addEntity(entity31)
entity31.setParent(_scene)
entity31.addComponentOrReplace(gltfShape7)
const transform38 = new Transform({
  position: new Vector3(104, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity31.addComponentOrReplace(transform38)

const entity32 = new Entity('entity32')
engine.addEntity(entity32)
entity32.setParent(_scene)
entity32.addComponentOrReplace(gltfShape7)
const transform39 = new Transform({
  position: new Vector3(120, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity32.addComponentOrReplace(transform39)

const entity33 = new Entity('entity33')
engine.addEntity(entity33)
entity33.setParent(_scene)
entity33.addComponentOrReplace(gltfShape7)
const transform40 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity33.addComponentOrReplace(transform40)

const entity34 = new Entity('entity34')
engine.addEntity(entity34)
entity34.setParent(_scene)
entity34.addComponentOrReplace(gltfShape7)
const transform41 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity34.addComponentOrReplace(transform41)

const entity35 = new Entity('entity35')
engine.addEntity(entity35)
entity35.setParent(_scene)
entity35.addComponentOrReplace(gltfShape7)
const transform42 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity35.addComponentOrReplace(transform42)

const entity36 = new Entity('entity36')
engine.addEntity(entity36)
entity36.setParent(_scene)
entity36.addComponentOrReplace(gltfShape7)
const transform43 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity36.addComponentOrReplace(transform43)

const entity37 = new Entity('entity37')
engine.addEntity(entity37)
entity37.setParent(_scene)
entity37.addComponentOrReplace(gltfShape7)
const transform44 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity37.addComponentOrReplace(transform44)

const entity38 = new Entity('entity38')
engine.addEntity(entity38)
entity38.setParent(_scene)
entity38.addComponentOrReplace(gltfShape7)
const transform45 = new Transform({
  position: new Vector3(88, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity38.addComponentOrReplace(transform45)

const entity39 = new Entity('entity39')
engine.addEntity(entity39)
entity39.setParent(_scene)
entity39.addComponentOrReplace(gltfShape7)
const transform46 = new Transform({
  position: new Vector3(104, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity39.addComponentOrReplace(transform46)

const entity40 = new Entity('entity40')
engine.addEntity(entity40)
entity40.setParent(_scene)
entity40.addComponentOrReplace(gltfShape7)
const transform47 = new Transform({
  position: new Vector3(120, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity40.addComponentOrReplace(transform47)

const entity41 = new Entity('entity41')
engine.addEntity(entity41)
entity41.setParent(_scene)
entity41.addComponentOrReplace(gltfShape7)
const transform48 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity41.addComponentOrReplace(transform48)

const entity42 = new Entity('entity42')
engine.addEntity(entity42)
entity42.setParent(_scene)
entity42.addComponentOrReplace(gltfShape7)
const transform49 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity42.addComponentOrReplace(transform49)

const entity43 = new Entity('entity43')
engine.addEntity(entity43)
entity43.setParent(_scene)
entity43.addComponentOrReplace(gltfShape7)
const transform50 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity43.addComponentOrReplace(transform50)

const entity44 = new Entity('entity44')
engine.addEntity(entity44)
entity44.setParent(_scene)
entity44.addComponentOrReplace(gltfShape7)
const transform51 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity44.addComponentOrReplace(transform51)

const entity45 = new Entity('entity45')
engine.addEntity(entity45)
entity45.setParent(_scene)
entity45.addComponentOrReplace(gltfShape7)
const transform52 = new Transform({
  position: new Vector3(72, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity45.addComponentOrReplace(transform52)

const entity46 = new Entity('entity46')
engine.addEntity(entity46)
entity46.setParent(_scene)
entity46.addComponentOrReplace(gltfShape7)
const transform53 = new Transform({
  position: new Vector3(88, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity46.addComponentOrReplace(transform53)

const entity47 = new Entity('entity47')
engine.addEntity(entity47)
entity47.setParent(_scene)
entity47.addComponentOrReplace(gltfShape7)
const transform54 = new Transform({
  position: new Vector3(104, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity47.addComponentOrReplace(transform54)

const entity48 = new Entity('entity48')
engine.addEntity(entity48)
entity48.setParent(_scene)
entity48.addComponentOrReplace(gltfShape7)
const transform55 = new Transform({
  position: new Vector3(120, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity48.addComponentOrReplace(transform55)

const entity49 = new Entity('entity49')
engine.addEntity(entity49)
entity49.setParent(_scene)
entity49.addComponentOrReplace(gltfShape7)
const transform56 = new Transform({
  position: new Vector3(8, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity49.addComponentOrReplace(transform56)

const entity50 = new Entity('entity50')
engine.addEntity(entity50)
entity50.setParent(_scene)
entity50.addComponentOrReplace(gltfShape7)
const transform57 = new Transform({
  position: new Vector3(24, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity50.addComponentOrReplace(transform57)

const entity51 = new Entity('entity51')
engine.addEntity(entity51)
entity51.setParent(_scene)
entity51.addComponentOrReplace(gltfShape7)
const transform58 = new Transform({
  position: new Vector3(40, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity51.addComponentOrReplace(transform58)

const entity52 = new Entity('entity52')
engine.addEntity(entity52)
entity52.setParent(_scene)
entity52.addComponentOrReplace(gltfShape7)
const transform59 = new Transform({
  position: new Vector3(56, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity52.addComponentOrReplace(transform59)

const entity53 = new Entity('entity53')
engine.addEntity(entity53)
entity53.setParent(_scene)
entity53.addComponentOrReplace(gltfShape7)
const transform60 = new Transform({
  position: new Vector3(72, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity53.addComponentOrReplace(transform60)

const entity54 = new Entity('entity54')
engine.addEntity(entity54)
entity54.setParent(_scene)
entity54.addComponentOrReplace(gltfShape7)
const transform61 = new Transform({
  position: new Vector3(88, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity54.addComponentOrReplace(transform61)

const entity55 = new Entity('entity55')
engine.addEntity(entity55)
entity55.setParent(_scene)
entity55.addComponentOrReplace(gltfShape7)
const transform62 = new Transform({
  position: new Vector3(104, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity55.addComponentOrReplace(transform62)

const entity56 = new Entity('entity56')
engine.addEntity(entity56)
entity56.setParent(_scene)
entity56.addComponentOrReplace(gltfShape7)
const transform63 = new Transform({
  position: new Vector3(120, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity56.addComponentOrReplace(transform63)

const entity57 = new Entity('entity57')
engine.addEntity(entity57)
entity57.setParent(_scene)
entity57.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(8, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity57.addComponentOrReplace(transform64)

const entity58 = new Entity('entity58')
engine.addEntity(entity58)
entity58.setParent(_scene)
entity58.addComponentOrReplace(gltfShape7)
const transform65 = new Transform({
  position: new Vector3(24, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity58.addComponentOrReplace(transform65)

const entity59 = new Entity('entity59')
engine.addEntity(entity59)
entity59.setParent(_scene)
entity59.addComponentOrReplace(gltfShape7)
const transform66 = new Transform({
  position: new Vector3(40, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity59.addComponentOrReplace(transform66)

const entity60 = new Entity('entity60')
engine.addEntity(entity60)
entity60.setParent(_scene)
entity60.addComponentOrReplace(gltfShape7)
const transform67 = new Transform({
  position: new Vector3(56, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity60.addComponentOrReplace(transform67)

const entity61 = new Entity('entity61')
engine.addEntity(entity61)
entity61.setParent(_scene)
entity61.addComponentOrReplace(gltfShape7)
const transform68 = new Transform({
  position: new Vector3(72, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity61.addComponentOrReplace(transform68)

const entity62 = new Entity('entity62')
engine.addEntity(entity62)
entity62.setParent(_scene)
entity62.addComponentOrReplace(gltfShape7)
const transform69 = new Transform({
  position: new Vector3(88, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity62.addComponentOrReplace(transform69)

const entity63 = new Entity('entity63')
engine.addEntity(entity63)
entity63.setParent(_scene)
entity63.addComponentOrReplace(gltfShape7)
const transform70 = new Transform({
  position: new Vector3(104, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity63.addComponentOrReplace(transform70)

const entity64 = new Entity('entity64')
engine.addEntity(entity64)
entity64.setParent(_scene)
entity64.addComponentOrReplace(gltfShape7)
const transform71 = new Transform({
  position: new Vector3(120, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity64.addComponentOrReplace(transform71)

////////////////////////////////////////////////////////////////////////////
//Add animated models (animals)
////////////////////////////////////////////////////////////////////////////

const ayeayeAnimated = new Entity('ayeayeAnimated')
engine.addEntity(ayeayeAnimated)
ayeayeAnimated.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(36.99220657348633, 1.48116135597229, 66.4802017211914),
  rotation: new Quaternion(1.3250993591241642e-14, -0.9238796234130859, 1.1013501932666259e-7, 0.3826834261417389),
  scale: new Vector3(0.25002235174179077, 0.25, 0.25002235174179077)
})
ayeayeAnimated.addComponentOrReplace(transform72)
const gltfShape8 = new GLTFShape("models/ayeAye_animated.glb")
gltfShape8.withCollisions = true
gltfShape8.visible = true
ayeayeAnimated.addComponentOrReplace(gltfShape8)

const blackblueeyedLemuri = new Entity('blackblueeyedLemuri')
engine.addEntity(blackblueeyedLemuri)
blackblueeyedLemuri.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(50.66771697998047, 3.3302462100982666, 72.81867980957031),
  rotation: new Quaternion(0.056287746876478195, 0.44340580701828003, 0.10961774736642838, 0.887810230255127),
  scale: new Vector3(0.4619244933128357, 0.46192318201065063, 0.4619237184524536)
})
blackblueeyedLemuri.addComponentOrReplace(transform73)
const gltfShape9 = new GLTFShape("models/blackBlueEyed_lemuridae_animated.glb")
gltfShape9.withCollisions = true
gltfShape9.visible = true
blackblueeyedLemuri.addComponentOrReplace(gltfShape9)

const easternwoollylemurA = new Entity('easternwoollylemurA')
engine.addEntity(easternwoollylemurA)
easternwoollylemurA.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(53.506561279296875, 7.044552803039551, 69.34246826171875),
  rotation: new Quaternion(-0.07145221531391144, -0.38328030705451965, -0.029851092025637627, 0.9203802347183228),
  scale: new Vector3(1.000000238418579, 0.9999994039535522, 1.0000003576278687)
})
easternwoollylemurA.addComponentOrReplace(transform74)
const gltfShape10 = new GLTFShape("models/easternWoollyLemur_animated.glb")
gltfShape10.withCollisions = true
gltfShape10.visible = true
easternwoollylemurA.addComponentOrReplace(gltfShape10)

const fossaAnimated = new Entity('fossaAnimated')
engine.addEntity(fossaAnimated)
fossaAnimated.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(83.63587188720703, 3.0488765239715576, 74.1373519897461),
  rotation: new Quaternion(2.8261521100518116e-15, 0.7730104327201843, -9.21500173944878e-8, -0.6343932747840881),
  scale: new Vector3(0.429121732711792, 0.42912203073501587, 0.429121732711792)
})
fossaAnimated.addComponentOrReplace(transform75)
const gltfShape11 = new GLTFShape("models/fossa_animated.glb")
gltfShape11.withCollisions = true
gltfShape11.visible = true
fossaAnimated.addComponentOrReplace(gltfShape11)

const greymouselemurAnima = new Entity('greymouselemurAnima')
engine.addEntity(greymouselemurAnima)
greymouselemurAnima.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(81.36511993408203, 23.33228874206543, 98.05537414550781),
  rotation: new Quaternion(0.16213853657245636, -0.18231049180030823, 0.06845806539058685, 0.9673611521720886),
  scale: new Vector3(0.3439869284629822, 0.343986839056015, 0.3439868688583374)
})
greymouselemurAnima.addComponentOrReplace(transform76)
const gltfShape12 = new GLTFShape("models/greyMouseLemur_animated.glb")
gltfShape12.withCollisions = true
gltfShape12.visible = true
greymouselemurAnima.addComponentOrReplace(gltfShape12)

const madagascarmillipede = new Entity('madagascarmillipede')
engine.addEntity(madagascarmillipede)
madagascarmillipede.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(110.54979705810547, 1.4072532653808594, 94.16382598876953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.06426352262496948, 0.07839801162481308, 0.07839801162481308)
})
madagascarmillipede.addComponentOrReplace(transform77)
const gltfShape13 = new GLTFShape("models/madagascarMillipede_animated.glb")
gltfShape13.withCollisions = true
gltfShape13.visible = true
madagascarmillipede.addComponentOrReplace(gltfShape13)

const paintedmantellafrog = new Entity('paintedmantellafrog')
engine.addEntity(paintedmantellafrog)
paintedmantellafrog.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(108.7208480834961, 0.4657558798789978, 66),
  rotation: new Quaternion(1.8358589451811745e-16, -0.22974026203155518, 2.7387169865278338e-8, 0.97325199842453),
  scale: new Vector3(0.1193237230181694, 0.11932373046875, 0.1193237230181694)
})
paintedmantellafrog.addComponentOrReplace(transform78)
const gltfShape14 = new GLTFShape("models/paintedMantellaFrog_animated.glb")
gltfShape14.withCollisions = true
gltfShape14.visible = true
paintedmantellafrog.addComponentOrReplace(gltfShape14)

const pantherchameleonAni = new Entity('pantherchameleonAni')
engine.addEntity(pantherchameleonAni)
pantherchameleonAni.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(109.3748779296875, 4.258784294128418, 115.24503326416016),
  rotation: new Quaternion(0.26053303480148315, -0.19420413672924042, 0.10213147848844528, 0.9402003288269043),
  scale: new Vector3(0.05380754917860031, 0.05380745977163315, 0.05380736663937569)
})
pantherchameleonAni.addComponentOrReplace(transform79)
const gltfShape15 = new GLTFShape("models/pantherChameleon_animated.glb")
gltfShape15.withCollisions = true
gltfShape15.visible = true
pantherchameleonAni.addComponentOrReplace(gltfShape15)

const tomatofrogAnimated = new Entity('tomatofrogAnimated')
engine.addEntity(tomatofrogAnimated)
tomatofrogAnimated.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(115.20838165283203, 0.8688149452209473, 87.37993621826172),
  rotation: new Quaternion(-3.5787192843471025e-15, 0.8966167569160461, -1.0688502527500532e-7, 0.4428074359893799),
  scale: new Vector3(0.09194184839725494, 0.09194183349609375, 0.09194184839725494)
})
tomatofrogAnimated.addComponentOrReplace(transform80)
const gltfShape16 = new GLTFShape("models/tomatoFrog_animated.glb")
gltfShape16.withCollisions = true
gltfShape16.visible = true
tomatofrogAnimated.addComponentOrReplace(gltfShape16)

const satanicgeckoAnimate = new Entity('satanicgeckoAnimate')
engine.addEntity(satanicgeckoAnimate)
satanicgeckoAnimate.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(18.769075393676758, 29.99971580505371, 41.08726501464844),
  rotation: new Quaternion(-0.6658159494400024, 0.22807961702346802, 0.32316142320632935, 0.6326417326927185),
  scale: new Vector3(0.6713354587554932, 0.6713460683822632, 0.6713423728942871)
})
satanicgeckoAnimate.addComponentOrReplace(transform81)
const gltfShape17 = new GLTFShape("models/satanicGecko_animated.glb")
gltfShape17.withCollisions = true
gltfShape17.visible = true
satanicgeckoAnimate.addComponentOrReplace(gltfShape17)

const sifakaLemurAnimate = new Entity('sifakaLemurAnimate')
engine.addEntity(sifakaLemurAnimate)
sifakaLemurAnimate.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(12.176483154296875, 7.018277645111084, 43.01519012451172),
  rotation: new Quaternion(-2.7072407544768062e-15, -0.16581355035305023, 1.976651731183665e-8, -0.9861571192741394),
  scale: new Vector3(0.6165609359741211, 0.6165599226951599, 0.6165609359741211)
})
sifakaLemurAnimate.addComponentOrReplace(transform82)
const gltfShape18 = new GLTFShape("models/sifaka_Lemur_animated.glb")
gltfShape18.withCollisions = true
gltfShape18.visible = true
sifakaLemurAnimate.addComponentOrReplace(gltfShape18)

const rringtailedlemurAni = new Entity('rringtailedlemurAni')
engine.addEntity(rringtailedlemurAni)
rringtailedlemurAni.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(100.10406494140625, 1.283, 122.53780364990234),
  rotation: new Quaternion(-9.939319654724823e-16, 0.4721946716308594, -5.628997712392447e-8, -0.8814942836761475),
  scale: new Vector3(0.9999967813491821, 1, 0.9999967813491821)
})
rringtailedlemurAni.addComponentOrReplace(transform83)
const gltfShape19 = new GLTFShape("models/RringTailedLemur_animated.glb")
gltfShape19.withCollisions = true
gltfShape19.visible = true
rringtailedlemurAni.addComponentOrReplace(gltfShape19)

const madagascarmillipede2 = new Entity('madagascarmillipede2')
engine.addEntity(madagascarmillipede2)
madagascarmillipede2.setParent(_scene)
madagascarmillipede2.addComponentOrReplace(gltfShape13)
const transform84 = new Transform({
  position: new Vector3(90.69295501708984, 10.269097328186035, 104.80810546875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.039382196962833405, 0.04804414138197899, 0.04804414138197899)
})
madagascarmillipede2.addComponentOrReplace(transform84)

const paintedmantellafrog2 = new Entity('paintedmantellafrog2')
engine.addEntity(paintedmantellafrog2)
paintedmantellafrog2.setParent(_scene)
paintedmantellafrog2.addComponentOrReplace(gltfShape14)
const transform85 = new Transform({
  position: new Vector3(48.6295280456543, 0.4657558798789978, 25.29325294494629),
  rotation: new Quaternion(-9.292724348944044e-16, 0.4398329257965088, -5.243216705252962e-8, 0.8980796337127686),
  scale: new Vector3(0.033587899059057236, 0.03358790650963783, 0.033587899059057236)
})
paintedmantellafrog2.addComponentOrReplace(transform85)

const tomatofrogAnimated2 = new Entity('tomatofrogAnimated2')
engine.addEntity(tomatofrogAnimated2)
tomatofrogAnimated2.setParent(_scene)
tomatofrogAnimated2.addComponentOrReplace(gltfShape16)
const transform86 = new Transform({
  position: new Vector3(26.335941314697266, 0.810722827911377, 78.24880981445312),
  rotation: new Quaternion(1.0526916865798074e-16, 0.9960947632789612, -1.1874372773945652e-7, 0.08829087764024734),
  scale: new Vector3(0.09194191545248032, 0.09194183349609375, 0.09194191545248032)
})
tomatofrogAnimated2.addComponentOrReplace(transform86)

const rringtailedlemurAni2 = new Entity('rringtailedlemurAni2')
engine.addEntity(rringtailedlemurAni2)
rringtailedlemurAni2.setParent(_scene)
rringtailedlemurAni2.addComponentOrReplace(gltfShape19)
const transform87 = new Transform({
  position: new Vector3(2.415367364883423, 0.9572110176086426, 96.90129852294922),
  rotation: new Quaternion(5.006868078911162e-15, -0.9971243143081665, 1.1886646689163172e-7, -0.07578300684690475),
  scale: new Vector3(1.0000073909759521, 1, 1.0000073909759521)
})
rringtailedlemurAni2.addComponentOrReplace(transform87)

const rringtailedlemurAni3 = new Entity('rringtailedlemurAni3')
engine.addEntity(rringtailedlemurAni3)
rringtailedlemurAni3.setParent(_scene)
rringtailedlemurAni3.addComponentOrReplace(gltfShape19)
const transform88 = new Transform({
  position: new Vector3(63.248046875, 0.8335380554199219, 3.0526785850524902),
  rotation: new Quaternion(-2.2535343325436183e-15, -0.6126643419265747, 7.303525961788182e-8, 0.7903432250022888),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
rringtailedlemurAni3.addComponentOrReplace(transform88)

const rringtailedlemurAni5 = new Entity('rringtailedlemurAni5')
engine.addEntity(rringtailedlemurAni5)
rringtailedlemurAni5.setParent(_scene)
rringtailedlemurAni5.addComponentOrReplace(gltfShape19)
const transform89 = new Transform({
  position: new Vector3(126.55460357666016, 1.2507200241088867, 35.984031677246094),
  rotation: new Quaternion(3.3108216096136437e-15, -0.9989284873008728, 1.1908154107231894e-7, 0.04628226161003113),
  scale: new Vector3(1.0000261068344116, 1, 1.0000261068344116)
})
rringtailedlemurAni5.addComponentOrReplace(transform89)

const lowlandstreakedtenre = new Entity('lowlandstreakedtenre')
engine.addEntity(lowlandstreakedtenre)
lowlandstreakedtenre.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(112.76629638671875, 1.330155849456787, 97.16535949707031),
  rotation: new Quaternion(-1.409236454676002e-15, -0.8314695954322815, 9.911890685998515e-8, 0.5555702447891235),
  scale: new Vector3(0.23352983593940735, 0.23353028297424316, 0.23352983593940735)
})
lowlandstreakedtenre.addComponentOrReplace(transform102)
const gltfShape20 = new GLTFShape("models/lowlandStreakedTenrec_animated.glb")
gltfShape20.withCollisions = true
gltfShape20.visible = true
lowlandstreakedtenre.addComponentOrReplace(gltfShape20)

const sifakaLemurAnimate2 = new Entity('sifakaLemurAnimate2')
engine.addEntity(sifakaLemurAnimate2)
sifakaLemurAnimate2.setParent(_scene)
sifakaLemurAnimate2.addComponentOrReplace(gltfShape18)
const transform122 = new Transform({
  position: new Vector3(18.544912338256836, 28.475147247314453, 36.143550872802734),
  rotation: new Quaternion(-2.7072407544768062e-15, -0.16581355035305023, 1.976651731183665e-8, -0.9861571192741394),
  scale: new Vector3(0.6165609359741211, 0.6165599226951599, 0.6165609359741211)
})
sifakaLemurAnimate2.addComponentOrReplace(transform122)

const blackblueeyedLemuri2 = new Entity('blackblueeyedLemuri2')
engine.addEntity(blackblueeyedLemuri2)
blackblueeyedLemuri2.setParent(_scene)
blackblueeyedLemuri2.addComponentOrReplace(gltfShape9)
const transform123 = new Transform({
  position: new Vector3(37.5, 1.7324860095977783, 44.833187103271484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4619230628013611, 0.4619230628013611, 0.4619230628013611)
})
blackblueeyedLemuri2.addComponentOrReplace(transform123)

const greymouselemurAnima2 = new Entity('greymouselemurAnima2')
engine.addEntity(greymouselemurAnima2)
greymouselemurAnima2.setParent(_scene)
greymouselemurAnima2.addComponentOrReplace(gltfShape12)
const transform124 = new Transform({
  position: new Vector3(50.05329513549805, 3.788217544555664, 77.64924621582031),
  rotation: new Quaternion(0.3155924379825592, 0.27693164348602295, -0.20333746075630188, 0.8845135569572449),
  scale: new Vector3(0.2264421284198761, 0.22644218802452087, 0.2264423966407776)
})
greymouselemurAnima2.addComponentOrReplace(transform124)

const easternwoollylemurA2 = new Entity('easternwoollylemurA2')
engine.addEntity(easternwoollylemurA2)
easternwoollylemurA2.setParent(_scene)
easternwoollylemurA2.addComponentOrReplace(gltfShape10)
const transform125 = new Transform({
  position: new Vector3(69.13116455078125, 6.050521373748779, 85.79640197753906),
  rotation: new Quaternion(0.044304557144641876, 0.9040204286575317, 0.09984350204467773, -0.4132983088493347),
  scale: new Vector3(1.0000379085540771, 0.9999983906745911, 1.0000427961349487)
})
easternwoollylemurA2.addComponentOrReplace(transform125)

const pantherchameleonAni2 = new Entity('pantherchameleonAni2')
engine.addEntity(pantherchameleonAni2)
pantherchameleonAni2.setParent(_scene)
pantherchameleonAni2.addComponentOrReplace(gltfShape15)
const transform127 = new Transform({
  position: new Vector3(119.04702758789062, 3.154653310775757, 103.07477569580078),
  rotation: new Quaternion(-0.1418684422969818, -0.9288240671157837, -0.06749911606311798, 0.33556392788887024),
  scale: new Vector3(0.053808555006980896, 0.05380754545331001, 0.05380837991833687)
})
pantherchameleonAni2.addComponentOrReplace(transform127)


// Sound

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(64, 3.5, 64),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform90)

// Message Bubbles 

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(54, 8.742424964904785, 69.5),
  rotation: new Quaternion(0, 0.19509033858776093, -2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(2.424633502960205, 2.033447504043579, 0.7294744849205017)
})
messageBubble.addComponentOrReplace(transform91)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(81.5, 22.236473083496094, 99.1761474609375),
  rotation: new Quaternion(2.448193303492734e-15, 0.7844365835189819, -9.351212071351256e-8, -0.6202090382575989),
  scale: new Vector3(1, 1, 1)
})
messageBubble2.addComponentOrReplace(transform92)

const messageBubble3 = new Entity('messageBubble3')
engine.addEntity(messageBubble3)
messageBubble3.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(108.5, 1, 66),
  rotation: new Quaternion(-3.3309928522195576e-15, 0.8814709782600403, -1.0507952197258419e-7, 0.47223833203315735),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
messageBubble3.addComponentOrReplace(transform93)

const messageBubble4 = new Entity('messageBubble4')
engine.addEntity(messageBubble4)
messageBubble4.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(115.0738754272461, 1.2741498947143555, 87.3443832397461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble4.addComponentOrReplace(transform94)

const messageBubble5 = new Entity('messageBubble5')
engine.addEntity(messageBubble5)
messageBubble5.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(109.1481704711914, 1.9052491188049316, 92.82193756103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble5.addComponentOrReplace(transform95)

const messageBubble6 = new Entity('messageBubble6')
engine.addEntity(messageBubble6)
messageBubble6.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(82.17765808105469, 3.4052491188049316, 73.97330474853516),
  rotation: new Quaternion(8.382268539214657e-15, -0.15846607089042664, 1.8890629505108336e-8, 0.9873644113540649),
  scale: new Vector3(1, 1, 1)
})
messageBubble6.addComponentOrReplace(transform96)

const messageBubble7 = new Entity('messageBubble7')
engine.addEntity(messageBubble7)
messageBubble7.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(36.0926399230957, 2.1562774181365967, 66.56455993652344),
  rotation: new Quaternion(4.1085131936244865e-16, 0.6194056868553162, -7.383890476830857e-8, 0.7850711345672607),
  scale: new Vector3(2.4246339797973633, 2.033447504043579, 0.7294787168502808)
})
messageBubble7.addComponentOrReplace(transform97)

const messageBubble8 = new Entity('messageBubble8')
engine.addEntity(messageBubble8)
messageBubble8.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(11.228106498718262, 8.23987865447998, 43.831573486328125),
  rotation: new Quaternion(-2.4341063832502424e-14, 0.9569404125213623, -1.1407617250824842e-7, -0.2902846038341522),
  scale: new Vector3(2.424668788909912, 2.033447504043579, 0.7294846773147583)
})
messageBubble8.addComponentOrReplace(transform98)

const messageBubble9 = new Entity('messageBubble9')
engine.addEntity(messageBubble9)
messageBubble9.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(19.30255699157715, 29.5, 40.50276184082031),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
messageBubble9.addComponentOrReplace(transform99)

const messageBubble10 = new Entity('messageBubble10')
engine.addEntity(messageBubble10)
messageBubble10.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(37.65353775024414, 2.5, 45.42264938354492),
  rotation: new Quaternion(0, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
messageBubble10.addComponentOrReplace(transform100)

const messageBubble11 = new Entity('messageBubble11')
engine.addEntity(messageBubble11)
messageBubble11.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(109.09393310546875, 4.232778549194336, 115.65675354003906),
  rotation: new Quaternion(-8.327854295650094e-16, 0.9569403529167175, -1.1407617250824842e-7, -0.29028481245040894),
  scale: new Vector3(1.0000081062316895, 1, 1.0000081062316895)
})
messageBubble11.addComponentOrReplace(transform101)


const messageBubble12 = new Entity('messageBubble12')
engine.addEntity(messageBubble12)
messageBubble12.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(111.09896850585938, 1.9052491188049316, 96.00019073486328),
  rotation: new Quaternion(-3.6721042432654154e-15, -0.04008972644805908, 4.7790731372288064e-9, 0.9991961121559143),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
messageBubble12.addComponentOrReplace(transform103)

const messageBubble13 = new Entity('messageBubble13')
engine.addEntity(messageBubble13)
messageBubble13.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(98.79271697998047, 2.5, 122),
  rotation: new Quaternion(-1.836161362413124e-16, 0.1731312870979309, -2.0638850628529326e-8, -0.9848987460136414),
  scale: new Vector3(1, 1, 1)
})
messageBubble13.addComponentOrReplace(transform128)

const messageBubble14 = new Entity('messageBubble14')
engine.addEntity(messageBubble14)
messageBubble14.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(125.8519287109375, 2.576159715652466, 34.70893478393555),
  rotation: new Quaternion(-3.5911862329021465e-16, -0.46730852127075195, 5.570750971628513e-8, 0.8840943574905396),
  scale: new Vector3(1, 1, 1)
})
messageBubble14.addComponentOrReplace(transform129)

const messageBubble15 = new Entity('messageBubble15')
engine.addEntity(messageBubble15)
messageBubble15.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(62.1234245300293, 2.639761447906494, 3.6742138862609863),
  rotation: new Quaternion(-3.492778474485734e-16, 0.22869232296943665, -2.7262242241476997e-8, 0.9734987616539001),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
messageBubble15.addComponentOrReplace(transform135)

const messageBubble16 = new Entity('messageBubble16')
engine.addEntity(messageBubble16)
messageBubble16.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(49, 1, 25.87017822265625),
  rotation: new Quaternion(-4.750350291824064e-16, 0.3702694773674011, -4.4139561339306965e-8, 0.9289243817329407),
  scale: new Vector3(1, 1, 1)
})
messageBubble16.addComponentOrReplace(transform148)

const messageBubble17 = new Entity('messageBubble17')
engine.addEntity(messageBubble17)
messageBubble17.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(2.5, 2.9657607078552246, 96),
  rotation: new Quaternion(1.5416593621882528e-15, 0.602097749710083, -7.177563077220839e-8, 0.7984223961830139),
  scale: new Vector3(1, 1, 1)
})
messageBubble17.addComponentOrReplace(transform160)

const messageBubble18 = new Entity('messageBubble18')
engine.addEntity(messageBubble18)
messageBubble18.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(26.17896842956543, 1.3490605354309082, 79),
  rotation: new Quaternion(1.0049174401678888e-16, -0.2816123366355896, 3.3570803026350404e-8, 0.9595283269882202),
  scale: new Vector3(1, 1, 1)
})
messageBubble18.addComponentOrReplace(transform165)

const messageBubble19 = new Entity('messageBubble19')
engine.addEntity(messageBubble19)
messageBubble19.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(50.36443328857422, 5.004460334777832, 73.333251953125),
  rotation: new Quaternion(-1.0806180584483163e-15, -0.7995942831039429, 9.531905220683257e-8, -0.6005406975746155),
  scale: new Vector3(2.42463755607605, 2.033447504043579, 0.7294757962226868)
})
messageBubble19.addComponentOrReplace(transform166)

const messageBubble20 = new Entity('messageBubble20')
engine.addEntity(messageBubble20)
messageBubble20.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(50.29426574707031, 3.8705177307128906, 78.69239807128906),
  rotation: new Quaternion(-1.0806180584483163e-15, -0.7995942831039429, 9.531905220683257e-8, -0.6005406975746155),
  scale: new Vector3(2.4246740341186523, 2.033447504043579, 0.7294864654541016)
})
messageBubble20.addComponentOrReplace(transform167)

// Text holders for Lemursiv information booth

const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(113.22550964355469, 1.9463496208190918, 15.337990760803223),
  rotation: new Quaternion(2.227042106568819e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.7639503479003906, 2.7639095783233643, 2.7639503479003906)
})
signpostTree.addComponentOrReplace(transform104)

const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(113.18091583251953, 6.446349620819092, 15.254770278930664),
  rotation: new Quaternion(2.227042106568819e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.76395320892334, 2.7639095783233643, 2.76395320892334)
})
signpostTree2.addComponentOrReplace(transform105)

const signpostTree3 = new Entity('signpostTree3')
engine.addEntity(signpostTree3)
signpostTree3.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(113.22550964355469, 11.035106658935547, 15.337990760803223),
  rotation: new Quaternion(2.227042106568819e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.763960838317871, 2.7639095783233643, 2.763960838317871)
})
signpostTree3.addComponentOrReplace(transform106)

const signpostTree4 = new Entity('signpostTree4')
engine.addEntity(signpostTree4)
signpostTree4.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(107.57939910888672, 10.734724044799805, 9.448404312133789),
  rotation: new Quaternion(4.038938966128202e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(4.394008636474609, 2.525036573410034, 2.5250773429870605)
})
signpostTree4.addComponentOrReplace(transform107)

const signpostTree5 = new Entity('signpostTree5')
engine.addEntity(signpostTree5)
signpostTree5.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(107.4896011352539, 6.530002117156982, 9.440960884094238),
  rotation: new Quaternion(4.038938966128202e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(4.394008636474609, 2.525036573410034, 2.5250773429870605)
})
signpostTree5.addComponentOrReplace(transform108)

const signpostTree6 = new Entity('signpostTree6')
engine.addEntity(signpostTree6)
signpostTree6.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(107.57939910888672, 2.3004698753356934, 9.448402404785156),
  rotation: new Quaternion(4.038938966128202e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(4.394008636474609, 2.525036573410034, 2.5250773429870605)
})
signpostTree6.addComponentOrReplace(transform109)

const signpostTree7 = new Entity('signpostTree7')
engine.addEntity(signpostTree7)
signpostTree7.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(102.25533294677734, 1.9463496208190918, 14.715365409851074),
  rotation: new Quaternion(-1.1187302847341998e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.7639594078063965, 2.7639095783233643, 2.7639594078063965)
})
signpostTree7.addComponentOrReplace(transform110)

const signpostTree8 = new Entity('signpostTree8')
engine.addEntity(signpostTree8)
signpostTree8.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(102.25533294677734, 6.403977394104004, 14.715367317199707),
  rotation: new Quaternion(-1.1187302847341998e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.763967514038086, 2.7639095783233643, 2.763967514038086)
})
signpostTree8.addComponentOrReplace(transform111)

const signpostTree9 = new Entity('signpostTree9')
engine.addEntity(signpostTree9)
signpostTree9.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(102.25533294677734, 10.818946838378906, 14.715365409851074),
  rotation: new Quaternion(-1.1187302847341998e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.7639756202697754, 2.7639095783233643, 2.7639756202697754)
})
signpostTree9.addComponentOrReplace(transform112)

const signpostTree10 = new Entity('signpostTree10')
engine.addEntity(signpostTree10)
signpostTree10.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(96.6205825805664, 10.791361808776855, 14.956602096557617),
  rotation: new Quaternion(-1.1187302847341998e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(5.41750955581665, 2.7639095783233643, 2.7639989852905273)
})
signpostTree10.addComponentOrReplace(transform113)

const signpostTree11 = new Entity('signpostTree11')
engine.addEntity(signpostTree11)
signpostTree11.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(96.83714294433594, 10.791361808776855, 14.956602096557617),
  rotation: new Quaternion(-1.1233006204076999e-14, 0.7071068286895752, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(5.4787468910217285, 2.7639095783233643, 2.763998031616211)
})
signpostTree11.addComponentOrReplace(transform114)

const signpostTree12 = new Entity('signpostTree12')
engine.addEntity(signpostTree12)
signpostTree12.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(118.3525619506836, 11.03903579711914, 15.558609962463379),
  rotation: new Quaternion(-1.1187302847341998e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(5.35523796081543, 2.7639095783233643, 2.764007091522217)
})
signpostTree12.addComponentOrReplace(transform115)

const signpostTree13 = new Entity('signpostTree13')
engine.addEntity(signpostTree13)
signpostTree13.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(118.56881713867188, 11.03903579711914, 14.994778633117676),
  rotation: new Quaternion(-1.2713200514568625e-14, 0.7071068286895752, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(5.33275842666626, 2.7639095783233643, 2.7640151977539062)
})
signpostTree13.addComponentOrReplace(transform116)


// Click areas (information about plants and trees)

const clickArea5 = new Entity('clickArea5')
engine.addEntity(clickArea5)
clickArea5.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(10.903759956359863, 8.779339790344238, 35.211082458496094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea5.addComponentOrReplace(transform117)

const clickArea6 = new Entity('clickArea6')
engine.addEntity(clickArea6)
clickArea6.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(12.143383979797363, 3.3969998359680176, 50.53177261352539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9049584865570068, 0.9049584865570068, 0.9049584865570068)
})
clickArea6.addComponentOrReplace(transform118)

const clickArea7 = new Entity('clickArea7')
engine.addEntity(clickArea7)
clickArea7.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(13.753877639770508, 3.545231342315674, 51.338706970214844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8568128347396851, 0.8568128347396851, 0.8568128347396851)
})
clickArea7.addComponentOrReplace(transform119)

const clickArea8 = new Entity('clickArea8')
engine.addEntity(clickArea8)
clickArea8.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(91.93419647216797, 7.70443868637085, 95.51493072509766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1756210327148438, 1.1756210327148438, 1.1756210327148438)
})
clickArea8.addComponentOrReplace(transform121)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(96.80152130126953, 1.612135887145996, 76.37388610839844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9981725215911865, 1.9260542392730713, 1.6982139348983765)
})
clickArea.addComponentOrReplace(transform156)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(108.80152130126953, 1.5634675025939941, 103.6623764038086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6727080345153809, 11.992072105407715, 1.6727080345153809)
})
clickArea2.addComponentOrReplace(transform157)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(84.116943359375, 1.1296277046203613, 59.20854568481445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8392897844314575, 2.648536443710327, 0.7132985591888428)
})
clickArea3.addComponentOrReplace(transform170)

const clickArea4 = new Entity('clickArea4')
engine.addEntity(clickArea4)
clickArea4.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(64.00989532470703, 1.1296277046203613, 53.288665771484375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8392897844314575, 2.648536443710327, 0.7132985591888428)
})
clickArea4.addComponentOrReplace(transform171)

const clickArea9 = new Entity('clickArea9')
engine.addEntity(clickArea9)
clickArea9.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(60.97980499267578, 1.1296277046203613, 52.8796272277832),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8392897844314575, 2.648536443710327, 0.7132985591888428)
})
clickArea9.addComponentOrReplace(transform172)

const clickArea10 = new Entity('clickArea10')
engine.addEntity(clickArea10)
clickArea10.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(61.10545349121094, 1.5335206985473633, 60.11491394042969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0756871700286865, 3.9598886966705322, 0.9803192019462585)
})
clickArea10.addComponentOrReplace(transform174)

const clickArea11 = new Entity('clickArea11')
engine.addEntity(clickArea11)
clickArea11.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(37.20643997192383, 1.8493232727050781, 48.004669189453125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3508061170578003, 3.9598886966705322, 1.2540194988250732)
})
clickArea11.addComponentOrReplace(transform175)

const clickArea12 = new Entity('clickArea12')
engine.addEntity(clickArea12)
clickArea12.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(43.36765670776367, 0.44776439666748047, 38.78425598144531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8392897844314575, 3.9598886966705322, 0.9803192019462585)
})
clickArea12.addComponentOrReplace(transform176)

const clickArea13 = new Entity('clickArea13')
engine.addEntity(clickArea13)
clickArea13.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(66.98380279541016, 1.5335206985473633, 56.258140563964844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0756871700286865, 3.9598886966705322, 0.9803192019462585)
})
clickArea13.addComponentOrReplace(transform177)

////////////////////////////////////////////////////////////////////////////
// Scrolls (additional info about island features)
////////////////////////////////////////////////////////////////////////////

const scroll = new Entity('scroll')
engine.addEntity(scroll)
scroll.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(76.67057037353516, 13.895052909851074, 82.93121337890625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scroll.addComponentOrReplace(transform120)

const scroll2 = new Entity('scroll2')
engine.addEntity(scroll2)
scroll2.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(110.5, 1.3708429336547852, 103.93609619140625),
  rotation: new Quaternion(8.878396065212235e-16, 0.2790408432483673, -3.3264246468434067e-8, 0.9602792859077454),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
scroll2.addComponentOrReplace(transform158)

const scroll3 = new Entity('scroll3')
engine.addEntity(scroll3)
scroll3.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(62.5, 1.8446216583251953, 53.7574348449707),
  rotation: new Quaternion(-1.3392636981780347e-15, 0.4943492114543915, -5.8931004076612226e-8, -0.8692634105682373),
  scale: new Vector3(1, 1, 1)
})
scroll3.addComponentOrReplace(transform173)




// PIXEL ART CENTRES


import {PixelInstance} from './pixelinstance'
const station1 = new PixelInstance(new Vector3(81.50196838378906, 3.2319021224975586, 72.0679702758789),new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752))
const station2 = new PixelInstance(new Vector3(33.67498016357422, 3.8667573928833008, 44.63134765625),new Quaternion(4.1924393356208107e-16, -0.28275349736213684, 3.370685419668007e-8, 0.95919269323349))
const station3 = new PixelInstance(new Vector3(107.12619018554688, 4.097695350646973, 114.86958312988281),new Quaternion(4.1924393356208107e-16, -0.28275349736213684, 3.370685419668007e-8, 0.95919269323349))







// Raft and Lever system 

const raft = new Entity('raft')
engine.addEntity(raft)
raft.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(122.41545867919922, 0.7004775404930115, 66.1849365234375),
  rotation: new Quaternion(2.665158198893522e-16, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1.0000091791152954, 1, 1.0000091791152954)
})
raft.addComponentOrReplace(transform136)

const pirateLever = new Entity('pirateLever')
engine.addEntity(pirateLever)
pirateLever.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(124.33375549316406, 1.1931605339050293, 64.81904602050781),
  rotation: new Quaternion(2.281589916641253e-16, -0.8314695954322815, 9.911888554370307e-8, 0.5555702447891235),
  scale: new Vector3(1.0000087022781372, 1, 1.0000087022781372)
})
pirateLever.addComponentOrReplace(transform137)

const pirateLever2 = new Entity('pirateLever2')
engine.addEntity(pirateLever2)
pirateLever2.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(85.5, 1.2747583389282227, 49.5),
  rotation: new Quaternion(-4.1247484858827465e-15, 0.6343933343887329, -7.562555737194998e-8, 0.7730104327201843),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
pirateLever2.addComponentOrReplace(transform138)

const raft2 = new Entity('raft2')
engine.addEntity(raft2)
raft2.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(52.60785675048828, 0.7004776000976562, 7.976568222045898),
  rotation: new Quaternion(-5.240116388629526e-16, 0.9569403529167175, -1.1407617250824842e-7, 0.2902847230434418),
  scale: new Vector3(1.00001859664917, 1, 1.00001859664917)
})
raft2.addComponentOrReplace(transform139)

const pirateLever3 = new Entity('pirateLever3')
engine.addEntity(pirateLever3)
pirateLever3.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(51.812713623046875, 1.3480839729309082, 5.535457611083984),
  rotation: new Quaternion(-4.4051384142805485e-15, -0.281709760427475, 3.3582409741939045e-8, 0.959499716758728),
  scale: new Vector3(1.0000089406967163, 1, 1.0000089406967163)
})
pirateLever3.addComponentOrReplace(transform140)

const pirateLever4 = new Entity('pirateLever4')
engine.addEntity(pirateLever4)
pirateLever4.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(32.27556610107422, 0.6093838214874268, 34.80943298339844),
  rotation: new Quaternion(-4.4051384142805485e-15, -0.281709760427475, 3.3582409741939045e-8, 0.959499716758728),
  scale: new Vector3(1.0000089406967163, 1, 1.0000089406967163)
})
pirateLever4.addComponentOrReplace(transform141)

const raft3 = new Entity('raft3')
engine.addEntity(raft3)
raft3.setParent(_scene)
const transform142 = new Transform({
  position: new Vector3(5.935935020446777, 0.700480580329895, 86.98414611816406),
  rotation: new Quaternion(7.407004121108476e-15, -0.2659861445426941, 3.170803353214069e-8, 0.9639768600463867),
  scale: new Vector3(1.0000195503234863, 1, 1.0000195503234863)
})
raft3.addComponentOrReplace(transform142)

const pirateLever5 = new Entity('pirateLever5')
engine.addEntity(pirateLever5)
pirateLever5.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(6.853513717651367, 0.916095495223999, 89.38191986083984),
  rotation: new Quaternion(2.054099451024704e-14, -0.9663184881210327, 1.1519412623783865e-7, -0.25734928250312805),
  scale: new Vector3(1.0000131130218506, 1, 1.0000131130218506)
})
pirateLever5.addComponentOrReplace(transform143)

const pirateLever6 = new Entity('pirateLever6')
engine.addEntity(pirateLever6)
pirateLever6.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(63.671775817871094, 1.3847160339355469, 93.54139709472656),
  rotation: new Quaternion(2.0937473692197832e-14, -0.9868900775909424, 1.1764644369804955e-7, -0.16139429807662964),
  scale: new Vector3(1.000074863433838, 1, 1.000074863433838)
})
pirateLever6.addComponentOrReplace(transform144)

const raft4 = new Entity('raft4')
engine.addEntity(raft4)
raft4.setParent(_scene)
const transform145 = new Transform({
  position: new Vector3(51.6186408996582, 0.7004809379577637, 122.06735229492188),
  rotation: new Quaternion(8.933437113157767e-15, -0.17021909356117249, 2.029171497497373e-8, 0.9854062795639038),
  scale: new Vector3(1.0000197887420654, 1, 1.0000197887420654)
})
raft4.addComponentOrReplace(transform145)

// Signposts to direct players


const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(28.11046028137207, 2.4069604873657227, 40.67506408691406),
  rotation: new Quaternion(-4.048538390519435e-15, -0.8018551468849182, 9.558856106650637e-8, 0.5975185632705688),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
signpostDirections.addComponentOrReplace(transform146)

const signpostDirections2 = new Entity('signpostDirections2')
engine.addEntity(signpostDirections2)
signpostDirections2.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(26.5, 1.6350431442260742, 56.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostDirections2.addComponentOrReplace(transform147)

const signpostWood = new Entity('signpostWood')
engine.addEntity(signpostWood)
signpostWood.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(70.9338607788086, 8.030192375183105, 38.44879913330078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.283787727355957, 1)
})
signpostWood.addComponentOrReplace(transform149)

const signpostWood2 = new Entity('signpostWood2')
engine.addEntity(signpostWood2)
signpostWood2.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(19.86773681640625, 28.568405151367188, 34.65153503417969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.35483980178833, 1)
})
signpostWood2.addComponentOrReplace(transform150)

const signpostDirections3 = new Entity('signpostDirections3')
engine.addEntity(signpostDirections3)
signpostDirections3.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(72.62785339355469, 6.422858238220215, 84.7481460571289),
  rotation: new Quaternion(-2.860443815404928e-14, 0.8290361166000366, -9.882876383926487e-8, -0.5591951608657837),
  scale: new Vector3(1.0000096559524536, 1, 1.0000096559524536)
})
signpostDirections3.addComponentOrReplace(transform151)

const signpostWood3 = new Entity('signpostWood3')
engine.addEntity(signpostWood3)
signpostWood3.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(86.00428009033203, 21.659284591674805, 101.837158203125),
  rotation: new Quaternion(-8.161059955808566e-15, 0.9569404125213623, -1.1407617250824842e-7, -0.2902846932411194),
  scale: new Vector3(1.0000087022781372, 1.2349894046783447, 1.0000087022781372)
})
signpostWood3.addComponentOrReplace(transform152)

const signpostDirections4 = new Entity('signpostDirections4')
engine.addEntity(signpostDirections4)
signpostDirections4.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(63.549713134765625, 13.784712791442871, 74.49870300292969),
  rotation: new Quaternion(-1.0407992612822958e-17, 0.06826610863208771, -8.137953422249211e-9, 0.9976671934127808),
  scale: new Vector3(1, 1, 1)
})
signpostDirections4.addComponentOrReplace(transform153)

const signpostDirections5 = new Entity('signpostDirections5')
engine.addEntity(signpostDirections5)
signpostDirections5.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(75.62995910644531, 12.554182052612305, 84.7481460571289),
  rotation: new Quaternion(9.54183038598443e-16, -0.2922622859477997, 3.4840333285046654e-8, 0.9563382863998413),
  scale: new Vector3(1.0000085830688477, 1, 1.0000085830688477)
})
signpostDirections5.addComponentOrReplace(transform154)

const signpostTree14 = new Entity('signpostTree14')
engine.addEntity(signpostTree14)
signpostTree14.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(28.65461540222168, 14.406557083129883, 101.06510925292969),
  rotation: new Quaternion(-5.716766180246754e-16, -0.49563050270080566, 5.9083749448518574e-8, 0.8685334920883179),
  scale: new Vector3(5.744015693664551, 5.743989944458008, 5.744015693664551)
})
signpostTree14.addComponentOrReplace(transform159)

const signpostDirections6 = new Entity('signpostDirections6')
engine.addEntity(signpostDirections6)
signpostDirections6.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(46.5, 0.8295073509216309, 5),
  rotation: new Quaternion(6.366160003475922e-17, 0.2684289216995239, -3.199921749796886e-8, 0.9632995128631592),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
signpostDirections6.addComponentOrReplace(transform161)

const signpostDirections7 = new Entity('signpostDirections7')
engine.addEntity(signpostDirections7)
signpostDirections7.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(124, 0.8295073509216309, 58.72583770751953),
  rotation: new Quaternion(1.5281369047018115e-16, 0.5546646118164062, -6.612117431359366e-8, 0.8320740461349487),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
signpostDirections7.addComponentOrReplace(transform162)

const signpostDirections8 = new Entity('signpostDirections8')
engine.addEntity(signpostDirections8)
signpostDirections8.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(40.14068603515625, 0.8295073509216309, 124.38855743408203),
  rotation: new Quaternion(1.8605101979846756e-15, 0.25813278555870056, -3.077182952893054e-8, 0.9661095142364502),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
signpostDirections8.addComponentOrReplace(transform163)

const signpostDirections9 = new Entity('signpostDirections9')
engine.addEntity(signpostDirections9)
signpostDirections9.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(1.8476853370666504, 0.8295073509216309, 107.59967803955078),
  rotation: new Quaternion(-9.807260865500773e-16, 0.5641268491744995, -6.724915380118546e-8, 0.8256881833076477),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
signpostDirections9.addComponentOrReplace(transform164)

const signpostTree16 = new Entity('signpostTree16')
engine.addEntity(signpostTree16)
signpostTree16.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(104.12223815917969, 10.592517852783203, 117.10896301269531),
  rotation: new Quaternion(1.030135424187552e-15, 0.9195510745048523, -1.0961900187567153e-7, 0.39297065138816833),
  scale: new Vector3(2.9041450023651123, 2.9041173458099365, 2.9041450023651123)
})
signpostTree16.addComponentOrReplace(transform168)

const signpostTree17 = new Entity('signpostTree17')
engine.addEntity(signpostTree17)
signpostTree17.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(32.277130126953125, 9.394230842590332, 46.42300796508789),
  rotation: new Quaternion(1.2434065888998654e-14, 0.9616444706916809, -1.14636947046165e-7, 0.27429911494255066),
  scale: new Vector3(2.9041483402252197, 2.9041173458099365, 2.9041483402252197)
})
signpostTree17.addComponentOrReplace(transform169)

// TOOLS

const tools = new Entity('tools')
engine.addEntity(tools)
tools.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(90.5, 0, 83),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tools.addComponentOrReplace(transform155)




//SCROLL



//CLICK AREA



//SCROLL

const scroll4 = new Entity('scroll4')
engine.addEntity(scroll4)
scroll4.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(62.48051452636719, 2.288715362548828, 60.794979095458984),
  rotation: new Quaternion(1.008587938330807e-17, 0.7825468182563782, -9.328683603371246e-8, 0.6225917339324951),
  scale: new Vector3(1, 1, 1)
})
scroll4.addComponentOrReplace(transform178)

//CLICK AREA

const clickArea14 = new Entity('clickArea14')
engine.addEntity(clickArea14)
clickArea14.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(27.136995315551758, 1.8493232727050781, 55.14826583862305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7440940141677856, 2.181311845779419, 0.690778911113739)
})
clickArea14.addComponentOrReplace(transform179)

const clickArea15 = new Entity('clickArea15')
engine.addEntity(clickArea15)
clickArea15.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(28.698625564575195, 0.7750434875488281, 62.52126693725586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7440940141677856, 2.181311845779419, 0.690778911113739)
})
clickArea15.addComponentOrReplace(transform180)

const clickArea16 = new Entity('clickArea16')
engine.addEntity(clickArea16)
clickArea16.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(23.917530059814453, 1.3780555725097656, 25.97627830505371),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7440940141677856, 2.181311845779419, 0.690778911113739)
})
clickArea16.addComponentOrReplace(transform181)

const clickArea17 = new Entity('clickArea17')
engine.addEntity(clickArea17)
clickArea17.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(81.91574096679688, 1.2284140586853027, 47.26811218261719),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1824142932891846, 4.098349094390869, 2.0653603076934814)
})
clickArea17.addComponentOrReplace(transform182)

const clickArea18 = new Entity('clickArea18')
engine.addEntity(clickArea18)
clickArea18.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(78.72113800048828, 2.279573440551758, 58.7366943359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3715014457702637, 4.475882530212402, 2.5988876819610596)
})
clickArea18.addComponentOrReplace(transform183)

const clickArea19 = new Entity('clickArea19')
engine.addEntity(clickArea19)
clickArea19.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(73.69532775878906, 2.279573440551758, 56.447940826416016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.436795234680176, 4.087277889251709, 2.0709922313690186)
})
clickArea19.addComponentOrReplace(transform184)

const clickArea20 = new Entity('clickArea20')
engine.addEntity(clickArea20)
clickArea20.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(62.33978271484375, 2.279573440551758, 39.45032501220703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5975886583328247, 4.8927717208862305, 1.512100338935852)
})
clickArea20.addComponentOrReplace(transform185)

const clickArea21 = new Entity('clickArea21')
engine.addEntity(clickArea21)
clickArea21.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(114.39663696289062, 1.612135887145996, 105.67757415771484),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5895986557006836, 5.633500099182129, 2.155517816543579)
})
clickArea21.addComponentOrReplace(transform186)

const clickArea22 = new Entity('clickArea22')
engine.addEntity(clickArea22)
clickArea22.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(88.43217468261719, 1.0682926177978516, 114.50959014892578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5022387504577637, 2.4119277000427246, 2.1266114711761475)
})
clickArea22.addComponentOrReplace(transform187)

const clickArea23 = new Entity('clickArea23')
engine.addEntity(clickArea23)
clickArea23.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(113.83255004882812, 1.0682921409606934, 111.06573486328125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7085509300231934, 1.6468857526779175, 1.4520692825317383)
})
clickArea23.addComponentOrReplace(transform188)

const clickArea24 = new Entity('clickArea24')
engine.addEntity(clickArea24)
clickArea24.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(84.41566467285156, 1.4012651443481445, 109.6087417602539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5022387504577637, 2.4119277000427246, 2.1266114711761475)
})
clickArea24.addComponentOrReplace(transform189)

const clickArea25 = new Entity('clickArea25')
engine.addEntity(clickArea25)
clickArea25.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(58.18050765991211, 1.4012651443481445, 88.13768005371094),
  rotation: new Quaternion(-6.942439795582672e-16, 0.34288033843040466, -4.087452154521998e-8, 0.9393791556358337),
  scale: new Vector3(3.343960762023926, 3.2232704162597656, 2.841977596282959)
})
clickArea25.addComponentOrReplace(transform190)

// MESSAGES

const messageBubble21 = new Entity('messageBubble21')
engine.addEntity(messageBubble21)
messageBubble21.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(17.964340209960938, 30.312908172607422, 36.3533935546875),
  rotation: new Quaternion(-1.996950476886635e-15, -0.990601658821106, 1.1808890576503472e-7, 0.13677895069122314),
  scale: new Vector3(1.000006079673767, 1, 1.000006079673767)
})
messageBubble21.addComponentOrReplace(transform191)

const messageBubble22 = new Entity('messageBubble22')
engine.addEntity(messageBubble22)
messageBubble22.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(91.02957916259766, 11.273740768432617, 104.90447998046875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble22.addComponentOrReplace(transform192)

//SIGNPOSTS

const signpostDirections10 = new Entity('signpostDirections10')
engine.addEntity(signpostDirections10)
signpostDirections10.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(78, 2.435295581817627, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
signpostDirections10.addComponentOrReplace(transform193)

//MESSAGES

const messageBubble23 = new Entity('messageBubble23')
engine.addEntity(messageBubble23)
messageBubble23.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(9.994267463684082, 9.518688201904297, 120.32292175292969),
  rotation: new Quaternion(-4.9122998149655345e-15, -0.8090869784355164, 9.645067677865882e-8, -0.5876889824867249),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
messageBubble23.addComponentOrReplace(transform194)

//SCROLL

const scroll5 = new Entity('scroll5')
engine.addEntity(scroll5)
scroll5.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(6.02186918258667, 9.687264442443848, 117.65447998046875),
  rotation: new Quaternion(4.706191817305738e-16, -0.5277770757675171, 6.29159231380072e-8, -0.8493829369544983),
  scale: new Vector3(1, 1, 1)
})
scroll5.addComponentOrReplace(transform195)

//MESSAGES

const messageBubble24 = new Entity('messageBubble24')
engine.addEntity(messageBubble24)
messageBubble24.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(118.52906799316406, 3.299624443054199, 102.07797241210938),
  rotation: new Quaternion(-2.4469222776158197e-16, -0.3478281497955322, 4.1464346622888115e-8, 0.9375582933425903),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
messageBubble24.addComponentOrReplace(transform196)

//SIGNPOST

const signpostTree15 = new Entity('signpostTree15')
engine.addEntity(signpostTree15)
signpostTree15.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(109.9781723022461, 6.757927894592285, 115.23333740234375),
  rotation: new Quaternion(0, 0, 0.6768043637275696, 0.7361630201339722),
  scale: new Vector3(0.6923137903213501, 0.6923137903213501, 0.6922988891601562)
})
signpostTree15.addComponentOrReplace(transform197)

const signpostTree18 = new Entity('signpostTree18')
engine.addEntity(signpostTree18)
signpostTree18.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(0.4717314541339874, 4.14500617980957, 67.78655242919922),
  rotation: new Quaternion(1.2946086294185564e-14, 0.6997897624969482, -8.342142621131643e-8, 0.7143489718437195),
  scale: new Vector3(5.744039058685303, 5.743989944458008, 5.744039058685303)
})
signpostTree18.addComponentOrReplace(transform198)

const signpostTree19 = new Entity('signpostTree19')
engine.addEntity(signpostTree19)
signpostTree19.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(74.6032485961914, 4.14500617980957, 127.6078109741211),
  rotation: new Quaternion(1.732681279540977e-14, 0.9999150037765503, -1.1919915721136931e-7, 0.013043850660324097),
  scale: new Vector3(5.744049072265625, 5.743989944458008, 5.744049072265625)
})
signpostTree19.addComponentOrReplace(transform199)

const signpostTree20 = new Entity('signpostTree20')
engine.addEntity(signpostTree20)
signpostTree20.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(127.2103500366211, 4.14500617980957, 88.46908569335938),
  rotation: new Quaternion(4.937842093489988e-15, 0.7048599720001221, -8.402587070577283e-8, -0.7093465924263),
  scale: new Vector3(5.744062900543213, 5.743989944458008, 5.744062900543213)
})
signpostTree20.addComponentOrReplace(transform200)

const signpostTree21 = new Entity('signpostTree21')
engine.addEntity(signpostTree21)
signpostTree21.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(78.06321716308594, 4.14500617980957, 0.731208860874176),
  rotation: new Quaternion(-1.0404259004088024e-14, -0.003172516357153654, 3.781717994311151e-10, -0.9999949932098389),
  scale: new Vector3(5.744065284729004, 5.743989944458008, 5.744065284729004)
})
signpostTree21.addComponentOrReplace(transform201)

//RAFTS AND LEVERS

const pirateLever7 = new Entity('pirateLever7')
engine.addEntity(pirateLever7)
pirateLever7.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(24.735944747924805, 1.2246735095977783, 59.24617385864258),
  rotation: new Quaternion(7.178732976988178e-15, -0.9705947041511536, 1.1570389801818237e-7, -0.24071967601776123),
  scale: new Vector3(1.0000230073928833, 1, 1.0000230073928833)
})
pirateLever7.addComponentOrReplace(transform220)

const pirateLever8 = new Entity('pirateLever8')
engine.addEntity(pirateLever8)
pirateLever8.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(53.004329681396484, 0.9640202522277832, 123.78591918945312),
  rotation: new Quaternion(5.521145826902505e-15, 0.9878106713294983, -1.1775620123444241e-7, 0.15566009283065796),
  scale: new Vector3(0.9999994039535522, 1, 0.9999994039535522)
})
pirateLever8.addComponentOrReplace(transform221)

//VERTICAL PLATFORMS

const verticalMagicRock = new Entity('verticalMagicRock')
engine.addEntity(verticalMagicRock)
verticalMagicRock.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(0.876129150390625, 7.558412551879883, 121.78218078613281),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9962183237075806, 0.8932743072509766, 1.4541462659835815)
})
verticalMagicRock.addComponentOrReplace(transform222)

const verticalMagicRock2 = new Entity('verticalMagicRock2')
engine.addEntity(verticalMagicRock2)
verticalMagicRock2.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(84.21255493164062, 20.569637298583984, 102.0605239868164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2689437866210938, 1.2689437866210938, 1.2689437866210938)
})
verticalMagicRock2.addComponentOrReplace(transform223)


// Add owl flight

const buhoxxxx = new Entity('buhoxxxx')
engine.addEntity(buhoxxxx)
buhoxxxx.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(10.373998641967773, 7.751908302307129, 121.17613983154297),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
buhoxxxx.addComponentOrReplace(transform205)
const gltfShape25 = new GLTFShape("models/BUHOXXXX.glb")
gltfShape25.withCollisions = true
gltfShape25.visible = true
buhoxxxx.addComponentOrReplace(gltfShape25)

const buhocollider = new Entity('buhocollider')
engine.addEntity(buhocollider)
buhocollider.setParent(_scene)
const transform206 = new Transform({
  position: new Vector3(10.373998641967773, 7.751908302307129, 121.17613983154297),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
buhocollider.addComponentOrReplace(transform206)
const gltfShape26 = new GLTFShape("models/BUHOCOLLIDER.glb")
gltfShape26.withCollisions = true
gltfShape26.visible = false
buhocollider.addComponentOrReplace(gltfShape26)

// SCRIPTS

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script1.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script2.spawn(messageBubble, {"text":"Hi, I'm an eastern \nwoolly lemur! \nI live in trees but \nthere aren't so many\non my island anymore. ","fontSize":12}, createChannel(channelId, messageBubble, channelBus))
script2.spawn(messageBubble2, {"text":"Hello and welcome\nto Pic Boby, I'm a \ngrey mouse lemur!","fontSize":12}, createChannel(channelId, messageBubble2, channelBus))
script2.spawn(messageBubble3, {"text":"Hello! I'm a painted\nmantella frog. I'm \nbeautiful but toxic, \nbe careful with me.","fontSize":12}, createChannel(channelId, messageBubble3, channelBus))
script2.spawn(messageBubble4, {"text":"Hi! They call me\nTomato Frog \nbecause I inflate\nto defend myself.","fontSize":12}, createChannel(channelId, messageBubble4, channelBus))
script2.spawn(messageBubble5, {"text":"Hey! I'm a \nMadagascar\nFire Millipede. \nLemurs have a \nstrange use for\nme...","fontSize":12}, createChannel(channelId, messageBubble5, channelBus))
script2.spawn(messageBubble6, {"text":"Watch out!\nI'm a fossa and I \neat lemurs! There\nisn't much food \nanymore so I might\neat you!","fontSize":12}, createChannel(channelId, messageBubble6, channelBus))
script2.spawn(messageBubble7, {"text":"Hi! I'm an aye aye\nand my species is\nendangered so I'm \nlooking for bugs to eat! \n","fontSize":12}, createChannel(channelId, messageBubble7, channelBus))
script2.spawn(messageBubble8, {"text":"Heeeeeeeeeeeey!\nI'm a silky sifaka Lemur\nand I've got the moves\nlike Jackson!","fontSize":12}, createChannel(channelId, messageBubble8, channelBus))
script2.spawn(messageBubble9, {"text":"Hello\nThey call me the\nSatanic Leaf Tailed\nGecko - but I never\ndid anything wrong. ","fontSize":12}, createChannel(channelId, messageBubble9, channelBus))
script2.spawn(messageBubble10, {"text":"Hi there!\nI'm a black,\nblue-eyed Lemuridae\nbut only the boys are \nactually black! ","fontSize":12}, createChannel(channelId, messageBubble10, channelBus))
script2.spawn(messageBubble11, {"text":"I'm a Panther\nChameleon, \nwe're one of \nthe most colourful\nspecies of chameleon. ","fontSize":12}, createChannel(channelId, messageBubble11, channelBus))
script2.spawn(messageBubble12, {"text":"I'm a Lowland\nStreaked Tenrec. \nI'm more closely\nrelated to elephants\nthan to hedgehogs. \nBugs are my favourite\nfood! ","fontSize":12}, createChannel(channelId, messageBubble12, channelBus))
script3.spawn(signpostTree, {"text":" PIXELS   FOR   MADAGASCAR\n\nin collaboration with Eden Projects","fontSize":20}, createChannel(channelId, signpostTree, channelBus))
script3.spawn(signpostTree2, {"text":"Lemursiv has been designed so that\nall pixel art created on the island is\nconverted into donations which go \ndirectly to Eden Projects. All visitors \ncan help save Madagascar from\ndeforestation by creating pixel art. ","fontSize":15}, createChannel(channelId, signpostTree2, channelBus))
script3.spawn(signpostTree3, {"text":" /////","fontSize":15}, createChannel(channelId, signpostTree3, channelBus))
script3.spawn(signpostTree4, {"text":"For next challenge\n\n\"/goto next\"\n\nin chat window","fontSize":20}, createChannel(channelId, signpostTree4, channelBus))
script3.spawn(signpostTree5, {"text":"Madagascar used to be part of a \nsupercontinent between Africa and India. \nThen, 88 million years ago, it separated \nbecoming an island and developing an \nextraordinary ecosystem. Some of the many\nendemic plants and animals can be seen on \nthe island here. \n","fontSize":15}, createChannel(channelId, signpostTree5, channelBus))
script3.spawn(signpostTree6, {"text":"     CREATE   ART   PLANT   TREES\n      PLANT   TREES   SAVE   LIVES\n\n   bringing creativity and charity together\n      in collaboration with Eden Projects","fontSize":20}, createChannel(channelId, signpostTree6, channelBus))
script3.spawn(signpostTree7, {"text":" PIXELS   FOR   MADAGASCAR\n\nin collaboration with Eden Projects","fontSize":20}, createChannel(channelId, signpostTree7, channelBus))
script3.spawn(signpostTree8, {"text":"These are the main areas of focus for the \nreforestation of Madagascar lead by Eden\nProjects and supported by Lemursiv. ","fontSize":15}, createChannel(channelId, signpostTree8, channelBus))
script3.spawn(signpostTree9, {"text":"////","fontSize":30}, createChannel(channelId, signpostTree9, channelBus))
script3.spawn(signpostTree10, {"text":"////","fontSize":30}, createChannel(channelId, signpostTree10, channelBus))
script3.spawn(signpostTree11, {"text":"////","fontSize":30}, createChannel(channelId, signpostTree11, channelBus))
script3.spawn(signpostTree12, {"text":"////","fontSize":30}, createChannel(channelId, signpostTree12, channelBus))
script3.spawn(signpostTree13, {"text":"////","fontSize":30}, createChannel(channelId, signpostTree13, channelBus))
script4.spawn(clickArea5, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":5,"onTimeout":[]}}]}, createChannel(channelId, clickArea5, channelBus))
script4.spawn(clickArea6, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant ","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":5,"onTimeout":[]}}]}, createChannel(channelId, clickArea6, channelBus))
script4.spawn(clickArea7, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant ","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":5,"onTimeout":[]}}]}, createChannel(channelId, clickArea7, channelBus))
script5.spawn(scroll, {"text":"Darwin's Orchid\n\nEndemic to the island of\nMadagascar, this plant \ncaught the attention of \nCharles Darwin when he\nvisited. He predicted that \nthere must be a moth on \nthe island with a tongue at\nleast 20 cm long that could \nreach the nectar of the orchid's\nstem. The moth was eventually\ndiscovered and Darwin was proven\nright posthumously. ","fontSize":12}, createChannel(channelId, scroll, channelBus))
script4.spawn(clickArea8, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Southeastern Madagascar Pitcher Plant","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea8, channelBus))
script2.spawn(messageBubble13, {"text":"Hello there! Welcome to my home, will you help save me and my friends?","fontSize":12}, createChannel(channelId, messageBubble13, channelBus))
script2.spawn(messageBubble14, {"text":"My name is Liam, I'm trying to save my home Madagascar from deforestation. Will you help me by playing Lemursiv?","fontSize":12}, createChannel(channelId, messageBubble14, channelBus))
script2.spawn(messageBubble15, {"text":"I'm a ring tailed lemur\nand this is my home, \nMadagascar! You can \nmake art here and save \nme and my friends. : ) ","fontSize":20}, createChannel(channelId, messageBubble15, channelBus))
script6.spawn(raft, {"distance":35,"speed":1,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, raft, channelBus))
script7.spawn(pirateLever, {"onActivate":[{"entityName":"raft","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"raft","actionId":"goToStart","values":{}}]}, createChannel(channelId, pirateLever, channelBus))
script7.spawn(pirateLever2, {"onActivate":[{"entityName":"raft","actionId":"goToStart","values":{}}],"onDeactivate":[{"entityName":"raft","actionId":"goToEnd","values":{}}]}, createChannel(channelId, pirateLever2, channelBus))
script6.spawn(raft2, {"distance":35,"speed":2,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, raft2, channelBus))
script7.spawn(pirateLever3, {"onActivate":[{"entityName":"raft2","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"raft","actionId":"goToStart","values":{}}]}, createChannel(channelId, pirateLever3, channelBus))
script7.spawn(pirateLever4, {"onActivate":[{"entityName":"raft2","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"raft","actionId":"goToStart","values":{}}]}, createChannel(channelId, pirateLever4, channelBus))
script6.spawn(raft3, {"distance":32,"speed":2,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, raft3, channelBus))
script7.spawn(pirateLever5, {"onActivate":[{"entityName":"raft3","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"raft3","actionId":"goToStart","values":{}}]}, createChannel(channelId, pirateLever5, channelBus))
script7.spawn(pirateLever6, {"onActivate":[{"entityName":"raft4","actionId":"goToStart","values":{}}],"onDeactivate":[{"entityName":"raft","actionId":"goToEnd","values":{}}]}, createChannel(channelId, pirateLever6, channelBus))
script6.spawn(raft4, {"distance":32,"speed":2,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, raft4, channelBus))
script8.spawn(signpostDirections, {"textTop":"Pixel Art Centre","textMiddle":"Owl Tour","textLower":"Mt Maromokotro","fontSize":15}, createChannel(channelId, signpostDirections, channelBus))
script8.spawn(signpostDirections2, {"textTop":"Pixel Art Studio","textMiddle":"Tsingy","textLower":"Owl Tour","fontSize":15}, createChannel(channelId, signpostDirections2, channelBus))
script2.spawn(messageBubble16, {"text":"Hello, I'm a painted \nmantella frog, not many \npeople see me! \nMy habitat is in danger \nand my family \nis growing smaller.","fontSize":12}, createChannel(channelId, messageBubble16, channelBus))
script9.spawn(signpostWood, {"text":"Tsingy","fontSize":20}, createChannel(channelId, signpostWood, channelBus))
script9.spawn(signpostWood2, {"text":"Mt Maromokotro","fontSize":20}, createChannel(channelId, signpostWood2, channelBus))
script10.spawn(signpostDirections3, {"textTop":"Pixel Art Centre","textLower":"Lemursiv  ","fontSize":19}, createChannel(channelId, signpostDirections3, channelBus))
script9.spawn(signpostWood3, {"text":"Pic Boby","fontSize":20}, createChannel(channelId, signpostWood3, channelBus))
script10.spawn(signpostDirections4, {"textTop":"Pic Boby","textLower":"Pixel Art Centre ","fontSize":20}, createChannel(channelId, signpostDirections4, channelBus))
script10.spawn(signpostDirections5, {"textTop":"Pic Boby","textLower":"Mt Maromokotro ","fontSize":20}, createChannel(channelId, signpostDirections5, channelBus))
script11.spawn(tools, {}, createChannel(channelId, tools, channelBus))
script4.spawn(clickArea, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Fony Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea, channelBus))
script4.spawn(clickArea2, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Madagascar Palm Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea2, channelBus))
script5.spawn(scroll2, {"text":"Madagascar palm trees are actually\na type of succulent. **","fontSize":20}, createChannel(channelId, scroll2, channelBus))
script3.spawn(signpostTree14, {"text":"PIXEL   ART\nCENTRE","fontSize":30}, createChannel(channelId, signpostTree14, channelBus))
script2.spawn(messageBubble17, {"text":"Welcome!\nGet on a boat to\nvisit Madagascar\nor take the Owl \nTour for a higher\nview! ","fontSize":20}, createChannel(channelId, messageBubble17, channelBus))
script10.spawn(signpostDirections6, {"textTop":"Lemursiv","textLower":"Madagascar","fontSize":20}, createChannel(channelId, signpostDirections6, channelBus))
script10.spawn(signpostDirections7, {"textTop":"Lemursiv","textLower":"Madagascar","fontSize":20}, createChannel(channelId, signpostDirections7, channelBus))
script10.spawn(signpostDirections8, {"textTop":"Madagascar","textLower":"Owl Tour","fontSize":20}, createChannel(channelId, signpostDirections8, channelBus))
script10.spawn(signpostDirections9, {"textTop":"Madagascar","textLower":"Owl Tour","fontSize":20}, createChannel(channelId, signpostDirections9, channelBus))
script2.spawn(messageBubble18, {"text":"Am I a tomato?\nAm I a frog?\nNo! \nI'm an endangered\nTomato Frog. ","fontSize":20}, createChannel(channelId, messageBubble18, channelBus))
script2.spawn(messageBubble19, {"text":"Most of my natural\nhabitat has been  \ncleared for farm land. \nI'm one of only about \n1000 black blue eyed \nlemuridaes in the wild. ","fontSize":12}, createChannel(channelId, messageBubble19, channelBus))
script2.spawn(messageBubble20, {"text":"Leave me alone!\nI'm sleepy","fontSize":12}, createChannel(channelId, messageBubble20, channelBus))
script3.spawn(signpostTree16, {"text":"PIXEL   ART\nCENTRE","fontSize":30}, createChannel(channelId, signpostTree16, channelBus))
script3.spawn(signpostTree17, {"text":"PIXEL   ART\nCENTRE","fontSize":30}, createChannel(channelId, signpostTree17, channelBus))
script4.spawn(clickArea3, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Madagascar Banana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea3, channelBus))
script4.spawn(clickArea4, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Madagascar Banana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea4, channelBus))
script4.spawn(clickArea9, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Madagascar Banana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea9, channelBus))
script5.spawn(scroll3, {"text":"This species of banana tree\nis endemic to Madagascar \nbut critically endangered. It's \nproperties could be of great \nscientific use, allowing a disease\nresistent species of banana tree\nto be produced. Did you know \nbananas are in danger of \nextinction? Research the \nPanama disease to \nlearn more. ","fontSize":25}, createChannel(channelId, scroll3, channelBus))
script4.spawn(clickArea10, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea10, channelBus))
script4.spawn(clickArea11, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea11, channelBus))
script4.spawn(clickArea12, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea12, channelBus))
script4.spawn(clickArea13, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea13, channelBus))
script5.spawn(scroll4, {"text":"The Baobab, also known\nas the Monkey Bread Tree, \nis an emblematic feature in \nMadagascar. From nine \nspecies of baobabs found \nin the world, six of them \nonly grow on Madagascar. ","fontSize":26}, createChannel(channelId, scroll4, channelBus))
script4.spawn(clickArea14, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Royal Poinciana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea14, channelBus))
script4.spawn(clickArea15, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Royal Poinciana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea15, channelBus))
script4.spawn(clickArea16, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Royal Poinciana Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea16, channelBus))
script4.spawn(clickArea17, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Octopus Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea17, channelBus))
script4.spawn(clickArea18, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Octopus Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea18, channelBus))
script4.spawn(clickArea19, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Octopus Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea19, channelBus))
script4.spawn(clickArea20, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Octopus Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea20, channelBus))
script4.spawn(clickArea21, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Fony Baobab Tree","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea21, channelBus))
script4.spawn(clickArea22, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea22, channelBus))
script4.spawn(clickArea23, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Darwin's Orchid","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea23, channelBus))
script4.spawn(clickArea24, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea24, channelBus))
script4.spawn(clickArea25, {"enabled":true,"onClick":[{"entityName":"tools","actionId":"print","values":{"message":"Polka Dot Plant","duration":5,"multiplayer":false}},{"entityName":"tools","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}, createChannel(channelId, clickArea25, channelBus))
script2.spawn(messageBubble21, {"text":"Welcome to mount\nMaromokotro! People \nare cutting down trees\non my island and I don't\nlike it. Will you help me \nreplant trees here? ","fontSize":12}, createChannel(channelId, messageBubble21, channelBus))
script2.spawn(messageBubble22, {"text":"I may look scary \nbut I'm not very\nadventurous... in \nthe wild I only live\nin one 10km2\nforest. Please plant\ntrees there! ","fontSize":12}, createChannel(channelId, messageBubble22, channelBus))
script8.spawn(signpostDirections10, {"textTop":"Tsingy","textMiddle":"Lemursiv","textLower":"Baobab Avenue","fontSize":20}, createChannel(channelId, signpostDirections10, channelBus))
script2.spawn(messageBubble23, {"text":"Hello! I'm a Madagascar\nLong Eared Owl, would \nyou like to take a tour\nof the island on my back?","fontSize":15}, createChannel(channelId, messageBubble23, channelBus))
script5.spawn(scroll5, {"text":"A Madagascar Long\nEared Owl nests here. \nWait for him and he will \ngive you a tour of his \nisland. ","fontSize":36}, createChannel(channelId, scroll5, channelBus))
script2.spawn(messageBubble24, {"text":"You found me!\nI'm a Panther \nChameleon, \nslurp! ","fontSize":15}, createChannel(channelId, messageBubble24, channelBus))
script12.spawn(signpostTree15, {"text":"Some text","fontSize":20}, createChannel(channelId, signpostTree15, channelBus))
script3.spawn(signpostTree18, {"text":"TOP DONORS \n\n1.************************************************\n2. ************************************************\n3. ************************************************\n4. ************************************************\n5. ************************************************\n6. ************************************************\n7. ************************************************\n8. ************************************************\n","fontSize":12}, createChannel(channelId, signpostTree18, channelBus))
script3.spawn(signpostTree19, {"text":"TOP DONORS \n\n1.************************************************\n2. ************************************************\n3. ************************************************\n4. ************************************************\n5. ************************************************\n6. ************************************************\n7. ************************************************\n8. ************************************************\n","fontSize":12}, createChannel(channelId, signpostTree19, channelBus))
script3.spawn(signpostTree20, {"text":"TOP DONORS \n\n1.************************************************\n2. ************************************************\n3. ************************************************\n4. ************************************************\n5. ************************************************\n6. ************************************************\n7. ************************************************\n8. ************************************************\n","fontSize":12}, createChannel(channelId, signpostTree20, channelBus))
script3.spawn(signpostTree21, {"text":"TOP DONORS \n\n1.************************************************\n2. ************************************************\n3. ************************************************\n4. ************************************************\n5. ************************************************\n6. ************************************************\n7. ************************************************\n8. ************************************************\n","fontSize":12}, createChannel(channelId, signpostTree21, channelBus))
script7.spawn(pirateLever7, {"onActivate":[{"entityName":"raft3","actionId":"goToStart","values":{}}],"onDeactivate":[{"entityName":"raft3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, pirateLever7, channelBus))
script7.spawn(pirateLever8, {"onActivate":[{"entityName":"raft4","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"raft4","actionId":"goToStart","values":{}}]}, createChannel(channelId, pirateLever8, channelBus))
script13.spawn(verticalMagicRock, {"distance":60,"speed":1,"autoStart":true,"onReachEnd":[{"entityName":"verticalMagicRock","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalMagicRock","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalMagicRock, channelBus))
script13.spawn(verticalMagicRock2, {"distance":50,"speed":1,"autoStart":true,"onReachEnd":[{"entityName":"verticalMagicRock2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalMagicRock2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalMagicRock2, channelBus))

// Add pixel art centres 

