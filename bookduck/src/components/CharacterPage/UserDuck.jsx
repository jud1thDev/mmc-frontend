import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// 기본 오리캐릭터 불러오기
const DuckModel = () => {
  const gltf = useLoader(GLTFLoader, "/assets/characterPage/duck.glb");
  return <primitive object={gltf.scene} scale={2.3} position={[0, -2.8, 0]} />;
};

// 아이템 목록 불러오기
const HairBand = () => {
  const gltf = useLoader(GLTFLoader, "/assets/items/hairband.glb");
  return (
    <primitive object={gltf.scene} scale={2.2} position={[-0.5, -0.5, 0.1]} />
  );
};

const UserDuck = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 5, 5]} />
        <DuckModel />
        {/* <HairBand /> */}
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
