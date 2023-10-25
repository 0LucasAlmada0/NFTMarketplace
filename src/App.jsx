import Navbar from "./components/Navbar";
import TrendingSection from "./components/TrendingSection";
import HeroSection from "./components/HeroSection";
import CreatorSection from "./components/CreatorsSection";
import CategoriesSection from "./components/CategoriesSection";
import DiscoverSection from "./components/DiscoverSection";
import NFTHighlightSection from "./components/NFTHighlightSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SubscribeWidgetSection from "./components/SubscribeWidgetSection";

function App() {
  return (
    <main className="bg-mainBackground">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <CreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <NFTHighlightSection/>
      <HowItWorksSection/>
      <SubscribeWidgetSection/>
    </main>
  );
}
export default App;
