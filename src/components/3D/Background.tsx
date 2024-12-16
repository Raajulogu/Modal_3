import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 1]} intensity={1.5} />
        <Sphere args={[1, 100, 200]} scale={2.8}>
          <MeshDistortMaterial
            color="#4f46e5"
            attach="material"
            distort={0.5}
            speed={2}
            opacity={0.15}
            transparent
          />
        </Sphere>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
};