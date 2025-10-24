import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  collection: string;
  tokenId: string;
}

export const NFTCard = ({ id, name, image, collection, tokenId }: NFTCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden card-glass border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_80%_60%/0.3)]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <Button
          variant="glass"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => navigate(`/nft/${id}`)}
        >
          <Eye className="w-4 h-4" />
          View 3D
        </Button>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">{collection}</p>
          </div>
          <Badge variant="outline" className="shrink-0">
            #{tokenId}
          </Badge>
        </div>

        <Button 
          variant="default" 
          className="w-full"
          onClick={() => navigate(`/nft/${id}`)}
        >
          <Eye className="w-4 h-4" />
          View in 3D
        </Button>
      </div>
    </Card>
  );
};
