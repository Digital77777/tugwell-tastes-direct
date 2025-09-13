import { useState } from "react";
import Header from "@/components/Header";
import WeeklyMenu from "@/components/WeeklyMenu";
import FeedbackForm from "@/components/FeedbackForm";

const Index = () => {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation (Mobile-friendly) */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card rounded-full p-1 shadow-soft">
            <button
              onClick={() => setActiveTab("menu")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === "menu"
                  ? "bg-gradient-appetizing text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Weekly Menu
            </button>
            <button
              onClick={() => setActiveTab("feedback")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === "feedback"
                  ? "bg-gradient-appetizing text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Send Feedback
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "menu" && <WeeklyMenu />}
          {activeTab === "feedback" && <FeedbackForm />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ for Tugwell Resident students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;