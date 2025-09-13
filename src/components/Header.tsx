import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu, User, MessageCircle } from "lucide-react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <header className="bg-gradient-appetizing shadow-food sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <ChefHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Tugwell Eats</h1>
              <p className="text-xs text-primary-foreground/80">Resident Dining</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button
              variant={activeTab === "menu" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("menu")}
              className="text-primary-foreground hover:bg-white/20"
            >
              <Menu className="h-4 w-4 mr-2" />
              Weekly Menu
            </Button>
            <Button
              variant={activeTab === "feedback" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("feedback")}
              className="text-primary-foreground hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Feedback
            </Button>
          </nav>

          {/* User Icon */}
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
            <User className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden mt-4 space-x-2">
          <Button
            variant={activeTab === "menu" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("menu")}
            className="flex-1 text-primary-foreground hover:bg-white/20"
          >
            <Menu className="h-4 w-4 mr-2" />
            Menu
          </Button>
          <Button
            variant={activeTab === "feedback" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("feedback")}
            className="flex-1 text-primary-foreground hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Feedback
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;