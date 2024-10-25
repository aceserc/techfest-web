/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DeonAden (https://sketchfab.com/DeonAden)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vr-headcat-headset-c1c23ee5dac3478e9f289bf01a24f357
Title: VR "HeadCat" HeadSet
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'


const modelPath = "/assets/3d-models/vr-headset/scene.gltf"

export const VRHeadset = (props: GroupProps) => {
  const { nodes, materials } = useGLTF(modelPath)
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="69900c22e0d84f738e87ac5aa06710dafbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group name="VRHeadset_low">
                <mesh
                  name="VRHeadset_low_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.VRHeadset_low_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(modelPath)