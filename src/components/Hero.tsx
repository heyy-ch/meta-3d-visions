import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Wallet, Eye } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Hero = () => {
  const { account, connectWallet } = useWallet();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (account) {
      navigate('/gallery');
    } else {
      connectWallet();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass border border-primary/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Next-Gen NFT Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            View Your NFTs in
            <span className="block gradient-text text-glow mt-2">3D Reality</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Connect your wallet and experience your NFT collection like never before. 
            Immersive 3D visualization powered by cutting-edge Web3 technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleGetStarted}
              className="min-w-[200px]"
            >
              <Wallet className="w-5 h-5" />
              {account ? 'View My Gallery' : 'Connect Wallet'}
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="min-w-[200px]"
            >
              <Eye className="w-5 h-5" />
              Explore Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {[
              { icon: '🎨', title: 'Full 3D Viewing', desc: 'Rotate, zoom, and explore every detail' },
              { icon: '🔗', title: 'Multi-Chain Support', desc: 'Ethereum, Polygon, and more' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance for smooth experience' },
            ].map((feature, i) => (
              <div key={i} className="card-glass p-6 rounded-xl border border-border/30 hover:border-primary/50 transition-all group">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
