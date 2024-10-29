"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery, } from 'react-responsive'
import CanvasLoader from "@/components/loaders/canvas-loader";
import { FlyingAirplane } from "@/components/3d-models/flying-airplane";
type ModelProperties = {
  flyingAirplane: {
    scale: number
  }
}

const Floating3DModels = () => {
  const isScreenLg = useMediaQuery({ query: '(min-width: 1024px)' })
  const isScreenSm = useMediaQuery({ query: '(min-width: 640px)' })


  const modelProperties = useMemo<ModelProperties>(() => {
    if (isScreenLg) {
      return {
        flyingAirplane: {
          scale: 0.1
        },
      }
    }

    return {
      flyingAirplane: {
        scale: 0.08
      },
    }
  }, [isScreenLg])

  return (
    <>
      <div className="size-[800px] absolute -right-32 lg:-right-60  2xl:-right-96 -bottom-[26rem] lg:-bottom-80 overflow-visible bg-transparent z-0 opacity-60">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader displayNone />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {isScreenSm && <OrbitControls enableZoom={false} target={[0, 0, 0]} />}
            <group>
              <FlyingAirplane
                position={[0, 0, 0]}
                rotation={[0.8, 5.2, 0]}
                scale={[modelProperties.flyingAirplane.scale, modelProperties.flyingAirplane.scale, modelProperties.flyingAirplane.scale]}
              />
            </group>

            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
export default Floating3DModels