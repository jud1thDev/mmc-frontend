import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// 기본 오리캐릭터 불러오기
const DuckModel = () => {
  const gltf = useLoader(GLTFLoader, "/assets/characterPage/babyduck.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={2.0}
      position={[0, -2.2, 0]}
      rotation={[0.15, -0.2, 0]}
    />
  );
};

// 아이템 목록 불러오기
const HairBand = () => {
  const gltf = useLoader(GLTFLoader, "/assets/items/hairband.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={2.1}
      position={[-0.5, -0.6, 0.2]}
      rotation={[0.15, -0.2, 0]}
    />
  );
};

const UserDuck = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={3.0} color={"#ffe6a6"} />
        <directionalLight position={[0, 5, 5]} intensity={3.0} />
        <DuckModel />
        <HairBand />
        <OrbitControls
          enablePan={true}
          enableRotate={true}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};
export default UserDuck;
