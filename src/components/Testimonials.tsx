import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: 'Alex Chen',
    role: 'NFT Collector',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    comment: 'The 3D viewing experience is absolutely incredible. I can finally appreciate the details in my NFT collection like never before.',
  },
  {
    name: 'Sarah Martinez',
    role: 'Digital Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    comment: 'This platform has changed how I showcase my digital art. The immersive 3D view adds a whole new dimension to NFT viewing.',
  },
  {
    name: 'Michael Park',
    role: 'Crypto Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    comment: 'Multi-chain support and smooth performance. This is exactly what the NFT community needed. Highly recommended!',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">NFT Collectors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users experiencing their NFTs in stunning 3D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="card-glass border-border/30 hover:border-primary/50 transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
