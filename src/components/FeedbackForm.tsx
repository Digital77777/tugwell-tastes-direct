import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, Send, Heart, MessageSquare, AlertTriangle, Lightbulb } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState("general");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackTypes = [
    { value: "compliment", label: "Compliment", icon: Heart, color: "text-green-600" },
    { value: "suggestion", label: "Suggestion", icon: Lightbulb, color: "text-blue-600" },
    { value: "complaint", label: "Complaint", icon: AlertTriangle, color: "text-red-600" },
    { value: "general", label: "General Feedback", icon: MessageSquare, color: "text-primary" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission since no backend yet
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Feedback Sent! 🍽️",
      description: "Thank you for your feedback. The kitchen team will review it soon.",
    });

    // Reset form
    setFeedback("");
    setRating("");
    setFeedbackType("general");
    setIsSubmitting(false);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setRating(star.toString())}
        className={`p-1 transition-colors ${
          parseInt(rating) >= star ? "text-accent" : "text-muted-foreground hover:text-accent/70"
        }`}
      >
        <Star className={`h-6 w-6 ${parseInt(rating) >= star ? "fill-current" : ""}`} />
      </button>
    ));
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-appetizing rounded-2xl p-8 text-center shadow-food">
        <h2 className="text-3xl font-bold text-primary-foreground mb-2">Share Your Experience</h2>
        <p className="text-primary-foreground/90 text-lg">
          Your feedback helps us serve you better every day
        </p>
      </div>

      {/* Feedback Form */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Send Feedback to Kitchen Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feedback Type Selection */}
            <div className="space-y-3">
              <Label className="text-base font-medium">What type of feedback is this?</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {feedbackTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFeedbackType(type.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        feedbackType === type.value
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <IconComponent className={`h-6 w-6 ${type.color}`} />
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-3">
              <Label className="text-base font-medium">How would you rate today's meal?</Label>
              <div className="flex items-center gap-1">
                {renderStars()}
                {rating && (
                  <Badge variant="outline" className="ml-3">
                    {rating} star{parseInt(rating) !== 1 ? "s" : ""}
                  </Badge>
                )}
              </div>
            </div>

            {/* Feedback Text */}
            <div className="space-y-3">
              <Label htmlFor="feedback" className="text-base font-medium">
                Tell us more about your experience
              </Label>
              <Textarea
                id="feedback"
                placeholder="Share your thoughts about the food, service, or any suggestions you have..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-appetizing hover:opacity-90 transition-opacity"
              disabled={isSubmitting || !feedback.trim()}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Feedback
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Privacy Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-full mt-1">
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">Your privacy matters</h3>
              <p className="text-sm text-muted-foreground">
                All feedback is sent directly and privately to the kitchen administration team. 
                Your comments help improve the dining experience for everyone at Tugwell Resident.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackForm;