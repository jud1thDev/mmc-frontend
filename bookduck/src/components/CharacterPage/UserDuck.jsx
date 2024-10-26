import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DuckModel = () => {
  const gltf = useLoader(GLTFLoader, "/src/assets/CharacterPage/duck.glb");

  return <primitive object={gltf.scene} scale={2.3} position={[0, -2.8, 0]} />;
};

const UserDuck = () => {
  return (
    <div className="w-full">
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 5, 5]} />
        <DuckModel />
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      </Canvas>
    </div>
  );
};
export default UserDuck;
