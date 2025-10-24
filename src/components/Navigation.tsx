import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { Wallet, Home, Grid3x3, Sparkles } from 'lucide-react';

export const Navigation = () => {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWallet();
  const location = useLocation();

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 card-glass border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--glow-primary)]">
              <Grid3x3 className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">3D NFT Viewer</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/">
              <Button 
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                size="sm"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>

            <Link to="/examples">
              <Button 
                variant={location.pathname === '/examples' ? 'default' : 'ghost'}
                size="sm"
              >
                <Sparkles className="w-4 h-4" />
                Examples
              </Button>
            </Link>

            {account && (
              <Link to="/gallery">
                <Button 
                  variant={location.pathname === '/gallery' ? 'default' : 'ghost'}
                  size="sm"
                >
                  <Grid3x3 className="w-4 h-4" />
                  My Gallery
                </Button>
              </Link>
            )}

            {account ? (
              <Button
                variant="connect"
                size="sm"
                onClick={disconnectWallet}
              >
                <Wallet className="w-4 h-4" />
                {formatAddress(account)}
              </Button>
            ) : (
              <Button
                variant="connect"
                size="sm"
                onClick={connectWallet}
                disabled={isConnecting}
              >
                <Wallet className="w-4 h-4" />
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
