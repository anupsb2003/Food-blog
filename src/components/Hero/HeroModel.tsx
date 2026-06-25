// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import burgerModel from "../../../public/models/burger.glb";

// function Burger() {
//   const ref = useRef<any>(null);

//   const { scene } = useGLTF(burgerModel);

//   useFrame((state) => {
//     if (!ref.current) return;

//     ref.current.rotation.y += 0.005;

//     ref.current.position.y =
//       Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
//   });

//   return (
//     <primitive
//       ref={ref}
//       object={scene}
//       scale={8}
//       position={[0, -1, 0]}
//     />
//   );
// }

// export default function HeroModel() {
//   return (
//     <Canvas
//       camera={{
//         position: [0, 0, 6],
//         fov: 45,
//       }}
//     >
//       <ambientLight intensity={2} />

//       <directionalLight
//         position={[5, 5, 5]}
//         intensity={4}
//       />

//       <directionalLight
//         position={[-5, 5, -5]}
//         intensity={2}
//       />

//       <Burger />

//       <Environment preset="city" />

//       <OrbitControls
//         autoRotate
//         autoRotateSpeed={2}
//         enableZoom={false}
//       />
//     </Canvas>
//   );
// }

import { Canvas } from "@react-three/fiber";

export default function HeroModel() {
  return (
    <Canvas>
      <ambientLight />

      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}