import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Box, Environment } from '@react-three/drei';
import { Mesh } from 'three';

interface NFT3DModelProps {
  imageUrl: string;
}

const NFT3DModel = ({ imageUrl }: NFT3DModelProps) => {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(imageUrl);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group>
      {/* Main NFT plane with texture */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>

      {/* Decorative cubes around the NFT */}
      <Box args={[0.2, 0.2, 0.2]} position={[-1.5, 1.5, -0.5]}>
        <meshStandardMaterial color="#a855f7" metalness={0.8} roughness={0.2} />
      </Box>
      
      <Box args={[0.15, 0.15, 0.15]} position={[1.5, -1.5, -0.5]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </Box>
      
      <Box args={[0.18, 0.18, 0.18]} position={[1.5, 1.3, -0.5]}>
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  );
};

const LoadingFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial color="#a855f7" wireframe />
    </mesh>
  );
};

interface NFTViewer3DProps {
  imageUrl: string;
}

export const NFTViewer3D = ({ imageUrl }: NFTViewer3DProps) => {
  return (
    <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden card-glass border border-border/30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
        
        <Suspense fallback={<LoadingFallback />}>
          <NFT3DModel imageUrl={imageUrl} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};
