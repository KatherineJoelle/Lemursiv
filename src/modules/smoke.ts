
// Custom component for smoke puffs
@Component('smokevelocity')
export class SmokeVelocity extends Vector3 {
  constructor(x: number, y: number, z: number) {
    super(x, y, z)
  }
}


// Component group listing all smoke puffs
export const smokePuffs = engine.getComponentGroup(SmokeVelocity)

// System to update the position of all smoke puffs based on their velocity
export class SmokeSystem implements ISystem {
  update(dt: number) {

    for (let entity of smokePuffs.entities) {
      const transform = entity.getComponent(Transform)
      const velocity = entity.getComponent(SmokeVelocity)
      const x = 0.75
      const y = 0.5
      const z = 0.5

      transform.position.x += velocity.x / dt 
      transform.position.y += velocity.y * dt * 0.6
      transform.position.z += velocity.z / dt 

      

      velocity.x *= 0.001
      velocity.z *= 0.001

      if (isOutOfBounds(transform)) {
        engine.removeEntity(entity)
      }
    }
  }
}

// Function to check if smoke is too far from source
function isOutOfBounds(transform: Transform) {
  if (
    transform.position.y > 3 ||
    transform.position.x > 2 ||
    transform.position.z > 2 ||
    transform.position.x < -2 ||
    transform.position.z < -2
  ) {
    return true
  }
  return false
}