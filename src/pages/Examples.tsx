import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Eye, Sparkles, Palette, Box } from 'lucide-react';

const exampleNFTs = [
  {
    id: '1',
    title: 'Abstract 3D Art',
    description: 'Geometric patterns and flowing forms create mesmerizing 3D compositions',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
    category: 'Abstract',
    views: '12.5K',
  },
  {
    id: '2',
    title: 'Cyberpunk Characters',
    description: 'Futuristic character designs with neon aesthetics and detailed textures',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    category: 'Characters',
    views: '18.2K',
  },
  {
    id: '3',
    title: 'Digital Landscapes',
    description: 'Immersive 3D environments and surreal digital worlds',
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80',
    category: 'Landscapes',
    views: '9.8K',
  },
  {
    id: '4',
    title: 'Generative Patterns',
    description: 'Algorithmically generated 3D patterns with unique variations',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
    category: 'Generative',
    views: '15.1K',
  },
  {
    id: '5',
    title: 'Minimalist Forms',
    description: 'Clean geometric shapes with smooth materials and lighting',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    category: 'Minimalist',
    views: '11.3K',
  },
  {
    id: '6',
    title: 'Cosmic Creations',
    description: 'Space-themed 3D art with stellar effects and nebula textures',
    image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80',
    category: 'Space',
    views: '20.7K',
  },
];

const designFeatures = [
  {
    icon: Box,
    title: 'Full 3D Rendering',
    description: 'Experience NFTs with complete 360° rotation and zoom capabilities',
  },
  {
    icon: Palette,
    title: 'True Color & Texture',
    description: 'Accurate material rendering with PBR (Physically Based Rendering)',
  },
  {
    icon: Sparkles,
    title: 'Real-time Lighting',
    description: 'Dynamic lighting effects that bring your NFTs to life',
  },
  {
    icon: Eye,
    title: 'HD Quality',
    description: 'Crystal clear viewing experience with high-resolution assets',
  },
];

export default function Examples() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Example Gallery</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            NFT <span className="gradient-text">Design Showcase</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore stunning examples of 3D NFTs and discover how they come to life in our immersive viewer
          </p>
        </div>

        {/* Example NFTs Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exampleNFTs.map((nft) => (
              <Card 
                key={nft.id} 
                className="card-glass border-border/30 hover:border-primary/50 transition-all group cursor-pointer overflow-hidden"
                onClick={() => navigate(`/nft/${nft.id}`)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{nft.views}</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                      {nft.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {nft.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {nft.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Features */}
        <div className="card-glass p-12 rounded-2xl border border-border/30">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Our <span className="gradient-text">3D Viewer</span> Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--glow-primary)]">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to View Your NFTs in 3D?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your wallet and experience your collection like never before
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate('/')}>
            <Sparkles className="w-5 h-5" />
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}
