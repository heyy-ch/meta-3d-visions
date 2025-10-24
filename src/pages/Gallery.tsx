import { useEffect, useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Navigation } from '@/components/Navigation';
import { NFTCard } from '@/components/NFTCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Loader2, Wallet } from 'lucide-react';

// Mock NFT data - in production, this would fetch from blockchain
const mockNFTs = [
  {
    id: '1',
    name: 'Cosmic Wanderer #1234',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
    collection: 'Cosmic Collection',
    tokenId: '1234',
  },
  {
    id: '2',
    name: 'Digital Dreams #5678',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    collection: 'Dreams Series',
    tokenId: '5678',
  },
  {
    id: '3',
    name: 'Neon Genesis #9012',
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80',
    collection: 'Neon Collection',
    tokenId: '9012',
  },
  {
    id: '4',
    name: 'Abstract Realm #3456',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
    collection: 'Abstract Art',
    tokenId: '3456',
  },
  {
    id: '5',
    name: 'Cyber Punk #7890',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    collection: 'Cyber Series',
    tokenId: '7890',
  },
  {
    id: '6',
    name: 'Galaxy Explorer #2345',
    image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80',
    collection: 'Galaxy Collection',
    tokenId: '2345',
  },
];

export default function Gallery() {
  const { account, connectWallet } = useWallet();
  const [nfts, setNfts] = useState<typeof mockNFTs>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account) {
      navigate('/');
      return;
    }

    // Simulate loading NFTs
    const loadNFTs = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNfts(mockNFTs);
      setLoading(false);
    };

    loadNFTs();
  }, [account, navigate]);

  if (!account) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center">
              <Wallet className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Connect Your Wallet</h2>
            <p className="text-muted-foreground">
              Please connect your wallet to view your NFT collection
            </p>
            <Button variant="connect" size="lg" onClick={connectWallet}>
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              My <span className="gradient-text">NFT Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {loading ? 'Loading your collection...' : `${nfts.length} NFTs found in your wallet`}
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
                <p className="text-muted-foreground">Loading your NFTs...</p>
              </div>
            </div>
          ) : nfts.length === 0 ? (
            <div className="text-center py-20 card-glass rounded-xl border border-border/30 p-12">
              <p className="text-xl text-muted-foreground">No NFTs found in your wallet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nfts.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
