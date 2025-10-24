import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { NFTViewer3D } from '@/components/NFTViewer3D';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Share2 } from 'lucide-react';
import { toast } from 'sonner';

// Mock data - would be fetched based on id in production
const mockNFTData: Record<string, any> = {
  '1': {
    name: 'Cosmic Wanderer #1234',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
    collection: 'Cosmic Collection',
    tokenId: '1234',
    description: 'A mesmerizing piece from the Cosmic Collection, featuring ethereal colors and dreamlike patterns that transport you to another dimension.',
    owner: '0x742d...4b5a',
    contractAddress: '0x1234...5678',
    chain: 'Polygon',
    attributes: [
      { trait: 'Background', value: 'Cosmic Purple' },
      { trait: 'Pattern', value: 'Ethereal' },
      { trait: 'Rarity', value: 'Rare' },
    ],
  },
  '2': {
    name: 'Digital Dreams #5678',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    collection: 'Dreams Series',
    tokenId: '5678',
    description: 'An exploration of digital consciousness and the intersection of reality and imagination.',
    owner: '0x742d...4b5a',
    contractAddress: '0x1234...5678',
    chain: 'Ethereum',
    attributes: [
      { trait: 'Style', value: 'Abstract' },
      { trait: 'Mood', value: 'Dreamy' },
      { trait: 'Rarity', value: 'Epic' },
    ],
  },
  '3': {
    name: 'Neon Genesis #9012',
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80',
    collection: 'Neon Collection',
    tokenId: '9012',
    description: 'Vibrant neon aesthetics meet digital artistry in this stunning piece.',
    owner: '0x742d...4b5a',
    contractAddress: '0x1234...5678',
    chain: 'Polygon',
    attributes: [
      { trait: 'Color', value: 'Neon Pink' },
      { trait: 'Intensity', value: 'High' },
      { trait: 'Rarity', value: 'Legendary' },
    ],
  },
};

export default function NFTDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nft = id ? mockNFTData[id] : null;

  if (!nft) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">NFT Not Found</h2>
          <Button onClick={() => navigate('/gallery')}>
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/gallery')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Viewer */}
          <div className="space-y-4">
            <NFTViewer3D imageUrl={nft.image} />
            <p className="text-sm text-muted-foreground text-center">
              Use your mouse to rotate and zoom • Auto-rotating
            </p>
          </div>

          {/* NFT Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold">{nft.name}</h1>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xl text-muted-foreground">{nft.collection}</p>
            </div>

            <div className="flex gap-2">
              <Badge variant="outline" className="text-primary border-primary/50">
                #{nft.tokenId}
              </Badge>
              <Badge variant="outline">{nft.chain}</Badge>
            </div>

            <Card className="p-6 card-glass border-border/30">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{nft.description}</p>
            </Card>

            <Card className="p-6 card-glass border-border/30">
              <h3 className="font-semibold mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Owner</span>
                  <span className="font-mono">{nft.owner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract</span>
                  <span className="font-mono">{nft.contractAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chain</span>
                  <span>{nft.chain}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glass border-border/30">
              <h3 className="font-semibold mb-4">Attributes</h3>
              <div className="grid grid-cols-2 gap-3">
                {nft.attributes.map((attr: any, index: number) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-secondary/50 border border-border/30"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{attr.trait}</div>
                    <div className="font-semibold">{attr.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Button variant="default" className="w-full" size="lg">
              <ExternalLink className="w-4 h-4" />
              View on Explorer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
