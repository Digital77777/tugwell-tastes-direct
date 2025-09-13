import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Flame } from "lucide-react";

// Mock data for demonstration
const weeklyMenu = [
  {
    day: "Monday",
    date: "Dec 16",
    meals: [
      {
        name: "Grilled Chicken Caesar Salad",
        type: "lunch",
        time: "12:00 - 2:00 PM",
        servings: "Available",
        spiceLevel: "mild",
        description: "Fresh romaine lettuce with grilled chicken breast, parmesan cheese, and house-made caesar dressing"
      },
      {
        name: "Beef Stir-fry with Jasmine Rice",
        type: "dinner",
        time: "5:30 - 8:00 PM", 
        servings: "Available",
        spiceLevel: "medium",
        description: "Tender beef strips with mixed vegetables in savory sauce, served with fragrant jasmine rice"
      }
    ]
  },
  {
    day: "Tuesday", 
    date: "Dec 17",
    meals: [
      {
        name: "Mediterranean Chickpea Bowl",
        type: "lunch",
        time: "12:00 - 2:00 PM",
        servings: "Available", 
        spiceLevel: "mild",
        description: "Protein-rich chickpeas with cucumber, tomatoes, olives, and tahini dressing"
      },
      {
        name: "Jollof Rice with Grilled Fish",
        type: "dinner", 
        time: "5:30 - 8:00 PM",
        servings: "Limited",
        spiceLevel: "spicy",
        description: "West African style jollof rice with perfectly seasoned grilled fish and plantains"
      }
    ]
  },
  {
    day: "Wednesday",
    date: "Dec 18", 
    meals: [
      {
        name: "Creamy Mushroom Pasta",
        type: "lunch",
        time: "12:00 - 2:00 PM",
        servings: "Available",
        spiceLevel: "mild", 
        description: "Al dente pasta in rich mushroom cream sauce with fresh herbs and parmesan"
      },
      {
        name: "Spicy Thai Curry with Chicken",
        type: "dinner",
        time: "5:30 - 8:00 PM",
        servings: "Available",
        spiceLevel: "hot",
        description: "Authentic Thai red curry with tender chicken, vegetables, and coconut milk, served with rice"
      }
    ]
  }
];

const getSpiceColor = (level: string) => {
  switch (level) {
    case "mild": return "bg-accent text-accent-foreground";
    case "medium": return "bg-primary text-primary-foreground";
    case "spicy": return "bg-destructive text-destructive-foreground";
    case "hot": return "bg-destructive text-destructive-foreground";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const getAvailabilityColor = (servings: string) => {
  switch (servings.toLowerCase()) {
    case "available": return "bg-green-100 text-green-800";
    case "limited": return "bg-yellow-100 text-yellow-800"; 
    case "sold out": return "bg-red-100 text-red-800";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const WeeklyMenu = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-fresh rounded-2xl p-8 text-center shadow-soft">
        <h2 className="text-3xl font-bold text-foreground mb-2">This Week's Menu</h2>
        <p className="text-muted-foreground text-lg">Delicious meals prepared with love for Tugwell residents</p>
      </div>

      {/* Menu Cards */}
      <div className="space-y-4">
        {weeklyMenu.map((dayMenu) => (
          <Card key={dayMenu.day} className="overflow-hidden hover:shadow-food transition-shadow duration-300">
            <CardHeader className="bg-gradient-warm">
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl font-bold">{dayMenu.day}</span>
                <Badge variant="outline" className="bg-background/50">
                  {dayMenu.date}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {dayMenu.meals.map((meal, index) => (
                  <div 
                    key={index} 
                    className="p-6 border-b last:border-b-0 hover:bg-gradient-warm/20 transition-colors duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{meal.name}</h3>
                          <Badge 
                            variant="secondary" 
                            className={`${meal.type === 'lunch' ? 'bg-accent/20 text-accent-foreground' : 'bg-primary/20 text-primary-foreground'}`}
                          >
                            {meal.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                          {meal.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {meal.time}
                          </div>
                          <Badge variant="outline" className={getAvailabilityColor(meal.servings)}>
                            <Users className="h-3 w-3 mr-1" />
                            {meal.servings}
                          </Badge>
                          <Badge variant="outline" className={getSpiceColor(meal.spiceLevel)}>
                            <Flame className="h-3 w-3 mr-1" />
                            {meal.spiceLevel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklyMenu;