import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Star, MessageCircle, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      comment: "Excellent portfolio! Very impressed with the AI/ML projects.",
      date: "2024-12-01"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 4,
      comment: "Great work on the insurance prediction project. Looking forward to seeing more!",
      date: "2024-11-28"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([
        ...reviews,
        {
          id: Date.now(),
          ...newReview,
          date: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewReview({ name: '', rating: 5, comment: '' });
    }
  };

  const renderStars = (rating: number, interactive = false, onChange?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive && onChange ? () => onChange(i + 1) : undefined}
      />
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              Reviews & Ratings
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-2xl font-bold gradient-text">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              Share your thoughts about my work and leave a rating
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Review Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Leave a Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex gap-1">
                      {renderStars(newReview.rating, true, (rating) => 
                        setNewReview({ ...newReview, rating })
                      )}
                    </div>
                  </div>
                  
                  <Textarea
                    placeholder="Share your thoughts..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                    rows={4}
                  />
                  
                  <Button type="submit" className="w-full">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">Recent Reviews</h3>
              {reviews.map((review) => (
                <Card key={review.id} className="glass-card">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Reviews;