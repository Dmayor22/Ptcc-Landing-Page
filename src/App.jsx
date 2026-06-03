import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/WelcomeSection";
import WorshipSection from "./components/WorshipSection";
import ExpressionSection from "./components/ExpressionSection";
import PastorSection from "./components/PastorSection";
import UpcomingEvent from "./components/UpcomingEvent";
import CommunitySection from "./components/CommunitySection";
import MobileAppSection from "./components/MobileAppSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Welcome />
      <WorshipSection />
      <ExpressionSection />
      <PastorSection />
      <UpcomingEvent />
      <CommunitySection />
      <MobileAppSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
